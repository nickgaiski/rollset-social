import AppLogoIcon from '@/components/layout/app-logo-icon';

export default function AppLogo() {
    return (
        <>
            <div className="flex aspect-square size-6 shrink-0 items-center justify-center">
                <AppLogoIcon className="size-6" />
            </div>
            <div className="grid flex-1 text-left group-data-[collapsible=icon]:hidden">
                <span className="brand-wordmark truncate text-[13px] leading-tight">
                    Rollset
                </span>
            </div>
        </>
    );
}
