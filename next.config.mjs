/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental:{
        serverActions:true,
        serverComponentsExternalPackages:["mongoose"]
    },
    images:{
        remotePatterns:[
           
        ]
    }
    
};

export default nextConfig;
