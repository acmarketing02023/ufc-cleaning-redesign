# Jobber OAuth 2.0 Integration Setup

## Overview

This project has a secure OAuth 2.0 infrastructure prepared for Jobber integration using the Authorization Code flow with PKCE.

## Callback URL

Use this exact URL as your OAuth Callback URL in the Jobber Developer Center:

```
https://ufc-cleaning.com/api/jobber/callback
```

## Architecture

### Files Created

1. **`lib/oauth.ts`** - Core OAuth utilities
   - PKCE generation (code_verifier & code_challenge)
   - State generation and validation
   - Token exchange logic
   - Authorization URL building

2. **`lib/jobberTokenManager.ts`** - Token management
   - Token validation
   - Automatic refresh token rotation
   - Token storage/retrieval interface

3. **`app/api/jobber/auth/route.ts`** - OAuth initiation
   - Generates state and PKCE values
   - Redirects to Jobber authorization

4. **`app/api/jobber/callback/route.ts`** - OAuth callback handler
   - Validates state parameter
   - Exchanges authorization code for tokens (with PKCE)
   - Stores tokens securely
   - Handles refresh token rotation

## Security Features Implemented

✅ PKCE (Proof Key for Code Exchange) - S256  
✅ State parameter for CSRF protection  
✅ Timing-safe state comparison  
✅ Server-side token exchange (secrets never exposed)  
✅ Automatic refresh token rotation  
✅ Token expiration tracking  

## Configuration Required

### 1. Create Jobber Developer App

1. Go to Jobber Developer Center
2. Create a new OAuth 2.0 app
3. Set the Callback URL to: `https://ufc-cleaning.com/api/jobber/callback`
4. Obtain your **Client ID** and **Client Secret**

### 2. Set Vercel Environment Variables

Add these to your Vercel project settings:

```
JOBBER_CLIENT_ID=your_client_id_here
JOBBER_CLIENT_SECRET=your_client_secret_here
JOBBER_REDIRECT_URI=https://ufc-cleaning.com/api/jobber/callback
```

### 3. Implement Token Storage Backend

The code includes TODOs for token storage. Choose one approach:

#### Option A: Vercel KV (Recommended for Vercel)
```bash
npm install @vercel/kv
```

Update `app/api/jobber/callback/route.ts` and `lib/jobberTokenManager.ts`:
- Uncomment Vercel KV code sections
- Replace placeholder functions

#### Option B: Database (Supabase, MongoDB, PostgreSQL)
Create a table/collection for storing:
- `access_token` (encrypted)
- `refresh_token` (encrypted)
- `expires_at` (timestamp)
- `token_type`

#### Option C: Encrypted Environment Variable (Simple)
Store tokens as base64-encoded encrypted JSON in env var
- Less flexible for token refresh
- Good for simple setups

## API Endpoints

### Initiate OAuth Flow
```
GET /api/jobber/auth
```
Redirects to Jobber authorization page

### OAuth Callback
```
GET /api/jobber/callback?code=<code>&state=<state>
```
Handles Jobber callback and exchanges code for tokens

## Token Refresh Flow

Jobber implements refresh token rotation:
1. Use existing `refresh_token` to request new tokens
2. Jobber returns new `access_token` AND new `refresh_token`
3. Store both new tokens
4. Old `refresh_token` becomes invalid

The `getValidAccessToken()` function in `lib/jobberTokenManager.ts` automatically handles this.

## Next Steps

1. ✅ OAuth infrastructure is ready
2. ⏳ Implement token storage backend
3. ⏳ Create Jobber app in Developer Center
4. ⏳ Add environment variables to Vercel
5. ⏳ Test OAuth flow
6. ⏳ Connect quote form to Jobber (when ready)

## Important Notes

- **Do NOT expose Client Secret** - Only use on server-side
- **Do NOT store tokens in localStorage** - Use secure backend storage
- **Do NOT commit credentials** - Use environment variables
- **Tokens expire** - Implement automatic refresh logic
- **State is security-critical** - Must be validated with timing-safe comparison

## Testing

Once configured:

1. Navigate to `/api/jobber/auth` to start OAuth flow
2. Authorize access in Jobber
3. Should be redirected to callback with code and state
4. Tokens should be stored and validated

## Debugging

Check server logs for:
- "OAuth initialization error"
- "State validation failed"
- "Token exchange failed"
- Storage backend errors

All security-sensitive operations are logged for debugging but never expose tokens or secrets.

---

**Status**: Infrastructure ready for OAuth app creation ✅
