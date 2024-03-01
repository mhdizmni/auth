interface AuthLayoutProps {
    children: React.ReactNode
}

const AuthLayout = ({
    children
}: AuthLayoutProps) => {
    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
            {children}
        </main>
    );
}
 
export default AuthLayout;