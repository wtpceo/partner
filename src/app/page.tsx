"use client";

import React from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Camera,
  Video,
  Users,
  Youtube,
  Check,
  ChevronRight,
  MessageCircle,
  Target,
  CheckCircle,
  MessageSquare
} from "lucide-react";
import { useState } from "react";

export default function Home() {
  const [selectedService, setSelectedService] = useState<number | null>(null);

  const services = [
    {
      id: 0,
      title: "사진 촬영",
      icon: <Camera className="w-8 h-8" />,
      description: "네이버플레이스, 배달앱, 매장 공간 전문 촬영",
      price: "80만원",
      priceLabel: "부터",
      image: "/food-photography.png",
      features: [
        "네이버플레이스용 모음컷",
        "배달앱용 메뉴 사진", 
        "매장 공간 사진 촬영",
        "인쇄 포스터용 고해상도 컷",
        "컷수 제한 없음",
        "원본 파일 제공",
        "용도에 맞는 편집본 제공",
        "지방은 별도 경비 발생"
      ]
    },
    {
      id: 1,
      title: "SNS 영상 콘텐츠",
      icon: <Video className="w-8 h-8" />,
      description: "인스타그램, 틱톡, 유튜브 쇼츠 최적화 영상",
      price: "90만원",
      priceLabel: "3편 패키지",
      image: "/sns-video.png",
      features: [
        "15~30초 짧은 영상 3편",
        "SNS 최적화 포맷",
        "자막 및 음악 삽입",
        "성우 더빙 포함",
        "편집본 + 원본 제공",
        "광고 운영 대행 가능(+20만원)",
        "원하는 채널에 직접 영상 업로드",
        "충전된 광고비 운영 대행",
        "광고 성과 보고서 제공"
      ]
    },
    {
      id: 2,
      title: "인플루언서 먹방",
      icon: <Users className="w-8 h-8" />,
      description: "푸드 인플루언서와 함께하는 먹방 콘텐츠",
      price: "90만원",
      priceLabel: "+ 섭외비",
      image: "/mukbang-scene.png",
      features: [
        "팔로워 기반 탄탄한 인플루언서",
        "매장 방문 먹방 촬영",
        "유튜브, 인스타그램, 틱톡 업로드",
        "브랜드 신뢰도 상승",
        "신규 고객 유입 극대화",
        "조회수 데이터 리포트 제공"
      ]
    },
    {
      id: 3,
      title: "유튜브 채널 운영",
      icon: <Youtube className="w-8 h-8" />,
      description: "기획부터 운영까지 올인원 유튜브 대행",
      price: "200만원",
      priceLabel: "월 구독형",
      image: "/youtube-channel.png",
      features: [
        "월 1회 촬영 총 4편 제작",
        "7분 내외 영상과 숏폼",
        "유튜브 알고리즘 최적화",
        "썸네일, 제목, 해시태그 세팅",
        "꾸준한 채널 운영 관리",
        "성과 분석 리포트 제공"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm z-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center gap-2 sm:gap-3">
              <span className="text-sm sm:text-xl font-semibold text-gray-900">
                위즈더플래닝
              </span>
              <span className="text-sm sm:text-lg text-gray-400">×</span>
              <span className="text-sm sm:text-xl font-semibold text-gray-900">
                SH인터내셔날
              </span>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a href="#services" className="text-sm text-gray-600 hover:text-gray-900 transition">
                서비스
              </a>
              <a href="#pricing" className="text-sm text-gray-600 hover:text-gray-900 transition">
                가격
              </a>
              <a href="#contact" className="text-sm text-gray-600 hover:text-gray-900 transition">
                문의
              </a>
              <a 
                href="http://pf.kakao.com/_QUTxcb/chat" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="px-4 py-2 bg-yellow-400 text-black text-sm font-bold rounded-full hover:bg-yellow-300 transition inline-flex items-center gap-2"
              >
                <MessageSquare className="w-4 h-4" />
                실시간 상담
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-24 sm:pt-32 pb-16 sm:pb-20 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold text-gray-900 mb-6 leading-tight">
              프리미엄 콘텐츠를
              <br />
              <span className="text-red-600">특별한 가격으로</span>
            </h1>
            <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto mb-10 px-4 sm:px-0">
              SH인터내셔날과 함께라면 최고의 품질을 합리적인 가격에 만나실 수 있습니다.
            </p>
            <div className="flex justify-center">
              <a href="#services" className="px-8 py-3 bg-red-600 text-white rounded-full hover:bg-red-700 transition inline-block">
                서비스 살펴보기
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* SH인터내셔날 Special Offer Banner */}
      <section className="bg-gradient-to-r from-red-600 to-red-700 py-8">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center text-white"
          >
            <div className="flex items-center justify-center gap-2 mb-3">
              <span className="text-xl sm:text-2xl">🎉</span>
              <h3 className="text-xl sm:text-2xl font-bold">SH인터내셔날 특별 혜택</h3>
              <span className="text-xl sm:text-2xl">🎉</span>
            </div>
            <p className="text-2xl sm:text-3xl font-black mb-2">
              모든 서비스 <span className="text-yellow-300">30% 할인</span>
            </p>
            <p className="text-base sm:text-lg opacity-90 px-4 sm:px-0">
              SH인터내셔날을 통해 문의하시면 위즈더플래닝의 모든 서비스를 특별 할인가로 이용하실 수 있습니다
            </p>
            <div className="mt-4 inline-flex items-center gap-2 bg-white/20 backdrop-blur px-4 py-2 rounded-full">
              <span className="text-sm font-medium">파트너십 프로그램</span>
              <span className="text-xs bg-yellow-400 text-red-900 px-2 py-1 rounded-full font-bold">LIMITED OFFER</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section id="services" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              서비스 및 가격
            </h2>
            <p className="text-base sm:text-lg text-gray-600">
              합리적인 가격으로 최고의 품질을 제공합니다
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                onClick={() => setSelectedService(selectedService === service.id ? null : service.id)}
                className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all cursor-pointer"
              >
                <div className="aspect-video relative overflow-hidden bg-gray-100">
                  <Image 
                    src={service.image} 
                    alt={service.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  <div className="absolute bottom-4 left-4 text-white">
                    {service.icon}
                  </div>
                </div>
                
                <div className="p-6 sm:p-8">
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-4 mb-4">
                    <div>
                      <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-2">
                        {service.title}
                      </h3>
                      <p className="text-gray-600">
                        {service.description}
                      </p>
                    </div>
                    <div className="sm:text-right">
                      <div className="text-xl sm:text-2xl font-bold text-gray-900">
                        {service.price}
                      </div>
                      <div className="text-sm text-gray-500">
                        {service.priceLabel}
                      </div>
                      <div className="mt-2 p-2 bg-red-50 rounded-lg">
                        <div className="text-xs text-red-600 font-medium">SH인터내셔날 제휴가</div>
                        <div className="text-base sm:text-lg font-bold text-red-700">
                          {service.id === 0 && "40만원"}
                          {service.id === 1 && "63만원"}
                          {service.id === 2 && "63만원"}
                          {service.id === 3 && "140만원"}
                        </div>
                        <div className="text-xs text-red-500">50% 할인</div>
                      </div>
                    </div>
                  </div>

                  <AnimatePresence>
                    {selectedService === service.id && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <div className="pt-6 border-t border-gray-100">
                          <h4 className="font-medium text-gray-900 mb-4">포함 내용</h4>
                          <ul className="space-y-3">
                            {service.features.map((feature, i) => (
                              <li key={i} className="flex items-start gap-3">
                                <Check className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                                <span className="text-gray-600 text-sm">{feature}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  <button className="mt-6 flex items-center text-red-600 hover:text-red-700 transition">
                    <span className="text-sm font-medium">자세히 보기</span>
                    <ChevronRight className="w-4 h-4 ml-1" />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              진행 프로세스
            </h2>
            <p className="text-base sm:text-lg text-gray-600">
              체계적인 프로세스로 완벽한 결과를 만들어냅니다
            </p>
          </div>

          <div className="relative">
            {/* Connection Line */}
            <div className="hidden md:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-red-200 via-red-400 to-red-200 -translate-y-1/2" />
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
              {[
                { 
                  step: "01", 
                  title: "상담", 
                  desc: "고객님의 니즈를 파악합니다",
                  detail: "요구사항 분석 · 목표 설정",
                  icon: <MessageCircle className="w-8 h-8" />
                },
                { 
                  step: "02", 
                  title: "기획", 
                  desc: "맞춤형 콘텐츠를 기획합니다",
                  detail: "전략 수립 · 스토리보드 작성",
                  icon: <Target className="w-8 h-8" />
                },
                { 
                  step: "03", 
                  title: "제작", 
                  desc: "전문가가 직접 제작합니다",
                  detail: "촬영 · 편집 · 후보정",
                  icon: <Camera className="w-8 h-8" />
                },
                { 
                  step: "04", 
                  title: "납품", 
                  desc: "완성된 콘텐츠를 전달합니다",
                  detail: "최종 검수 · 파일 전달",
                  icon: <CheckCircle className="w-8 h-8" />
                }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="relative"
                >
                  <div className="bg-white rounded-2xl shadow-lg p-8 text-center hover:shadow-xl transition-shadow">
                    {/* Step Number */}
                    <div className="mx-auto w-20 h-20 bg-gradient-to-br from-red-500 to-red-600 rounded-full flex items-center justify-center mb-6 shadow-lg">
                      <span className="text-3xl font-bold text-white">{item.step}</span>
                    </div>
                    
                    {/* Icon */}
                    <div className="mb-4 text-red-600">
                      {React.cloneElement(item.icon, { className: "w-8 h-8 mx-auto" })}
                    </div>
                    
                    <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2">
                      {item.title}
                    </h3>
                    <p className="text-gray-600 mb-2">
                      {item.desc}
                    </p>
                    <p className="text-sm text-gray-500">
                      {item.detail}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            지금 시작하세요
          </h2>
          <p className="text-lg sm:text-xl text-gray-300 mb-4">
            무료 상담을 통해 최적의 솔루션을 제안해드립니다
          </p>
          <div className="bg-white/10 rounded-lg p-4 mb-10 max-w-lg mx-auto backdrop-blur">
            <p className="text-sm text-yellow-300 mb-2">💬 카카오톡 실시간 상담 안내</p>
            <p className="text-xs text-gray-300">
              상담 시 아래 정보를 함께 보내주세요:
              <br />• 상호명
              <br />• 전화번호
              <br />• 문의 내용
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="http://pf.kakao.com/_QUTxcb/chat" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="px-8 py-4 bg-yellow-400 text-black font-bold rounded-full hover:bg-yellow-300 transition inline-flex items-center justify-center gap-2 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              <MessageSquare className="w-5 h-5" />
              카카오톡 실시간 상담
            </a>
            <a 
              href="https://obsidian-quit-df6.notion.site/26738318fea680c5978ff75286208b63" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="px-8 py-3 border border-white/30 text-white rounded-full hover:bg-white/10 transition inline-block"
            >
              레퍼런스 보러가기
            </a>
          </div>
        </div>
      </section>

      {/* Floating Kakao Button */}
      <a
        href="http://pf.kakao.com/_QUTxcb/chat"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 bg-yellow-400 text-black p-4 rounded-full shadow-2xl hover:bg-yellow-300 transition-all transform hover:scale-110 flex items-center justify-center group"
        aria-label="카카오톡 실시간 상담"
      >
        <MessageSquare className="w-6 h-6" />
        <span className="absolute right-full mr-3 bg-black text-white text-sm py-2 px-3 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
          카카오톡 실시간 상담
        </span>
      </a>

      {/* Footer */}
      <footer className="py-12 bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="col-span-1 md:col-span-2">
              <h3 className="font-semibold text-gray-900 mb-4">위즈더플래닝</h3>
              <p className="text-gray-600 text-sm">
                음식점과 브랜드를 위한 전문 콘텐츠 제작 서비스
              </p>
            </div>
            <div>
              <h4 className="font-medium text-gray-900 mb-4">서비스</h4>
              <ul className="space-y-2">
                {services.map((service) => (
                  <li key={service.id}>
                    <a href="#" className="text-sm text-gray-600 hover:text-gray-900">
                      {service.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="font-medium text-gray-900 mb-4">문의</h4>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>wiz@wiztheplanning.com</li>
                <li>1670-0704</li>
                <li>평일 10:00-18:00</li>
              </ul>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-gray-100">
            <p className="text-center text-sm text-gray-500">
              © 2025 위즈더플래닝. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}