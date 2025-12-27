<script lang="ts">
    import { authClient } from "$lib/auth/auth-client";
    import type { PageData } from "./$types";

    export let data: PageData;

    async function signInWithGoogle() {
        await authClient.signIn.social({
            provider: "google",
            callbackURL: "/",
        });
    }

    async function signOut() {
        await authClient.signOut();
        window.location.reload();
    }
</script>

<div class="container">
    {#if data.user}
        <div class="user-info">
            <h1>Welcome back!</h1>

            {#if data.user.image}
                <img
                    src={data.user.image}
                    alt={data.user.name}
                    class="avatar"
                />
            {/if}

            <h2>{data.user.name}</h2>
            <p class="email">{data.user.email}</p>
            <script lang="ts">
                import { authClient } from "$lib/auth-client";
                import type { PageData } from "./$types";

                export let data: PageData;

                async function signInWithGoogle() {
                    await authClient.signIn.social({
                        provider: "google",
                        callbackURL: "/",
                    });
                }

                async function signOut() {
                    await authClient.signOut();
                    window.location.reload();
                }
            </script>

            <div class="container">
                {#if data.user}
                    <div class="user-info">
                        <h1>Welcome back!</h1>

                        {#if data.user.image}
                            <img
                                src={data.user.image}
                                alt={data.user.name}
                                class="avatar"
                            />
                        {/if}

                        <h2>{data.user.name}</h2>
                        <p class="email">{data.user.email}</p>

                        <button on:click={signOut} class="btn btn-secondary">
                            Sign Out
                        </button>

                        <a href="/dashboard" class="btn btn-primary">
                            Go to Dashboard
                        </a>
                    </div>
                {:else}
                    <div class="login-container">
                        <h1>Welcome to My App</h1>
                        <p>Sign in with your Google account to continue</p>

                        <button on:click={signInWithGoogle} class="btn-google">
                            <svg class="google-icon" viewBox="0 0 24 24">
                                <path
                                    fill="#4285F4"
                                    d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                                />
                                <path
                                    fill="#34A853"
                                    d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                                />
                                <path
                                    fill="#FBBC05"
                                    d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                                />
                                <path
                                    fill="#EA4335"
                                    d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                                />
                            </svg>
                            Sign in with Google
                        </button>
                    </div>
                {/if}
            </div>

            <style>
                .container {
                    max-width: 500px;
                    margin: 100px auto;
                    padding: 40px;
                    text-align: center;
                }

                .login-container {
                    background: white;
                    padding: 40px;
                    border-radius: 12px;
                    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
                }

                h1 {
                    font-size: 2rem;
                    margin-bottom: 10px;
                    color: #333;
                }

                p {
                    color: #666;
                    margin-bottom: 30px;
                }

                .btn-google {
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    gap: 12px;
                    width: 100%;
                    padding: 12px 24px;
                    background: white;
                    border: 2px solid #ddd;
                    border-radius: 8px;
                    font-size: 16px;
                    font-weight: 500;
                    color: #333;
                    cursor: pointer;
                    transition: all 0.2s;
                }

                .btn-google:hover {
                    background: #f8f9fa;
                    border-color: #ccc;
                    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
                }

                .google-icon {
                    width: 24px;
                    height: 24px;
                }

                .user-info {
                    background: white;
                    padding: 40px;
                    border-radius: 12px;
                    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
                }

                .avatar {
                    width: 100px;
                    height: 100px;
                    border-radius: 50%;
                    margin: 20px auto;
                    display: block;
                    border: 3px solid #4285f4;
                }

                h2 {
                    font-size: 1.5rem;
                    margin: 10px 0;
                    color: #333;
                }

                .email {
                    color: #666;
                    font-size: 0.9rem;
                    margin-bottom: 30px;
                }

                .btn {
                    padding: 12px 24px;
                    margin: 10px;
                    border: none;
                    border-radius: 8px;
                    font-size: 16px;
                    font-weight: 500;
                    cursor: pointer;
                    transition: all 0.2s;
                    text-decoration: none;
                    display: inline-block;
                }

                .btn-primary {
                    background: #4285f4;
                    color: white;
                }

                .btn-primary:hover {
                    background: #357ae8;
                }

                .btn-secondary {
                    background: #f1f3f4;
                    color: #333;
                }

                .btn-secondary:hover {
                    background: #e8eaed;
                }
            </style>

            <button on:click={signOut} class="btn btn-secondary">
                Sign Out
            </button>

            <a href="/dashboard" class="btn btn-primary"> Go to Dashboard </a>
        </div>
    {:else}
        <div class="login-container">
            <h1>Welcome to My App</h1>
            <p>Sign in with your Google account to continue</p>

            <button on:click={signInWithGoogle} class="btn-google">
                <svg class="google-icon" viewBox="0 0 24 24">
                    <path
                        fill="#4285F4"
                        d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                    />
                    <path
                        fill="#34A853"
                        d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                    />
                    <path
                        fill="#FBBC05"
                        d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                    />
                    <path
                        fill="#EA4335"
                        d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                    />
                </svg>
                Sign in with Google
            </button>
        </div>
    {/if}
</div>

<style>
    .container {
        max-width: 500px;
        margin: 100px auto;
        padding: 40px;
        text-align: center;
    }

    .login-container {
        background: white;
        padding: 40px;
        border-radius: 12px;
        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    }

    h1 {
        font-size: 2rem;
        margin-bottom: 10px;
        color: #333;
    }

    p {
        color: #666;
        margin-bottom: 30px;
    }

    .btn-google {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 12px;
        width: 100%;
        padding: 12px 24px;
        background: white;
        border: 2px solid #ddd;
        border-radius: 8px;
        font-size: 16px;
        font-weight: 500;
        color: #333;
        cursor: pointer;
        transition: all 0.2s;
    }

    .btn-google:hover {
        background: #f8f9fa;
        border-color: #ccc;
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    }

    .google-icon {
        width: 24px;
        height: 24px;
    }

    .user-info {
        background: white;
        padding: 40px;
        border-radius: 12px;
        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    }

    .avatar {
        width: 100px;
        height: 100px;
        border-radius: 50%;
        margin: 20px auto;
        display: block;
        border: 3px solid #4285f4;
    }

    h2 {
        font-size: 1.5rem;
        margin: 10px 0;
        color: #333;
    }

    .email {
        color: #666;
        font-size: 0.9rem;
        margin-bottom: 30px;
    }

    .btn {
        padding: 12px 24px;
        margin: 10px;
        border: none;
        border-radius: 8px;
        font-size: 16px;
        font-weight: 500;
        cursor: pointer;
        transition: all 0.2s;
        text-decoration: none;
        display: inline-block;
    }

    .btn-primary {
        background: #4285f4;
        color: white;
    }

    .btn-primary:hover {
        background: #357ae8;
    }

    .btn-secondary {
        background: #f1f3f4;
        color: #333;
    }

    .btn-secondary:hover {
        background: #e8eaed;
    }
</style>
