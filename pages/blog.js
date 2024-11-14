/* eslint-disable @next/next/no-img-element */


import Footer from "@/components/landing-general/Footer";
import Navbar from "@/components/landing-general/Navbar";
import React from "react";
import Image from "next/image";
import Error404 from "@/components/404";

export default function Blog() {
    return (
        <Error404 />
    );
}





// import { useState } from 'react';
// import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
// import { Button } from "@/components/ui/button"
// import { Input } from "@/components/ui/input"
// import { Play, ArrowRight } from 'lucide-react';

// export default function BlogPage() {
//     const [email, setEmail] = useState('');

//     const featuredBlogs = [
//         {
//             title: "DevOps Best Practices: Why You Should Care",
//             author: "Name Of Author",
//             image: "/api/placeholder/400/250"
//         },
//         {
//             title: "The Determinants of Scaling Your Tech Infrastructure",
//             author: "Name Of Author",
//             image: "/api/placeholder/400/250"
//         },
//         {
//             title: "5 Ways Automation Can Boost Your Team's Productivity",
//             author: "Name Of Author",
//             image: "/api/placeholder/400/250"
//         }
//     ];

//     const latestProducts = [
//         { title: "A framework for regulatory bodies", category: "RETAIL", image: "/api/placeholder/400/250" },
//         { title: "A framework for regulatory bodies", category: "RETAIL", image: "/api/placeholder/400/250" },
//         { title: "A framework for regulatory bodies", category: "RETAIL", image: "/api/placeholder/400/250" },
//         { title: "A framework for regulatory bodies", category: "RETAIL", image: "/api/placeholder/400/250" }
//     ];

//     return (
//         <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white">
//             {/* Hero Section */}
//             <div className="container mx-auto px-4 pt-16 pb-24">
//                 <h1 className="text-4xl md:text-5xl font-bold text-center max-w-3xl mx-auto mb-8">
//                     Whether you&apos;re a business leader, an IT professional, or just tech-curious, our content is designed to empower you with actionable insights.
//                 </h1>

//                 {/* Featured Post */}
//                 <Card className="bg-gray-800 border-none text-white mt-12 relative overflow-hidden">
//                     <CardContent className="p-0">
//                         <div className="relative">
//                             <img
//                                 src="/api/placeholder/1200/600"
//                                 alt="Featured post"
//                                 className="w-full object-cover"
//                             />
//                             <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/80 flex items-center justify-center">
//                                 <Button variant="outline" className="rounded-full border-2 border-white bg-transparent hover:bg-white/20">
//                                     <Play className="w-12 h-12" />
//                                 </Button>
//                             </div>
//                         </div>
//                         <div className="p-6">
//                             <h2 className="text-2xl font-bold mb-3">
//                                 The Impact Of AI On The Business Landscape: What&apos;s Changing And What You Need To Know
//                             </h2>
//                             <p className="text-gray-300 mb-4">
//                                 In today&apos;s fast-paced business environment, efficiency is key to staying competitive. Automation has become
//                                 a game-changer for businesses looking to improve productivity and reduce manual workloads. By automating
//                                 repetitive and time-consuming tasks, your team can focus on higher-value work that drives growth
//                                 and innovation.
//                             </p>
//                             <Button variant="link" className="text-blue-400 hover:text-blue-300 pl-0">
//                                 Read More <ArrowRight className="ml-2 w-4 h-4" />
//                             </Button>
//                         </div>
//                     </CardContent>
//                 </Card>
//             </div>

//             {/* Newsletter Section */}
//             <div className="container mx-auto px-4 py-12">
//                 <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-24">
//                     <h3 className="text-xl font-semibold">Stay ahead of the curve with insights from industry experts.</h3>
//                     <div className="flex gap-4 w-full md:w-auto">
//                         <Input
//                             type="email"
//                             placeholder="Enter your email"
//                             className="bg-gray-800 border-gray-700"
//                             value={email}
//                             onChange={(e) => setEmail(e.target.value)}
//                         />
//                         <Button>Subscribe</Button>
//                     </div>
//                 </div>

//                 {/* Featured Blogs Section */}
//                 <h2 className="text-2xl font-bold mb-8">Featured Blogs</h2>
//                 <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-24">
//                     {featuredBlogs.map((blog, index) => (
//                         <Card key={index} className="bg-gray-800 border-none text-white">
//                             <CardContent className="p-0">
//                                 <img
//                                     src={blog.image}
//                                     alt={blog.title}
//                                     className="w-full h-48 object-cover"
//                                 />
//                                 <div className="p-6">
//                                     <h3 className="text-lg font-semibold mb-2">{blog.title}</h3>
//                                     <p className="text-gray-400">{blog.author}</p>
//                                 </div>
//                             </CardContent>
//                         </Card>
//                     ))}
//                 </div>

//                 {/* Latest Products Section */}
//                 <h2 className="text-2xl font-bold mb-8">Our Latest Products News</h2>
//                 <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
//                     {latestProducts.map((product, index) => (
//                         <Card key={index} className="bg-gray-800 border-none text-white">
//                             <CardContent className="p-0">
//                                 <div className="p-4">
//                                     <span className="text-blue-400 text-sm">{product.category}</span>
//                                     <h3 className="text-lg font-semibold mt-2">{product.title}</h3>
//                                 </div>
//                                 <img
//                                     src={product.image}
//                                     alt={product.title}
//                                     className="w-full h-32 object-cover mt-4"
//                                 />
//                             </CardContent>
//                         </Card>
//                     ))}
//                 </div>
//             </div>
//         </div>
//     );
// }