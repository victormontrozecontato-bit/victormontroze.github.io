import { Icons } from "@/components/icons";
import { HomeIcon } from "lucide-react";
import { PremiereIcon } from "@/components/ui/svgs/premiere";
import { AfterEffectsIcon } from "@/components/ui/svgs/after-effects";
import { OBSStudioIcon } from "@/components/ui/svgs/obs-studio";
import { CapCutIcon } from "@/components/ui/svgs/capcut";
import { KreaAIIcon } from "@/components/ui/svgs/kreaai";
import { PaperIcon } from "@/components/ui/svgs/paper";

export const DATA = {
  name: "Victor Montroze",
  initials: "VM",
  location: "Taquaritinga, SP",
  description:
    "Transformo ideias em vídeos pelos quais as pessoas não conseguem simplesmente passar batido",
  summary:
    "Eu sou um editor de vídeo com mais de 6 anos de experiência, criando conteúdo engajante para marcas, criadores e negócios no geral. Tenho experiência com vários estilos de edição, como criativos para campanhas de marketing, vídeos UGC, criativos dark, edição de podcasts e até mesmo videoclipes. Já trabalhei com empresas como OneRPM e MKTZ, onde fui responsável por projetos envolvendo artistas como Naiara Azevedo e Alan & Alex.",
  avatarUrl: "../assets/me.jpg",
  skills: [
    { name: "Premiere", icon: PremiereIcon },
    { name: "After Effects", icon: AfterEffectsIcon },
    { name: "Capcut", icon: CapCutIcon },
    { name: "OBS", icon: OBSStudioIcon },
    { name: "Roteirização", icon: PaperIcon },
    { name: "Krea.AI", icon: KreaAIIcon },
  ],
  navbar: [{ href: "/", icon: HomeIcon, label: "Home" }],
  contact: {
    email: "victormontrozecontato@gmail.com",
    tel: "+55 (16) 997607616",
    social: {
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/victor-montroze-67431b337/",
        icon: Icons.linkedin,
        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "#",
        icon: Icons.email,

        navbar: false,
      },
    },
  },

  work: [
    {
      company: "Atomic Finance",
      href: "https://atomic.finance",
      badges: [],
      location: "Remote",
      title: "Bitcoin Protocol Engineer",
      logoUrl: "/atomic.png",
      start: "May 2021",
      end: "Oct 2022",
      description:
        "Implemented the Bitcoin discreet log contract (DLC) protocol specifications as an open source Typescript SDK. Dockerized all microservices and setup production kubernetes cluster. Architected a data lake using AWS S3 and Athena for historical backtesting of bitcoin trading strategies. Built a mobile app using react native and typescript.",
    },
    {
      company: "Shopify",
      badges: [],
      href: "https://shopify.com",
      location: "Remote",
      title: "Software Engineer",
      logoUrl: "/shopify.svg",
      start: "January 2021",
      end: "April 2021",
      description:
        "Implemented a custom Kubernetes controller in Go to automate the deployment of MySQL and ProxySQL custom resources in order to enable 2,000+ internal developers to instantly deploy their app databases to production. Wrote several scripts in Go to automate MySQL database failovers while maintaining master-slave replication topologies and keeping Zookeeper nodes consistent with changes.",
    },
    {
      company: "Nvidia",
      href: "https://nvidia.com/",
      badges: [],
      location: "Santa Clara, CA",
      title: "Software Engineer",
      logoUrl: "/nvidia.png",
      start: "January 2020",
      end: "April 2020",
      description:
        "Architected and wrote the entire MVP of the GeForce Now Cloud Gaming internal admin and A/B testing dashboard using React, Redux, TypeScript, and Python.",
    },
    {
      company: "Splunk",
      href: "https://splunk.com",
      badges: [],
      location: "San Jose, CA",
      title: "Software Engineer",
      logoUrl: "/splunk.svg",
      start: "January 2019",
      end: "April 2019",
      description:
        "Co-developed a prototype iOS app with another intern in Swift for the new Splunk Phantom security orchestration product (later publicly demoed and launched at .conf annual conference in Las Vegas). Implemented a realtime service for the iOS app in Django (Python) and C++; serialized data using protobufs transmitted over gRPC resulting in an approximate 500% increase in data throughput.",
    },
    {
      company: "Lime",
      href: "https://li.me/",
      badges: [],
      location: "San Francisco, CA",
      title: "Software Engineer",
      logoUrl: "/lime.svg",
      start: "January 2018",
      end: "April 2018",
      description:
        "Proposed and implemented an internal ruby API for sending/receiving commands to scooters over LTE networks. Developed a fully automated bike firmware update system to handle asynchronous firmware updates of over 100,000+ scooters worldwide, and provide progress reports in real-time using React, Ruby on Rails, PostgreSQL and AWS EC2 saving hundreds of developer hours.",
    },
    {
      company: "Mitre Media",
      href: "https://mitremedia.com/",
      badges: [],
      location: "Toronto, ON",
      title: "Software Engineer",
      logoUrl: "/mitremedia.png",
      start: "May 2017",
      end: "August 2017",
      description:
        "Designed and implemented a robust password encryption and browser cookie storage system in Ruby on Rails. Leveraged the Yahoo finance API to develop the dividend.com equity screener",
    },
  ],
  projects: [
    {
      title: "Marketing Político/Eleitoral",
      href: "",
      dates: "2024",
      description:
        "Ajudei na captação e realizei a edição de vídeos para a campanha eleitoral de diversos candidatos de Taquaritinga - SP nas eleições de 2024, com destaque para Mirian Ponzio, que foi eleita.",
      technologies: ["Premiere Pro", "After Effects"],
      links: [],
      image: "",
      video: "1S4_DB39ULsqR5TbBFhDieE8ZQJ5QsA68",
    },
    {
      title: "Edição de vídeos UGC",
      href: "",
      dates: "2026",
      description:
        "Realizei a edição de vídeos UGC para a empresa MARKDATA que, em 2026, era a segunda maior empresa de bets do Brasil. O objetivo era chamar a atenção do público com uma modelo chamativa e uma copy previamente validada.",
      technologies: ["Capcut", "Krea.AI"],
      links: [],
      image: "",
      video: "1PO6MiAFbfME3bdnNc-tWu0n28VU9EX_B",
    },
    {
      title: "Edição de Podcast",
      href: "",
      dates: "2022 - 2026",
      description:
        "Fui responsável pela edição de cortes do podcast Hiroseprev, um podcast focado em direito previdenciário e todas as suas nuances. O objetivo dos cortes era transmitir o conteúdo narrado pelos professores com um estilo de edição minimalista, com legendas que fossem fáceis de ler e não distraíssem os alunos do conteúdo apresentado.",
      technologies: ["Premiere Pro"],
      links: [],
      image: "",
      video: "14LsdT1QHKFKjpD_PPbuVJh9oVgIAxyhf",
    },
    {
      title: "Edição de vídeos Dark",
      href: "",
      dates: "2022 - 2026",
      description:
        "Roteirizei e editei diversos vídeos dark para empresas como Hiroseprev e Markdata, usando inteligência artificial para as narrações. O objetivo era prender a atenção do público com ganchos chamativos, usando as regras dos 3 segundos para garantir engajamento máximo.",
      technologies: ["After Effects"],
      links: [],
      image: "",
      video: "1V2c03pldu67Yn_45TF9uk2cO_Dit4Jiq",
    },
    {
      title: "Vídeo dark para sorteio no PIX",
      href: "",
      dates: "2026",
      description:
        "Edição simples de um criativo dark com o intuito de chamar o público para um sorteio no perfil do cliente.",
      technologies: ["Capcut"],
      links: [],
      image: "",
      video: "1jIuACDHkhHPUlC04uTgn-2BMHF8krG79",
    },
    {
      title: "Edição de criativos para Instagram #1",
      href: "",
      dates: "2026",
      description:
        "Realizei a edição de criativos 'dopaminérgicos' para a empresa Markdata, focando em efeitos sonoros e visuais que chamassem a atenção do público, além de hooks e CTAs validados para garantir o máximo possível de conversão.",
      technologies: ["After effects"],
      links: [],
      image: "",
      video: "1m7RB7Z2nHUrvxBBZnncG4nqCV0vKVOT-",
    },
    {
      title: "Edição de criativos para Instagram #2",
      href: "",
      dates: "2026",
      description:
        "Realizei a edição de criativos 'dopaminérgicos' para a empresa Markdata, focando em efeitos sonoros e visuais que chamassem a atenção do público, além de hooks e CTAs validados para garantir o máximo possível de conversão.",
      technologies: ["After Effects"],
      links: [],
      image: "",
      video: "1Uv_uO01vKJ1Ts34BMo1qNenEPy6DRRKS",
    },
    {
      title: "Logo animada para curso de inglês",
      href: "",
      dates: "",
      description:
        "Nesse projeto, o cliente me pediu uma animação simples, mas animada, que entraria depois da introdução dos vídeos. Seguindo a identidade visual dos outros projetos do cliente, chegamos à animação aqui mostrada.",
      technologies: ["After Effects"],
      links: [],
      image: "",
      video: "11QcQCXzHXw4Z70oSu4_Dg4ZKdE2af4Lz",
    },
    {
      title: "Edição highlights de show",
      href: "",
      dates: "",
      description:
        "Trabalhei junto à empresa MKTZ para realizar a edição de highlights de shows da dupla Alan & Alex, usando músicas da banda e cenas marcantes de suas apresentações, tentando montar uma narrativa através das imagens e letras das músicas, demonstrando a gratidão dos artistas com seu público.",
      technologies: ["Capcut"],
      links: [],
      image: "",
      video: "16eMyeO6T90dJKlPyXF0IiAAqdLeXs-nj",
    },
    {
      title: "Projeto Naiara Azevedo",
      href: "",
      dates: "",
      description:
        "Nesse projeto, o objetivo era realizar o design e edição de vídeos que tocariam na Estação da Sé, na cidade de São Paulo, no gigantesco anel e elevadores da estação, durante 1 semana. Foi um projeto em parceria com a empresa OneRPM, uma das maiores empresas brasileiras no cenário da música atual.",
      technologies: ["After Effects"],
      links: [],
      image: "",
      video: "1TiEIHPfH-7L6LYvOH2unYyhEgKiN3nfx",
    },
  ],
} as const;
