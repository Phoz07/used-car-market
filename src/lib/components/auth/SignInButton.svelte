<script lang="ts">
    import { authClient } from "$lib/auth/auth-client";
    import * as Avatar from "$lib/components/ui/avatar";
    import * as DropdownMenu from "$lib/components/ui/dropdown-menu";
    import Button from "$lib/components/ui/button/button.svelte";
    import { LogOut, User, Settings } from "@lucide/svelte";

    const session = authClient.useSession();

    async function handleSignIn() {
        await authClient.signIn.social({
            provider: "google",
            callbackURL: "/",
        });
    }

    async function handleSignOut() {
        await authClient.signOut({
            fetchOptions: {
                onSuccess: () => {
                    window.location.href = "/";
                },
            },
        });
    }

    function getInitials(name: string | undefined): string {
        if (!name) return "U";
        return name
            .split(" ")
            .map((n) => n[0])
            .join("")
            .toUpperCase()
            .slice(0, 2);
    }
</script>

{#if $session.data?.user}
    <DropdownMenu.Root>
        <DropdownMenu.Trigger class="cursor-pointer focus:outline-none">
            <Avatar.Root
                class="h-9 w-9 border-2 border-white/20 hover:border-white/40 transition-colors"
            >
                <Avatar.Image
                    src={$session.data.user.image}
                    alt={$session.data.user.name || "User"}
                />
                <Avatar.Fallback
                    class="bg-gradient-to-br from-blue-500 to-purple-600 text-white text-sm font-semibold"
                >
                    {getInitials($session.data.user.name)}
                </Avatar.Fallback>
            </Avatar.Root>
        </DropdownMenu.Trigger>
        <DropdownMenu.Content class="w-56" align="end">
            <DropdownMenu.Label class="font-normal">
                <div class="flex flex-col space-y-1">
                    <p class="text-sm font-medium leading-none">
                        {$session.data.user.name || "User"}
                    </p>
                    <p class="text-xs leading-none text-muted-foreground">
                        {$session.data.user.email || ""}
                    </p>
                </div>
            </DropdownMenu.Label>
            <DropdownMenu.Separator />
            <DropdownMenu.Group>
                <DropdownMenu.Item>
                    <User class="mr-2 h-4 w-4" />
                    <span>Profile</span>
                </DropdownMenu.Item>
                <DropdownMenu.Item>
                    <Settings class="mr-2 h-4 w-4" />
                    <span>Settings</span>
                </DropdownMenu.Item>
            </DropdownMenu.Group>
            <DropdownMenu.Separator />
            <DropdownMenu.Item
                onclick={handleSignOut}
                class="text-red-600 focus:text-red-600"
            >
                <LogOut class="mr-2 h-4 w-4" />
                <span>Sign out</span>
            </DropdownMenu.Item>
        </DropdownMenu.Content>
    </DropdownMenu.Root>
{:else}
    <Button
        onclick={handleSignIn}
        class="cursor-pointer"
    >
        <svg class="mr-2 h-4 w-4" viewBox="0 0 24 24">
            <path
                fill="currentColor"
                d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
            />
            <path
                fill="currentColor"
                d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
            />
            <path
                fill="currentColor"
                d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
            />
            <path
                fill="currentColor"
                d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
            />
        </svg>
        เข้าสู่ระบบด้วย Google
    </Button>
{/if}
