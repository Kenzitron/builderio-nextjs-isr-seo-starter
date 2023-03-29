if (!process.env.NEXT_PUBLIC_BUILDER_PUBLIC_KEY) {
    throw new Error(
      'Missing environment variable BUILDER_PUBLIC_KEY, signup for builder.io and add your public key to env file'
    )
  }
  
  const config = {
    apiKey: process.env.NEXT_PUBLIC_BUILDER_PUBLIC_KEY,
  }

  export default config;