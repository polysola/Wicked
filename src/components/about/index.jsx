import React from "react";
import ItemLayout from "./ItemLayout";
import Link from "next/link";

const AboutDetails = () => {
  return (
    <section className="py-20 w-full">
      <div className="grid grid-cols-12 gap-6 w-full px-4 sm:px-6 md:px-8">
        {/* Main Info Section */}
        <ItemLayout
          className="col-span-full lg:col-span-8 row-span-2 flex-col items-start backdrop-blur-lg bg-black/30 border border-white/10 rounded-2xl"
        >
          <h2 className="text-2xl md:text-3xl lg:text-4xl text-left w-full capitalize bg-gradient-to-r from-yellow-300 to-yellow-500 text-transparent bg-clip-text font-bold">
            Next-Generation AI on XRP Ledger
          </h2>
          <p className="font-light text-sm sm:text-base md:text-lg text-gray-200 leading-relaxed">
            XWizard AI revolutionizes the blockchain landscape by seamlessly integrating
            cutting-edge artificial intelligence with the XRP Ledger. Our platform
            leverages advanced machine learning algorithms to provide real-time analytics,
            predictive modeling, and automated trading strategies. Built with a
            responsive-first approach, our interface adapts flawlessly across all devices,
            ensuring a premium user experience whether you are monitoring markets on your
            desktop or trading on the go. Experience the future of decentralized AI,
            powered by the speed and efficiency of the XRP network.
          </p>
        </ItemLayout>

        {/* Stats Section */}
        <ItemLayout
          className="col-span-full xs:col-span-6 lg:col-span-4 backdrop-blur-lg bg-black/30 border border-white/10 rounded-2xl overflow-hidden group hover:bg-black/40 transition-all duration-300"
        >
          <div className="relative overflow-hidden rounded-xl p-6">
            <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/20 to-transparent opacity-50"></div>
            <p className="font-bold w-full text-left text-4xl sm:text-6xl lg:text-7xl bg-gradient-to-r from-yellow-300 to-yellow-500 text-transparent bg-clip-text group-hover:scale-105 transition-transform duration-300">
              ???K+
              <sub className="font-semibold text-base text-gray-300 ml-2">active users</sub>
            </p>
          </div>
        </ItemLayout>

        <ItemLayout
          className="col-span-full xs:col-span-6 lg:col-span-4 backdrop-blur-lg bg-black/30 border border-white/10 rounded-2xl overflow-hidden group hover:bg-black/40 transition-all duration-300"
        >
          <div className="relative overflow-hidden rounded-xl p-6">
            <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/20 to-transparent opacity-50"></div>
            <p className="font-bold w-full text-left text-4xl sm:text-6xl lg:text-7xl bg-gradient-to-r from-yellow-300 to-yellow-500 text-transparent bg-clip-text group-hover:scale-105 transition-transform duration-300">
              99.9%
              <sub className="font-semibold text-base text-gray-300 ml-2">uptime</sub>
            </p>
          </div>
        </ItemLayout>

        {/* Features Section */}
        <ItemLayout
          className="col-span-full sm:col-span-6 lg:col-span-4 backdrop-blur-lg bg-gradient-to-br from-blue-600/50 to-purple-600/50 rounded-2xl border border-white/10 hover:scale-[1.02] transition-all duration-300"
        >
          <div className="p-6 h-full flex flex-col">
            <div className="text-3xl mb-4">🤖</div>
            <h3 className="text-xl font-bold mb-3 text-white">AI Trading Bot</h3>
            <p className="text-sm md:text-base text-gray-200">
              Advanced ML algorithms for automated trading with customizable strategies
            </p>
          </div>
        </ItemLayout>

        <ItemLayout
          className="col-span-full sm:col-span-6 lg:col-span-4 backdrop-blur-lg bg-gradient-to-br from-purple-600/50 to-pink-600/50 rounded-2xl border border-white/10 hover:scale-[1.02] transition-all duration-300"
        >
          <div className="p-6 h-full flex flex-col">
            <div className="text-3xl mb-4">📊</div>
            <h3 className="text-xl font-bold mb-3 text-white">Predictive Analytics</h3>
            <p className="text-sm md:text-base text-gray-200">
              Real-time market predictions powered by neural networks
            </p>
          </div>
        </ItemLayout>

        <ItemLayout
          className="col-span-full sm:col-span-6 lg:col-span-4 backdrop-blur-lg bg-gradient-to-br from-pink-600/50 to-red-600/50 rounded-2xl border border-white/10 hover:scale-[1.02] transition-all duration-300"
        >
          <div className="p-6 h-full flex flex-col">
            <div className="text-3xl mb-4">💼</div>
            <h3 className="text-xl font-bold mb-3 text-white">Smart Portfolio</h3>
            <p className="text-sm md:text-base text-gray-200">
              AI-driven portfolio management and risk assessment
            </p>
          </div>
        </ItemLayout>

        {/* Benefits Grid */}
        <ItemLayout className="col-span-full">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 w-full">
            {[
              {
                icon: "⚡",
                title: "Lightning Fast",
                desc: "Instant transactions on XRP",
                gradient: "from-blue-500/30 to-purple-500/30"
              },
              {
                icon: "🔒",
                title: "Secure",
                desc: "Enterprise-grade security",
                gradient: "from-purple-500/30 to-pink-500/30"
              },
              {
                icon: "📱",
                title: "Mobile First",
                desc: "Trade anywhere, anytime",
                gradient: "from-pink-500/30 to-red-500/30"
              },
              {
                icon: "🤖",
                title: "Smart AI",
                desc: "Self-learning algorithms",
                gradient: "from-red-500/30 to-orange-500/30"
              }
            ].map((item, index) => (
              <div key={index} className={`flex flex-col items-center p-6 backdrop-blur-lg bg-gradient-to-br ${item.gradient} rounded-2xl border border-white/10 hover:scale-[1.02] transition-all duration-300`}>
                <span className="text-4xl mb-4">{item.icon}</span>
                <h4 className="text-lg font-bold text-white mb-2">{item.title}</h4>
                <p className="text-sm text-center text-gray-200">{item.desc}</p>
              </div>
            ))}
          </div>
        </ItemLayout>

        {/* Tech Stack */}
        <ItemLayout className="col-span-full md:col-span-6">
          <div className="h-full backdrop-blur-lg bg-gradient-to-br from-blue-900/50 to-purple-900/50 rounded-2xl border border-white/10 p-6 hover:scale-[1.02] transition-all duration-300">
            <h3 className="text-2xl font-bold mb-6 text-white">Technology Stack</h3>
            <div className="flex flex-wrap gap-3">
              {["XRP Ledger", "TensorFlow", "PyTorch", "React", "Node.js", "WebSocket", "Docker", "Kubernetes"].map((tech) => (
                <span key={tech} className="px-4 py-2 bg-white/10 rounded-full text-sm font-medium text-gray-200 hover:bg-white/20 transition-colors duration-300">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </ItemLayout>

        {/* Open Source */}
        <ItemLayout className="col-span-full md:col-span-6">
          <Link
            href="https://github.com/xwizard-ai"
            target="_blank"
            className="block w-full h-full"
          >
            <div className="h-full backdrop-blur-lg bg-gradient-to-br from-purple-900/50 to-pink-900/50 rounded-2xl border border-white/10 p-6 hover:scale-[1.02] transition-all duration-300">
              <h3 className="text-2xl font-bold mb-6 text-white">Open Source</h3>
              <p className="text-base text-gray-200">
                Join our community of developers and contribute to the future of AI-powered
                blockchain technology. Star us on GitHub!
              </p>
            </div>
          </Link>
        </ItemLayout>
      </div>
    </section>
  );
};

export default AboutDetails;