import Image from "next/image";

export default function Home() {
  return (
    <main className='flex min-h-screen flex-col items-center justify-center p-24'>
      <h1 className='text-5xl mb-10'>POV</h1>
      <h2 className='text-center'>
        <div className='mb-5'>From:</div>
        <img src='Wordmark-MDM.png' className='h-10' />
      </h2>
    </main>
  );
}
