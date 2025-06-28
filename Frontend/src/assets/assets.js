import logo from "../assets/favicon.webp";
import sampleimg_1 from "../assets/cat.png";
import { FaRegEye,FaMagic } from "react-icons/fa";
import { FiDownload } from "react-icons/fi";


export const assets = {
  logo,
  sampleimg_1,
};

export const stepsData = [
  {
    title: "Describe Your Vision",
    description:
      "Type a phrase, sentence, or paragraph that describes the image you want to create.",
    icon:FaRegEye
  },
  {
    title: "Watch the Magic",
    description:
      "Our AI-powered engine will transform your text into a high-quality, unique image in seconds.",
    icon:FaMagic
  },
  {
    title: "Download & Share",
    description:
      "Instantly download your creation or share it with the world directly from our platform.",
    icon:FiDownload

  },
];

export const plans = [
  {
    id: 'Basic',
    price: 10,
    credits: 100,
    desc: 'Best for personal use.'
  },
  {
    id: 'Advanced',
    price: 50,
    credits: 500,
    desc: 'Best for business use.'
  },
  {
    id: 'Business',
    price: 250,
    credits: 5000,
    desc: 'Best for enterprise use.'
  },
]

export const models = [
    {
      "id": "gpt-image-1",
      "title": "gpt-image-1",
      "description": "Next-gen multimodal image model by OpenAI, excels at photorealism, illustration, inpainting & more.",
      "avg_time": "20s - 40s",
      "Model_ID": "provider-5/gpt-image-1"
    },
    {
      "id": "dall-e-3",
      "title": "dall-e-3",
      "description": "OpenAI's detailed and accurate text-to-image model, ideal for conceptual clarity and prompt alignment; creates cohesive, nuanced visuals.",
      "avg_time": "5s - 15s",
      "Model_ID": "provider-5/dall-e-3"
    },
    {
      "id": "FLUX.1-schnell",
      "title": "FLUX.1-schnell",
      "description": "Open-source from Black Forest Labs; designed for fast and lightweight image generation with good prompt fidelity and speed.",
      "avg_time": "5s - 15s",
      "Model_ID": "provider-1/FLUX.1-schnell"
    },
    {
      "id": "FLUX.1-dev",
      "title": "FLUX.1-dev",
      "description": "Developer-focused version, non-commercial license; offers reliable photorealism comparable to DALL-E 3 with strong prompt fidelity.",
      "avg_time": "5s - 15s",
      "Model_ID": "provider-3/FLUX.1-dev"
    },
    {
      "id": "FLUX.1.1-pro",
      "title": "FLUX.1.1-pro",
      "description": "Proprietary flagship model optimized for high-quality photorealistic scenes and cinematic aesthetics, rivaling DALL-E 3 and Midjourney.",
      "avg_time": "2s - 10s",
      "Model_ID": "provider-1/FLUX.1.1-pro"
    },
    {
      "id": "FLUX.1-kontext-pro",
      "title": "FLUX.1-kontext-pro",
      "description": "Enhances context understanding for more coherent and logically consistent image editing and in-context modifications.",
      "avg_time": "2s - 10s",
      "Model_ID": "provider-1/FLUX.1-kontext-pro"
    },
    {
      "id": "FLUX.1.1-pro-ultra-raw",
      "title": "FLUX.1.1-pro-ultra-raw",
      "description": "Ultra-raw mode designed for hyper-realistic candid-style photography with natural lighting, skin tones and textures.",
      "avg_time": "5s - 15s",
      "Model_ID": "provider-3/FLUX.1.1-pro-ultra-raw"
    },
    {
      "id": "FLUX.1.1-pro-ultra",
      "title": "FLUX.1.1-pro-ultra",
      "description": "Ultra mode for ultra-high-resolution (up to 4 MP) photorealism with speed comparable to standard pro versions.",
      "avg_time": "5s - 15s",
      "Model_ID": "provider-3/FLUX.1.1-pro-ultra"
    },
    {
      "id": "FLUX.1-schnell-v2",
      "title": "FLUX.1-schnell-v2",
      "description": "Second-gen Schnell model delivering even faster generation times while maintaining prompt adherence and realism.",
      "avg_time": "2s - 10s",
      "Model_ID": "provider-2/FLUX.1-schnell-v2"
    },
    {
      "id": "shuttle-3.1-aesthetic",
      "title": "shuttle-3.1-aesthetic",
      "description": "Advanced text-to-image model focused on detailed, aesthetic and visually-pleasing styles—great for creative visuals.",
      "avg_time": "5s - 15s",
      "Model_ID": "provider-3/shuttle-3.1-aesthetic"
    },
    {
      "id": "shuttle-3-diffusion",
      "title": "shuttle-3-diffusion",
      "description": "Balanced and versatile model generating detailed and diverse images in just 4 diffusion steps; good blend of speed and quality.",
      "avg_time": "5s - 15s",
      "Model_ID": "provider-3/shuttle-3-diffusion"
    },
    {
      "id": "shuttle-jaguar",
      "title": "shuttle-jaguar",
      "description": "Designed for cinematic, aesthetic and highly realistic imagery—ideal for professional-level visual storytelling.",
      "avg_time": "5s - 15s",
      "Model_ID": "provider-3/shuttle-jaguar"
    }

  
]