"use client"
import { SessionProvider, useSession, signIn, signOut } from 'next-auth/react';
import "./globals.css"
const Page = () => {
  const { data: session } = useSession();
  console.log(session)

  return (
    <div>
      <div className='outer-div' >
        <h1>NextAuth | Authentication</h1>
        {session === null ? (
          <button onClick={() => signIn()}>Sign In</button>
        ) : (
          <button onClick={() => signOut()}>Sign Out</button>
        )}
        {
          session?.user && (
            <div className='user-div'>
              <img src={session?.user?.image} alt='usre' />
              <div className='user-name'>
                <h3 className="text-red-900"> {session?.user?.name}</h3>
                <h3 className="text-white"> {session?.user?.email}</h3>
              </div>
            </div>
          )
        }
      </div>
    </div>
  );
};

export default function WrappedPage({ session }) {
  return (
    <SessionProvider session={session}>
      <Page />
    </SessionProvider>
  );
}
