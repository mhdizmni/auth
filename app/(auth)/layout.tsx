import Link from "next/link";

interface AuthLayoutProps {
    children: React.ReactNode
}
const AuthLayout = ({
    children
}: AuthLayoutProps) => {
    return (
        <>
            <main className="flex min-h-screen flex-col items-center justify-between p-24">
                {children}
            </main>
            <footer
                className="fixed bottom-0 h-5 bg-sky-700 text-white text-xs w-full flex items-center justify-between px-2"
            >
                <div>
                    © {new Date().getFullYear()} <Link href="https://mitism.com" target="_blank" className="underline">mitism.com</Link>
                </div>
                <div>
                    Developed using <Link href="https://next-auth.js.org/" target="_blank" className="underline italic">NextAuth.js</Link>
                </div>
            </footer>
        </>
    );
}
 
export default AuthLayout;