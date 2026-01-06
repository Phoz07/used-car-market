# SignInButton Component

A complete authentication button component that integrates with Better Auth for Google OAuth sign-in.

## Features

- **Signed Out State**: Displays "Sign in with Google" button with Google logo
- **Signed In State**: Shows user avatar with dropdown menu
- **Profile Display**: Shows user name and email in dropdown
- **Dropdown Menu**: Includes Profile, Settings, and Sign Out options
- **Responsive Design**: Works on all screen sizes
- **TypeScript**: Fully typed for type safety

## Usage

### Basic Implementation

```svelte
<script lang="ts">
  import SignInButton from "$lib/components/SignInButton.svelte";
</script>

<SignInButton />
```

### In Navbar

```svelte
<script lang="ts">
  import SignInButton from "$lib/components/SignInButton.svelte";
</script>

<nav>
  <div class="flex items-center gap-4">
    <a href="/">Home</a>
    <a href="/about">About</a>
    <SignInButton />
  </div>
</nav>
```

## Authentication Flow

### Sign In
1. User clicks "Sign in with Google" button
2. Redirected to Google OAuth consent screen
3. After approval, redirected back to the application
4. User session is automatically created and managed

### Sign Out
1. User clicks their avatar to open dropdown
2. Clicks "Sign out" option
3. Session is cleared
4. User is redirected to home page

## Component Structure

### When Not Signed In
- Shows a button with Google logo
- White background with gray text
- Hover effect for better UX

### When Signed In
- **Avatar**: Shows user profile image or initials fallback
- **Dropdown Menu Items**:
  - User info (name and email)
  - Profile link
  - Settings link
  - Sign out button (in red)

## Dependencies

- `better-auth/svelte` - Authentication client
- `@lucide/svelte` - Icons (User, Settings, LogOut)
- `$lib/components/ui/avatar` - Avatar component
- `$lib/components/ui/dropdown-menu` - Dropdown menu component
- `$lib/components/ui/button` - Button component

## Configuration

Make sure your `auth-client.ts` is properly configured:

```typescript
import { createAuthClient } from "better-auth/svelte";

export const authClient = createAuthClient({
  baseURL: "http://localhost:5173",
});

export const { signIn, signUp, signOut, useSession } = authClient;
```

## Styling

The component uses Tailwind CSS classes and can be customized by modifying:

- Avatar border colors
- Button styles
- Dropdown menu appearance
- Text colors

## Session Management

The component uses Better Auth's `useSession()` hook to:
- Track authentication state
- Access user data
- Automatically update UI when session changes

## Security

- Uses OAuth 2.0 for secure authentication
- Session tokens are managed by Better Auth
- No passwords stored in your application
- HTTPS recommended for production

## Troubleshooting

### Button doesn't trigger sign-in
- Check that Better Auth server is running
- Verify `baseURL` in auth-client.ts
- Ensure Google OAuth credentials are configured

### Avatar not showing
- Check user data includes `image` field
- Verify image URL is accessible
- Fallback will show user initials

### Dropdown not working
- Ensure all UI components are properly installed
- Check for CSS conflicts
- Verify bits-ui is installed

## Example Integration

```svelte
<!-- +layout.svelte -->
<script lang="ts">
  import Navbar from "$lib/components/Navbar.svelte";
  import { authClient } from "$lib/auth/auth-client";
  
  const session = authClient.useSession();
</script>

<Navbar />

<main>
  {#if $session.data?.user}
    <h1>Welcome, {$session.data.user.name}!</h1>
  {:else}
    <h1>Welcome! Please sign in.</h1>
  {/if}
  
  <slot />
</main>
```

## Related Components

- **Navbar**: Main navigation bar that includes SignInButton
- **Avatar**: User profile picture display
- **DropdownMenu**: Menu for user actions
- **Button**: Base button component

## API Reference

### Functions

#### `handleSignIn()`
Initiates Google OAuth sign-in flow.

```typescript
async function handleSignIn(): Promise<void>
```

#### `handleSignOut()`
Signs out user and redirects to home page.

```typescript
async function handleSignOut(): Promise<void>
```

#### `getInitials(name: string | undefined): string`
Generates user initials for avatar fallback.

```typescript
function getInitials(name: string | undefined): string
// Example: "John Doe" → "JD"
```

### Session Data Structure

```typescript
{
  data: {
    user: {
      id: string;
      name: string;
      email: string;
      image?: string;
    }
  }
}
```
