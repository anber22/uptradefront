import Head from "next/head";
import urlcat from "urlcat";
import { NextSeo } from "next-seo";
// import { promises as fs } from "fs";
// import path from "path";
import dayjs from "dayjs";

let test = [
  {
    productName: "Essential PH-1",
    productCategoryValueId: 646,
    price: 11000,
    keyword: null,
    productImageUrl:
      "https://d3c745jesl5pj3.cloudfront.net/sell/web/Essential_tinified_5f03b4d511f24eb6bb7392d4ff6fec79.jpg",
    brand: "Essential",
    type: null,
    brandCategoryValueId: 645,
    relatedGoods: [
      {
        productId: 1545698312988160000,
        name: "Essential PH-1",
        brand: "Essential",
        merchant: "Amazon",
        brandLogoUrl:
          "https://uptrade-public-static-resources.s3.us-east-2.amazonaws.com/amazon+logo.png",
        buyUrl:
          "https://www.amazon.com/Essential-128GB-Sprint-Locked-Renewed/dp/B07N8JQBD3/ref=sr_1_28?keywords=Essential+Unlocked+renewed&qid=1657209628&sr=8-28&srs=17871142011",
        currentPrice: 11000,
        specs: [
          {
            productId: 1545698312988160000,
            key: "CONDITION",
            value: "Excellent",
          },
          {
            productId: 1545698312988160000,
            key: "CARRIER",
            value: "Sprint",
          },
          {
            productId: 1545698312988160000,
            key: "STORAGE",
            value: "128GB",
          },
          {
            productId: 1545698312988160000,
            key: "COLOR",
            value: "Black Moon",
          },
        ],
      },
    ],
    aboutProduct: null,
    metaDescription: null,
    metaDescCategory: null,
    qa: null,
  },
  {
    productName: "Galaxy A50",
    productCategoryValueId: 24,
    price: 7900,
    keyword: null,
    productImageUrl:
      "https://d3c745jesl5pj3.cloudfront.net/sell/web/Galaxy A50_f1a36ef1fb9341fcaf45ec7d20b3c5fd.png",
    brand: "Samsung",
    type: null,
    brandCategoryValueId: 19,
    relatedGoods: [
      {
        productId: 1545698352662081536,
        name: "Galaxy A50",
        brand: "Samsung",
        merchant: "Amazon",
        brandLogoUrl:
          "https://uptrade-public-static-resources.s3.us-east-2.amazonaws.com/amazon+logo.png",
        buyUrl:
          "https://www.amazon.com/Samsung-Version-Factory-Unlocked-SM-A505UZKNXAA/dp/B082QPSB79/ref=sr_1_47?keywords=Samsung+Galaxy+Unlocked+renewed&qid=1657217092&sr=8-47&srs=17871142011",
        currentPrice: 14300,
        specs: [
          {
            productId: 1545698352662081536,
            key: "CONDITION",
            value: "Excellent",
          },
          {
            productId: 1545698352662081536,
            key: "CARRIER",
            value: "Unlocked",
          },
          {
            productId: 1545698352662081536,
            key: "STORAGE",
            value: "64GB",
          },
          {
            productId: 1545698352662081536,
            key: "COLOR",
            value: "Black",
          },
        ],
      },
      {
        productId: 1545698365047861248,
        name: "Galaxy A50",
        brand: "Samsung",
        merchant: "Amazon",
        brandLogoUrl:
          "https://uptrade-public-static-resources.s3.us-east-2.amazonaws.com/amazon+logo.png",
        buyUrl:
          "https://www.amazon.com/Samsung-Galaxy-A505U-Unlocked-Smartphone/dp/B089HPTDK5/ref=sr_1_82?keywords=Samsung+Galaxy+Unlocked+renewed&qid=1657217419&sr=8-82&srs=17871142011",
        currentPrice: 14900,
        specs: [
          {
            productId: 1545698365047861248,
            key: "CONDITION",
            value: "Excellent",
          },
          {
            productId: 1545698365047861248,
            key: "CARRIER",
            value: "Unlocked",
          },
          {
            productId: 1545698365047861248,
            key: "STORAGE",
            value: "64GB",
          },
          {
            productId: 1545698365047861248,
            key: "COLOR",
            value: "Black",
          },
        ],
      },
      {
        productId: 1545698368998895616,
        name: "Galaxy A50",
        brand: "Samsung",
        merchant: "Amazon",
        brandLogoUrl:
          "https://uptrade-public-static-resources.s3.us-east-2.amazonaws.com/amazon+logo.png",
        buyUrl:
          "https://www.amazon.com/Samsung-Galaxy-Verizon-Black-Renewed/dp/B07YXBTC29/ref=sr_1_92?keywords=Samsung+Galaxy+Unlocked+renewed&qid=1657217504&sr=8-92&srs=17871142011",
        currentPrice: 15300,
        specs: [
          {
            productId: 1545698368998895616,
            key: "CONDITION",
            value: "Excellent",
          },
          {
            productId: 1545698368998895616,
            key: "CARRIER",
            value: "Verizon",
          },
          {
            productId: 1545698368998895616,
            key: "STORAGE",
            value: "64GB",
          },
          {
            productId: 1545698368998895616,
            key: "COLOR",
            value: "Black",
          },
        ],
      },
      {
        productId: 1545698385318932480,
        name: "Galaxy A50",
        brand: "Samsung",
        merchant: "Amazon",
        brandLogoUrl:
          "https://uptrade-public-static-resources.s3.us-east-2.amazonaws.com/amazon+logo.png",
        buyUrl:
          "https://www.amazon.com/Samsung-Display-Factory-Unlocked-Renewed/dp/B07YR55PMD/ref=sr_1_156?keywords=Samsung+Galaxy+Unlocked+renewed&qid=1657217972&sr=8-156&srs=17871142011",
        currentPrice: 16118,
        specs: [
          {
            productId: 1545698385318932480,
            key: "CONDITION",
            value: "Excellent",
          },
          {
            productId: 1545698385318932480,
            key: "CARRIER",
            value: "Unlocked",
          },
          {
            productId: 1545698385318932480,
            key: "STORAGE",
            value: "64GB",
          },
          {
            productId: 1545698385318932480,
            key: "COLOR",
            value: "Black",
          },
        ],
      },
      {
        productId: 1545698346991382528,
        name: "Galaxy A50",
        brand: "Samsung",
        merchant: "Amazon",
        brandLogoUrl:
          "https://uptrade-public-static-resources.s3.us-east-2.amazonaws.com/amazon+logo.png",
        buyUrl:
          "https://www.amazon.com/Samsung-SM-A505G-Factory-Unlocked-Renewed/dp/B07RL93F7T/ref=sr_1_32?keywords=Samsung+Galaxy+Unlocked+renewed&qid=1657216987&sr=8-32&srs=17871142011",
        currentPrice: 16129,
        specs: [
          {
            productId: 1545698346991382528,
            key: "CONDITION",
            value: "Excellent",
          },
          {
            productId: 1545698346991382528,
            key: "CARRIER",
            value: "Unlocked",
          },
          {
            productId: 1545698346991382528,
            key: "STORAGE",
            value: "64GB",
          },
          {
            productId: 1545698346991382528,
            key: "COLOR",
            value: "Black",
          },
        ],
      },
    ],
    aboutProduct: null,
    metaDescription: null,
    metaDescCategory: null,
    qa: null,
  },
  {
    productName: "Galaxy A51",
    productCategoryValueId: 91,
    price: 17999,
    keyword: null,
    productImageUrl:
      "https://d3c745jesl5pj3.cloudfront.net/sell/web/Galaxy A51_990ffcc86b7349dcbb0d265fdb5f756d.jpeg",
    brand: "Samsung",
    type: null,
    brandCategoryValueId: 19,
    relatedGoods: [
      {
        productId: 1545698513383616512,
        name: "Galaxy A51",
        brand: "Samsung",
        merchant: "Amazon",
        brandLogoUrl:
          "https://uptrade-public-static-resources.s3.us-east-2.amazonaws.com/amazon+logo.png",
        buyUrl:
          "https://www.amazon.com/Samsung-Galaxy-A51-A516U-Single/dp/B08KL7BRJB/ref=sr_1_144?keywords=Samsung+Galaxy+T-Mobile+renewed&qid=1657244192&sr=8-144",
        currentPrice: 19300,
        specs: [
          {
            productId: 1545698513383616512,
            key: "CONDITION",
            value: "Excellent",
          },
          {
            productId: 1545698513383616512,
            key: "CARRIER",
            value: "T-Mobile",
          },
          {
            productId: 1545698513383616512,
            key: "STORAGE",
            value: "128GB",
          },
          {
            productId: 1545698513383616512,
            key: "COLOR",
            value: "Black",
          },
        ],
      },
      {
        productId: 1545698423256412160,
        name: "Galaxy A51",
        brand: "Samsung",
        merchant: "Amazon",
        brandLogoUrl:
          "https://uptrade-public-static-resources.s3.us-east-2.amazonaws.com/amazon+logo.png",
        buyUrl:
          "https://www.amazon.com/Samsung-Galaxy-A51-Verizon-Renewed/dp/B08CJDTDPL/ref=sr_1_16?keywords=Samsung+Galaxy+Verizon+renewed&qid=1657219261&sr=8-16",
        currentPrice: 19499,
        specs: [
          {
            productId: 1545698423256412160,
            key: "CONDITION",
            value: "Excellent",
          },
          {
            productId: 1545698423256412160,
            key: "CARRIER",
            value: "Verizon",
          },
          {
            productId: 1545698423256412160,
            key: "STORAGE",
            value: "128GB",
          },
          {
            productId: 1545698423256412160,
            key: "COLOR",
            value: "Black",
          },
        ],
      },
      {
        productId: 1545698378222170112,
        name: "Galaxy A51",
        brand: "Samsung",
        merchant: "Amazon",
        brandLogoUrl:
          "https://uptrade-public-static-resources.s3.us-east-2.amazonaws.com/amazon+logo.png",
        buyUrl:
          "https://www.amazon.com/Samsung-Unlocked-Smartphone-International-Compatible/dp/B09H5147CG/ref=sr_1_129?keywords=Samsung+Galaxy+Unlocked+renewed&qid=1657217786&sr=8-129&srs=17871142011",
        currentPrice: 20049,
        specs: [
          {
            productId: 1545698378222170112,
            key: "CONDITION",
            value: "Excellent",
          },
          {
            productId: 1545698378222170112,
            key: "CARRIER",
            value: "Unlocked",
          },
          {
            productId: 1545698378222170112,
            key: "STORAGE",
            value: "128GB",
          },
          {
            productId: 1545698378222170112,
            key: "COLOR",
            value: "Black",
          },
        ],
      },
      {
        productId: 1545698359339413504,
        name: "Galaxy A51",
        brand: "Samsung",
        merchant: "Amazon",
        brandLogoUrl:
          "https://uptrade-public-static-resources.s3.us-east-2.amazonaws.com/amazon+logo.png",
        buyUrl:
          "https://www.amazon.com/Samsung-Galaxy-Camera-Unlocked-International/dp/B08BRVG6ZL/ref=sr_1_63?keywords=Samsung+Galaxy+Unlocked+renewed&qid=1657217313&sr=8-63&srs=17871142011",
        currentPrice: 21300,
        specs: [
          {
            productId: 1545698359339413504,
            key: "CONDITION",
            value: "Excellent",
          },
          {
            productId: 1545698359339413504,
            key: "CARRIER",
            value: "Unlocked",
          },
          {
            productId: 1545698359339413504,
            key: "STORAGE",
            value: "128GB",
          },
          {
            productId: 1545698359339413504,
            key: "COLOR",
            value: "Blue",
          },
        ],
      },
      {
        productId: 1545698366083854336,
        name: "Galaxy A51",
        brand: "Samsung",
        merchant: "Amazon",
        brandLogoUrl:
          "https://uptrade-public-static-resources.s3.us-east-2.amazonaws.com/amazon+logo.png",
        buyUrl:
          "https://www.amazon.com/Samsung-Galaxy-Unlocked-Black-Renewed/dp/B09598JR5G/ref=sr_1_86?keywords=Samsung+Galaxy+Unlocked+renewed&qid=1657217504&sr=8-86&srs=17871142011",
        currentPrice: 21999,
        specs: [
          {
            productId: 1545698366083854336,
            key: "CONDITION",
            value: "Excellent",
          },
          {
            productId: 1545698366083854336,
            key: "CARRIER",
            value: "Unlocked",
          },
          {
            productId: 1545698366083854336,
            key: "STORAGE",
            value: "128GB",
          },
          {
            productId: 1545698366083854336,
            key: "COLOR",
            value: "Black",
          },
        ],
      },
    ],
    aboutProduct: null,
    metaDescription: null,
    metaDescCategory: null,
    qa: {
      "Why should you buy a used or refurbished Galaxy A51?":
        "A refurbished Galaxy A51 functions precisely like a new one. Why pay more? It will save you a lot of money  buying a refurbished Galaxy A51. More importantly, it reduces e-waste and makes our planet a better place. Buying a refurbished Galaxy A51 is a smart choice.",
      "What does it mean if the Galaxy A51 is unlocked?":
        "Most Galaxy A51’s bought from wireless carriers are locked to their network. An unlocked Galaxy A51 means the phone has been unlocked and can be used with any carrier in the United States. Choosing an unlocked Galaxy A51 is the safest option if you are unsure which carrier you will use. An unlocked Galaxy A51 is also a great option as a gift since it will work with any carrier or wireless phone plan they currently have.",
      "What does UpTrade Certified Used mean?":
        "UpTrade Certified means you can trust that your used Galaxy A51 will function just as well as a new device. Among hundreds of used phone sellers, we have chosen a modest bunch of reputable sellers and marketplaces that are capable of providing high-quality used and refurbished phones. An UpTrade Certified Used Galaxy A51 means it has passed a rigorous inspection and functions like a new one.",
      "What is the return policy for the Used and Refurbished Galaxy A51?":
        "No worries if you are not 100% satisfied with the device you have received! Each phone is granted a 30-day trial period in which buyers may return the used device to the UpTrade Certified Seller for a refund within the first 30 days.",
      "Are refurbished Android phones as good as new ones?":
        "For the most part, there is no definite difference between a new phone and a used one, aside from one previously used by another owner. All used phones listed on UpTrade must pass a rigorous inspection to guarantee quality and product performance. Refurbished devices certified by UpTrade work just as well as new, ordinary store-bought phones.",
    },
  },
  {
    productName: "Galaxy A52",
    productCategoryValueId: 79,
    price: 11099,
    keyword: null,
    productImageUrl:
      "https://d3c745jesl5pj3.cloudfront.net/sell/web/Galaxy A52_5b6e063531d249049e486a04a4c7be47.jpg",
    brand: "Samsung",
    type: null,
    brandCategoryValueId: 19,
    relatedGoods: [
      {
        productId: 1545698497466232832,
        name: "Galaxy A52",
        brand: "Samsung",
        merchant: "Amazon",
        brandLogoUrl:
          "https://uptrade-public-static-resources.s3.us-east-2.amazonaws.com/amazon+logo.png",
        buyUrl:
          "https://www.amazon.com/Samsung-5000mAh-Battery-T-Mobile-Renewed/dp/B09ZRTQXQ7/ref=sr_1_306?keywords=Samsung+Galaxy+Verizon+renewed&qid=1657240855&sr=8-306",
        currentPrice: 14699,
        specs: [
          {
            productId: 1545698497466232832,
            key: "CONDITION",
            value: "Excellent",
          },
          {
            productId: 1545698497466232832,
            key: "CARRIER",
            value: "T-Mobile",
          },
          {
            productId: 1545698497466232832,
            key: "STORAGE",
            value: "64GB",
          },
          {
            productId: 1545698497466232832,
            key: "COLOR",
            value: "Black",
          },
        ],
      },
      {
        productId: 1545698374946418688,
        name: "Galaxy A52",
        brand: "Samsung",
        merchant: "Amazon",
        brandLogoUrl:
          "https://uptrade-public-static-resources.s3.us-east-2.amazonaws.com/amazon+logo.png",
        buyUrl:
          "https://www.amazon.com/Samsung-Unlocked-International-Awesome-Renewed/dp/B09H3RCX1C/ref=sr_1_116?keywords=Samsung+Galaxy+Unlocked+renewed&qid=1657217683&sr=8-116&srs=17871142011",
        currentPrice: 21999,
        specs: [
          {
            productId: 1545698374946418688,
            key: "CONDITION",
            value: "Excellent",
          },
          {
            productId: 1545698374946418688,
            key: "CARRIER",
            value: "Unlocked",
          },
          {
            productId: 1545698374946418688,
            key: "STORAGE",
            value: "128GB",
          },
          {
            productId: 1545698374946418688,
            key: "COLOR",
            value: "Blue",
          },
        ],
      },
      {
        productId: 1545698500389662720,
        name: "Galaxy A52",
        brand: "Samsung",
        merchant: "Amazon",
        brandLogoUrl:
          "https://uptrade-public-static-resources.s3.us-east-2.amazonaws.com/amazon+logo.png",
        buyUrl:
          "https://www.amazon.com/Samsung-Galaxy-Cellphone-Factory-Flamingo/dp/B082WHTJWD/ref=sr_1_110?keywords=Samsung+Galaxy+AT%26T+renewed&qid=1657241492&sr=8-110",
        currentPrice: 23000,
        specs: [
          {
            productId: 1545698500389662720,
            key: "CONDITION",
            value: "Excellent",
          },
          {
            productId: 1545698500389662720,
            key: "CARRIER",
            value: "AT&T",
          },
          {
            productId: 1545698500389662720,
            key: "STORAGE",
            value: "512GB",
          },
          {
            productId: 1545698500389662720,
            key: "COLOR",
            value: "Flamingo Pink",
          },
        ],
      },
      {
        productId: 1545698514327334912,
        name: "Galaxy A52",
        brand: "Samsung",
        merchant: "Amazon",
        brandLogoUrl:
          "https://uptrade-public-static-resources.s3.us-east-2.amazonaws.com/amazon+logo.png",
        buyUrl:
          "https://www.amazon.com/Galaxy-A52-5G-Smartphone-Resistant/dp/B09HWFFLJG/ref=sr_1_146?keywords=Samsung+Galaxy+T-Mobile+renewed&qid=1657244192&sr=8-146",
        currentPrice: 23400,
        specs: [
          {
            productId: 1545698514327334912,
            key: "CONDITION",
            value: "Excellent",
          },
          {
            productId: 1545698514327334912,
            key: "CARRIER",
            value: "T-Mobile",
          },
          {
            productId: 1545698514327334912,
            key: "STORAGE",
            value: "128GB",
          },
          {
            productId: 1545698514327334912,
            key: "COLOR",
            value: "Black",
          },
        ],
      },
      {
        productId: 1545698344013426688,
        name: "Galaxy A52",
        brand: "Samsung",
        merchant: "Amazon",
        brandLogoUrl:
          "https://uptrade-public-static-resources.s3.us-east-2.amazonaws.com/amazon+logo.png",
        buyUrl:
          "https://www.amazon.com/Samsung-T-Mobile-Unlocked-Display-Smartphone/dp/B093WYVSX2/ref=sr_1_23?keywords=Samsung+Galaxy+Unlocked+renewed&qid=1657216882&sr=8-23&srs=17871142011",
        currentPrice: 23500,
        specs: [
          {
            productId: 1545698344013426688,
            key: "CONDITION",
            value: "Excellent",
          },
          {
            productId: 1545698344013426688,
            key: "CARRIER",
            value: "Unlocked",
          },
          {
            productId: 1545698344013426688,
            key: "STORAGE",
            value: "128GB",
          },
          {
            productId: 1545698344013426688,
            key: "COLOR",
            value: "Black",
          },
        ],
      },
    ],
    aboutProduct: null,
    metaDescription: null,
    metaDescCategory: null,
    qa: {
      "Why should you buy a used or refurbished Galaxy A52?":
        "A refurbished Galaxy A52 functions precisely like a new one. Why pay more? It will save you a lot of money  buying a refurbished Galaxy A52. More importantly, it reduces e-waste and makes our planet a better place. Buying a refurbished Galaxy A52 is a smart choice.",
      "What does it mean if the Galaxy A52 is unlocked?":
        "Most Galaxy A52’s bought from wireless carriers are locked to their network. An unlocked Galaxy A52 means the phone has been unlocked and can be used with any carrier in the United States. Choosing an unlocked Galaxy A52 is the safest option if you are unsure which carrier you will use. An unlocked Galaxy A52 is also a great option as a gift since it will work with any carrier or wireless phone plan they currently have.",
      "What does UpTrade Certified Used mean?":
        "UpTrade Certified means you can trust that your used Galaxy A52 will function just as well as a new device. Among hundreds of used phone sellers, we have chosen a modest bunch of reputable sellers and marketplaces that are capable of providing high-quality used and refurbished phones. An UpTrade Certified Used Galaxy A52 means it has passed a rigorous inspection and functions like a new one.",
      "What is the return policy for the Used and Refurbished Galaxy A52?":
        "No worries if you are not 100% satisfied with the device you have received! Each phone is granted a 30-day trial period in which buyers may return the used device to the UpTrade Certified Seller for a refund within the first 30 days.",
      "Are refurbished Android phones as good as new ones?":
        "For the most part, there is no definite difference between a new phone and a used one, aside from one previously used by another owner. All used phones listed on UpTrade must pass a rigorous inspection to guarantee quality and product performance. Refurbished devices certified by UpTrade work just as well as new, ordinary store-bought phones.",
    },
  },
  {
    productName: "Galaxy A71",
    productCategoryValueId: 62,
    price: 21200,
    keyword: null,
    productImageUrl:
      "https://d3c745jesl5pj3.cloudfront.net/sell/web/Galaxy A71_c1630672f8bc41bb8d31a65ac5e7d91a.jpg",
    brand: "Samsung",
    type: null,
    brandCategoryValueId: 19,
    relatedGoods: [
      {
        productId: 1545698370483679232,
        name: "Galaxy A71",
        brand: "Samsung",
        merchant: "Amazon",
        brandLogoUrl:
          "https://uptrade-public-static-resources.s3.us-east-2.amazonaws.com/amazon+logo.png",
        buyUrl:
          "https://www.amazon.com/Samsung-Galaxy-Display-Camera-Smartphone/dp/B093275JHT/ref=sr_1_99?keywords=Samsung+Galaxy+Unlocked+renewed&qid=1657217598&sr=8-99&srs=17871142011",
        currentPrice: 21688,
        specs: [
          {
            productId: 1545698370483679232,
            key: "CONDITION",
            value: "Excellent",
          },
          {
            productId: 1545698370483679232,
            key: "CARRIER",
            value: "T-Mobile",
          },
          {
            productId: 1545698370483679232,
            key: "STORAGE",
            value: "128GB",
          },
          {
            productId: 1545698370483679232,
            key: "COLOR",
            value: "Black",
          },
        ],
      },
      {
        productId: 1545698381829271552,
        name: "Galaxy A71",
        brand: "Samsung",
        merchant: "Amazon",
        brandLogoUrl:
          "https://uptrade-public-static-resources.s3.us-east-2.amazonaws.com/amazon+logo.png",
        buyUrl:
          "https://www.amazon.com/Samsung-Galaxy-Verizon-Android-Smartphone/dp/B095SZL8M1/ref=sr_1_141?keywords=Samsung+Galaxy+Unlocked+renewed&qid=1657217890&sr=8-141&srs=17871142011",
        currentPrice: 21800,
        specs: [
          {
            productId: 1545698381829271552,
            key: "CONDITION",
            value: "Excellent",
          },
          {
            productId: 1545698381829271552,
            key: "CARRIER",
            value: "Verizon",
          },
          {
            productId: 1545698381829271552,
            key: "STORAGE",
            value: "128GB",
          },
          {
            productId: 1545698381829271552,
            key: "COLOR",
            value: "Black",
          },
        ],
      },
      {
        productId: 1545698355098972160,
        name: "Galaxy A71",
        brand: "Samsung",
        merchant: "Amazon",
        brandLogoUrl:
          "https://uptrade-public-static-resources.s3.us-east-2.amazonaws.com/amazon+logo.png",
        buyUrl:
          "https://www.amazon.com/Samsung-Snapdragon-Unlocked-T-Mobile-Straight/dp/B08PQ5ZCNP/ref=sr_1_52?keywords=Samsung+Galaxy+Unlocked+renewed&qid=1657217201&sr=8-52&srs=17871142011",
        currentPrice: 22299,
        specs: [
          {
            productId: 1545698355098972160,
            key: "CONDITION",
            value: "Excellent",
          },
          {
            productId: 1545698355098972160,
            key: "CARRIER",
            value: "Unlocked",
          },
          {
            productId: 1545698355098972160,
            key: "STORAGE",
            value: "128GB",
          },
          {
            productId: 1545698355098972160,
            key: "COLOR",
            value: "Black",
          },
        ],
      },
      {
        productId: 1545698430512558080,
        name: "Galaxy A71",
        brand: "Samsung",
        merchant: "Amazon",
        brandLogoUrl:
          "https://uptrade-public-static-resources.s3.us-east-2.amazonaws.com/amazon+logo.png",
        buyUrl:
          "https://www.amazon.com/Samsung-Verizon-Storage-Lasting-Battery/dp/B08LZSS3DJ/ref=sr_1_60?keywords=Samsung+Galaxy+Verizon+renewed&qid=1657219524&sr=8-60",
        currentPrice: 22900,
        specs: [
          {
            productId: 1545698430512558080,
            key: "CONDITION",
            value: "Excellent",
          },
          {
            productId: 1545698430512558080,
            key: "CARRIER",
            value: "Verizon",
          },
          {
            productId: 1545698430512558080,
            key: "STORAGE",
            value: "128GB",
          },
          {
            productId: 1545698430512558080,
            key: "COLOR",
            value: "Black",
          },
        ],
      },
      {
        productId: 1545698383834148864,
        name: "Galaxy A71",
        brand: "Samsung",
        merchant: "Amazon",
        brandLogoUrl:
          "https://uptrade-public-static-resources.s3.us-east-2.amazonaws.com/amazon+logo.png",
        buyUrl:
          "https://www.amazon.com/Samsung-Galaxy-Storage-Lasting-Battery/dp/B09478ZVHT/ref=sr_1_150?keywords=Samsung+Galaxy+Unlocked+renewed&qid=1657217972&sr=8-150&srs=17871142011",
        currentPrice: 23750,
        specs: [
          {
            productId: 1545698383834148864,
            key: "CONDITION",
            value: "Excellent",
          },
          {
            productId: 1545698383834148864,
            key: "CARRIER",
            value: "AT&T",
          },
          {
            productId: 1545698383834148864,
            key: "STORAGE",
            value: "128GB",
          },
          {
            productId: 1545698383834148864,
            key: "COLOR",
            value: "Black",
          },
        ],
      },
    ],
    aboutProduct: null,
    metaDescription: null,
    metaDescCategory: null,
    qa: {
      "Why should you buy a used or refurbished Galaxy A71?":
        "A refurbished Galaxy A71 functions precisely like a new one. Why pay more? It will save you a lot of money  buying a refurbished Galaxy A71. More importantly, it reduces e-waste and makes our planet a better place. Buying a refurbished Galaxy A71 is a smart choice.",
      "What does it mean if the Galaxy A71 is unlocked?":
        "Most Galaxy A71’s bought from wireless carriers are locked to their network. An unlocked Galaxy A71 means the phone has been unlocked and can be used with any carrier in the United States. Choosing an unlocked Galaxy A71 is the safest option if you are unsure which carrier you will use. An unlocked Galaxy A71 is also a great option as a gift since it will work with any carrier or wireless phone plan they currently have.",
      "What does UpTrade Certified Used mean?":
        "UpTrade Certified means you can trust that your used Galaxy A71 will function just as well as a new device. Among hundreds of used phone sellers, we have chosen a modest bunch of reputable sellers and marketplaces that are capable of providing high-quality used and refurbished phones. An UpTrade Certified Used Galaxy A71 means it has passed a rigorous inspection and functions like a new one.",
      "What is the return policy for the Used and Refurbished Galaxy A71?":
        "No worries if you are not 100% satisfied with the device you have received! Each phone is granted a 30-day trial period in which buyers may return the used device to the UpTrade Certified Seller for a refund within the first 30 days.",
      "Are refurbished Android phones as good as new ones?":
        "For the most part, there is no definite difference between a new phone and a used one, aside from one previously used by another owner. All used phones listed on UpTrade must pass a rigorous inspection to guarantee quality and product performance. Refurbished devices certified by UpTrade work just as well as new, ordinary store-bought phones.",
    },
  },
  {
    productName: "Galaxy Note 10",
    productCategoryValueId: 73,
    price: 11099,
    keyword: null,
    productImageUrl:
      "https://d3c745jesl5pj3.cloudfront.net/sell/web/Galaxy Note 10_c5cacfc630ae4aa389e077d610a046b3.jpg",
    brand: "Samsung",
    type: null,
    brandCategoryValueId: 19,
    relatedGoods: [
      {
        productId: 1545698495121616896,
        name: "Galaxy Note 10",
        brand: "Samsung",
        merchant: "Amazon",
        brandLogoUrl:
          "https://uptrade-public-static-resources.s3.us-east-2.amazonaws.com/amazon+logo.png",
        buyUrl:
          "https://www.amazon.com/Samsung-Galaxy-Note-10-256GB/dp/B08M3V5KGS/ref=sr_1_250?keywords=Samsung+Galaxy+Unlocked+renewed&qid=1657239386&sr=8-250",
        currentPrice: 24900,
        specs: [
          {
            productId: 1545698495121616896,
            key: "CONDITION",
            value: "Excellent",
          },
          {
            productId: 1545698495121616896,
            key: "CARRIER",
            value: "T-Mobile",
          },
          {
            productId: 1545698495121616896,
            key: "STORAGE",
            value: "256GB",
          },
          {
            productId: 1545698495121616896,
            key: "COLOR",
            value: "Aura Black",
          },
        ],
      },
      {
        productId: 1545698471855812608,
        name: "Galaxy Note 10",
        brand: "Samsung",
        merchant: "Amazon",
        brandLogoUrl:
          "https://uptrade-public-static-resources.s3.us-east-2.amazonaws.com/amazon+logo.png",
        buyUrl:
          "https://www.amazon.com/Samsung-Galaxy-Note-256GB-Black/dp/B089LK4B3B/ref=sr_1_12?keywords=Samsung+Galaxy+AT%26T+renewed&qid=1657221327&sr=8-12",
        currentPrice: 25500,
        specs: [
          {
            productId: 1545698471855812608,
            key: "CONDITION",
            value: "Excellent",
          },
          {
            productId: 1545698471855812608,
            key: "CARRIER",
            value: "T-Mobile",
          },
          {
            productId: 1545698471855812608,
            key: "STORAGE",
            value: "256GB",
          },
          {
            productId: 1545698471855812608,
            key: "COLOR",
            value: "Aura Black",
          },
        ],
      },
      {
        productId: 1545698529129033728,
        name: "Galaxy Note 10",
        brand: "Samsung",
        merchant: "Amazon",
        brandLogoUrl:
          "https://uptrade-public-static-resources.s3.us-east-2.amazonaws.com/amazon+logo.png",
        buyUrl:
          "https://www.amazon.com/Galaxy-Note-10-Smartphone-T-Mobile/dp/B08Q847BYY/ref=sr_1_68?keywords=Samsung+Galaxy+T-Mobile+renewed&qid=1657284552&sr=8-68",
        currentPrice: 25900,
        specs: [
          {
            productId: 1545698529129033728,
            key: "CONDITION",
            value: "Excellent",
          },
          {
            productId: 1545698529129033728,
            key: "CARRIER",
            value: "T-Mobile",
          },
          {
            productId: 1545698529129033728,
            key: "STORAGE",
            value: "256GB",
          },
          {
            productId: 1545698529129033728,
            key: "COLOR",
            value: "Aura Glow",
          },
        ],
      },
      {
        productId: 1545698421297672192,
        name: "Galaxy Note 10",
        brand: "Samsung",
        merchant: "Amazon",
        brandLogoUrl:
          "https://uptrade-public-static-resources.s3.us-east-2.amazonaws.com/amazon+logo.png",
        buyUrl:
          "https://www.amazon.com/Samsung-Galaxy-Note-10-Unlocked/dp/B07Z3XZDT5/ref=sr_1_12?keywords=Samsung+Galaxy+Verizon+renewed&qid=1657219261&sr=8-12",
        currentPrice: 26500,
        specs: [
          {
            productId: 1545698421297672192,
            key: "CONDITION",
            value: "Excellent",
          },
          {
            productId: 1545698421297672192,
            key: "CARRIER",
            value: "Unlocked",
          },
          {
            productId: 1545698421297672192,
            key: "STORAGE",
            value: "256GB",
          },
          {
            productId: 1545698421297672192,
            key: "COLOR",
            value: "Aura Black",
          },
        ],
      },
      {
        productId: 1545698498523197440,
        name: "Galaxy Note 10",
        brand: "Samsung",
        merchant: "Amazon",
        brandLogoUrl:
          "https://uptrade-public-static-resources.s3.us-east-2.amazonaws.com/amazon+logo.png",
        buyUrl:
          "https://www.amazon.com/Samsung-Galaxy-Note-10-N970U/dp/B08PVXTDCK/ref=sr_1_47?keywords=Samsung+Galaxy+AT%26T+renewed&qid=1657241193&sr=8-47",
        currentPrice: 26900,
        specs: [
          {
            productId: 1545698498523197440,
            key: "CONDITION",
            value: "Excellent",
          },
          {
            productId: 1545698498523197440,
            key: "CARRIER",
            value: "AT&T",
          },
          {
            productId: 1545698498523197440,
            key: "STORAGE",
            value: "256GB",
          },
          {
            productId: 1545698498523197440,
            key: "COLOR",
            value: "Aura Glow",
          },
        ],
      },
    ],
    aboutProduct:
      "The Galaxy Note 10 is arguably the best Samsung smartphone currently available, and with UpTrade, you can get it for a fraction of the price! Its modern and sleek design, resilient hardware, pro-level cameras, and bevy of special features (not to mention the signature stylus that adds a slew of unique tricks like air gestures and remote photos) make this a hard phone to beat.",
    metaDescription:
      "Samsung Galaxy Note 10, pre-owned and fully functioning at affordable pricing from UpTrade! Comes with S Pen for air gestures, remote photos & handwriting.",
    metaDescCategory:
      "Samsung’s Galaxy Note 10 is being reviewed as one of the “easiest to use” phones on the market. It has many of the same functions as its tablet-like Note 10 Plus sibling, while fitting comfortably in one hand. In addition to easy use, the Note 10 sports a beautiful all-screen display and modern design, powerful processor, and the signature S Pen stylus.",
    qa: {
      "Why should you buy a used or refurbished Galaxy Note 10?":
        "Why pay more if you are getting the same thing? A refurbished Galaxy Note 10 is fully functional and works exactly like a brand new Galaxy Note 10, except for minimum to normal wear and tear on the cosmetics of the phone. A refurbished Galaxy Note 10 is a significant saving option when you plan to buy your next Galaxy Note 10. Buying a refurbished Galaxy Note 10 is a fantastic choice. It will net you significant savings, mainly when a new Galaxy Note 10 costs much more.",
      "What does it mean if the Galaxy Note 10 is unlocked?":
        "Unlocked means the phone is not locked or limited to any carrier. An unlocked Galaxy Note 10 can be used with any carrier in the United States. If you are unsure whether the phone is compatible with your mobile phone carrier, buying an unlocked phone is the easiest option. An unlocked Galaxy Note 10 is likewise an incredible phone to buy as a gift since it will work with any carrier or wireless plan they may have.",
      "What does UpTrade Certified Used mean?":
        "There are hundreds or even thousands of used phone sellers, but unfortunately, not all are legit. To ensure the quality, we have selected a few reputable resellers and marketplaces that can provide high-quality used and refurbished phones. An UpTrade Certified Used Galaxy Note 10 means it has passed an in-depth inspection by our Certified Seller. UpTrade Certified means the Galaxy Note 10 you buy will work and function exactly like a new one.",
      "What is the return policy for the Used and Refurbished Galaxy Note 10?":
        "Sure! The Refurbished Galaxy Note 10 listed here comes with a 30-day return policy from the Sellers. So if you have any problem with your purchase, you may contact the Seller and return it to them for up to 30 days.",
      "Are refurbished Android phones as good as new ones?":
        "That’s a good question! Technically, there’s no difference between refurbished and new except that there may be signs of use (if at all) on a refurbished Android phone. All UpTrade Certified Used Phone Sellers process the phones through a rigorous inspection. As a result, each smartphone is fully functional and works just like a new one.",
    },
  },
  {
    productName: "Galaxy Note 10 Lite",
    productCategoryValueId: 525,
    price: 26900,
    keyword: null,
    productImageUrl:
      "https://d3c745jesl5pj3.cloudfront.net/sell/web/Galaxy Note 10 Lite_f748069626354e309f038eda912ee0c8.jpg",
    brand: "Samsung",
    type: null,
    brandCategoryValueId: 19,
    relatedGoods: [
      {
        productId: 1545698382345170944,
        name: "Galaxy Note 10 Lite",
        brand: "Samsung",
        merchant: "Amazon",
        brandLogoUrl:
          "https://uptrade-public-static-resources.s3.us-east-2.amazonaws.com/amazon+logo.png",
        buyUrl:
          "https://www.amazon.com/Samsung-Dual-SIM-Unlocked-International-Compatible/dp/B08921Q8ZQ/ref=sr_1_144?keywords=Samsung+Galaxy+Unlocked+renewed&qid=1657217890&sr=8-144&srs=17871142011",
        currentPrice: 31400,
        specs: [
          {
            productId: 1545698382345170944,
            key: "CONDITION",
            value: "Excellent",
          },
          {
            productId: 1545698382345170944,
            key: "CARRIER",
            value: "Unlocked",
          },
          {
            productId: 1545698382345170944,
            key: "STORAGE",
            value: "128GB",
          },
          {
            productId: 1545698382345170944,
            key: "COLOR",
            value: "Aura Black",
          },
        ],
      },
    ],
    aboutProduct: null,
    metaDescription:
      "Fully inspected and fully operational Galaxy Note 10 Lite available at reduced prices.",
    metaDescCategory: null,
    qa: {
      "Why should you buy a used or refurbished Galaxy Note 10 Lite?":
        "A refurbished Galaxy Note 10 Lite functions precisely like a new one. Why pay more? It will save you a lot of money  buying a refurbished Galaxy Note 10 Lite. More importantly, it reduces e-waste and makes our planet a better place. Buying a refurbished Galaxy Note 10 Lite is a smart choice.",
      "What does it mean if the Galaxy Note 10 Lite is unlocked?":
        "Most Galaxy Note 10 Lite’s bought from wireless carriers are locked to their network. An unlocked Galaxy Note 10 Lite means the phone has been unlocked and can be used with any carrier in the United States. Choosing an unlocked Galaxy Note 10 Lite is the safest option if you are unsure which carrier you will use. An unlocked Galaxy Note 10 Lite is also a great option as a gift since it will work with any carrier or wireless phone plan they currently have.",
      "What does UpTrade Certified Used mean?":
        "UpTrade Certified means you can trust that your used Galaxy Note 10 Lite will function just as well as a new device. Among hundreds of used phone sellers, we have chosen a modest bunch of reputable sellers and marketplaces that are capable of providing high-quality used and refurbished phones. An UpTrade Certified Used Galaxy Note 10 Lite means it has passed a rigorous inspection and functions like a new one.",
      "What is the return policy for the Used and Refurbished Galaxy Note 10 Lite?":
        "No worries if you are not 100% satisfied with the device you have received! Each phone is granted a 30-day trial period in which buyers may return the used device to the UpTrade Certified Seller for a refund within the first 30 days.",
      "Are refurbished Android phones as good as new ones?":
        "For the most part, there is no definite difference between a new phone and a used one, aside from one previously used by another owner. All used phones listed on UpTrade must pass a rigorous inspection to guarantee quality and product performance. Refurbished devices certified by UpTrade work just as well as new, ordinary store-bought phones.",
    },
  },
  {
    productName: "Galaxy Note 10 Plus",
    productCategoryValueId: 161,
    price: 12999,
    keyword: null,
    productImageUrl:
      "https://d3c745jesl5pj3.cloudfront.net/sell/web/Galaxy Note 10 Plus_1b8e2c7e35ba4848873fbfd798da7393.jpg",
    brand: "Samsung",
    type: null,
    brandCategoryValueId: 19,
    relatedGoods: [
      {
        productId: 1545698411726270464,
        name: "Galaxy Note 10 Plus",
        brand: "Samsung",
        merchant: "Amazon",
        brandLogoUrl:
          "https://uptrade-public-static-resources.s3.us-east-2.amazonaws.com/amazon+logo.png",
        buyUrl:
          "https://www.amazon.com/Samsung-Galaxy-A025M-Unlocked-Android/dp/B097GVZ947/ref=sr_1_258?keywords=Samsung+Galaxy+Unlocked+renewed&qid=1657218821&sr=8-258&srs=17871142011",
        currentPrice: 12999,
        specs: [
          {
            productId: 1545698411726270464,
            key: "CONDITION",
            value: "Excellent",
          },
          {
            productId: 1545698411726270464,
            key: "CARRIER",
            value: "Unlocked",
          },
          {
            productId: 1545698411726270464,
            key: "STORAGE",
            value: "64GB",
          },
          {
            productId: 1545698411726270464,
            key: "COLOR",
            value: "Red",
          },
        ],
      },
      {
        productId: 1545698410333761536,
        name: "Galaxy Note 10 Plus",
        brand: "Samsung",
        merchant: "Amazon",
        brandLogoUrl:
          "https://uptrade-public-static-resources.s3.us-east-2.amazonaws.com/amazon+logo.png",
        buyUrl:
          "https://www.amazon.com/Unlocked-Supported-Smartphone-American-Warranty/dp/B08YPBGDLB/ref=sr_1_253?keywords=Samsung+Galaxy+Unlocked+renewed&qid=1657218821&sr=8-253&srs=17871142011",
        currentPrice: 14999,
        specs: [
          {
            productId: 1545698410333761536,
            key: "CONDITION",
            value: "Excellent",
          },
          {
            productId: 1545698410333761536,
            key: "CARRIER",
            value: "Unlocked",
          },
          {
            productId: 1545698410333761536,
            key: "STORAGE",
            value: "64GB",
          },
          {
            productId: 1545698410333761536,
            key: "COLOR",
            value: "Red",
          },
        ],
      },
      {
        productId: 1545698429573033984,
        name: "Galaxy Note 10 Plus",
        brand: "Samsung",
        merchant: "Amazon",
        brandLogoUrl:
          "https://uptrade-public-static-resources.s3.us-east-2.amazonaws.com/amazon+logo.png",
        buyUrl:
          "https://www.amazon.com/Samsung-Galaxy-Note-10-Plus/dp/B07YXBRXKF/ref=sr_1_51?keywords=Samsung+Galaxy+Verizon+renewed&qid=1657219448&sr=8-51",
        currentPrice: 32500,
        specs: [
          {
            productId: 1545698429573033984,
            key: "CONDITION",
            value: "Excellent",
          },
          {
            productId: 1545698429573033984,
            key: "CARRIER",
            value: "Verizon",
          },
          {
            productId: 1545698429573033984,
            key: "STORAGE",
            value: "256GB",
          },
          {
            productId: 1545698429573033984,
            key: "COLOR",
            value: "Aura Black",
          },
        ],
      },
      {
        productId: 1545698475391610880,
        name: "Galaxy Note 10 Plus",
        brand: "Samsung",
        merchant: "Amazon",
        brandLogoUrl:
          "https://uptrade-public-static-resources.s3.us-east-2.amazonaws.com/amazon+logo.png",
        buyUrl:
          "https://www.amazon.com/Samsung-Factory-Unlocked-Warranty-Renewed/dp/B08HQDMMH1/ref=sr_1_45?keywords=Samsung+Galaxy+AT%26T+renewed&qid=1657221561&sr=8-45",
        currentPrice: 33200,
        specs: [
          {
            productId: 1545698475391610880,
            key: "CONDITION",
            value: "Excellent",
          },
          {
            productId: 1545698475391610880,
            key: "CARRIER",
            value: "Unlocked",
          },
          {
            productId: 1545698475391610880,
            key: "STORAGE",
            value: "256GB",
          },
          {
            productId: 1545698475391610880,
            key: "COLOR",
            value: "Aura White",
          },
        ],
      },
      {
        productId: 1545698436728516608,
        name: "Galaxy Note 10 Plus",
        brand: "Samsung",
        merchant: "Amazon",
        brandLogoUrl:
          "https://uptrade-public-static-resources.s3.us-east-2.amazonaws.com/amazon+logo.png",
        buyUrl:
          "https://www.amazon.com/Samsung-Galaxy-Note-10-5G/dp/B08NCSF1Q2/ref=sr_1_106?keywords=Samsung+Galaxy+Verizon+renewed&qid=1657219777&sr=8-106",
        currentPrice: 41900,
        specs: [
          {
            productId: 1545698436728516608,
            key: "CONDITION",
            value: "Excellent",
          },
          {
            productId: 1545698436728516608,
            key: "CARRIER",
            value: "Verizon",
          },
          {
            productId: 1545698436728516608,
            key: "STORAGE",
            value: "512GB",
          },
          {
            productId: 1545698436728516608,
            key: "COLOR",
            value: "Aura Black",
          },
        ],
      },
    ],
    aboutProduct:
      "The Samsung Galaxy note is quite possibly the best phone money can buy--and from UpTrade, it costs even less! Get all the bang for your buck with this features-rich phone that comes with an incredible HD infinity screen, an all-day battery, dual cameras and with professional-level camera tools, and the signature S Pen stylus that makes precision easy.",
    metaDescription:
      "Fully inspected, fully functional Samsung Galaxy Note 10 Plus! One of the best phones on the market, the 10+ features include HD screen, S Pen & Pro camera.",
    metaDescCategory:
      "If you’re on the market for a high-tech device that will run all day (and then some) on a single charge, the Samsung Galaxy Note 10 Plus is the answer. It has one of the best screens on the market, five cameras for amazing photos, smart filters, and the signature S Pen for precision. The Note 10 Plus also boasts a sleek design that makes it look as top-quality as its features.",
    qa: {
      "Why should you buy a used or refurbished Galaxy Note 10 Plus?":
        "A refurbished Galaxy Note 10 Plus functions precisely like a new one. Why pay more? It will save you a lot of money  buying a refurbished Galaxy Note 10 Plus. More importantly, it reduces e-waste and makes our planet a better place. Buying a refurbished Galaxy Note 10 Plus is a smart choice.",
      "What does it mean if the Galaxy Note 10 Plus is unlocked?":
        "Most Galaxy Note 10 Plus’s bought from wireless carriers are locked to their network. An unlocked Galaxy Note 10 Plus means the phone has been unlocked and can be used with any carrier in the United States. Choosing an unlocked Galaxy Note 10 Plus is the safest option if you are unsure which carrier you will use. An unlocked Galaxy Note 10 Plus is also a great option as a gift since it will work with any carrier or wireless phone plan they currently have.",
      "What does UpTrade Certified Used mean?":
        "UpTrade Certified means you can trust that your used Galaxy Note 10 Plus will function just as well as a new device. Among hundreds of used phone sellers, we have chosen a modest bunch of reputable sellers and marketplaces that are capable of providing high-quality used and refurbished phones. An UpTrade Certified Used Galaxy Note 10 Plus means it has passed a rigorous inspection and functions like a new one.",
      "What is the return policy for the Used and Refurbished Galaxy Note 10 Plus?":
        "No worries if you are not 100% satisfied with the device you have received! Each phone is granted a 30-day trial period in which buyers may return the used device to the UpTrade Certified Seller for a refund within the first 30 days.",
      "Are refurbished Android phones as good as new ones?":
        "For the most part, there is no definite difference between a new phone and a used one, aside from one previously used by another owner. All used phones listed on UpTrade must pass a rigorous inspection to guarantee quality and product performance. Refurbished devices certified by UpTrade work just as well as new, ordinary store-bought phones.",
    },
  },
  {
    productName: "Galaxy Note 10 Plus 5G",
    productCategoryValueId: 371,
    price: 32000,
    keyword: null,
    productImageUrl:
      "https://d3c745jesl5pj3.cloudfront.net/sell/web/Galaxy Note 10 Plus 5G_927a0a3b0d0145b5b3ecdf6be7050062.jpg",
    brand: "Samsung",
    type: null,
    brandCategoryValueId: 19,
    relatedGoods: [
      {
        productId: 1545698511898832896,
        name: "Galaxy Note 10 Plus 5G",
        brand: "Samsung",
        merchant: "Amazon",
        brandLogoUrl:
          "https://uptrade-public-static-resources.s3.us-east-2.amazonaws.com/amazon+logo.png",
        buyUrl:
          "https://www.amazon.com/Samsung-Galaxy-Note-10-Plus/dp/B093DXMSZB/ref=sr_1_100?keywords=Samsung+Galaxy+T-Mobile+renewed&qid=1657244018&sr=8-100",
        currentPrice: 34000,
        specs: [
          {
            productId: 1545698511898832896,
            key: "CONDITION",
            value: "Excellent",
          },
          {
            productId: 1545698511898832896,
            key: "CARRIER",
            value: "T-Mobile",
          },
          {
            productId: 1545698511898832896,
            key: "STORAGE",
            value: "256GB",
          },
          {
            productId: 1545698511898832896,
            key: "COLOR",
            value: "Aura Glow",
          },
        ],
      },
    ],
    aboutProduct:
      "The Samsung Galaxy Note 10 Plus 5G is a high-end treat, and when you buy it pre-owned from UpTrade, you get it at a bargain! Be the envy of everyone around you with this amazing smartphone with an infinity HD+ display, fast wireless charge and wireless PowerShare, huge storage capacity, and a pro-grade camera with scene optimizer. And now it’s 5G enabled, so you can go anywhere and do anything with the Galaxy Note 10+ with 5G!",
    metaDescription:
      "Pre-owned, fully functional Samsung Galaxy Note 10 Plus 5G enabled, great price and available now through UpTrade! 10+ with 5G makes streaming fast & easy.",
    metaDescCategory:
      "Samsung’s Galaxy Note 10 Plus is one of the best phones on the market, and now it’s even better with 5G access to the world’s fastest cellular networks. Your wireless functions will run at lightning speeds--which is good, because the Note 10 Plus has a bevy of special features you’ll want to use daily like streaming movies and playing games on one of the industry’s best screens, taking high-quality video and photos, and sending doodles and notes with the signature S Pen.",
    qa: {
      "Why should you buy a used or refurbished Galaxy Note 10 Plus 5G?":
        "A refurbished Galaxy Note 10 Plus 5G functions precisely like a new one. Why pay more? It will save you a lot of money  buying a refurbished Galaxy Note 10 Plus 5G. More importantly, it reduces e-waste and makes our planet a better place. Buying a refurbished Galaxy Note 10 Plus 5G is a smart choice.",
      "What does it mean if the Galaxy Note 10 Plus 5G is unlocked?":
        "Most Galaxy Note 10 Plus 5G’s bought from wireless carriers are locked to their network. An unlocked Galaxy Note 10 Plus 5G means the phone has been unlocked and can be used with any carrier in the United States. Choosing an unlocked Galaxy Note 10 Plus 5G is the safest option if you are unsure which carrier you will use. An unlocked Galaxy Note 10 Plus 5G is also a great option as a gift since it will work with any carrier or wireless phone plan they currently have.",
      "What does UpTrade Certified Used mean?":
        "UpTrade Certified means you can trust that your used Galaxy Note 10 Plus 5G will function just as well as a new device. Among hundreds of used phone sellers, we have chosen a modest bunch of reputable sellers and marketplaces that are capable of providing high-quality used and refurbished phones. An UpTrade Certified Used Galaxy Note 10 Plus 5G means it has passed a rigorous inspection and functions like a new one.",
      "What is the return policy for the Used and Refurbished Galaxy Note 10 Plus 5G?":
        "No worries if you are not 100% satisfied with the device you have received! Each phone is granted a 30-day trial period in which buyers may return the used device to the UpTrade Certified Seller for a refund within the first 30 days.",
      "Are refurbished Android phones as good as new ones?":
        "For the most part, there is no definite difference between a new phone and a used one, aside from one previously used by another owner. All used phones listed on UpTrade must pass a rigorous inspection to guarantee quality and product performance. Refurbished devices certified by UpTrade work just as well as new, ordinary store-bought phones.",
    },
  },
  {
    productName: "Galaxy Note 10+",
    productCategoryValueId: 47,
    price: 29900,
    keyword: null,
    productImageUrl:
      "https://d3c745jesl5pj3.cloudfront.net/sell/web/Galaxy Note 10jia_98799aa9e5fb44b58569500e689b238c.jpg",
    brand: "Samsung",
    type: null,
    brandCategoryValueId: 19,
    relatedGoods: [
      {
        productId: 1545698498988765184,
        name: "Galaxy Note 10+",
        brand: "Samsung",
        merchant: "Amazon",
        brandLogoUrl:
          "https://uptrade-public-static-resources.s3.us-east-2.amazonaws.com/amazon+logo.png",
        buyUrl:
          "https://www.amazon.com/Samsung-Galaxy-Unlocked-Smartphone-Renewed/dp/B07Z41LHPB/ref=sr_1_53?keywords=Samsung+Galaxy+AT%26T+renewed&qid=1657241230&sr=8-53",
        currentPrice: 31590,
        specs: [
          {
            productId: 1545698498988765184,
            key: "CONDITION",
            value: "Excellent",
          },
          {
            productId: 1545698498988765184,
            key: "CARRIER",
            value: "Unlocked",
          },
          {
            productId: 1545698498988765184,
            key: "STORAGE",
            value: "256GB",
          },
          {
            productId: 1545698498988765184,
            key: "COLOR",
            value: "Aura Glow",
          },
        ],
      },
      {
        productId: 1545698339080925184,
        name: "Galaxy Note 10+",
        brand: "Samsung",
        merchant: "Amazon",
        brandLogoUrl:
          "https://uptrade-public-static-resources.s3.us-east-2.amazonaws.com/amazon+logo.png",
        buyUrl:
          "https://www.amazon.com/Samsung-Galaxy-Note-256GB-Silver/dp/B08KRKFHGV/ref=sr_1_5?keywords=Samsung+Galaxy+Unlocked+renewed&qid=1657216791&sr=8-5&srs=17871142011",
        currentPrice: 31780,
        specs: [
          {
            productId: 1545698339080925184,
            key: "CONDITION",
            value: "Excellent",
          },
          {
            productId: 1545698339080925184,
            key: "CARRIER",
            value: "Unlocked",
          },
          {
            productId: 1545698339080925184,
            key: "STORAGE",
            value: "256GB",
          },
          {
            productId: 1545698339080925184,
            key: "COLOR",
            value: "Aura Glow",
          },
        ],
      },
      {
        productId: 1545698426662187008,
        name: "Galaxy Note 10+",
        brand: "Samsung",
        merchant: "Amazon",
        brandLogoUrl:
          "https://uptrade-public-static-resources.s3.us-east-2.amazonaws.com/amazon+logo.png",
        buyUrl:
          "https://www.amazon.com/Samsung-Galaxy-Note-256GB-Black/dp/B0845ZVJW3/ref=sr_1_37?keywords=Samsung+Galaxy+Verizon+renewed&qid=1657219379&sr=8-37",
        currentPrice: 31900,
        specs: [
          {
            productId: 1545698426662187008,
            key: "CONDITION",
            value: "Excellent",
          },
          {
            productId: 1545698426662187008,
            key: "CARRIER",
            value: "Unlocked",
          },
          {
            productId: 1545698426662187008,
            key: "STORAGE",
            value: "256GB",
          },
          {
            productId: 1545698426662187008,
            key: "COLOR",
            value: "Aura Black",
          },
        ],
      },
      {
        productId: 1545698531201019904,
        name: "Galaxy Note 10+",
        brand: "Samsung",
        merchant: "Amazon",
        brandLogoUrl:
          "https://uptrade-public-static-resources.s3.us-east-2.amazonaws.com/amazon+logo.png",
        buyUrl:
          "https://www.amazon.com/Samsung-Galaxy-Android-Smartphone-Renewed/dp/B086R8QMY5/ref=sr_1_52?keywords=Samsung+Galaxy+Sprint+renewed&qid=1657285644&sr=8-52",
        currentPrice: 31995,
        specs: [
          {
            productId: 1545698531201019904,
            key: "CONDITION",
            value: "Excellent",
          },
          {
            productId: 1545698531201019904,
            key: "CARRIER",
            value: "Sprint",
          },
          {
            productId: 1545698531201019904,
            key: "STORAGE",
            value: "256GB",
          },
          {
            productId: 1545698531201019904,
            key: "COLOR",
            value: "Black",
          },
        ],
      },
      {
        productId: 1545698389089611776,
        name: "Galaxy Note 10+",
        brand: "Samsung",
        merchant: "Amazon",
        brandLogoUrl:
          "https://uptrade-public-static-resources.s3.us-east-2.amazonaws.com/amazon+logo.png",
        buyUrl:
          "https://www.amazon.com/Samsung-Galaxy-Note-256GB-Black/dp/B08BX5THCT/ref=sr_1_171?keywords=Samsung+Galaxy+Unlocked+renewed&qid=1657218145&sr=8-171&srs=17871142011",
        currentPrice: 32000,
        specs: [
          {
            productId: 1545698389089611776,
            key: "CONDITION",
            value: "Excellent",
          },
          {
            productId: 1545698389089611776,
            key: "CARRIER",
            value: "Unlocked",
          },
          {
            productId: 1545698389089611776,
            key: "STORAGE",
            value: "256GB",
          },
          {
            productId: 1545698389089611776,
            key: "COLOR",
            value: "Aura Black",
          },
        ],
      },
    ],
    aboutProduct: null,
    metaDescription:
      "The durable and high tech Samsung Note 10+ has a large screen with an S-Pen to help with all of your note taking. Sold by trusted sellers.",
    metaDescCategory: null,
    qa: {
      "Why should you buy a used or refurbished Galaxy Note 10+?":
        "Why pay more if you are getting the same thing? A refurbished Galaxy Note 10+ is fully functional and works exactly like a brand new Galaxy Note 10+, except for minimum to normal wear and tear on the cosmetics of the phone. A refurbished Galaxy Note 10+ is a significant saving option when you plan to buy your next Galaxy Note 10+. Buying a refurbished Galaxy Note 10+ is a fantastic choice. It will net you significant savings, mainly when a new Galaxy Note 10+ costs much more.",
      "What does it mean if the Galaxy Note 10+ is unlocked?":
        "Unlocked means the phone is not locked or limited to any carrier. An unlocked Galaxy Note 10+ can be used with any carrier in the United States. If you are unsure whether the phone is compatible with your mobile phone carrier, buying an unlocked phone is the easiest option. An unlocked Galaxy Note 10+ is likewise an incredible phone to buy as a gift since it will work with any carrier or wireless plan they may have.",
      "What does UpTrade Certified Used mean?":
        "There are hundreds or even thousands of used phone sellers, but unfortunately, not all are legit. To ensure the quality, we have selected a few reputable resellers and marketplaces that can provide high-quality used and refurbished phones. An UpTrade Certified Used Galaxy Note 10+ means it has passed an in-depth inspection by our Certified Seller. UpTrade Certified means the Galaxy Note 10+ you buy will work and function exactly like a new one.",
      "What is the return policy for the Used and Refurbished Galaxy Note 10+?":
        "Sure! The Refurbished Galaxy Note 10+ listed here comes with a 30-day return policy from the Sellers. So if you have any problem with your purchase, you may contact the Seller and return it to them for up to 30 days.",
      "Are refurbished Android phones as good as new ones?":
        "That’s a good question! Technically, there’s no difference between refurbished and new except that there may be signs of use (if at all) on a refurbished Android phone. All UpTrade Certified Used Phone Sellers process the phones through a rigorous inspection. As a result, each smartphone is fully functional and works just like a new one.",
    },
  },
  {
    productName: "Galaxy Note 10+ 5G",
    productCategoryValueId: 363,
    price: 32300,
    keyword: null,
    productImageUrl:
      "https://d3c745jesl5pj3.cloudfront.net/sell/web/Galaxy Note 10jia 5G_0bd23d1a10cc4058bd4e45ee1c2c4316.jpg",
    brand: "Samsung",
    type: null,
    brandCategoryValueId: 19,
    relatedGoods: [
      {
        productId: 1545698432454520832,
        name: "Galaxy Note 10+ 5G",
        brand: "Samsung",
        merchant: "Amazon",
        brandLogoUrl:
          "https://uptrade-public-static-resources.s3.us-east-2.amazonaws.com/amazon+logo.png",
        buyUrl:
          "https://www.amazon.com/Samsung-Galaxy-Enabled-Verizon-Renewed/dp/B07YXBP2RF/ref=sr_1_83?keywords=Samsung+Galaxy+Verizon+renewed&qid=1657219584&sr=8-83",
        currentPrice: 32300,
        specs: [
          {
            productId: 1545698432454520832,
            key: "CONDITION",
            value: "Excellent",
          },
          {
            productId: 1545698432454520832,
            key: "CARRIER",
            value: "Verizon",
          },
          {
            productId: 1545698432454520832,
            key: "STORAGE",
            value: "256GB",
          },
          {
            productId: 1545698432454520832,
            key: "COLOR",
            value: "Aura Black",
          },
        ],
      },
      {
        productId: 1545705664835514368,
        name: "Galaxy Note 10+ 5G",
        brand: "Samsung",
        merchant: "Gazelle",
        brandLogoUrl:
          "https://uptrade-public-static-resources.s3.us-east-2.amazonaws.com/gazelle+logo.png",
        buyUrl:
          "https://buy.gazelle.com/collections/samsung-galaxy/products/galaxy-note-10-5g-sm-n976-256gb-verizon-3?variant=31502640021557",
        currentPrice: 33614,
        specs: [
          {
            productId: 1545705664835514368,
            key: "CONDITION",
            value: "Excellent",
          },
          {
            productId: 1545705664835514368,
            key: "CARRIER",
            value: "Verizon",
          },
          {
            productId: 1545705664835514368,
            key: "STORAGE",
            value: "256GB",
          },
          {
            productId: 1545705664835514368,
            key: "COLOR",
            value: "Aura Glow",
          },
        ],
      },
      {
        productId: 1545705665292693504,
        name: "Galaxy Note 10+ 5G",
        brand: "Samsung",
        merchant: "Gazelle",
        brandLogoUrl:
          "https://uptrade-public-static-resources.s3.us-east-2.amazonaws.com/gazelle+logo.png",
        buyUrl:
          "https://buy.gazelle.com/collections/samsung-galaxy/products/galaxy-note-10-5g-sm-n976-256gb-verizon-3?variant=31502640119861",
        currentPrice: 33614,
        specs: [
          {
            productId: 1545705665292693504,
            key: "CONDITION",
            value: "Excellent",
          },
          {
            productId: 1545705665292693504,
            key: "CARRIER",
            value: "Verizon",
          },
          {
            productId: 1545705665292693504,
            key: "STORAGE",
            value: "256GB",
          },
          {
            productId: 1545705665292693504,
            key: "COLOR",
            value: "Aura Black",
          },
        ],
      },
      {
        productId: 1545705608518594560,
        name: "Galaxy Note 10+ 5G",
        brand: "Samsung",
        merchant: "Gazelle",
        brandLogoUrl:
          "https://uptrade-public-static-resources.s3.us-east-2.amazonaws.com/gazelle+logo.png",
        buyUrl:
          "https://buy.gazelle.com/collections/samsung-galaxy/products/galaxy-note-10-5g-sm-n976-256gb-verizon-3?variant=31502640054325",
        currentPrice: 36614,
        specs: [
          {
            productId: 1545705608518594560,
            key: "CONDITION",
            value: "Excellent",
          },
          {
            productId: 1545705608518594560,
            key: "CARRIER",
            value: "Verizon",
          },
          {
            productId: 1545705608518594560,
            key: "STORAGE",
            value: "256GB",
          },
          {
            productId: 1545705608518594560,
            key: "COLOR",
            value: "Aura Glow",
          },
        ],
      },
      {
        productId: 1545705609529421824,
        name: "Galaxy Note 10+ 5G",
        brand: "Samsung",
        merchant: "Gazelle",
        brandLogoUrl:
          "https://uptrade-public-static-resources.s3.us-east-2.amazonaws.com/gazelle+logo.png",
        buyUrl:
          "https://buy.gazelle.com/collections/samsung-galaxy/products/galaxy-note-10-5g-sm-n976-256gb-verizon-3?variant=31502640152629",
        currentPrice: 36614,
        specs: [
          {
            productId: 1545705609529421824,
            key: "CONDITION",
            value: "Excellent",
          },
          {
            productId: 1545705609529421824,
            key: "CARRIER",
            value: "Verizon",
          },
          {
            productId: 1545705609529421824,
            key: "STORAGE",
            value: "256GB",
          },
          {
            productId: 1545705609529421824,
            key: "COLOR",
            value: "Aura Black",
          },
        ],
      },
    ],
    aboutProduct: null,
    metaDescription:
      "Increase the speed with the Galaxy Note 10+ 5G with the powerful S-Pen. Available from reliable pre certified sellers.",
    metaDescCategory: null,
    qa: {
      "Why should you buy a used or refurbished Galaxy Note 10+ 5G?":
        "Why pay more if you are getting the same thing? A refurbished Galaxy Note 10+ 5G is fully functional and works exactly like a brand new Galaxy Note 10+ 5G, except for minimum to normal wear and tear on the cosmetics of the phone. A refurbished Galaxy Note 10+ 5G is a significant saving option when you plan to buy your next Galaxy Note 10+ 5G. Buying a refurbished Galaxy Note 10+ 5G is a fantastic choice. It will net you significant savings, mainly when a new Galaxy Note 10+ 5G costs much more.",
      "What does it mean if the Galaxy Note 10+ 5G is unlocked?":
        "Unlocked means the phone is not locked or limited to any carrier. An unlocked Galaxy Note 10+ 5G can be used with any carrier in the United States. If you are unsure whether the phone is compatible with your mobile phone carrier, buying an unlocked phone is the easiest option. An unlocked Galaxy Note 10+ 5G is likewise an incredible phone to buy as a gift since it will work with any carrier or wireless plan they may have.",
      "What does UpTrade Certified Used mean?":
        "There are hundreds or even thousands of used phone sellers, but unfortunately, not all are legit. To ensure the quality, we have selected a few reputable resellers and marketplaces that can provide high-quality used and refurbished phones. An UpTrade Certified Used Galaxy Note 10+ 5G means it has passed an in-depth inspection by our Certified Seller. UpTrade Certified means the Galaxy Note 10+ 5G you buy will work and function exactly like a new one.",
      "What is the return policy for the Used and Refurbished Galaxy Note 10+ 5G?":
        "Sure! The Refurbished Galaxy Note 10+ 5G listed here comes with a 30-day return policy from the Sellers. So if you have any problem with your purchase, you may contact the Seller and return it to them for up to 30 days.",
      "Are refurbished Android phones as good as new ones?":
        "That’s a good question! Technically, there’s no difference between refurbished and new except that there may be signs of use (if at all) on a refurbished Android phone. All UpTrade Certified Used Phone Sellers process the phones through a rigorous inspection. As a result, each smartphone is fully functional and works just like a new one.",
    },
  },
  {
    productName: "Galaxy Note 10+ Plus 5G",
    productCategoryValueId: 353,
    price: 36499,
    keyword: null,
    productImageUrl:
      "https://d3c745jesl5pj3.cloudfront.net/sell/web/Galaxy Note 10jia Plus 5G_56a943dad99549049e8b50e5e02de544.jpg",
    brand: "Samsung",
    type: null,
    brandCategoryValueId: 19,
    relatedGoods: [
      {
        productId: 1545698379144916992,
        name: "Galaxy Note 10+ Plus 5G",
        brand: "Samsung",
        merchant: "Amazon",
        brandLogoUrl:
          "https://uptrade-public-static-resources.s3.us-east-2.amazonaws.com/amazon+logo.png",
        buyUrl:
          "https://www.amazon.com/Galaxy-Note-10-Plus-5G/dp/B08ND3XNHQ/ref=sr_1_132?keywords=Samsung+Galaxy+Unlocked+renewed&qid=1657217786&sr=8-132&srs=17871142011",
        currentPrice: 37300,
        specs: [
          {
            productId: 1545698379144916992,
            key: "CONDITION",
            value: "Excellent",
          },
          {
            productId: 1545698379144916992,
            key: "CARRIER",
            value: "Unlocked",
          },
          {
            productId: 1545698379144916992,
            key: "STORAGE",
            value: "256GB",
          },
          {
            productId: 1545698379144916992,
            key: "COLOR",
            value: "Aura Black",
          },
        ],
      },
    ],
    aboutProduct: null,
    metaDescription:
      "Size and power, together, with the Galaxy Note 10+ Plus 5G. Available",
    metaDescCategory: null,
    qa: {
      "Why should you buy a used or refurbished Galaxy Note 10+ Plus 5G?":
        "A refurbished Galaxy Note 10+ Plus 5G functions precisely like a new one. Why pay more? It will save you a lot of money  buying a refurbished Galaxy Note 10+ Plus 5G. More importantly, it reduces e-waste and makes our planet a better place. Buying a refurbished Galaxy Note 10+ Plus 5G is a smart choice.",
      "What does it mean if the Galaxy Note 10+ Plus 5G is unlocked?":
        "Most Galaxy Note 10+ Plus 5G’s bought from wireless carriers are locked to their network. An unlocked Galaxy Note 10+ Plus 5G means the phone has been unlocked and can be used with any carrier in the United States. Choosing an unlocked Galaxy Note 10+ Plus 5G is the safest option if you are unsure which carrier you will use. An unlocked Galaxy Note 10+ Plus 5G is also a great option as a gift since it will work with any carrier or wireless phone plan they currently have.",
      "What does UpTrade Certified Used mean?":
        "UpTrade Certified means you can trust that your used Galaxy Note 10+ Plus 5G will function just as well as a new device. Among hundreds of used phone sellers, we have chosen a modest bunch of reputable sellers and marketplaces that are capable of providing high-quality used and refurbished phones. An UpTrade Certified Used Galaxy Note 10+ Plus 5G means it has passed a rigorous inspection and functions like a new one.",
      "What is the return policy for the Used and Refurbished Galaxy Note 10+ Plus 5G?":
        "No worries if you are not 100% satisfied with the device you have received! Each phone is granted a 30-day trial period in which buyers may return the used device to the UpTrade Certified Seller for a refund within the first 30 days.",
      "Are refurbished Android phones as good as new ones?":
        "For the most part, there is no definite difference between a new phone and a used one, aside from one previously used by another owner. All used phones listed on UpTrade must pass a rigorous inspection to guarantee quality and product performance. Refurbished devices certified by UpTrade work just as well as new, ordinary store-bought phones.",
    },
  },
  {
    productName: "Galaxy Note 20",
    productCategoryValueId: 149,
    price: null,
    keyword: null,
    productImageUrl:
      "https://d3c745jesl5pj3.cloudfront.net/sell/web/Galaxy Note 20_fa4d0bfb581b4fec8e9fe1b005a88c44.png",
    brand: "Samsung",
    type: null,
    brandCategoryValueId: 19,
    relatedGoods: [
      {
        productId: 1545689879111036928,
        name: "Galaxy A50",
        brand: "Samsung",
        merchant: "Amazon",
        brandLogoUrl:
          "https://uptrade-public-static-resources.s3.us-east-2.amazonaws.com/amazon+logo.png",
        buyUrl:
          "https://www.amazon.com/Samsung-SM-A505G-Factory-Unlocked-Renewed/dp/B07RL93F7T/ref=sr_1_3?crid=3NBH91UQVO742&keywords=Samsung+Galaxy+unlocked+renewed&qid=1654951575&sprefix=samsung+galaxy+unlocked+renewed%2Cspecialty-aps%2C382&sr=8-3&srs=17871142011",
        currentPrice: 7900,
        specs: [
          {
            productId: 1545689879111036928,
            key: "CONDITION",
            value: "Excellent",
          },
          {
            productId: 1545689879111036928,
            key: "CARRIER",
            value: "Unlocked",
          },
          {
            productId: 1545689879111036928,
            key: "STORAGE",
            value: "64GB",
          },
          {
            productId: 1545689879111036928,
            key: "COLOR",
            value: "Black",
          },
        ],
      },
      {
        productId: 1545689910836752384,
        name: "Galaxy Note 8",
        brand: "Samsung",
        merchant: "Amazon",
        brandLogoUrl:
          "https://uptrade-public-static-resources.s3.us-east-2.amazonaws.com/amazon+logo.png",
        buyUrl:
          "https://www.amazon.com/Samsung-Galaxy-Note-Smartphone-Refurbished/dp/B07HFK5PQQ/ref=sr_1_66?crid=3NBH91UQVO742&keywords=Samsung+Galaxy+unlocked+renewed&qid=1654953630&sprefix=samsung+galaxy+unlocked+renewed%2Cspecialty-aps%2C382&sr=8-66&srs=17871142011",
        currentPrice: 7999,
        specs: [
          {
            productId: 1545689910836752384,
            key: "CONDITION",
            value: "Excellent",
          },
          {
            productId: 1545689910836752384,
            key: "CARRIER",
            value: "Unlocked",
          },
          {
            productId: 1545689910836752384,
            key: "STORAGE",
            value: "64GB",
          },
          {
            productId: 1545689910836752384,
            key: "COLOR",
            value: "Orchid Gray",
          },
        ],
      },
      {
        productId: 1545689999491756032,
        name: "Galaxy S8 Plus",
        brand: "Samsung",
        merchant: "Amazon",
        brandLogoUrl:
          "https://uptrade-public-static-resources.s3.us-east-2.amazonaws.com/amazon+logo.png",
        buyUrl:
          "https://www.amazon.com/Samsung-Galaxy-T-Mobile-Unlocked-Renewed/dp/B07DZP1BDG/ref=sr_1_138?crid=3NBH91UQVO742&keywords=Samsung+Galaxy+unlocked+renewed&qid=1654956295&sprefix=samsung+galaxy+unlocked+renewed%2Cspecialty-aps%2C382&sr=8-138&srs=17871142011",
        currentPrice: 9999,
        specs: [
          {
            productId: 1545689999491756032,
            key: "CONDITION",
            value: "Excellent",
          },
          {
            productId: 1545689999491756032,
            key: "CARRIER",
            value: "Unlocked",
          },
          {
            productId: 1545689999491756032,
            key: "STORAGE",
            value: "64GB",
          },
          {
            productId: 1545689999491756032,
            key: "COLOR",
            value: "Arctic Silver",
          },
        ],
      },
      {
        productId: 1545689906340458496,
        name: "Galaxy Note 9",
        brand: "Samsung",
        merchant: "Amazon",
        brandLogoUrl:
          "https://uptrade-public-static-resources.s3.us-east-2.amazonaws.com/amazon+logo.png",
        buyUrl:
          "https://www.amazon.com/Samsung-Galaxy-N960U-T-Mobile-Unlocked/dp/B08BW9KH55/ref=sr_1_62?crid=3NBH91UQVO742&keywords=Samsung+Galaxy+unlocked+renewed&qid=1654953630&sprefix=samsung+galaxy+unlocked+renewed%2Cspecialty-aps%2C382&sr=8-62&srs=17871142011",
        currentPrice: 9999,
        specs: [
          {
            productId: 1545689906340458496,
            key: "CONDITION",
            value: "Excellent",
          },
          {
            productId: 1545689906340458496,
            key: "CARRIER",
            value: "Unlocked",
          },
          {
            productId: 1545689906340458496,
            key: "STORAGE",
            value: "128GB",
          },
          {
            productId: 1545689906340458496,
            key: "COLOR",
            value: "Ocean Blue",
          },
        ],
      },
      {
        productId: 1545689917975457792,
        name: "Galaxy S7",
        brand: "Samsung",
        merchant: "Amazon",
        brandLogoUrl:
          "https://uptrade-public-static-resources.s3.us-east-2.amazonaws.com/amazon+logo.png",
        buyUrl:
          "https://www.amazon.com/Samsung-Galaxy-G930T-T-Mobile-Unlocked/dp/B08CBKYVGT/ref=sr_1_76?crid=3NBH91UQVO742&keywords=Samsung+Galaxy+unlocked+renewed&qid=1654954075&sprefix=samsung+galaxy+unlocked+renewed%2Cspecialty-aps%2C382&sr=8-76&srs=17871142011",
        currentPrice: 9999,
        specs: [
          {
            productId: 1545689917975457792,
            key: "CONDITION",
            value: "Excellent",
          },
          {
            productId: 1545689917975457792,
            key: "CARRIER",
            value: "Unlocked",
          },
          {
            productId: 1545689917975457792,
            key: "STORAGE",
            value: "32GB",
          },
          {
            productId: 1545689917975457792,
            key: "COLOR",
            value: "Black",
          },
        ],
      },
    ],
    aboutProduct:
      'The Samsung Galaxy Note20 5G smartphone takes power to the next level. Experience stunning color and contrast with the 6.7" Infinity-O Display which provides an immersive experience. The new S Pen is more powerful than ever— redesigned for a better pen to paper feel and to deliver more responsive writing when taking notes or sketching. Galaxy Note20 5G has a 4,300 mAh battery, a pro-grade rear camera featuring dual 12 MP wide and ultra-wide lenses and a 64MP telephoto lens, along with 8K video capture. A hyperfast octa-core processor delivers speeds to help you multi-task with less interruption.',
    metaDescription:
      "Samsung Galaxy Note20 5G. All phones are Fully Inspected, Certified Used, and Fully Functional. Great price.  5G. 12MP Camera. 8K Video. 6.7” Screen",
    metaDescCategory:
      "Samsung · Samsung Galaxy · Galaxy Note · Galaxy Note20 · Android · 6.7″ · Fingerprint Scanner · Facial Recognition · 10 MP front camera · 12 MP rear camera",
    qa: {
      "Why should you buy a used or refurbished Galaxy Note 20 5G?":
        "I am glad that you asked! A refurbished Galaxy Note 20 5G is a great opportunity to save when you are looking to purchase your next phone. Buying a refurbished Galaxy Note 20 5G can be an wonderful choice and can net you huge savings, particularly when the cost of a new Galaxy Note 20 5G is crazy expensive. A refurbished Galaxy Note 20 5G is completely functional and works very much like a brand new Galaxy Note 20 5G.",
      "What does it mean if the Galaxy Note 20 5G is unlocked?":
        "You may use an unlocked Galaxy Note 20 5G with any carrier in the United States. Purchasing an unlocked Galaxy Note 20 5G is an wonderful choice if you aren’t sure which wireless carrier you want to sign up with, or if you want to be sure the Galaxy Note 20 5G will work with your current carrier. An unlocked Galaxy Note 20 5G is likewise an incredible phone to buy as a gift since it will work with any carrier or wireless plan that they may have.",
      "What does UpTrade Certified Used mean?":
        "UpTrade Certified means the Galaxy Note 20 5G you buy will work and function just like new. Among hundreds of used phone and gadget sellers, we have chosen a modest bunch of reputable resellers and marketplaces that provide high-quality used and refurbished phones. An UpTrade Certified Used Galaxy Note 20 5G means it has passed an in-depth inspection by our Certified Seller.",
      "What is the return policy for the Used and Refurbished Galaxy Note 20 5G?":
        "Yes! All UpTrade Certified Used Phone Resellers and Marketplaces offer 30-day money-back-guarantee on Galaxy Note 20 5G phones listed here. If you aren’t satisfied with your purchase you may return your Galaxy Note 20 5G to your seller for free for up to 30 days.",
      "Are refurbished Android phones as good as new ones?":
        "Many people wonder if a refurbished Android phone is as good as a new one. Typically there’s really no difference between them except for the fact that there may be signs of use (if at all) on a refurbished phone. A refurbished Android phone should be fully functional and work just like a new Android phone. All UpTrade Certified Used Phone Resellers process the phones through a rigorous inspection so that each phone is fully functional and works just like a new phone.",
    },
  },
  {
    productName: "Galaxy Note 20 5G",
    productCategoryValueId: 50,
    price: 43614,
    keyword: null,
    productImageUrl:
      "https://d3c745jesl5pj3.cloudfront.net/sell/web/Galaxy Note 20 5G_7d47e52cb7494d84982c89893bc9c8e0.jpg",
    brand: "Samsung",
    type: null,
    brandCategoryValueId: 19,
    relatedGoods: [
      {
        productId: 1545698375902720000,
        name: "Galaxy Note 20 5G",
        brand: "Samsung",
        merchant: "Amazon",
        brandLogoUrl:
          "https://uptrade-public-static-resources.s3.us-east-2.amazonaws.com/amazon+logo.png",
        buyUrl:
          "https://www.amazon.com/Samsung-Galaxy-5G-Verizon-Unlocked/dp/B08PDMKW8X/ref=sr_1_118?keywords=Samsung+Galaxy+Unlocked+renewed&qid=1657217683&sr=8-118&srs=17871142011",
        currentPrice: 43798,
        specs: [
          {
            productId: 1545698375902720000,
            key: "CONDITION",
            value: "Excellent",
          },
          {
            productId: 1545698375902720000,
            key: "CARRIER",
            value: "Verizon",
          },
          {
            productId: 1545698375902720000,
            key: "STORAGE",
            value: "128GB",
          },
          {
            productId: 1545698375902720000,
            key: "COLOR",
            value: "Mystic Gray",
          },
        ],
      },
      {
        productId: 1545698440251731968,
        name: "Galaxy Note 20 5G",
        brand: "Samsung",
        merchant: "Amazon",
        brandLogoUrl:
          "https://uptrade-public-static-resources.s3.us-east-2.amazonaws.com/amazon+logo.png",
        buyUrl:
          "https://www.amazon.com/Samsung-Galaxy-Mystic-Verizon-Renewed/dp/B08PQ3JHQ5/ref=sr_1_182?keywords=Samsung+Galaxy+Verizon+renewed&qid=1657220110&sr=8-182",
        currentPrice: 43956,
        specs: [
          {
            productId: 1545698440251731968,
            key: "CONDITION",
            value: "Excellent",
          },
          {
            productId: 1545698440251731968,
            key: "CARRIER",
            value: "Verizon",
          },
          {
            productId: 1545698440251731968,
            key: "STORAGE",
            value: "128GB",
          },
          {
            productId: 1545698440251731968,
            key: "COLOR",
            value: "Mystic Gray",
          },
        ],
      },
      {
        productId: 1545698437751926784,
        name: "Galaxy Note 20 5G",
        brand: "Samsung",
        merchant: "Amazon",
        brandLogoUrl:
          "https://uptrade-public-static-resources.s3.us-east-2.amazonaws.com/amazon+logo.png",
        buyUrl:
          "https://www.amazon.com/Samsung-Galaxy-Unlocked-Mystic-Renewed/dp/B09NYMVG1M/ref=sr_1_129?keywords=Samsung+Galaxy+Verizon+renewed&qid=1657219820&sr=8-129",
        currentPrice: 45900,
        specs: [
          {
            productId: 1545698437751926784,
            key: "CONDITION",
            value: "Excellent",
          },
          {
            productId: 1545698437751926784,
            key: "CARRIER",
            value: "Unlocked",
          },
          {
            productId: 1545698437751926784,
            key: "STORAGE",
            value: "128GB",
          },
          {
            productId: 1545698437751926784,
            key: "COLOR",
            value: "Mystic Bronze",
          },
        ],
      },
      {
        productId: 1545698511441653760,
        name: "Galaxy Note 20 5G",
        brand: "Samsung",
        merchant: "Amazon",
        brandLogoUrl:
          "https://uptrade-public-static-resources.s3.us-east-2.amazonaws.com/amazon+logo.png",
        buyUrl:
          "https://www.amazon.com/Samsung-Galaxy-Smartphone-Mystic-T-Mobile/dp/B08CQH9BDB/ref=sr_1_95_mod_primary_new?keywords=Samsung+Galaxy+T-Mobile+renewed&qid=1657243948&sbo=RZvfv%2F%2FHxDF%2BO5021pAnSA%3D%3D&sr=8-95",
        currentPrice: 48499,
        specs: [
          {
            productId: 1545698511441653760,
            key: "CONDITION",
            value: "Excellent",
          },
          {
            productId: 1545698511441653760,
            key: "CARRIER",
            value: "T-Mobile",
          },
          {
            productId: 1545698511441653760,
            key: "STORAGE",
            value: "128GB",
          },
          {
            productId: 1545698511441653760,
            key: "COLOR",
            value: "Mystic Bronze",
          },
        ],
      },
      {
        productId: 1545698430038601728,
        name: "Galaxy Note 20 5G",
        brand: "Samsung",
        merchant: "Amazon",
        brandLogoUrl:
          "https://uptrade-public-static-resources.s3.us-east-2.amazonaws.com/amazon+logo.png",
        buyUrl:
          "https://www.amazon.com/SAMSUNG-Galaxy-5G-Factory-Unlocked/dp/B08HPTQRJS/ref=sr_1_55?keywords=Samsung+Galaxy+Verizon+renewed&qid=1657219524&sr=8-55",
        currentPrice: 48600,
        specs: [
          {
            productId: 1545698430038601728,
            key: "CONDITION",
            value: "Excellent",
          },
          {
            productId: 1545698430038601728,
            key: "CARRIER",
            value: "Unlocked",
          },
          {
            productId: 1545698430038601728,
            key: "STORAGE",
            value: "128GB",
          },
          {
            productId: 1545698430038601728,
            key: "COLOR",
            value: "Mystic Green",
          },
        ],
      },
    ],
    aboutProduct:
      'The Samsung Galaxy Note20 5G smartphone takes power to the next level. Experience stunning color and contrast with the 6.7" Infinity-O Display which provides an immersive experience. The new S Pen is more powerful than ever— redesigned for a better pen to paper feel and to deliver more responsive writing when taking notes or sketching. Galaxy Note20 5G has a 4,300 mAh battery, a pro-grade rear camera featuring dual 12 MP wide and ultra-wide lenses and a 64MP telephoto lens, along with 8K video capture. A hyperfast octa-core processor delivers speeds to help you multi-task with less interruption.',
    metaDescription:
      "Samsung Galaxy Note20 5G. All phones are Fully Inspected, Certified Used, and Fully Functional. Great price.  5G. 12MP Camera. 8K Video. 6.7” Screen",
    metaDescCategory:
      "Samsung · Samsung Galaxy · Galaxy Note · Galaxy Note20 · Android · 6.7″ · Fingerprint Scanner · Facial Recognition · 10 MP front camera · 12 MP rear camera",
    qa: {
      "Why should you buy a used or refurbished Galaxy Note 20 5G?":
        "I am glad that you asked! A refurbished Galaxy Note 20 5G is a great opportunity to save when you are looking to purchase your next phone. Buying a refurbished Galaxy Note 20 5G can be an wonderful choice and can net you huge savings, particularly when the cost of a new Galaxy Note 20 5G is crazy expensive. A refurbished Galaxy Note 20 5G is completely functional and works very much like a brand new Galaxy Note 20 5G.",
      "What does it mean if the Galaxy Note 20 5G is unlocked?":
        "You may use an unlocked Galaxy Note 20 5G with any carrier in the United States. Purchasing an unlocked Galaxy Note 20 5G is an wonderful choice if you aren’t sure which wireless carrier you want to sign up with, or if you want to be sure the Galaxy Note 20 5G will work with your current carrier. An unlocked Galaxy Note 20 5G is likewise an incredible phone to buy as a gift since it will work with any carrier or wireless plan that they may have.",
      "What does UpTrade Certified Used mean?":
        "UpTrade Certified means the Galaxy Note 20 5G you buy will work and function just like new. Among hundreds of used phone and gadget sellers, we have chosen a modest bunch of reputable resellers and marketplaces that provide high-quality used and refurbished phones. An UpTrade Certified Used Galaxy Note 20 5G means it has passed an in-depth inspection by our Certified Seller.",
      "What is the return policy for the Used and Refurbished Galaxy Note 20 5G?":
        "Yes! All UpTrade Certified Used Phone Resellers and Marketplaces offer 30-day money-back-guarantee on Galaxy Note 20 5G phones listed here. If you aren’t satisfied with your purchase you may return your Galaxy Note 20 5G to your seller for free for up to 30 days.",
      "Are refurbished Android phones as good as new ones?":
        "Many people wonder if a refurbished Android phone is as good as a new one. Typically there’s really no difference between them except for the fact that there may be signs of use (if at all) on a refurbished phone. A refurbished Android phone should be fully functional and work just like a new Android phone. All UpTrade Certified Used Phone Resellers process the phones through a rigorous inspection so that each phone is fully functional and works just like a new phone.",
    },
  },
  {
    productName: "Galaxy Note 20 Ultra",
    productCategoryValueId: 121,
    price: null,
    keyword: null,
    productImageUrl:
      "https://d3c745jesl5pj3.cloudfront.net/sell/web/Galaxy Note 20 Ultra_41bdfbf1c39246739a89af5abeed7e38.jpg",
    brand: "Samsung",
    type: null,
    brandCategoryValueId: 19,
    relatedGoods: [
      {
        productId: 1545689879111036928,
        name: "Galaxy A50",
        brand: "Samsung",
        merchant: "Amazon",
        brandLogoUrl:
          "https://uptrade-public-static-resources.s3.us-east-2.amazonaws.com/amazon+logo.png",
        buyUrl:
          "https://www.amazon.com/Samsung-SM-A505G-Factory-Unlocked-Renewed/dp/B07RL93F7T/ref=sr_1_3?crid=3NBH91UQVO742&keywords=Samsung+Galaxy+unlocked+renewed&qid=1654951575&sprefix=samsung+galaxy+unlocked+renewed%2Cspecialty-aps%2C382&sr=8-3&srs=17871142011",
        currentPrice: 7900,
        specs: [
          {
            productId: 1545689879111036928,
            key: "CONDITION",
            value: "Excellent",
          },
          {
            productId: 1545689879111036928,
            key: "CARRIER",
            value: "Unlocked",
          },
          {
            productId: 1545689879111036928,
            key: "STORAGE",
            value: "64GB",
          },
          {
            productId: 1545689879111036928,
            key: "COLOR",
            value: "Black",
          },
        ],
      },
      {
        productId: 1545689910836752384,
        name: "Galaxy Note 8",
        brand: "Samsung",
        merchant: "Amazon",
        brandLogoUrl:
          "https://uptrade-public-static-resources.s3.us-east-2.amazonaws.com/amazon+logo.png",
        buyUrl:
          "https://www.amazon.com/Samsung-Galaxy-Note-Smartphone-Refurbished/dp/B07HFK5PQQ/ref=sr_1_66?crid=3NBH91UQVO742&keywords=Samsung+Galaxy+unlocked+renewed&qid=1654953630&sprefix=samsung+galaxy+unlocked+renewed%2Cspecialty-aps%2C382&sr=8-66&srs=17871142011",
        currentPrice: 7999,
        specs: [
          {
            productId: 1545689910836752384,
            key: "CONDITION",
            value: "Excellent",
          },
          {
            productId: 1545689910836752384,
            key: "CARRIER",
            value: "Unlocked",
          },
          {
            productId: 1545689910836752384,
            key: "STORAGE",
            value: "64GB",
          },
          {
            productId: 1545689910836752384,
            key: "COLOR",
            value: "Orchid Gray",
          },
        ],
      },
      {
        productId: 1545689999491756032,
        name: "Galaxy S8 Plus",
        brand: "Samsung",
        merchant: "Amazon",
        brandLogoUrl:
          "https://uptrade-public-static-resources.s3.us-east-2.amazonaws.com/amazon+logo.png",
        buyUrl:
          "https://www.amazon.com/Samsung-Galaxy-T-Mobile-Unlocked-Renewed/dp/B07DZP1BDG/ref=sr_1_138?crid=3NBH91UQVO742&keywords=Samsung+Galaxy+unlocked+renewed&qid=1654956295&sprefix=samsung+galaxy+unlocked+renewed%2Cspecialty-aps%2C382&sr=8-138&srs=17871142011",
        currentPrice: 9999,
        specs: [
          {
            productId: 1545689999491756032,
            key: "CONDITION",
            value: "Excellent",
          },
          {
            productId: 1545689999491756032,
            key: "CARRIER",
            value: "Unlocked",
          },
          {
            productId: 1545689999491756032,
            key: "STORAGE",
            value: "64GB",
          },
          {
            productId: 1545689999491756032,
            key: "COLOR",
            value: "Arctic Silver",
          },
        ],
      },
      {
        productId: 1545689906340458496,
        name: "Galaxy Note 9",
        brand: "Samsung",
        merchant: "Amazon",
        brandLogoUrl:
          "https://uptrade-public-static-resources.s3.us-east-2.amazonaws.com/amazon+logo.png",
        buyUrl:
          "https://www.amazon.com/Samsung-Galaxy-N960U-T-Mobile-Unlocked/dp/B08BW9KH55/ref=sr_1_62?crid=3NBH91UQVO742&keywords=Samsung+Galaxy+unlocked+renewed&qid=1654953630&sprefix=samsung+galaxy+unlocked+renewed%2Cspecialty-aps%2C382&sr=8-62&srs=17871142011",
        currentPrice: 9999,
        specs: [
          {
            productId: 1545689906340458496,
            key: "CONDITION",
            value: "Excellent",
          },
          {
            productId: 1545689906340458496,
            key: "CARRIER",
            value: "Unlocked",
          },
          {
            productId: 1545689906340458496,
            key: "STORAGE",
            value: "128GB",
          },
          {
            productId: 1545689906340458496,
            key: "COLOR",
            value: "Ocean Blue",
          },
        ],
      },
      {
        productId: 1545689917975457792,
        name: "Galaxy S7",
        brand: "Samsung",
        merchant: "Amazon",
        brandLogoUrl:
          "https://uptrade-public-static-resources.s3.us-east-2.amazonaws.com/amazon+logo.png",
        buyUrl:
          "https://www.amazon.com/Samsung-Galaxy-G930T-T-Mobile-Unlocked/dp/B08CBKYVGT/ref=sr_1_76?crid=3NBH91UQVO742&keywords=Samsung+Galaxy+unlocked+renewed&qid=1654954075&sprefix=samsung+galaxy+unlocked+renewed%2Cspecialty-aps%2C382&sr=8-76&srs=17871142011",
        currentPrice: 9999,
        specs: [
          {
            productId: 1545689917975457792,
            key: "CONDITION",
            value: "Excellent",
          },
          {
            productId: 1545689917975457792,
            key: "CARRIER",
            value: "Unlocked",
          },
          {
            productId: 1545689917975457792,
            key: "STORAGE",
            value: "32GB",
          },
          {
            productId: 1545689917975457792,
            key: "COLOR",
            value: "Black",
          },
        ],
      },
    ],
    aboutProduct: null,
    metaDescription:
      "Take notes with the S-Pen wherever you go on your Galaxy Note 20 Ultra! Certified used available.",
    metaDescCategory: null,
    qa: {
      "Why should you buy a used or refurbished Galaxy Note 20 Ultra?":
        "I am glad that you asked! A refurbished Galaxy Note 20 Ultra is a great opportunity to save when you are looking to purchase your next phone. Buying a refurbished Galaxy Note 20 Ultra can be an wonderful choice and can net you huge savings, particularly when the cost of a new Galaxy Note 20 Ultra is crazy expensive. A refurbished Galaxy Note 20 Ultra is completely functional and works very much like a brand new Galaxy Note 20 Ultra.",
      "What does it mean if the Galaxy Note 20 Ultra is unlocked?":
        "You may use an unlocked Galaxy Note 20 Ultra with any carrier in the United States. Purchasing an unlocked Galaxy Note 20 Ultra is an wonderful choice if you aren’t sure which wireless carrier you want to sign up with, or if you want to be sure the Galaxy Note 20 Ultra will work with your current carrier. An unlocked Galaxy Note 20 Ultra is likewise an incredible phone to buy as a gift since it will work with any carrier or wireless plan that they may have.",
      "What does UpTrade Certified Used mean?":
        "UpTrade Certified means the Galaxy Note 20 Ultra you buy will work and function just like new. Among hundreds of used phone and gadget sellers, we have chosen a modest bunch of reputable resellers and marketplaces that provide high-quality used and refurbished phones. An UpTrade Certified Used Galaxy Note 20 Ultra means it has passed an in-depth inspection by our Certified Seller.",
      "What is the return policy for the Used and Refurbished Galaxy Note 20 Ultra?":
        "Yes! All UpTrade Certified Used Phone Resellers and Marketplaces offer 30-day money-back-guarantee on Galaxy Note 20 Ultra phones listed here. If you aren’t satisfied with your purchase you may return your Galaxy Note 20 Ultra to your seller for free for up to 30 days.",
      "Are refurbished Android phones as good as new ones?":
        "Many people wonder if a refurbished Android phone is as good as a new one. Typically there’s really no difference between them except for the fact that there may be signs of use (if at all) on a refurbished phone. A refurbished Android phone should be fully functional and work just like a new Android phone. All UpTrade Certified Used Phone Resellers process the phones through a rigorous inspection so that each phone is fully functional and works just like a new phone.",
    },
  },
  {
    productName: "Galaxy Note 20 Ultra 5G",
    productCategoryValueId: 33,
    price: 21999,
    keyword: null,
    productImageUrl:
      "https://d3c745jesl5pj3.cloudfront.net/sell/web/Galaxy Note 20 Ultra 5G_546a21024a9549a6ad194a84388d6e5f.jpg",
    brand: "Samsung",
    type: null,
    brandCategoryValueId: 19,
    relatedGoods: [
      {
        productId: 1545698371444174848,
        name: "Galaxy Note 20 Ultra 5G",
        brand: "Samsung",
        merchant: "Amazon",
        brandLogoUrl:
          "https://uptrade-public-static-resources.s3.us-east-2.amazonaws.com/amazon+logo.png",
        buyUrl:
          "https://www.amazon.com/Verizon-Samsung-Galaxy-Note-Ultra/dp/B08X9XYNK9/ref=sr_1_103?keywords=Samsung+Galaxy+Unlocked+renewed&qid=1657217598&sr=8-103&srs=17871142011",
        currentPrice: 58982,
        specs: [
          {
            productId: 1545698371444174848,
            key: "CONDITION",
            value: "Excellent",
          },
          {
            productId: 1545698371444174848,
            key: "CARRIER",
            value: "Verizon",
          },
          {
            productId: 1545698371444174848,
            key: "STORAGE",
            value: "128GB",
          },
          {
            productId: 1545698371444174848,
            key: "COLOR",
            value: "Mystic Black",
          },
        ],
      },
      {
        productId: 1545698428616732672,
        name: "Galaxy Note 20 Ultra 5G",
        brand: "Samsung",
        merchant: "Amazon",
        brandLogoUrl:
          "https://uptrade-public-static-resources.s3.us-east-2.amazonaws.com/amazon+logo.png",
        buyUrl:
          "https://www.amazon.com/Samsung-Galaxy-Verizon-Unlocked-Renewed/dp/B09M7Q6L24/ref=sr_1_46?keywords=Samsung+Galaxy+Verizon+renewed&qid=1657219448&sr=8-46",
        currentPrice: 61400,
        specs: [
          {
            productId: 1545698428616732672,
            key: "CONDITION",
            value: "Excellent",
          },
          {
            productId: 1545698428616732672,
            key: "CARRIER",
            value: "Unlocked",
          },
          {
            productId: 1545698428616732672,
            key: "STORAGE",
            value: "128GB",
          },
          {
            productId: 1545698428616732672,
            key: "COLOR",
            value: "Mystic Black",
          },
        ],
      },
      {
        productId: 1545698379623067648,
        name: "Galaxy Note 20 Ultra 5G",
        brand: "Samsung",
        merchant: "Amazon",
        brandLogoUrl:
          "https://uptrade-public-static-resources.s3.us-east-2.amazonaws.com/amazon+logo.png",
        buyUrl:
          "https://www.amazon.com/Samsung-Galaxy-Note-20-Ultra/dp/B08WHPJ73Z/ref=sr_1_133?keywords=Samsung+Galaxy+Unlocked+renewed&qid=1657217890&sr=8-133&srs=17871142011",
        currentPrice: 71531,
        specs: [
          {
            productId: 1545698379623067648,
            key: "CONDITION",
            value: "Excellent",
          },
          {
            productId: 1545698379623067648,
            key: "CARRIER",
            value: "Verizon",
          },
          {
            productId: 1545698379623067648,
            key: "STORAGE",
            value: "128GB",
          },
          {
            productId: 1545698379623067648,
            key: "COLOR",
            value: "Mystic White",
          },
        ],
      },
      {
        productId: 1545698441652629504,
        name: "Galaxy Note 20 Ultra 5G",
        brand: "Samsung",
        merchant: "Amazon",
        brandLogoUrl:
          "https://uptrade-public-static-resources.s3.us-east-2.amazonaws.com/amazon+logo.png",
        buyUrl:
          "https://www.amazon.com/Samsung-Galaxy-Ultra-128GB-Mystic/dp/B09ZLV5RL8/ref=sr_1_200?keywords=Samsung+Galaxy+Verizon+renewed&qid=1657220241&sr=8-200",
        currentPrice: 74999,
        specs: [
          {
            productId: 1545698441652629504,
            key: "CONDITION",
            value: "Excellent",
          },
          {
            productId: 1545698441652629504,
            key: "CARRIER",
            value: "Unlocked",
          },
          {
            productId: 1545698441652629504,
            key: "STORAGE",
            value: "128GB",
          },
          {
            productId: 1545698441652629504,
            key: "COLOR",
            value: "Mystic Black",
          },
        ],
      },
      {
        productId: 1545698351739334656,
        name: "Galaxy Note 20 Ultra 5G",
        brand: "Samsung",
        merchant: "Amazon",
        brandLogoUrl:
          "https://uptrade-public-static-resources.s3.us-east-2.amazonaws.com/amazon+logo.png",
        buyUrl:
          "https://www.amazon.com/Samsung-Galaxy-Ultra-128GB-Mystic/dp/B09DLCT14X/ref=sr_1_45?keywords=Samsung+Galaxy+Unlocked+renewed&qid=1657217092&sr=8-45&srs=17871142011",
        currentPrice: 85000,
        specs: [
          {
            productId: 1545698351739334656,
            key: "CONDITION",
            value: "Excellent",
          },
          {
            productId: 1545698351739334656,
            key: "CARRIER",
            value: "Unlocked",
          },
          {
            productId: 1545698351739334656,
            key: "STORAGE",
            value: "128GB",
          },
          {
            productId: 1545698351739334656,
            key: "COLOR",
            value: "Mystic Black",
          },
        ],
      },
    ],
    aboutProduct:
      'Samsung Galaxy Note 20 Ultra 5G comes with a 6.9" display and a resolution of 1440x3200 pixels. The Samsung Galaxy Note 20 Ultra 5G is powered by a 3GHz octa-core Qualcomm Snapdragon 865+ processor. The Samsung Galaxy Note 20 Ultra 5G runs Android 10 and is powered by a 4500mAh non-removable battery. The Samsung Galaxy Note 20 Ultra 5G supports wireless charging, as well as proprietary fast charging. The Samsung Galaxy Note 20 Ultra 5G comes with a 108MP primary camera, a two additional 12-megapixel cameras.',
    metaDescription:
      "Samsung Galaxy Note20 Ultra 5G. All phones are Fully Inspected, Certified Used, and Fully Functional. Great price.  6.9” Display. 5G. Fingerprint Scanner. Facial Recognition.",
    metaDescCategory:
      "Samsung · Samsung Galaxy · Galaxy Note · Galaxy Note20 · Galaxy Note20 Ultra. Android · 6.9″ · Fingerprint Scanner · Facial Recognition · 10 MP front camera · 108 MP rear camera",
    qa: {
      "Why should you buy a used or refurbished Galaxy Note 20 Ultra 5G?":
        "A refurbished Galaxy Note 20 Ultra 5G functions precisely like a new one. Why pay more? It will save you a lot of money  buying a refurbished Galaxy Note 20 Ultra 5G. More importantly, it reduces e-waste and makes our planet a better place. Buying a refurbished Galaxy Note 20 Ultra 5G is a smart choice.",
      "What does it mean if the Galaxy Note 20 Ultra 5G is unlocked?":
        "Most Galaxy Note 20 Ultra 5G’s bought from wireless carriers are locked to their network. An unlocked Galaxy Note 20 Ultra 5G means the phone has been unlocked and can be used with any carrier in the United States. Choosing an unlocked Galaxy Note 20 Ultra 5G is the safest option if you are unsure which carrier you will use. An unlocked Galaxy Note 20 Ultra 5G is also a great option as a gift since it will work with any carrier or wireless phone plan they currently have.",
      "What does UpTrade Certified Used mean?":
        "UpTrade Certified means you can trust that your used Galaxy Note 20 Ultra 5G will function just as well as a new device. Among hundreds of used phone sellers, we have chosen a modest bunch of reputable sellers and marketplaces that are capable of providing high-quality used and refurbished phones. An UpTrade Certified Used Galaxy Note 20 Ultra 5G means it has passed a rigorous inspection and functions like a new one.",
      "What is the return policy for the Used and Refurbished Galaxy Note 20 Ultra 5G?":
        "No worries if you are not 100% satisfied with the device you have received! Each phone is granted a 30-day trial period in which buyers may return the used device to the UpTrade Certified Seller for a refund within the first 30 days.",
      "Are refurbished Android phones as good as new ones?":
        "For the most part, there is no definite difference between a new phone and a used one, aside from one previously used by another owner. All used phones listed on UpTrade must pass a rigorous inspection to guarantee quality and product performance. Refurbished devices certified by UpTrade work just as well as new, ordinary store-bought phones.",
    },
  },
  {
    productName: "Galaxy Note 8",
    productCategoryValueId: 94,
    price: 7999,
    keyword: null,
    productImageUrl:
      "https://d3c745jesl5pj3.cloudfront.net/sell/web/Galaxy Note 8_b955b547614144e48485972b1c0bb1b2.jpg",
    brand: "Samsung",
    type: null,
    brandCategoryValueId: 19,
    relatedGoods: [
      {
        productId: 1545698407993339904,
        name: "Galaxy Note 8",
        brand: "Samsung",
        merchant: "Amazon",
        brandLogoUrl:
          "https://uptrade-public-static-resources.s3.us-east-2.amazonaws.com/amazon+logo.png",
        buyUrl:
          "https://www.amazon.com/Samsung-SM-A015M-Display-Unlocked-International/dp/B08BLQQFB7/ref=sr_1_240?keywords=Samsung+Galaxy+Unlocked+renewed&qid=1657218627&sr=8-240&srs=17871142011",
        currentPrice: 9999,
        specs: [
          {
            productId: 1545698407993339904,
            key: "CONDITION",
            value: "Excellent",
          },
          {
            productId: 1545698407993339904,
            key: "CARRIER",
            value: "Unlocked",
          },
          {
            productId: 1545698407993339904,
            key: "STORAGE",
            value: "16GB",
          },
          {
            productId: 1545698407993339904,
            key: "COLOR",
            value: "Blue",
          },
        ],
      },
      {
        productId: 1545698431519191040,
        name: "Galaxy Note 8",
        brand: "Samsung",
        merchant: "Amazon",
        brandLogoUrl:
          "https://uptrade-public-static-resources.s3.us-east-2.amazonaws.com/amazon+logo.png",
        buyUrl:
          "https://www.amazon.com/Samsung-Unlocked-Midnight-Certified-Refurbished/dp/B076XLLCQC/ref=sr_1_72?keywords=Samsung+Galaxy+Verizon+renewed&qid=1657219584&sr=8-72",
        currentPrice: 19399,
        specs: [
          {
            productId: 1545698431519191040,
            key: "CONDITION",
            value: "Excellent",
          },
          {
            productId: 1545698431519191040,
            key: "CARRIER",
            value: "Unlocked",
          },
          {
            productId: 1545698431519191040,
            key: "STORAGE",
            value: "64GB",
          },
          {
            productId: 1545698431519191040,
            key: "COLOR",
            value: "Midnight Black",
          },
        ],
      },
      {
        productId: 1545698509084454912,
        name: "Galaxy Note 8",
        brand: "Samsung",
        merchant: "Amazon",
        brandLogoUrl:
          "https://uptrade-public-static-resources.s3.us-east-2.amazonaws.com/amazon+logo.png",
        buyUrl:
          "https://www.amazon.com/Samsung-Galaxy-Note-Midnight-Black/dp/B07BSTPWTS/ref=sr_1_47?keywords=Samsung+Galaxy+T-Mobile+renewed&qid=1657243774&sr=8-47",
        currentPrice: 19499,
        specs: [
          {
            productId: 1545698509084454912,
            key: "CONDITION",
            value: "Excellent",
          },
          {
            productId: 1545698509084454912,
            key: "CARRIER",
            value: "T-Mobile",
          },
          {
            productId: 1545698509084454912,
            key: "STORAGE",
            value: "64GB",
          },
          {
            productId: 1545698509084454912,
            key: "COLOR",
            value: "Midnight Black",
          },
        ],
      },
      {
        productId: 1545698373990117376,
        name: "Galaxy Note 8",
        brand: "Samsung",
        merchant: "Amazon",
        brandLogoUrl:
          "https://uptrade-public-static-resources.s3.us-east-2.amazonaws.com/amazon+logo.png",
        buyUrl:
          "https://www.amazon.com/Samsung-Unlocked-Midnight-Certified-Refurbished/dp/B07DY25LDW/ref=sr_1_112?keywords=Samsung+Galaxy+Unlocked+renewed&qid=1657217683&sr=8-112&srs=17871142011",
        currentPrice: 19699,
        specs: [
          {
            productId: 1545698373990117376,
            key: "CONDITION",
            value: "Excellent",
          },
          {
            productId: 1545698373990117376,
            key: "CARRIER",
            value: "Unlocked",
          },
          {
            productId: 1545698373990117376,
            key: "STORAGE",
            value: "64GB",
          },
          {
            productId: 1545698373990117376,
            key: "COLOR",
            value: "Midnight Black",
          },
        ],
      },
      {
        productId: 1545698385784500224,
        name: "Galaxy Note 8",
        brand: "Samsung",
        merchant: "Amazon",
        brandLogoUrl:
          "https://uptrade-public-static-resources.s3.us-east-2.amazonaws.com/amazon+logo.png",
        buyUrl:
          "https://www.amazon.com/Samsung-Galaxy-Unlocked-Certified-Refurbished/dp/B07F7H5FBR/ref=sr_1_157?keywords=Samsung+Galaxy+Unlocked+renewed&qid=1657218061&sr=8-157&srs=17871142011",
        currentPrice: 19699,
        specs: [
          {
            productId: 1545698385784500224,
            key: "CONDITION",
            value: "Excellent",
          },
          {
            productId: 1545698385784500224,
            key: "CARRIER",
            value: "Unlocked",
          },
          {
            productId: 1545698385784500224,
            key: "STORAGE",
            value: "64GB",
          },
          {
            productId: 1545698385784500224,
            key: "COLOR",
            value: "Orchid Gray",
          },
        ],
      },
    ],
    aboutProduct:
      "The Galaxy Note 8 is a great phone and is filled to the brim with special features. It comes with a dual camera with image stabilization that makes it easy to take professional-level photos, a vivid HD infinity screen, fingerprint and facial recognition for security, and the signature S pen that makes precision possible and lets you send handwritten notes!",
    metaDescription:
      "Functional, inspected Samsung Galaxy Note 8 for a great price! Tons of features like dual cameras with image stabilization, infinity screen, S pen stylus",
    metaDescCategory:
      "The Samsung Galaxy Note 8 is a techie favorite because of its bevy of top-rated features. Samsung did a lot to bounce back from the Note 7, and not only has the Note 8 gone through rigorous safety testing, it also features major improvements like an incredible Infinity Display, pro-grade dual-lens camera, massive processing power, and the ever-useful S pen.",
    qa: {
      "Why should you buy a used or refurbished Galaxy Note 8?":
        "I am glad that you asked! A refurbished Galaxy Note 8 is a great opportunity to save when you are looking to purchase your next phone. Buying a refurbished Galaxy Note 8 can be an wonderful choice and can net you huge savings, particularly when the cost of a new Galaxy Note 8 is crazy expensive. A refurbished Galaxy Note 8 is completely functional and works very much like a brand new Galaxy Note 8.",
      "What does it mean if the Galaxy Note 8 is unlocked?":
        "You may use an unlocked Galaxy Note 8 with any carrier in the United States. Purchasing an unlocked Galaxy Note 8 is an wonderful choice if you aren’t sure which wireless carrier you want to sign up with, or if you want to be sure the Galaxy Note 8 will work with your current carrier. An unlocked Galaxy Note 8 is likewise an incredible phone to buy as a gift since it will work with any carrier or wireless plan that they may have.",
      "What does UpTrade Certified Used mean?":
        "UpTrade Certified means the Galaxy Note 8 you buy will work and function just like new. Among hundreds of used phone and gadget sellers, we have chosen a modest bunch of reputable resellers and marketplaces that provide high-quality used and refurbished phones. An UpTrade Certified Used Galaxy Note 8 means it has passed an in-depth inspection by our Certified Seller.",
      "What is the return policy for the Used and Refurbished Galaxy Note 8?":
        "Yes! All UpTrade Certified Used Phone Resellers and Marketplaces offer 30-day money-back-guarantee on Galaxy Note 8 phones listed here. If you aren’t satisfied with your purchase you may return your Galaxy Note 8 to your seller for free for up to 30 days.",
      "Are refurbished Android phones as good as new ones?":
        "Many people wonder if a refurbished Android phone is as good as a new one. Typically there’s really no difference between them except for the fact that there may be signs of use (if at all) on a refurbished phone. A refurbished Android phone should be fully functional and work just like a new Android phone. All UpTrade Certified Used Phone Resellers process the phones through a rigorous inspection so that each phone is fully functional and works just like a new phone.",
    },
  },
  {
    productName: "Galaxy Note 9",
    productCategoryValueId: 88,
    price: 9999,
    keyword: null,
    productImageUrl:
      "https://d3c745jesl5pj3.cloudfront.net/sell/web/Galaxy Note 9_e939eb0b64f74772ad39be27efee3be9.jpg",
    brand: "Samsung",
    type: null,
    brandCategoryValueId: 19,
    relatedGoods: [
      {
        productId: 1545698471377661952,
        name: "Galaxy Note 9",
        brand: "Samsung",
        merchant: "Amazon",
        brandLogoUrl:
          "https://uptrade-public-static-resources.s3.us-east-2.amazonaws.com/amazon+logo.png",
        buyUrl:
          "https://www.amazon.com/Samsung-Galaxy-Factory-Unlocked-Renewed/dp/B07NGNPX4J/ref=sr_1_9?keywords=Samsung+Galaxy+AT%26T+renewed&qid=1657221327&sr=8-9",
        currentPrice: 20900,
        specs: [
          {
            productId: 1545698471377661952,
            key: "CONDITION",
            value: "Excellent",
          },
          {
            productId: 1545698471377661952,
            key: "CARRIER",
            value: "AT&T",
          },
          {
            productId: 1545698471377661952,
            key: "STORAGE",
            value: "128GB",
          },
          {
            productId: 1545698471377661952,
            key: "COLOR",
            value: "Ocean Blue",
          },
        ],
      },
      {
        productId: 1545698521906442240,
        name: "Galaxy Note 9",
        brand: "Samsung",
        merchant: "Amazon",
        brandLogoUrl:
          "https://uptrade-public-static-resources.s3.us-east-2.amazonaws.com/amazon+logo.png",
        buyUrl:
          "https://www.amazon.com/Samsung-Unlocked-Warranty-Certified-Refurbished/dp/B07H8PXT7K/ref=sr_1_2?keywords=Samsung+Galaxy+Xfinity+renewed&qid=1657246912&sr=8-2",
        currentPrice: 21500,
        specs: [
          {
            productId: 1545698521906442240,
            key: "CONDITION",
            value: "Excellent",
          },
          {
            productId: 1545698521906442240,
            key: "CARRIER",
            value: "Unlocked",
          },
          {
            productId: 1545698521906442240,
            key: "STORAGE",
            value: "128GB",
          },
          {
            productId: 1545698521906442240,
            key: "COLOR",
            value: "Lavender Purple",
          },
        ],
      },
      {
        productId: 1545698489509638144,
        name: "Galaxy Note 9",
        brand: "Samsung",
        merchant: "Amazon",
        brandLogoUrl:
          "https://uptrade-public-static-resources.s3.us-east-2.amazonaws.com/amazon+logo.png",
        buyUrl:
          "https://www.amazon.com/Samsung-Factory-Unlocked-Warranty-Midnight/dp/B07KNB1TN8/ref=sr_1_20?keywords=Samsung+Galaxy+Unlocked+renewed&qid=1657238436&sr=8-20",
        currentPrice: 21999,
        specs: [
          {
            productId: 1545698489509638144,
            key: "CONDITION",
            value: "Excellent",
          },
          {
            productId: 1545698489509638144,
            key: "CARRIER",
            value: "Unlocked",
          },
          {
            productId: 1545698489509638144,
            key: "STORAGE",
            value: "128GB",
          },
          {
            productId: 1545698489509638144,
            key: "COLOR",
            value: "Midnight Black",
          },
        ],
      },
      {
        productId: 1545698423738757120,
        name: "Galaxy Note 9",
        brand: "Samsung",
        merchant: "Amazon",
        brandLogoUrl:
          "https://uptrade-public-static-resources.s3.us-east-2.amazonaws.com/amazon+logo.png",
        buyUrl:
          "https://www.amazon.com/Samsung-Galaxy-SM-N960U-128GB-Ocean/dp/B07RM6QYWC/ref=sr_1_17?keywords=Samsung+Galaxy+Verizon+renewed&qid=1657219261&sr=8-17",
        currentPrice: 22320,
        specs: [
          {
            productId: 1545698423738757120,
            key: "CONDITION",
            value: "Excellent",
          },
          {
            productId: 1545698423738757120,
            key: "CARRIER",
            value: "Verizon",
          },
          {
            productId: 1545698423738757120,
            key: "STORAGE",
            value: "128GB",
          },
          {
            productId: 1545698423738757120,
            key: "COLOR",
            value: "Ocean Blue",
          },
        ],
      },
      {
        productId: 1545698360245383168,
        name: "Galaxy Note 9",
        brand: "Samsung",
        merchant: "Amazon",
        brandLogoUrl:
          "https://uptrade-public-static-resources.s3.us-east-2.amazonaws.com/amazon+logo.png",
        buyUrl:
          "https://www.amazon.com/Samsung-Galaxy-N960U-T-Mobile-Unlocked/dp/B08BW9KH55/ref=sr_1_66?keywords=Samsung+Galaxy+Unlocked+renewed&qid=1657217313&sr=8-66&srs=17871142011",
        currentPrice: 23800,
        specs: [
          {
            productId: 1545698360245383168,
            key: "CONDITION",
            value: "Excellent",
          },
          {
            productId: 1545698360245383168,
            key: "CARRIER",
            value: "Unlocked",
          },
          {
            productId: 1545698360245383168,
            key: "STORAGE",
            value: "128GB",
          },
          {
            productId: 1545698360245383168,
            key: "COLOR",
            value: "Ocean Blue",
          },
        ],
      },
    ],
    aboutProduct:
      "The Samsung Galaxy Note9 is the perfect phone for anyone on the go who needs a phone that can keep up. It has a massive battery and a large, vibrant screen; it also comes with Samsung’s signature S Pen that allows for precise screen controls, and with the Note9, the stylus doubles as a remote control!",
    metaDescription:
      "Samsung Galaxy Note9 on UpTrade! Best used phones for less; inspected and fully functional. Galaxy Note 9 with all-day battery & S Pen with remote Bluetooth",
    metaDescCategory:
      "If you need a phone that will get work done, the Samsung Galaxy Note 9 is for you. An excellent smartphone for any professional--or anyone who likes a lot of functionality--the Galaxy Note 9 sports an impressive Infinity Display, a top-of-the-line camera that photographs well even in low light, and the signature S pen that makes precision easy and now functions as a remote!",
    qa: {
      "Why should you buy a used or refurbished Galaxy Note 9?":
        "A refurbished Galaxy Note 9 functions precisely like a new one. Why pay more? It will save you a lot of money  buying a refurbished Galaxy Note 9. More importantly, it reduces e-waste and makes our planet a better place. Buying a refurbished Galaxy Note 9 is a smart choice.",
      "What does it mean if the Galaxy Note 9 is unlocked?":
        "Most Galaxy Note 9’s bought from wireless carriers are locked to their network. An unlocked Galaxy Note 9 means the phone has been unlocked and can be used with any carrier in the United States. Choosing an unlocked Galaxy Note 9 is the safest option if you are unsure which carrier you will use. An unlocked Galaxy Note 9 is also a great option as a gift since it will work with any carrier or wireless phone plan they currently have.",
      "What does UpTrade Certified Used mean?":
        "UpTrade Certified means you can trust that your used Galaxy Note 9 will function just as well as a new device. Among hundreds of used phone sellers, we have chosen a modest bunch of reputable sellers and marketplaces that are capable of providing high-quality used and refurbished phones. An UpTrade Certified Used Galaxy Note 9 means it has passed a rigorous inspection and functions like a new one.",
      "What is the return policy for the Used and Refurbished Galaxy Note 9?":
        "No worries if you are not 100% satisfied with the device you have received! Each phone is granted a 30-day trial period in which buyers may return the used device to the UpTrade Certified Seller for a refund within the first 30 days.",
      "Are refurbished Android phones as good as new ones?":
        "For the most part, there is no definite difference between a new phone and a used one, aside from one previously used by another owner. All used phones listed on UpTrade must pass a rigorous inspection to guarantee quality and product performance. Refurbished devices certified by UpTrade work just as well as new, ordinary store-bought phones.",
    },
  },
  {
    productName: "Galaxy S10",
    productCategoryValueId: 20,
    price: 16400,
    keyword: null,
    productImageUrl:
      "https://d3c745jesl5pj3.cloudfront.net/sell/web/Galaxy S10_d9924abad4f9447aadb33da6257392e3.jpg",
    brand: "Samsung",
    type: null,
    brandCategoryValueId: 19,
    relatedGoods: [
      {
        productId: 1545698507696140288,
        name: "Galaxy S10",
        brand: "Samsung",
        merchant: "Amazon",
        brandLogoUrl:
          "https://uptrade-public-static-resources.s3.us-east-2.amazonaws.com/amazon+logo.png",
        buyUrl:
          "https://www.amazon.com/Samsung-Galaxy-G973U-128GB-T-Mobile/dp/B07T8CN8WZ/ref=sr_1_3?keywords=Samsung+Galaxy+T-Mobile+renewed&qid=1657243701&sr=8-3",
        currentPrice: 16499,
        specs: [
          {
            productId: 1545698507696140288,
            key: "CONDITION",
            value: "Excellent",
          },
          {
            productId: 1545698507696140288,
            key: "CARRIER",
            value: "T-Mobile",
          },
          {
            productId: 1545698507696140288,
            key: "STORAGE",
            value: "128GB",
          },
          {
            productId: 1545698507696140288,
            key: "COLOR",
            value: "Prism Black",
          },
        ],
      },
      {
        productId: 1545698523575775232,
        name: "Galaxy S10",
        brand: "Samsung",
        merchant: "Amazon",
        brandLogoUrl:
          "https://uptrade-public-static-resources.s3.us-east-2.amazonaws.com/amazon+logo.png",
        buyUrl:
          "https://www.amazon.com/Samsung-Factory-Unlocked-Warranty-Renewed/dp/B07PFL3DFX/ref=sr_1_4?keywords=Samsung+Galaxy+Xfinity+renewed&qid=1657246912&sr=8-4",
        currentPrice: 17400,
        specs: [
          {
            productId: 1545698523575775232,
            key: "CONDITION",
            value: "Excellent",
          },
          {
            productId: 1545698523575775232,
            key: "CARRIER",
            value: "Unlocked",
          },
          {
            productId: 1545698523575775232,
            key: "STORAGE",
            value: "128GB",
          },
          {
            productId: 1545698523575775232,
            key: "COLOR",
            value: "Prism Blue",
          },
        ],
      },
      {
        productId: 1545698468932382720,
        name: "Galaxy S10",
        brand: "Samsung",
        merchant: "Amazon",
        brandLogoUrl:
          "https://uptrade-public-static-resources.s3.us-east-2.amazonaws.com/amazon+logo.png",
        buyUrl:
          "https://www.amazon.com/Samsung-Galaxy-S10-SM-G973UZKAATT-Renewed/dp/B07T7LS29H/ref=sr_1_1?keywords=Samsung+Galaxy+AT%26T+renewed&qid=1657221327&sr=8-1",
        currentPrice: 17600,
        specs: [
          {
            productId: 1545698468932382720,
            key: "CONDITION",
            value: "Excellent",
          },
          {
            productId: 1545698468932382720,
            key: "CARRIER",
            value: "AT&T",
          },
          {
            productId: 1545698468932382720,
            key: "STORAGE",
            value: "128GB",
          },
          {
            productId: 1545698468932382720,
            key: "COLOR",
            value: "Prism Black",
          },
        ],
      },
      {
        productId: 1545698338590191616,
        name: "Galaxy S10",
        brand: "Samsung",
        merchant: "Amazon",
        brandLogoUrl:
          "https://uptrade-public-static-resources.s3.us-east-2.amazonaws.com/amazon+logo.png",
        buyUrl:
          "https://www.amazon.com/Samsung-Galaxy-S10-Fully-Unlocked-Renewed/dp/B09DRCTNB9/ref=sr_1_2?keywords=Samsung+Galaxy+Unlocked+renewed&qid=1657216791&sr=8-2&srs=17871142011",
        currentPrice: 18200,
        specs: [
          {
            productId: 1545698338590191616,
            key: "CONDITION",
            value: "Excellent",
          },
          {
            productId: 1545698338590191616,
            key: "CARRIER",
            value: "Unlocked",
          },
          {
            productId: 1545698338590191616,
            key: "STORAGE",
            value: "128GB",
          },
          {
            productId: 1545698338590191616,
            key: "COLOR",
            value: "Prism Black",
          },
        ],
      },
      {
        productId: 1545698518601330688,
        name: "Galaxy S10",
        brand: "Samsung",
        merchant: "Amazon",
        brandLogoUrl:
          "https://uptrade-public-static-resources.s3.us-east-2.amazonaws.com/amazon+logo.png",
        buyUrl:
          "https://www.amazon.com/Samsung-Factory-Unlocked-Warranty-Renewed/dp/B07PDN414K/ref=sr_1_1?keywords=Samsung+Galaxy+Sprint+renewed&qid=1657245452&sr=8-1",
        currentPrice: 18500,
        specs: [
          {
            productId: 1545698518601330688,
            key: "CONDITION",
            value: "Excellent",
          },
          {
            productId: 1545698518601330688,
            key: "CARRIER",
            value: "Unlocked",
          },
          {
            productId: 1545698518601330688,
            key: "STORAGE",
            value: "128GB",
          },
          {
            productId: 1545698518601330688,
            key: "COLOR",
            value: "Prism White",
          },
        ],
      },
    ],
    aboutProduct:
      "This phone is perfect for anyone looking for one the most advanced phones on the market--but at a fraction of the cost. It’s part of Samsung’s newest line and includes all their best features like the Cinematic Infinity display, first-touch unlocking, and an intelligent battery that personalizes to your usage.",
    metaDescription:
      "UpTrade has the best used phones for less. Samsung Galaxy S10, fully functional and affordable. Best time to buy. Infinity screen, hi-res camera--a great choice",
    metaDescCategory:
      "Samsung’s 10th anniversary Galaxy S10 was a major leap forward for the Galaxy series. It has a massive and vibrant screen with a higher screen-to-body ratio than any previous Samsung Galaxy, and it features an incredible triple-lens camera, in-screen fingerprint sensor and wireless PowerShare ability.",
    qa: {
      "Why should you buy a used or refurbished Galaxy S10?":
        "Why pay more if you are getting the same thing? A refurbished Galaxy S10 is fully functional and works exactly like a brand new Galaxy S10, except for minimum to normal wear and tear on the cosmetics of the phone. A refurbished Galaxy S10 is a significant saving option when you plan to buy your next Galaxy S10. Buying a refurbished Galaxy S10 is a fantastic choice. It will net you significant savings, mainly when a new Galaxy S10 costs much more.",
      "What does it mean if the Galaxy S10 is unlocked?":
        "Unlocked means the phone is not locked or limited to any carrier. An unlocked Galaxy S10 can be used with any carrier in the United States. If you are unsure whether the phone is compatible with your mobile phone carrier, buying an unlocked phone is the easiest option. An unlocked Galaxy S10 is likewise an incredible phone to buy as a gift since it will work with any carrier or wireless plan they may have.",
      "What does UpTrade Certified Used mean?":
        "There are hundreds or even thousands of used phone sellers, but unfortunately, not all are legit. To ensure the quality, we have selected a few reputable resellers and marketplaces that can provide high-quality used and refurbished phones. An UpTrade Certified Used Galaxy S10 means it has passed an in-depth inspection by our Certified Seller. UpTrade Certified means the Galaxy S10 you buy will work and function exactly like a new one.",
      "What is the return policy for the Used and Refurbished Galaxy S10?":
        "Sure! The Refurbished Galaxy S10 listed here comes with a 30-day return policy from the Sellers. So if you have any problem with your purchase, you may contact the Seller and return it to them for up to 30 days.",
      "Are refurbished Android phones as good as new ones?":
        "That’s a good question! Technically, there’s no difference between refurbished and new except that there may be signs of use (if at all) on a refurbished Android phone. All UpTrade Certified Used Phone Sellers process the phones through a rigorous inspection. As a result, each smartphone is fully functional and works just like a new one.",
    },
  },
  {
    productName: "Galaxy S10 5G",
    productCategoryValueId: 125,
    price: 25900,
    keyword: null,
    productImageUrl:
      "https://d3c745jesl5pj3.cloudfront.net/sell/web/Galaxy S10 5G_afd44f8a80c04175a012cacc3e1ca70d.jpg",
    brand: "Samsung",
    type: null,
    brandCategoryValueId: 19,
    relatedGoods: [
      {
        productId: 1545698420358148096,
        name: "Galaxy S10 5G",
        brand: "Samsung",
        merchant: "Amazon",
        brandLogoUrl:
          "https://uptrade-public-static-resources.s3.us-east-2.amazonaws.com/amazon+logo.png",
        buyUrl:
          "https://www.amazon.com/Samsung-Enabled-SM-G977UZAVZW-Majestic-Unlocked/dp/B07WW23RNV/ref=sr_1_6?keywords=Samsung+Galaxy+Verizon+renewed&qid=1657219261&sr=8-6",
        currentPrice: 27963,
        specs: [
          {
            productId: 1545698420358148096,
            key: "CONDITION",
            value: "Excellent",
          },
          {
            productId: 1545698420358148096,
            key: "CARRIER",
            value: "Verizon",
          },
          {
            productId: 1545698420358148096,
            key: "STORAGE",
            value: "256GB",
          },
          {
            productId: 1545698420358148096,
            key: "COLOR",
            value: "Majestic Black",
          },
        ],
      },
      {
        productId: 1545698510980280320,
        name: "Galaxy S10 5G",
        brand: "Samsung",
        merchant: "Amazon",
        brandLogoUrl:
          "https://uptrade-public-static-resources.s3.us-east-2.amazonaws.com/amazon+logo.png",
        buyUrl:
          "https://www.amazon.com/Samsung-Galaxy-S10-5G-Silver/dp/B099GDY8X6/ref=sr_1_84?keywords=Samsung+Galaxy+T-Mobile+renewed&qid=1657243948&sr=8-84",
        currentPrice: 33900,
        specs: [
          {
            productId: 1545698510980280320,
            key: "CONDITION",
            value: "Excellent",
          },
          {
            productId: 1545698510980280320,
            key: "CARRIER",
            value: "T-Mobile",
          },
          {
            productId: 1545698510980280320,
            key: "STORAGE",
            value: "256GB",
          },
          {
            productId: 1545698510980280320,
            key: "COLOR",
            value: "Cloud Silver",
          },
        ],
      },
      {
        productId: 1545698380134772736,
        name: "Galaxy S10 5G",
        brand: "Samsung",
        merchant: "Amazon",
        brandLogoUrl:
          "https://uptrade-public-static-resources.s3.us-east-2.amazonaws.com/amazon+logo.png",
        buyUrl:
          "https://www.amazon.com/Samsung-Galaxy-S10-5G-Smartphone/dp/B08NWH87H3/ref=sr_1_135?keywords=Samsung+Galaxy+Unlocked+renewed&qid=1657217890&sr=8-135&srs=17871142011",
        currentPrice: 44995,
        specs: [
          {
            productId: 1545698380134772736,
            key: "CONDITION",
            value: "Excellent",
          },
          {
            productId: 1545698380134772736,
            key: "CARRIER",
            value: "Unlocked",
          },
          {
            productId: 1545698380134772736,
            key: "STORAGE",
            value: "256GB",
          },
          {
            productId: 1545698380134772736,
            key: "COLOR",
            value: "Crown Silver",
          },
        ],
      },
    ],
    aboutProduct:
      "The Samsung Galaxy S10 5G enabled smartphone is the crème de la crème of cellular devices. It boasts an infinity display with seamless edges, a durable exterior made from aluminum and Gorilla Glass, professional grade dual cameras with 3D depth-sensing, an all-day intelligent battery, and to top it all off, it’s 5G-ready so you can stream and surf the web faster than ever!",
    metaDescription:
      "Samsung Galaxy S10 5G enabled, pre-owned at a great price! Buy from UpTrade, photos of condition available. Backward compatible & curved infinity display!",
    metaDescCategory:
      "If you’re a savvy shopper that wants a phone to last, Samsung’s Galaxy S10 5G is about as future-proofed as you’re going to get. You won’t be scrambling to catch up to the spread of 5G networks when you purchase this phone, and the S10 5G also works on 4G networks in the meantime. In addition to accessing the fastest networks in the world, this phone also has a great screen, an excellent camera, and a smooth user interface.",
    qa: {
      "Why should you buy a used or refurbished Galaxy S10 5G?":
        "Why pay more if you are getting the same thing? A refurbished Galaxy S10 5G is fully functional and works exactly like a brand new Galaxy S10 5G, except for minimum to normal wear and tear on the cosmetics of the phone. A refurbished Galaxy S10 5G is a significant saving option when you plan to buy your next Galaxy S10 5G. Buying a refurbished Galaxy S10 5G is a fantastic choice. It will net you significant savings, mainly when a new Galaxy S10 5G costs much more.",
      "What does it mean if the Galaxy S10 5G is unlocked?":
        "Unlocked means the phone is not locked or limited to any carrier. An unlocked Galaxy S10 5G can be used with any carrier in the United States. If you are unsure whether the phone is compatible with your mobile phone carrier, buying an unlocked phone is the easiest option. An unlocked Galaxy S10 5G is likewise an incredible phone to buy as a gift since it will work with any carrier or wireless plan they may have.",
      "What does UpTrade Certified Used mean?":
        "There are hundreds or even thousands of used phone sellers, but unfortunately, not all are legit. To ensure the quality, we have selected a few reputable resellers and marketplaces that can provide high-quality used and refurbished phones. An UpTrade Certified Used Galaxy S10 5G means it has passed an in-depth inspection by our Certified Seller. UpTrade Certified means the Galaxy S10 5G you buy will work and function exactly like a new one.",
      "What is the return policy for the Used and Refurbished Galaxy S10 5G?":
        "Sure! The Refurbished Galaxy S10 5G listed here comes with a 30-day return policy from the Sellers. So if you have any problem with your purchase, you may contact the Seller and return it to them for up to 30 days.",
      "Are refurbished Android phones as good as new ones?":
        "That’s a good question! Technically, there’s no difference between refurbished and new except that there may be signs of use (if at all) on a refurbished Android phone. All UpTrade Certified Used Phone Sellers process the phones through a rigorous inspection. As a result, each smartphone is fully functional and works just like a new one.",
    },
  },
  {
    productName: "Galaxy S10 Plus",
    productCategoryValueId: 30,
    price: 10417,
    keyword: null,
    productImageUrl:
      "https://d3c745jesl5pj3.cloudfront.net/sell/web/Galaxy S10 Plus_030ccba8728c4fb896bc636f1542ddfb.jpg",
    brand: "Samsung",
    type: null,
    brandCategoryValueId: 19,
    relatedGoods: [
      {
        productId: 1545698364586487808,
        name: "Galaxy S10 Plus",
        brand: "Samsung",
        merchant: "Amazon",
        brandLogoUrl:
          "https://uptrade-public-static-resources.s3.us-east-2.amazonaws.com/amazon+logo.png",
        buyUrl:
          "https://www.amazon.com/Samsung-SM-A115A-Single-Sim-Android-Smartphone/dp/B08NC5G33F/ref=sr_1_80?keywords=Samsung+Galaxy+Unlocked+renewed&qid=1657217419&sr=8-80&srs=17871142011",
        currentPrice: 10699,
        specs: [
          {
            productId: 1545698364586487808,
            key: "CONDITION",
            value: "Excellent",
          },
          {
            productId: 1545698364586487808,
            key: "CARRIER",
            value: "Unlocked",
          },
          {
            productId: 1545698364586487808,
            key: "STORAGE",
            value: "32GB",
          },
          {
            productId: 1545698364586487808,
            key: "COLOR",
            value: "Black",
          },
        ],
      },
      {
        productId: 1545698487676727296,
        name: "Galaxy S10 Plus",
        brand: "Samsung",
        merchant: "Amazon",
        brandLogoUrl:
          "https://uptrade-public-static-resources.s3.us-east-2.amazonaws.com/amazon+logo.png",
        buyUrl:
          "https://www.amazon.com/Samsung-Factory-Unlocked-Warranty-Renewed/dp/B07PJV9ZLR/ref=sr_1_1?keywords=Samsung+Galaxy+Unlocked+renewed&qid=1657238391&sr=8-1",
        currentPrice: 21599,
        specs: [
          {
            productId: 1545698487676727296,
            key: "CONDITION",
            value: "Excellent",
          },
          {
            productId: 1545698487676727296,
            key: "CARRIER",
            value: "Unlocked",
          },
          {
            productId: 1545698487676727296,
            key: "STORAGE",
            value: "128GB",
          },
          {
            productId: 1545698487676727296,
            key: "COLOR",
            value: "Prism Black",
          },
        ],
      },
      {
        productId: 1545698346446123008,
        name: "Galaxy S10 Plus",
        brand: "Samsung",
        merchant: "Amazon",
        brandLogoUrl:
          "https://uptrade-public-static-resources.s3.us-east-2.amazonaws.com/amazon+logo.png",
        buyUrl:
          "https://www.amazon.com/Samsung-S10-Plus-Fully-Unlocked-Renewed/dp/B09DRKKGGV/ref=sr_1_31?keywords=Samsung+Galaxy+Unlocked+renewed&qid=1657216987&sr=8-31&srs=17871142011",
        currentPrice: 24089,
        specs: [
          {
            productId: 1545698346446123008,
            key: "CONDITION",
            value: "Excellent",
          },
          {
            productId: 1545698346446123008,
            key: "CARRIER",
            value: "Unlocked",
          },
          {
            productId: 1545698346446123008,
            key: "STORAGE",
            value: "128GB",
          },
          {
            productId: 1545698346446123008,
            key: "COLOR",
            value: "Prism Black",
          },
        ],
      },
      {
        productId: 1545698362619359232,
        name: "Galaxy S10 Plus",
        brand: "Samsung",
        merchant: "Amazon",
        brandLogoUrl:
          "https://uptrade-public-static-resources.s3.us-east-2.amazonaws.com/amazon+logo.png",
        buyUrl:
          "https://www.amazon.com/Samsung-Unlocked-Smartphone-Renewed-Ceramic/dp/B07VNNZ4SH/ref=sr_1_74?keywords=Samsung+Galaxy+Unlocked+renewed&qid=1657217419&sr=8-74&srs=17871142011",
        currentPrice: 28116,
        specs: [
          {
            productId: 1545698362619359232,
            key: "CONDITION",
            value: "Excellent",
          },
          {
            productId: 1545698362619359232,
            key: "CARRIER",
            value: "Unlocked",
          },
          {
            productId: 1545698362619359232,
            key: "STORAGE",
            value: "128GB",
          },
          {
            productId: 1545698362619359232,
            key: "COLOR",
            value: "Ceramic Black",
          },
        ],
      },
    ],
    aboutProduct:
      "The Samsung Galaxy S10 Plus is arguably Samsung’s best phone on the market. It’s got a slim design despite its massive, cinematic screen, plus a pro-level camera, ultrasonic fingerprint ID and an intelligent, super-powered battery to keep you running longer.",
    metaDescription:
      "Samsung’s best phone! Galaxy S10 Plus at an unbeatable price. Fully functional S10+, slim form with pro-grade camera, intelligent battery & giant screen.",
    metaDescCategory:
      "Reviewed as the “greatest of its generation,” the Samsung Galaxy S10 Plus is an excellent phone by all accounts, and adds a suite of new features compared to earlier Samsung Galaxy models. The S10 Plus sports a massive and vibrant screen that covers over 90% of the face of the phone, and it comes with special perks like a triple-lens camera, in-screen fingerprint sensor and wireless PowerShare.",
    qa: {
      "Why should you buy a used or refurbished Galaxy S10 Plus?":
        "Why pay more if you are getting the same thing? A refurbished Galaxy S10 Plus is fully functional and works exactly like a brand new Galaxy S10 Plus, except for minimum to normal wear and tear on the cosmetics of the phone. A refurbished Galaxy S10 Plus is a significant saving option when you plan to buy your next Galaxy S10 Plus. Buying a refurbished Galaxy S10 Plus is a fantastic choice. It will net you significant savings, mainly when a new Galaxy S10 Plus costs much more.",
      "What does it mean if the Galaxy S10 Plus is unlocked?":
        "Unlocked means the phone is not locked or limited to any carrier. An unlocked Galaxy S10 Plus can be used with any carrier in the United States. If you are unsure whether the phone is compatible with your mobile phone carrier, buying an unlocked phone is the easiest option. An unlocked Galaxy S10 Plus is likewise an incredible phone to buy as a gift since it will work with any carrier or wireless plan they may have.",
      "What does UpTrade Certified Used mean?":
        "There are hundreds or even thousands of used phone sellers, but unfortunately, not all are legit. To ensure the quality, we have selected a few reputable resellers and marketplaces that can provide high-quality used and refurbished phones. An UpTrade Certified Used Galaxy S10 Plus means it has passed an in-depth inspection by our Certified Seller. UpTrade Certified means the Galaxy S10 Plus you buy will work and function exactly like a new one.",
      "What is the return policy for the Used and Refurbished Galaxy S10 Plus?":
        "Sure! The Refurbished Galaxy S10 Plus listed here comes with a 30-day return policy from the Sellers. So if you have any problem with your purchase, you may contact the Seller and return it to them for up to 30 days.",
      "Are refurbished Android phones as good as new ones?":
        "That’s a good question! Technically, there’s no difference between refurbished and new except that there may be signs of use (if at all) on a refurbished Android phone. All UpTrade Certified Used Phone Sellers process the phones through a rigorous inspection. As a result, each smartphone is fully functional and works just like a new one.",
    },
  },
  {
    productName: "Galaxy S10+",
    productCategoryValueId: 56,
    price: 20400,
    keyword: null,
    productImageUrl:
      "https://d3c745jesl5pj3.cloudfront.net/sell/web/Galaxy S10jia_7729d81bfc814407a06c7ce04df1d02f.jpg",
    brand: "Samsung",
    type: null,
    brandCategoryValueId: 19,
    relatedGoods: [
      {
        productId: 1545698508144930816,
        name: "Galaxy S10+",
        brand: "Samsung",
        merchant: "Amazon",
        brandLogoUrl:
          "https://uptrade-public-static-resources.s3.us-east-2.amazonaws.com/amazon+logo.png",
        buyUrl:
          "https://www.amazon.com/Samsung-Galaxy-G975U-128GB-T-Mobile/dp/B07T8D4S8M/ref=sr_1_5?keywords=Samsung+Galaxy+T-Mobile+renewed&qid=1657243701&sr=8-5",
        currentPrice: 21200,
        specs: [
          {
            productId: 1545698508144930816,
            key: "CONDITION",
            value: "Excellent",
          },
          {
            productId: 1545698508144930816,
            key: "CARRIER",
            value: "T-Mobile",
          },
          {
            productId: 1545698508144930816,
            key: "STORAGE",
            value: "128GB",
          },
          {
            productId: 1545698508144930816,
            key: "COLOR",
            value: "Prism Black",
          },
        ],
      },
      {
        productId: 1545698524133617664,
        name: "Galaxy S10+",
        brand: "Samsung",
        merchant: "Amazon",
        brandLogoUrl:
          "https://uptrade-public-static-resources.s3.us-east-2.amazonaws.com/amazon+logo.png",
        buyUrl:
          "https://www.amazon.com/Samsung-Factory-Unlocked-Warranty-Renewed/dp/B07PFL29FR/ref=sr_1_5?keywords=Samsung+Galaxy+Xfinity+renewed&qid=1657246912&sr=8-5",
        currentPrice: 21550,
        specs: [
          {
            productId: 1545698524133617664,
            key: "CONDITION",
            value: "Excellent",
          },
          {
            productId: 1545698524133617664,
            key: "CARRIER",
            value: "Unlocked",
          },
          {
            productId: 1545698524133617664,
            key: "STORAGE",
            value: "128GB",
          },
          {
            productId: 1545698524133617664,
            key: "COLOR",
            value: "Prism White",
          },
        ],
      },
      {
        productId: 1545698419896774656,
        name: "Galaxy S10+",
        brand: "Samsung",
        merchant: "Amazon",
        brandLogoUrl:
          "https://uptrade-public-static-resources.s3.us-east-2.amazonaws.com/amazon+logo.png",
        buyUrl:
          "https://www.amazon.com/Samsung-Galaxy-128GB-Prism-Black/dp/B083G3KP6B/ref=sr_1_5?keywords=Samsung+Galaxy+Verizon+renewed&qid=1657219261&sr=8-5",
        currentPrice: 21650,
        specs: [
          {
            productId: 1545698419896774656,
            key: "CONDITION",
            value: "Excellent",
          },
          {
            productId: 1545698419896774656,
            key: "CARRIER",
            value: "Verizon",
          },
          {
            productId: 1545698419896774656,
            key: "STORAGE",
            value: "128GB",
          },
          {
            productId: 1545698419896774656,
            key: "COLOR",
            value: "Prism Black",
          },
        ],
      },
      {
        productId: 1545698469850935296,
        name: "Galaxy S10+",
        brand: "Samsung",
        merchant: "Amazon",
        brandLogoUrl:
          "https://uptrade-public-static-resources.s3.us-east-2.amazonaws.com/amazon+logo.png",
        buyUrl:
          "https://www.amazon.com/Samsung-Galaxy-Cellphone-Factory-Renewed/dp/B07TSR1VDZ/ref=sr_1_5?keywords=Samsung+Galaxy+AT%26T+renewed&qid=1657221327&sr=8-5",
        currentPrice: 21700,
        specs: [
          {
            productId: 1545698469850935296,
            key: "CONDITION",
            value: "Excellent",
          },
          {
            productId: 1545698469850935296,
            key: "CARRIER",
            value: "AT&T",
          },
          {
            productId: 1545698469850935296,
            key: "STORAGE",
            value: "128GB",
          },
          {
            productId: 1545698469850935296,
            key: "COLOR",
            value: "Prism Black",
          },
        ],
      },
      {
        productId: 1545698361671446528,
        name: "Galaxy S10+",
        brand: "Samsung",
        merchant: "Amazon",
        brandLogoUrl:
          "https://uptrade-public-static-resources.s3.us-east-2.amazonaws.com/amazon+logo.png",
        buyUrl:
          "https://www.amazon.com/Samsung-Snapdragon-Resistant-T-Mobile-Unlocked/dp/B08H5SNLML/ref=sr_1_69?keywords=Samsung+Galaxy+Unlocked+renewed&qid=1657217313&sr=8-69&srs=17871142011",
        currentPrice: 27782,
        specs: [
          {
            productId: 1545698361671446528,
            key: "CONDITION",
            value: "Excellent",
          },
          {
            productId: 1545698361671446528,
            key: "CARRIER",
            value: "Unlocked",
          },
          {
            productId: 1545698361671446528,
            key: "STORAGE",
            value: "128GB",
          },
          {
            productId: 1545698361671446528,
            key: "COLOR",
            value: "Prism Blue",
          },
        ],
      },
    ],
    aboutProduct: null,
    metaDescription:
      "Find your certified pre-owned Galaxy S10+ from trusted sellers.",
    metaDescCategory: null,
    qa: {
      "Why should you buy a used or refurbished Galaxy S10+?":
        "Why pay more if you are getting the same thing? A refurbished Galaxy S10+ is fully functional and works exactly like a brand new Galaxy S10+, except for minimum to normal wear and tear on the cosmetics of the phone. A refurbished Galaxy S10+ is a significant saving option when you plan to buy your next Galaxy S10+. Buying a refurbished Galaxy S10+ is a fantastic choice. It will net you significant savings, mainly when a new Galaxy S10+ costs much more.",
      "What does it mean if the Galaxy S10+ is unlocked?":
        "Unlocked means the phone is not locked or limited to any carrier. An unlocked Galaxy S10+ can be used with any carrier in the United States. If you are unsure whether the phone is compatible with your mobile phone carrier, buying an unlocked phone is the easiest option. An unlocked Galaxy S10+ is likewise an incredible phone to buy as a gift since it will work with any carrier or wireless plan they may have.",
      "What does UpTrade Certified Used mean?":
        "There are hundreds or even thousands of used phone sellers, but unfortunately, not all are legit. To ensure the quality, we have selected a few reputable resellers and marketplaces that can provide high-quality used and refurbished phones. An UpTrade Certified Used Galaxy S10+ means it has passed an in-depth inspection by our Certified Seller. UpTrade Certified means the Galaxy S10+ you buy will work and function exactly like a new one.",
      "What is the return policy for the Used and Refurbished Galaxy S10+?":
        "Sure! The Refurbished Galaxy S10+ listed here comes with a 30-day return policy from the Sellers. So if you have any problem with your purchase, you may contact the Seller and return it to them for up to 30 days.",
      "Are refurbished Android phones as good as new ones?":
        "That’s a good question! Technically, there’s no difference between refurbished and new except that there may be signs of use (if at all) on a refurbished Android phone. All UpTrade Certified Used Phone Sellers process the phones through a rigorous inspection. As a result, each smartphone is fully functional and works just like a new one.",
    },
  },
  {
    productName: "Galaxy S10e",
    productCategoryValueId: 53,
    price: 12900,
    keyword: null,
    productImageUrl:
      "https://d3c745jesl5pj3.cloudfront.net/sell/web/Galaxy S10e_07b31d4bfc5f4ca698ffd5362ae3e687.jpg",
    brand: "Samsung",
    type: null,
    brandCategoryValueId: 19,
    relatedGoods: [
      {
        productId: 1545698488582696960,
        name: "Galaxy S10e",
        brand: "Samsung",
        merchant: "Amazon",
        brandLogoUrl:
          "https://uptrade-public-static-resources.s3.us-east-2.amazonaws.com/amazon+logo.png",
        buyUrl:
          "https://www.amazon.com/Samsung-Factory-Unlocked-Warranty-Renewed/dp/B07PB3WV54/ref=sr_1_5?keywords=Samsung+Galaxy+Unlocked+renewed&qid=1657238391&sr=8-5",
        currentPrice: 14000,
        specs: [
          {
            productId: 1545698488582696960,
            key: "CONDITION",
            value: "Excellent",
          },
          {
            productId: 1545698488582696960,
            key: "CARRIER",
            value: "Unlocked",
          },
          {
            productId: 1545698488582696960,
            key: "STORAGE",
            value: "128GB",
          },
          {
            productId: 1545698488582696960,
            key: "COLOR",
            value: "Prism White",
          },
        ],
      },
      {
        productId: 1545698469381173248,
        name: "Galaxy S10e",
        brand: "Samsung",
        merchant: "Amazon",
        brandLogoUrl:
          "https://uptrade-public-static-resources.s3.us-east-2.amazonaws.com/amazon+logo.png",
        buyUrl:
          "https://www.amazon.com/AT-Samsung-Galaxy-S10e-SM-G970UZKAATT/dp/B07YNV15KN/ref=sr_1_2?keywords=Samsung+Galaxy+AT%26T+renewed&qid=1657221327&sr=8-2",
        currentPrice: 14382,
        specs: [
          {
            productId: 1545698469381173248,
            key: "CONDITION",
            value: "Excellent",
          },
          {
            productId: 1545698469381173248,
            key: "CARRIER",
            value: "AT&T",
          },
          {
            productId: 1545698469381173248,
            key: "STORAGE",
            value: "128GB",
          },
          {
            productId: 1545698469381173248,
            key: "COLOR",
            value: "Prism Black",
          },
        ],
      },
      {
        productId: 1545698418957250560,
        name: "Galaxy S10e",
        brand: "Samsung",
        merchant: "Amazon",
        brandLogoUrl:
          "https://uptrade-public-static-resources.s3.us-east-2.amazonaws.com/amazon+logo.png",
        buyUrl:
          "https://www.amazon.com/Samsung-Galaxy-Verizon-Unlocked-Renewed/dp/B07SQB46KY/ref=sr_1_2?keywords=Samsung+Galaxy+Verizon+renewed&qid=1657219261&sr=8-2",
        currentPrice: 14600,
        specs: [
          {
            productId: 1545698418957250560,
            key: "CONDITION",
            value: "Excellent",
          },
          {
            productId: 1545698418957250560,
            key: "CARRIER",
            value: "Verizon",
          },
          {
            productId: 1545698418957250560,
            key: "STORAGE",
            value: "128GB",
          },
          {
            productId: 1545698418957250560,
            key: "COLOR",
            value: "Prism Black",
          },
        ],
      },
      {
        productId: 1545698507184435200,
        name: "Galaxy S10e",
        brand: "Samsung",
        merchant: "Amazon",
        brandLogoUrl:
          "https://uptrade-public-static-resources.s3.us-east-2.amazonaws.com/amazon+logo.png",
        buyUrl:
          "https://www.amazon.com/Samsung-Galaxy-G970U-128GB-T-Mobile/dp/B07VX9579Y/ref=sr_1_2?keywords=Samsung+Galaxy+T-Mobile+renewed&qid=1657243701&sr=8-2",
        currentPrice: 14800,
        specs: [
          {
            productId: 1545698507184435200,
            key: "CONDITION",
            value: "Excellent",
          },
          {
            productId: 1545698507184435200,
            key: "CARRIER",
            value: "T-Mobile",
          },
          {
            productId: 1545698507184435200,
            key: "STORAGE",
            value: "128GB",
          },
          {
            productId: 1545698507184435200,
            key: "COLOR",
            value: "Prism Black",
          },
        ],
      },
      {
        productId: 1545698344499965952,
        name: "Galaxy S10e",
        brand: "Samsung",
        merchant: "Amazon",
        brandLogoUrl:
          "https://uptrade-public-static-resources.s3.us-east-2.amazonaws.com/amazon+logo.png",
        buyUrl:
          "https://www.amazon.com/Samsung-Galaxy-S10E-Fully-Unlocked-Renewed/dp/B09DRHTSYZ/ref=sr_1_24?keywords=Samsung+Galaxy+Unlocked+renewed&qid=1657216882&sr=8-24&srs=17871142011",
        currentPrice: 15999,
        specs: [
          {
            productId: 1545698344499965952,
            key: "CONDITION",
            value: "Excellent",
          },
          {
            productId: 1545698344499965952,
            key: "CARRIER",
            value: "Unlocked",
          },
          {
            productId: 1545698344499965952,
            key: "STORAGE",
            value: "128GB",
          },
          {
            productId: 1545698344499965952,
            key: "COLOR",
            value: "Black",
          },
        ],
      },
    ],
    aboutProduct:
      "The Samsung Galaxy S10e is the perfect phone for anyone looking for a high-end device at a budget price. Samsung’s value phone comes with many of the same bells and whistles as its more expensive family members such as a pro-level camera, lightning fast processing, First Touch fingerprint ID, wireless powershare, and an intelligent battery. What’s not to love?",
    metaDescription:
      "Fully functional Samsung Galaxy S10e, inspected and certified; photos & vid available. Wireless powershare, First Touch unlock, intelligent all-day battery",
    metaDescCategory:
      "The Samsung Galaxy S10e is the ideal phone for anyone looking for an updated and powerful device without being inundated with special features. With the S10e, you get many of the same incredible perks as the S10 and S10 Plus, and none of the non-essentials (like their higher price-points). It’s easy to use one-handed, has lightning-fast processing power, and includes a high-quality camera.",
    qa: {
      "Why should you buy a used or refurbished Galaxy S10e?":
        "I am glad that you asked! A refurbished Galaxy S10e is a great opportunity to save when you are looking to purchase your next phone. Buying a refurbished Galaxy S10e can be an wonderful choice and can net you huge savings, particularly when the cost of a new Galaxy S10e is crazy expensive. A refurbished Galaxy S10e is completely functional and works very much like a brand new Galaxy S10e.",
      "What does it mean if the Galaxy S10e is unlocked?":
        "You may use an unlocked Galaxy S10e with any carrier in the United States. Purchasing an unlocked Galaxy S10e is an wonderful choice if you aren’t sure which wireless carrier you want to sign up with, or if you want to be sure the Galaxy S10e will work with your current carrier. An unlocked Galaxy S10e is likewise an incredible phone to buy as a gift since it will work with any carrier or wireless plan that they may have.",
      "What does UpTrade Certified Used mean?":
        "UpTrade Certified means the Galaxy S10e you buy will work and function just like new. Among hundreds of used phone and gadget sellers, we have chosen a modest bunch of reputable resellers and marketplaces that provide high-quality used and refurbished phones. An UpTrade Certified Used Galaxy S10e means it has passed an in-depth inspection by our Certified Seller.",
      "What is the return policy for the Used and Refurbished Galaxy S10e?":
        "Yes! All UpTrade Certified Used Phone Resellers and Marketplaces offer 30-day money-back-guarantee on Galaxy S10e phones listed here. If you aren’t satisfied with your purchase you may return your Galaxy S10e to your seller for free for up to 30 days.",
      "Are refurbished Android phones as good as new ones?":
        "Many people wonder if a refurbished Android phone is as good as a new one. Typically there’s really no difference between them except for the fact that there may be signs of use (if at all) on a refurbished phone. A refurbished Android phone should be fully functional and work just like a new Android phone. All UpTrade Certified Used Phone Resellers process the phones through a rigorous inspection so that each phone is fully functional and works just like a new phone.",
    },
  },
  {
    productName: "Galaxy S20",
    productCategoryValueId: 822,
    price: null,
    keyword: null,
    productImageUrl:
      "https://d3c745jesl5pj3.cloudfront.net/sell/web/S20 5G_8eb4bdb11a624ed4aca40246c3f3be91.jpg",
    brand: "Samsung",
    type: null,
    brandCategoryValueId: 19,
    relatedGoods: [
      {
        productId: 1545689879111036928,
        name: "Galaxy A50",
        brand: "Samsung",
        merchant: "Amazon",
        brandLogoUrl:
          "https://uptrade-public-static-resources.s3.us-east-2.amazonaws.com/amazon+logo.png",
        buyUrl:
          "https://www.amazon.com/Samsung-SM-A505G-Factory-Unlocked-Renewed/dp/B07RL93F7T/ref=sr_1_3?crid=3NBH91UQVO742&keywords=Samsung+Galaxy+unlocked+renewed&qid=1654951575&sprefix=samsung+galaxy+unlocked+renewed%2Cspecialty-aps%2C382&sr=8-3&srs=17871142011",
        currentPrice: 7900,
        specs: [
          {
            productId: 1545689879111036928,
            key: "CONDITION",
            value: "Excellent",
          },
          {
            productId: 1545689879111036928,
            key: "CARRIER",
            value: "Unlocked",
          },
          {
            productId: 1545689879111036928,
            key: "STORAGE",
            value: "64GB",
          },
          {
            productId: 1545689879111036928,
            key: "COLOR",
            value: "Black",
          },
        ],
      },
      {
        productId: 1545689910836752384,
        name: "Galaxy Note 8",
        brand: "Samsung",
        merchant: "Amazon",
        brandLogoUrl:
          "https://uptrade-public-static-resources.s3.us-east-2.amazonaws.com/amazon+logo.png",
        buyUrl:
          "https://www.amazon.com/Samsung-Galaxy-Note-Smartphone-Refurbished/dp/B07HFK5PQQ/ref=sr_1_66?crid=3NBH91UQVO742&keywords=Samsung+Galaxy+unlocked+renewed&qid=1654953630&sprefix=samsung+galaxy+unlocked+renewed%2Cspecialty-aps%2C382&sr=8-66&srs=17871142011",
        currentPrice: 7999,
        specs: [
          {
            productId: 1545689910836752384,
            key: "CONDITION",
            value: "Excellent",
          },
          {
            productId: 1545689910836752384,
            key: "CARRIER",
            value: "Unlocked",
          },
          {
            productId: 1545689910836752384,
            key: "STORAGE",
            value: "64GB",
          },
          {
            productId: 1545689910836752384,
            key: "COLOR",
            value: "Orchid Gray",
          },
        ],
      },
      {
        productId: 1545689999491756032,
        name: "Galaxy S8 Plus",
        brand: "Samsung",
        merchant: "Amazon",
        brandLogoUrl:
          "https://uptrade-public-static-resources.s3.us-east-2.amazonaws.com/amazon+logo.png",
        buyUrl:
          "https://www.amazon.com/Samsung-Galaxy-T-Mobile-Unlocked-Renewed/dp/B07DZP1BDG/ref=sr_1_138?crid=3NBH91UQVO742&keywords=Samsung+Galaxy+unlocked+renewed&qid=1654956295&sprefix=samsung+galaxy+unlocked+renewed%2Cspecialty-aps%2C382&sr=8-138&srs=17871142011",
        currentPrice: 9999,
        specs: [
          {
            productId: 1545689999491756032,
            key: "CONDITION",
            value: "Excellent",
          },
          {
            productId: 1545689999491756032,
            key: "CARRIER",
            value: "Unlocked",
          },
          {
            productId: 1545689999491756032,
            key: "STORAGE",
            value: "64GB",
          },
          {
            productId: 1545689999491756032,
            key: "COLOR",
            value: "Arctic Silver",
          },
        ],
      },
      {
        productId: 1545689906340458496,
        name: "Galaxy Note 9",
        brand: "Samsung",
        merchant: "Amazon",
        brandLogoUrl:
          "https://uptrade-public-static-resources.s3.us-east-2.amazonaws.com/amazon+logo.png",
        buyUrl:
          "https://www.amazon.com/Samsung-Galaxy-N960U-T-Mobile-Unlocked/dp/B08BW9KH55/ref=sr_1_62?crid=3NBH91UQVO742&keywords=Samsung+Galaxy+unlocked+renewed&qid=1654953630&sprefix=samsung+galaxy+unlocked+renewed%2Cspecialty-aps%2C382&sr=8-62&srs=17871142011",
        currentPrice: 9999,
        specs: [
          {
            productId: 1545689906340458496,
            key: "CONDITION",
            value: "Excellent",
          },
          {
            productId: 1545689906340458496,
            key: "CARRIER",
            value: "Unlocked",
          },
          {
            productId: 1545689906340458496,
            key: "STORAGE",
            value: "128GB",
          },
          {
            productId: 1545689906340458496,
            key: "COLOR",
            value: "Ocean Blue",
          },
        ],
      },
      {
        productId: 1545689917975457792,
        name: "Galaxy S7",
        brand: "Samsung",
        merchant: "Amazon",
        brandLogoUrl:
          "https://uptrade-public-static-resources.s3.us-east-2.amazonaws.com/amazon+logo.png",
        buyUrl:
          "https://www.amazon.com/Samsung-Galaxy-G930T-T-Mobile-Unlocked/dp/B08CBKYVGT/ref=sr_1_76?crid=3NBH91UQVO742&keywords=Samsung+Galaxy+unlocked+renewed&qid=1654954075&sprefix=samsung+galaxy+unlocked+renewed%2Cspecialty-aps%2C382&sr=8-76&srs=17871142011",
        currentPrice: 9999,
        specs: [
          {
            productId: 1545689917975457792,
            key: "CONDITION",
            value: "Excellent",
          },
          {
            productId: 1545689917975457792,
            key: "CARRIER",
            value: "Unlocked",
          },
          {
            productId: 1545689917975457792,
            key: "STORAGE",
            value: "32GB",
          },
          {
            productId: 1545689917975457792,
            key: "COLOR",
            value: "Black",
          },
        ],
      },
    ],
    aboutProduct:
      "Galaxy S20 5G comes with an expansive 6.2” Infinity-O display and new 30x Space Zoom. The modern design gives you an immersive, cinema-quality experience with next-level functionality. Take pro-quality, hi-res images and video with a groundbreaking 64Mp camera and full system of studio lenses with super stabilization. Galaxy S20 5G battery lasts all day to power every scroll, click, call, tap, playlist and season finale. Do more of what you love with the device that gives you more.",
    metaDescription:
      "Samsung Galaxy S20 5G. All phones are Fully Inspected, Certified Used, and Fully Functional. Great price.  5G connectivity, full HD display and fast charging battery.",
    metaDescCategory:
      "Samsung · Samsung Galaxy · Galaxy S · Galaxy S20 · Android · 6.2″ · Fingerprint Scanner · Facial Recognition · 64 MP front camera · 12 MP rear camera",
    qa: {
      "Why should you buy a used or refurbished Galaxy S20 5G?":
        "I am glad that you asked! A refurbished Galaxy S20 5G is a great opportunity to save when you are looking to purchase your next phone. Buying a refurbished Galaxy S20 5G can be an wonderful choice and can net you huge savings, particularly when the cost of a new Galaxy S20 5G is crazy expensive. A refurbished Galaxy S20 5G is completely functional and works very much like a brand new Galaxy S20 5G.",
      "What does it mean if the Galaxy S20 5G is unlocked?":
        "You may use an unlocked Galaxy S20 5G with any carrier in the United States. Purchasing an unlocked Galaxy S20 5G is an wonderful choice if you aren’t sure which wireless carrier you want to sign up with, or if you want to be sure the Galaxy S20 5G will work with your current carrier. An unlocked Galaxy S20 5G is likewise an incredible phone to buy as a gift since it will work with any carrier or wireless plan that they may have.",
      "What does UpTrade Certified Used mean?":
        "UpTrade Certified means the Galaxy S20 5G you buy will work and function just like new. Among hundreds of used phone and gadget sellers, we have chosen a modest bunch of reputable resellers and marketplaces that provide high-quality used and refurbished phones. An UpTrade Certified Used Galaxy S20 5G means it has passed an in-depth inspection by our Certified Seller.",
      "What is the return policy for the Used and Refurbished Galaxy S20 5G?":
        "Yes! All UpTrade Certified Used Phone Resellers and Marketplaces offer 30-day money-back-guarantee on Galaxy S20 5G phones listed here. If you aren’t satisfied with your purchase you may return your Galaxy S20 5G to your seller for free for up to 30 days.",
      "Are refurbished Android phones as good as new ones?":
        "Many people wonder if a refurbished Android phone is as good as a new one. Typically there’s really no difference between them except for the fact that there may be signs of use (if at all) on a refurbished phone. A refurbished Android phone should be fully functional and work just like a new Android phone. All UpTrade Certified Used Phone Resellers process the phones through a rigorous inspection so that each phone is fully functional and works just like a new phone.",
    },
  },
  {
    productName: "Galaxy S20 5G",
    productCategoryValueId: 180,
    price: 29899,
    keyword: null,
    productImageUrl:
      "https://d3c745jesl5pj3.cloudfront.net/sell/web/S20 5G_8eb4bdb11a624ed4aca40246c3f3be91.jpg",
    brand: "Samsung",
    type: null,
    brandCategoryValueId: 19,
    relatedGoods: [
      {
        productId: 1545698474309480448,
        name: "Galaxy S20 5G",
        brand: "Samsung",
        merchant: "Amazon",
        brandLogoUrl:
          "https://uptrade-public-static-resources.s3.us-east-2.amazonaws.com/amazon+logo.png",
        buyUrl:
          "https://www.amazon.com/Samsung-Galaxy-S20-5G-128GB/dp/B08HG28N35/ref=sr_1_29?keywords=Samsung+Galaxy+AT%26T+renewed&qid=1657221504&sr=8-29",
        currentPrice: 31599,
        specs: [
          {
            productId: 1545698474309480448,
            key: "CONDITION",
            value: "Excellent",
          },
          {
            productId: 1545698474309480448,
            key: "CARRIER",
            value: "Unlocked",
          },
          {
            productId: 1545698474309480448,
            key: "STORAGE",
            value: "128GB",
          },
          {
            productId: 1545698474309480448,
            key: "COLOR",
            value: "Cloud Blue",
          },
        ],
      },
      {
        productId: 1545698418500071424,
        name: "Galaxy S20 5G",
        brand: "Samsung",
        merchant: "Amazon",
        brandLogoUrl:
          "https://uptrade-public-static-resources.s3.us-east-2.amazonaws.com/amazon+logo.png",
        buyUrl:
          "https://www.amazon.com/Samsung-Galaxy-128GB-Cosmic-Gray/dp/B08BX6WZW1/ref=sr_1_1?keywords=Samsung+Galaxy+Verizon+renewed&qid=1657219261&sr=8-1",
        currentPrice: 32700,
        specs: [
          {
            productId: 1545698418500071424,
            key: "CONDITION",
            value: "Excellent",
          },
          {
            productId: 1545698418500071424,
            key: "CARRIER",
            value: "Verizon",
          },
          {
            productId: 1545698418500071424,
            key: "STORAGE",
            value: "128GB",
          },
          {
            productId: 1545698418500071424,
            key: "COLOR",
            value: "Cosmic Gray",
          },
        ],
      },
      {
        productId: 1545698488138100736,
        name: "Galaxy S20 5G",
        brand: "Samsung",
        merchant: "Amazon",
        brandLogoUrl:
          "https://uptrade-public-static-resources.s3.us-east-2.amazonaws.com/amazon+logo.png",
        buyUrl:
          "https://www.amazon.com/Samsung-Galaxy-S20-5G-Cosmic/dp/B08B8Y5R4Y/ref=sr_1_4?keywords=Samsung+Galaxy+Unlocked+renewed&qid=1657238391&sr=8-4",
        currentPrice: 33599,
        specs: [
          {
            productId: 1545698488138100736,
            key: "CONDITION",
            value: "Excellent",
          },
          {
            productId: 1545698488138100736,
            key: "CARRIER",
            value: "Unlocked",
          },
          {
            productId: 1545698488138100736,
            key: "STORAGE",
            value: "128GB",
          },
          {
            productId: 1545698488138100736,
            key: "COLOR",
            value: "Cosmic Gray",
          },
        ],
      },
      {
        productId: 1545698433402433536,
        name: "Galaxy S20 5G",
        brand: "Samsung",
        merchant: "Amazon",
        brandLogoUrl:
          "https://uptrade-public-static-resources.s3.us-east-2.amazonaws.com/amazon+logo.png",
        buyUrl:
          "https://www.amazon.com/Galaxy-S20-5G-Smartphone-Capability/dp/B096476HH7/ref=sr_1_85?keywords=Samsung+Galaxy+Verizon+renewed&qid=1657219654&sr=8-85",
        currentPrice: 35964,
        specs: [
          {
            productId: 1545698433402433536,
            key: "CONDITION",
            value: "Excellent",
          },
          {
            productId: 1545698433402433536,
            key: "CARRIER",
            value: "Unlocked",
          },
          {
            productId: 1545698433402433536,
            key: "STORAGE",
            value: "128GB",
          },
          {
            productId: 1545698433402433536,
            key: "COLOR",
            value: "Cosmic Gray",
          },
        ],
      },
      {
        productId: 1545698409402626048,
        name: "Galaxy S20 5G",
        brand: "Samsung",
        merchant: "Amazon",
        brandLogoUrl:
          "https://uptrade-public-static-resources.s3.us-east-2.amazonaws.com/amazon+logo.png",
        buyUrl:
          "https://www.amazon.com/Samsung-Unlocked-Android-Smartphone-SM-G981U/dp/B08D27N4DN/ref=sr_1_251?keywords=Samsung+Galaxy+Unlocked+renewed&qid=1657218726&sr=8-251&srs=17871142011",
        currentPrice: 38999,
        specs: [
          {
            productId: 1545698409402626048,
            key: "CONDITION",
            value: "Excellent",
          },
          {
            productId: 1545698409402626048,
            key: "CARRIER",
            value: "Unlocked",
          },
          {
            productId: 1545698409402626048,
            key: "STORAGE",
            value: "128GB",
          },
          {
            productId: 1545698409402626048,
            key: "COLOR",
            value: "Cosmic Gray",
          },
        ],
      },
    ],
    aboutProduct:
      "Galaxy S20 5G comes with an expansive 6.2” Infinity-O display and new 30x Space Zoom. The modern design gives you an immersive, cinema-quality experience with next-level functionality. Take pro-quality, hi-res images and video with a groundbreaking 64Mp camera and full system of studio lenses with super stabilization. Galaxy S20 5G battery lasts all day to power every scroll, click, call, tap, playlist and season finale. Do more of what you love with the device that gives you more.",
    metaDescription:
      "Samsung Galaxy S20 5G. All phones are Fully Inspected, Certified Used, and Fully Functional. Great price.  5G connectivity, full HD display and fast charging battery.",
    metaDescCategory:
      "Samsung · Samsung Galaxy · Galaxy S · Galaxy S20 · Android · 6.2″ · Fingerprint Scanner · Facial Recognition · 64 MP front camera · 12 MP rear camera",
    qa: {
      "Why should you buy a used or refurbished Galaxy S20 5G?":
        "I am glad that you asked! A refurbished Galaxy S20 5G is a great opportunity to save when you are looking to purchase your next phone. Buying a refurbished Galaxy S20 5G can be an wonderful choice and can net you huge savings, particularly when the cost of a new Galaxy S20 5G is crazy expensive. A refurbished Galaxy S20 5G is completely functional and works very much like a brand new Galaxy S20 5G.",
      "What does it mean if the Galaxy S20 5G is unlocked?":
        "You may use an unlocked Galaxy S20 5G with any carrier in the United States. Purchasing an unlocked Galaxy S20 5G is an wonderful choice if you aren’t sure which wireless carrier you want to sign up with, or if you want to be sure the Galaxy S20 5G will work with your current carrier. An unlocked Galaxy S20 5G is likewise an incredible phone to buy as a gift since it will work with any carrier or wireless plan that they may have.",
      "What does UpTrade Certified Used mean?":
        "UpTrade Certified means the Galaxy S20 5G you buy will work and function just like new. Among hundreds of used phone and gadget sellers, we have chosen a modest bunch of reputable resellers and marketplaces that provide high-quality used and refurbished phones. An UpTrade Certified Used Galaxy S20 5G means it has passed an in-depth inspection by our Certified Seller.",
      "What is the return policy for the Used and Refurbished Galaxy S20 5G?":
        "Yes! All UpTrade Certified Used Phone Resellers and Marketplaces offer 30-day money-back-guarantee on Galaxy S20 5G phones listed here. If you aren’t satisfied with your purchase you may return your Galaxy S20 5G to your seller for free for up to 30 days.",
      "Are refurbished Android phones as good as new ones?":
        "Many people wonder if a refurbished Android phone is as good as a new one. Typically there’s really no difference between them except for the fact that there may be signs of use (if at all) on a refurbished phone. A refurbished Android phone should be fully functional and work just like a new Android phone. All UpTrade Certified Used Phone Resellers process the phones through a rigorous inspection so that each phone is fully functional and works just like a new phone.",
    },
  },
  {
    productName: "Galaxy S20 FE 5G",
    productCategoryValueId: 108,
    price: 28900,
    keyword: null,
    productImageUrl:
      "https://d3c745jesl5pj3.cloudfront.net/sell/web/Galaxy S20 FE 5G_509515a2a00c4de4ae20323e474c142e.jpg",
    brand: "Samsung",
    type: null,
    brandCategoryValueId: 19,
    relatedGoods: [
      {
        productId: 1545698425651359744,
        name: "Galaxy S20 FE 5G",
        brand: "Samsung",
        merchant: "Amazon",
        brandLogoUrl:
          "https://uptrade-public-static-resources.s3.us-east-2.amazonaws.com/amazon+logo.png",
        buyUrl:
          "https://www.amazon.com/Samsung-Galaxy-S20-FE-128GB/dp/B08L34JQ9C/ref=sr_1_30?keywords=Samsung+Galaxy+Verizon+renewed&qid=1657219379&sr=8-30",
        currentPrice: 29800,
        specs: [
          {
            productId: 1545698425651359744,
            key: "CONDITION",
            value: "Excellent",
          },
          {
            productId: 1545698425651359744,
            key: "CARRIER",
            value: "Unlocked",
          },
          {
            productId: 1545698425651359744,
            key: "STORAGE",
            value: "128GB",
          },
          {
            productId: 1545698425651359744,
            key: "COLOR",
            value: "Cloud Navy",
          },
        ],
      },
      {
        productId: 1545698498007298048,
        name: "Galaxy S20 FE 5G",
        brand: "Samsung",
        merchant: "Amazon",
        brandLogoUrl:
          "https://uptrade-public-static-resources.s3.us-east-2.amazonaws.com/amazon+logo.png",
        buyUrl:
          "https://www.amazon.com/Samsung-Galaxy-128GB-Cloud-Mint/dp/B08L34NZDM/ref=sr_1_44?keywords=Samsung+Galaxy+AT%26T+renewed&qid=1657241193&sr=8-44",
        currentPrice: 30500,
        specs: [
          {
            productId: 1545698498007298048,
            key: "CONDITION",
            value: "Excellent",
          },
          {
            productId: 1545698498007298048,
            key: "CARRIER",
            value: "Unlocked",
          },
          {
            productId: 1545698498007298048,
            key: "STORAGE",
            value: "128GB",
          },
          {
            productId: 1545698498007298048,
            key: "COLOR",
            value: "Cloud Mint",
          },
        ],
      },
      {
        productId: 1545698421788405760,
        name: "Galaxy S20 FE 5G",
        brand: "Samsung",
        merchant: "Amazon",
        brandLogoUrl:
          "https://uptrade-public-static-resources.s3.us-east-2.amazonaws.com/amazon+logo.png",
        buyUrl:
          "https://www.amazon.com/Samsung-Galaxy-128GB-Verizon-Renewed/dp/B09LG4PSB6/ref=sr_1_13?keywords=Samsung+Galaxy+Verizon+renewed&qid=1657219261&sr=8-13",
        currentPrice: 32184,
        specs: [
          {
            productId: 1545698421788405760,
            key: "CONDITION",
            value: "Excellent",
          },
          {
            productId: 1545698421788405760,
            key: "CARRIER",
            value: "Verizon",
          },
          {
            productId: 1545698421788405760,
            key: "STORAGE",
            value: "128GB",
          },
          {
            productId: 1545698421788405760,
            key: "COLOR",
            value: "Cloud Navy",
          },
        ],
      },
      {
        productId: 1545698506727256064,
        name: "Galaxy S20 FE 5G",
        brand: "Samsung",
        merchant: "Amazon",
        brandLogoUrl:
          "https://uptrade-public-static-resources.s3.us-east-2.amazonaws.com/amazon+logo.png",
        buyUrl:
          "https://www.amazon.com/Samsung-Galaxy-128GB-Cloud-Navy/dp/B09353YZR8/ref=sr_1_1?keywords=Samsung+Galaxy+T-Mobile+renewed&qid=1657243701&sr=8-1",
        currentPrice: 32199,
        specs: [
          {
            productId: 1545698506727256064,
            key: "CONDITION",
            value: "Excellent",
          },
          {
            productId: 1545698506727256064,
            key: "CARRIER",
            value: "T-Mobile",
          },
          {
            productId: 1545698506727256064,
            key: "STORAGE",
            value: "128GB",
          },
          {
            productId: 1545698506727256064,
            key: "COLOR",
            value: "Cloud Navy",
          },
        ],
      },
      {
        productId: 1545698340037226496,
        name: "Galaxy S20 FE 5G",
        brand: "Samsung",
        merchant: "Amazon",
        brandLogoUrl:
          "https://uptrade-public-static-resources.s3.us-east-2.amazonaws.com/amazon+logo.png",
        buyUrl:
          "https://www.amazon.com/Samsung-Snapdragon-Resistant-Unlocked-T-Mobile/dp/B08Y7ZQQ81/ref=sr_1_9?keywords=Samsung+Galaxy+Unlocked+renewed&qid=1657216791&sr=8-9&srs=17871142011",
        currentPrice: 33500,
        specs: [
          {
            productId: 1545698340037226496,
            key: "CONDITION",
            value: "Excellent",
          },
          {
            productId: 1545698340037226496,
            key: "CARRIER",
            value: "Unlocked",
          },
          {
            productId: 1545698340037226496,
            key: "STORAGE",
            value: "128GB",
          },
          {
            productId: 1545698340037226496,
            key: "COLOR",
            value: "Cloud Navy",
          },
        ],
      },
    ],
    aboutProduct:
      "The Galaxy S20 FE 5G phone boasts high network speeds and a large, cinematic display.  The Galaxy S20 FE 5G Smartphone from Samsung pushes forward what's possible with a triple camera system features a 12MP ultra-wide, 12MP wide, and 8MP telephoto camera - plus a 32MP selfie camera. The cameras also have access to a 30x super resolution zoom feature and 4K video capabilities.",
    metaDescription:
      "Galaxy S20 FE 5G. All phones are Fully Inspected, Certified Used, and Fully Functional. Great price.  5G. 12MP Ultra-wide camera. 4K Video resolution.",
    metaDescCategory:
      "Samsung · Samsung Galaxy · Galaxy S · Galaxy S20 · Android · 6.5″ · Fingerprint Scanner · Facial Recognition · 32 MP front camera · 12 MP rear camera",
    qa: {
      "Why should you buy a used or refurbished Galaxy S20 FE 5G?":
        "Why pay more if you are getting the same thing? A refurbished Galaxy S20 FE 5G is fully functional and works exactly like a brand new Galaxy S20 FE 5G, except for minimum to normal wear and tear on the cosmetics of the phone. A refurbished Galaxy S20 FE 5G is a significant saving option when you plan to buy your next Galaxy S20 FE 5G. Buying a refurbished Galaxy S20 FE 5G is a fantastic choice. It will net you significant savings, mainly when a new Galaxy S20 FE 5G costs much more.",
      "What does it mean if the Galaxy S20 FE 5G is unlocked?":
        "Unlocked means the phone is not locked or limited to any carrier. An unlocked Galaxy S20 FE 5G can be used with any carrier in the United States. If you are unsure whether the phone is compatible with your mobile phone carrier, buying an unlocked phone is the easiest option. An unlocked Galaxy S20 FE 5G is likewise an incredible phone to buy as a gift since it will work with any carrier or wireless plan they may have.",
      "What does UpTrade Certified Used mean?":
        "There are hundreds or even thousands of used phone sellers, but unfortunately, not all are legit. To ensure the quality, we have selected a few reputable resellers and marketplaces that can provide high-quality used and refurbished phones. An UpTrade Certified Used Galaxy S20 FE 5G means it has passed an in-depth inspection by our Certified Seller. UpTrade Certified means the Galaxy S20 FE 5G you buy will work and function exactly like a new one.",
      "What is the return policy for the Used and Refurbished Galaxy S20 FE 5G?":
        "Sure! The Refurbished Galaxy S20 FE 5G listed here comes with a 30-day return policy from the Sellers. So if you have any problem with your purchase, you may contact the Seller and return it to them for up to 30 days.",
      "Are refurbished Android phones as good as new ones?":
        "That’s a good question! Technically, there’s no difference between refurbished and new except that there may be signs of use (if at all) on a refurbished Android phone. All UpTrade Certified Used Phone Sellers process the phones through a rigorous inspection. As a result, each smartphone is fully functional and works just like a new one.",
    },
  },
  {
    productName: "Galaxy S20 Plus 5G",
    productCategoryValueId: 157,
    price: 49200,
    keyword: null,
    productImageUrl:
      "https://d3c745jesl5pj3.cloudfront.net/sell/web/Galaxy S20 Plus 5G_425ab557ca07475fa0c50c4025f8525f.jpg",
    brand: "Samsung",
    type: null,
    brandCategoryValueId: 19,
    relatedGoods: [
      {
        productId: 1545698406068154368,
        name: "Galaxy S20 Plus 5G",
        brand: "Samsung",
        merchant: "Amazon",
        brandLogoUrl:
          "https://uptrade-public-static-resources.s3.us-east-2.amazonaws.com/amazon+logo.png",
        buyUrl:
          "https://www.amazon.com/Samsung-SM-G9860-Unlocked-International-No-Warranty/dp/B0947BPTBY/ref=sr_1_230?keywords=Samsung+Galaxy+Unlocked+renewed&qid=1657218627&sr=8-230&srs=17871142011",
        currentPrice: 49200,
        specs: [
          {
            productId: 1545698406068154368,
            key: "CONDITION",
            value: "Excellent",
          },
          {
            productId: 1545698406068154368,
            key: "CARRIER",
            value: "Unlocked",
          },
          {
            productId: 1545698406068154368,
            key: "STORAGE",
            value: "128GB",
          },
          {
            productId: 1545698406068154368,
            key: "COLOR",
            value: "Cosmic Black",
          },
        ],
      },
    ],
    aboutProduct:
      "This Samsung Galaxy S20 Plus 5G cell phone is packed with enough power to perform more daily routines efficiently.  There's a 6.7\" Infinity-O smooth-motion display that reveals every image in perfect quality.  The Samsung Galaxy S20 Plus also features high-quality cameras with 30x Space Zoom capabilities for capturing more details. The phone is also backward-compatible with 4G networks.",
    metaDescription:
      "Samsung Galaxy S20 Plus 5G. All phones are Fully Inspected, Certified Used, and Fully Functional. Great price.  6.7” Display. Wireless Charging.",
    metaDescCategory:
      "Samsung · Samsung Galaxy · Galaxy S · Galaxy S20 · Galaxy S20 Plus. Android · 6.7″ · Fingerprint Scanner · 10 MP front camera · Smartphone · With Wireless Charging",
    qa: {
      "Why should you buy a used or refurbished Galaxy S20 Plus 5G?":
        "A refurbished Galaxy S20 Plus 5G functions precisely like a new one. Why pay more? It will save you a lot of money  buying a refurbished Galaxy S20 Plus 5G. More importantly, it reduces e-waste and makes our planet a better place. Buying a refurbished Galaxy S20 Plus 5G is a smart choice.",
      "What does it mean if the Galaxy S20 Plus 5G is unlocked?":
        "Most Galaxy S20 Plus 5G’s bought from wireless carriers are locked to their network. An unlocked Galaxy S20 Plus 5G means the phone has been unlocked and can be used with any carrier in the United States. Choosing an unlocked Galaxy S20 Plus 5G is the safest option if you are unsure which carrier you will use. An unlocked Galaxy S20 Plus 5G is also a great option as a gift since it will work with any carrier or wireless phone plan they currently have.",
      "What does UpTrade Certified Used mean?":
        "UpTrade Certified means you can trust that your used Galaxy S20 Plus 5G will function just as well as a new device. Among hundreds of used phone sellers, we have chosen a modest bunch of reputable sellers and marketplaces that are capable of providing high-quality used and refurbished phones. An UpTrade Certified Used Galaxy S20 Plus 5G means it has passed a rigorous inspection and functions like a new one.",
      "What is the return policy for the Used and Refurbished Galaxy S20 Plus 5G?":
        "No worries if you are not 100% satisfied with the device you have received! Each phone is granted a 30-day trial period in which buyers may return the used device to the UpTrade Certified Seller for a refund within the first 30 days.",
      "Are refurbished Android phones as good as new ones?":
        "For the most part, there is no definite difference between a new phone and a used one, aside from one previously used by another owner. All used phones listed on UpTrade must pass a rigorous inspection to guarantee quality and product performance. Refurbished devices certified by UpTrade work just as well as new, ordinary store-bought phones.",
    },
  },
  {
    productName: "Galaxy S20 Ultra",
    productCategoryValueId: 815,
    price: null,
    keyword: null,
    productImageUrl:
      "https://d3c745jesl5pj3.cloudfront.net/sell/web/S20 Ultra 5G_84481ee7632e46fbaa899d4e79030de7.jpg",
    brand: "Samsung",
    type: null,
    brandCategoryValueId: 19,
    relatedGoods: [
      {
        productId: 1545689879111036928,
        name: "Galaxy A50",
        brand: "Samsung",
        merchant: "Amazon",
        brandLogoUrl:
          "https://uptrade-public-static-resources.s3.us-east-2.amazonaws.com/amazon+logo.png",
        buyUrl:
          "https://www.amazon.com/Samsung-SM-A505G-Factory-Unlocked-Renewed/dp/B07RL93F7T/ref=sr_1_3?crid=3NBH91UQVO742&keywords=Samsung+Galaxy+unlocked+renewed&qid=1654951575&sprefix=samsung+galaxy+unlocked+renewed%2Cspecialty-aps%2C382&sr=8-3&srs=17871142011",
        currentPrice: 7900,
        specs: [
          {
            productId: 1545689879111036928,
            key: "CONDITION",
            value: "Excellent",
          },
          {
            productId: 1545689879111036928,
            key: "CARRIER",
            value: "Unlocked",
          },
          {
            productId: 1545689879111036928,
            key: "STORAGE",
            value: "64GB",
          },
          {
            productId: 1545689879111036928,
            key: "COLOR",
            value: "Black",
          },
        ],
      },
      {
        productId: 1545689910836752384,
        name: "Galaxy Note 8",
        brand: "Samsung",
        merchant: "Amazon",
        brandLogoUrl:
          "https://uptrade-public-static-resources.s3.us-east-2.amazonaws.com/amazon+logo.png",
        buyUrl:
          "https://www.amazon.com/Samsung-Galaxy-Note-Smartphone-Refurbished/dp/B07HFK5PQQ/ref=sr_1_66?crid=3NBH91UQVO742&keywords=Samsung+Galaxy+unlocked+renewed&qid=1654953630&sprefix=samsung+galaxy+unlocked+renewed%2Cspecialty-aps%2C382&sr=8-66&srs=17871142011",
        currentPrice: 7999,
        specs: [
          {
            productId: 1545689910836752384,
            key: "CONDITION",
            value: "Excellent",
          },
          {
            productId: 1545689910836752384,
            key: "CARRIER",
            value: "Unlocked",
          },
          {
            productId: 1545689910836752384,
            key: "STORAGE",
            value: "64GB",
          },
          {
            productId: 1545689910836752384,
            key: "COLOR",
            value: "Orchid Gray",
          },
        ],
      },
      {
        productId: 1545689999491756032,
        name: "Galaxy S8 Plus",
        brand: "Samsung",
        merchant: "Amazon",
        brandLogoUrl:
          "https://uptrade-public-static-resources.s3.us-east-2.amazonaws.com/amazon+logo.png",
        buyUrl:
          "https://www.amazon.com/Samsung-Galaxy-T-Mobile-Unlocked-Renewed/dp/B07DZP1BDG/ref=sr_1_138?crid=3NBH91UQVO742&keywords=Samsung+Galaxy+unlocked+renewed&qid=1654956295&sprefix=samsung+galaxy+unlocked+renewed%2Cspecialty-aps%2C382&sr=8-138&srs=17871142011",
        currentPrice: 9999,
        specs: [
          {
            productId: 1545689999491756032,
            key: "CONDITION",
            value: "Excellent",
          },
          {
            productId: 1545689999491756032,
            key: "CARRIER",
            value: "Unlocked",
          },
          {
            productId: 1545689999491756032,
            key: "STORAGE",
            value: "64GB",
          },
          {
            productId: 1545689999491756032,
            key: "COLOR",
            value: "Arctic Silver",
          },
        ],
      },
      {
        productId: 1545689906340458496,
        name: "Galaxy Note 9",
        brand: "Samsung",
        merchant: "Amazon",
        brandLogoUrl:
          "https://uptrade-public-static-resources.s3.us-east-2.amazonaws.com/amazon+logo.png",
        buyUrl:
          "https://www.amazon.com/Samsung-Galaxy-N960U-T-Mobile-Unlocked/dp/B08BW9KH55/ref=sr_1_62?crid=3NBH91UQVO742&keywords=Samsung+Galaxy+unlocked+renewed&qid=1654953630&sprefix=samsung+galaxy+unlocked+renewed%2Cspecialty-aps%2C382&sr=8-62&srs=17871142011",
        currentPrice: 9999,
        specs: [
          {
            productId: 1545689906340458496,
            key: "CONDITION",
            value: "Excellent",
          },
          {
            productId: 1545689906340458496,
            key: "CARRIER",
            value: "Unlocked",
          },
          {
            productId: 1545689906340458496,
            key: "STORAGE",
            value: "128GB",
          },
          {
            productId: 1545689906340458496,
            key: "COLOR",
            value: "Ocean Blue",
          },
        ],
      },
      {
        productId: 1545689917975457792,
        name: "Galaxy S7",
        brand: "Samsung",
        merchant: "Amazon",
        brandLogoUrl:
          "https://uptrade-public-static-resources.s3.us-east-2.amazonaws.com/amazon+logo.png",
        buyUrl:
          "https://www.amazon.com/Samsung-Galaxy-G930T-T-Mobile-Unlocked/dp/B08CBKYVGT/ref=sr_1_76?crid=3NBH91UQVO742&keywords=Samsung+Galaxy+unlocked+renewed&qid=1654954075&sprefix=samsung+galaxy+unlocked+renewed%2Cspecialty-aps%2C382&sr=8-76&srs=17871142011",
        currentPrice: 9999,
        specs: [
          {
            productId: 1545689917975457792,
            key: "CONDITION",
            value: "Excellent",
          },
          {
            productId: 1545689917975457792,
            key: "CARRIER",
            value: "Unlocked",
          },
          {
            productId: 1545689917975457792,
            key: "STORAGE",
            value: "32GB",
          },
          {
            productId: 1545689917975457792,
            key: "COLOR",
            value: "Black",
          },
        ],
      },
    ],
    aboutProduct:
      "The Samsung Galaxy S20 Ultra 5G is the biggest handset of the Galaxy S20 line to date. It has a 6.9-inch display that supports 120Hz  at 1080p.  The camera module houses four cameras and provides 8K Video Snap and Space Zoom technology to capture amazing shots.  The main sensor is 108MP while the periscope sensor can go up to 100x zoom. The AMOLED 2x display offers immersive viewing while the Octa-Core processor and 12 GB RAM facilitate smooth operation and lag-free multitasking.",
    metaDescription:
      "Samsung Galaxy S20 Ultra 5G. All phones are Fully Inspected, Certified Used, and Fully Functional. Great price.  5G connectivity, AMOLED display and fast charging battery.",
    metaDescCategory:
      "Samsung · Samsung Galaxy · Galaxy S · Galaxy S20 · Android · 6.9″ · 40 MP front camera · 12 MP rear camera · Smartphone · 7.76 oz",
    qa: {
      "Why should you buy a used or refurbished Galaxy S20 Ultra 5G?":
        "A refurbished Galaxy S20 Ultra 5G functions precisely like a new one. Why pay more? It will save you a lot of money  buying a refurbished Galaxy S20 Ultra 5G. More importantly, it reduces e-waste and makes our planet a better place. Buying a refurbished Galaxy S20 Ultra 5G is a smart choice.",
      "What does it mean if the Galaxy S20 Ultra 5G is unlocked?":
        "Most Galaxy S20 Ultra 5G’s bought from wireless carriers are locked to their network. An unlocked Galaxy S20 Ultra 5G means the phone has been unlocked and can be used with any carrier in the United States. Choosing an unlocked Galaxy S20 Ultra 5G is the safest option if you are unsure which carrier you will use. An unlocked Galaxy S20 Ultra 5G is also a great option as a gift since it will work with any carrier or wireless phone plan they currently have.",
      "What does UpTrade Certified Used mean?":
        "UpTrade Certified means you can trust that your used Galaxy S20 Ultra 5G will function just as well as a new device. Among hundreds of used phone sellers, we have chosen a modest bunch of reputable sellers and marketplaces that are capable of providing high-quality used and refurbished phones. An UpTrade Certified Used Galaxy S20 Ultra 5G means it has passed a rigorous inspection and functions like a new one.",
      "What is the return policy for the Used and Refurbished Galaxy S20 Ultra 5G?":
        "No worries if you are not 100% satisfied with the device you have received! Each phone is granted a 30-day trial period in which buyers may return the used device to the UpTrade Certified Seller for a refund within the first 30 days.",
      "Are refurbished Android phones as good as new ones?":
        "For the most part, there is no definite difference between a new phone and a used one, aside from one previously used by another owner. All used phones listed on UpTrade must pass a rigorous inspection to guarantee quality and product performance. Refurbished devices certified by UpTrade work just as well as new, ordinary store-bought phones.",
    },
  },
  {
    productName: "Galaxy S20 Ultra 5G",
    productCategoryValueId: 82,
    price: 43421,
    keyword: null,
    productImageUrl:
      "https://d3c745jesl5pj3.cloudfront.net/sell/web/S20 Ultra 5G_84481ee7632e46fbaa899d4e79030de7.jpg",
    brand: "Samsung",
    type: null,
    brandCategoryValueId: 19,
    relatedGoods: [
      {
        productId: 1545698512385372160,
        name: "Galaxy S20 Ultra 5G",
        brand: "Samsung",
        merchant: "Amazon",
        brandLogoUrl:
          "https://uptrade-public-static-resources.s3.us-east-2.amazonaws.com/amazon+logo.png",
        buyUrl:
          "https://www.amazon.com/Samsung-Galaxy-S20-Ultra-5G/dp/B0916FZ5CQ/ref=sr_1_115?keywords=Samsung+Galaxy+T-Mobile+renewed&qid=1657244116&sr=8-115",
        currentPrice: 43421,
        specs: [
          {
            productId: 1545698512385372160,
            key: "CONDITION",
            value: "Excellent",
          },
          {
            productId: 1545698512385372160,
            key: "CARRIER",
            value: "T-Mobile",
          },
          {
            productId: 1545698512385372160,
            key: "STORAGE",
            value: "128GB",
          },
          {
            productId: 1545698512385372160,
            key: "COLOR",
            value: "Cosmic Black",
          },
        ],
      },
      {
        productId: 1545698493196431360,
        name: "Galaxy S20 Ultra 5G",
        brand: "Samsung",
        merchant: "Amazon",
        brandLogoUrl:
          "https://uptrade-public-static-resources.s3.us-east-2.amazonaws.com/amazon+logo.png",
        buyUrl:
          "https://www.amazon.com/Samsung-Galaxy-S20-Ultra-5G/dp/B0916GLFK2/ref=sr_1_221?keywords=Samsung+Galaxy+Unlocked+renewed&qid=1657239285&sr=8-221",
        currentPrice: 44200,
        specs: [
          {
            productId: 1545698493196431360,
            key: "CONDITION",
            value: "Excellent",
          },
          {
            productId: 1545698493196431360,
            key: "CARRIER",
            value: "T-Mobile",
          },
          {
            productId: 1545698493196431360,
            key: "STORAGE",
            value: "128GB",
          },
          {
            productId: 1545698493196431360,
            key: "COLOR",
            value: "Cosmic Gray",
          },
        ],
      },
      {
        productId: 1545698363588243456,
        name: "Galaxy S20 Ultra 5G",
        brand: "Samsung",
        merchant: "Amazon",
        brandLogoUrl:
          "https://uptrade-public-static-resources.s3.us-east-2.amazonaws.com/amazon+logo.png",
        buyUrl:
          "https://www.amazon.com/Samsung-Snapdragon-Unlocked-T-Mobile-Verizon/dp/B09352C4XY/ref=sr_1_78?keywords=Samsung+Galaxy+Unlocked+renewed&qid=1657217419&sr=8-78&srs=17871142011",
        currentPrice: 45679,
        specs: [
          {
            productId: 1545698363588243456,
            key: "CONDITION",
            value: "Excellent",
          },
          {
            productId: 1545698363588243456,
            key: "CARRIER",
            value: "Unlocked",
          },
          {
            productId: 1545698363588243456,
            key: "STORAGE",
            value: "128GB",
          },
          {
            productId: 1545698363588243456,
            key: "COLOR",
            value: "Black",
          },
        ],
      },
      {
        productId: 1545698428125999104,
        name: "Galaxy S20 Ultra 5G",
        brand: "Samsung",
        merchant: "Amazon",
        brandLogoUrl:
          "https://uptrade-public-static-resources.s3.us-east-2.amazonaws.com/amazon+logo.png",
        buyUrl:
          "https://www.amazon.com/Samsung-Galaxy-Cosmic-Verizon-Renewed/dp/B08BZ926N1/ref=sr_1_42?keywords=Samsung+Galaxy+Verizon+renewed&qid=1657219448&sr=8-42",
        currentPrice: 46300,
        specs: [
          {
            productId: 1545698428125999104,
            key: "CONDITION",
            value: "Excellent",
          },
          {
            productId: 1545698428125999104,
            key: "CARRIER",
            value: "Verizon",
          },
          {
            productId: 1545698428125999104,
            key: "STORAGE",
            value: "128GB",
          },
          {
            productId: 1545698428125999104,
            key: "COLOR",
            value: "Cosmic Black",
          },
        ],
      },
      {
        productId: 1545698472317186048,
        name: "Galaxy S20 Ultra 5G",
        brand: "Samsung",
        merchant: "Amazon",
        brandLogoUrl:
          "https://uptrade-public-static-resources.s3.us-east-2.amazonaws.com/amazon+logo.png",
        buyUrl:
          "https://www.amazon.com/Galaxy-S20-Ultra-5G-Smartphone/dp/B08PC9626V/ref=sr_1_14?keywords=Samsung+Galaxy+AT%26T+renewed&qid=1657221327&sr=8-14",
        currentPrice: 47126,
        specs: [
          {
            productId: 1545698472317186048,
            key: "CONDITION",
            value: "Excellent",
          },
          {
            productId: 1545698472317186048,
            key: "CARRIER",
            value: "AT&T",
          },
          {
            productId: 1545698472317186048,
            key: "STORAGE",
            value: "128GB",
          },
          {
            productId: 1545698472317186048,
            key: "COLOR",
            value: "Cosmic Black",
          },
        ],
      },
    ],
    aboutProduct:
      "The Samsung Galaxy S20 Ultra 5G is the biggest handset of the Galaxy S20 line to date. It has a 6.9-inch display that supports 120Hz  at 1080p.  The camera module houses four cameras and provides 8K Video Snap and Space Zoom technology to capture amazing shots.  The main sensor is 108MP while the periscope sensor can go up to 100x zoom. The AMOLED 2x display offers immersive viewing while the Octa-Core processor and 12 GB RAM facilitate smooth operation and lag-free multitasking.",
    metaDescription:
      "Samsung Galaxy S20 Ultra 5G. All phones are Fully Inspected, Certified Used, and Fully Functional. Great price.  5G connectivity, AMOLED display and fast charging battery.",
    metaDescCategory:
      "Samsung · Samsung Galaxy · Galaxy S · Galaxy S20 · Android · 6.9″ · 40 MP front camera · 12 MP rear camera · Smartphone · 7.76 oz",
    qa: {
      "Why should you buy a used or refurbished Galaxy S20 Ultra 5G?":
        "A refurbished Galaxy S20 Ultra 5G functions precisely like a new one. Why pay more? It will save you a lot of money  buying a refurbished Galaxy S20 Ultra 5G. More importantly, it reduces e-waste and makes our planet a better place. Buying a refurbished Galaxy S20 Ultra 5G is a smart choice.",
      "What does it mean if the Galaxy S20 Ultra 5G is unlocked?":
        "Most Galaxy S20 Ultra 5G’s bought from wireless carriers are locked to their network. An unlocked Galaxy S20 Ultra 5G means the phone has been unlocked and can be used with any carrier in the United States. Choosing an unlocked Galaxy S20 Ultra 5G is the safest option if you are unsure which carrier you will use. An unlocked Galaxy S20 Ultra 5G is also a great option as a gift since it will work with any carrier or wireless phone plan they currently have.",
      "What does UpTrade Certified Used mean?":
        "UpTrade Certified means you can trust that your used Galaxy S20 Ultra 5G will function just as well as a new device. Among hundreds of used phone sellers, we have chosen a modest bunch of reputable sellers and marketplaces that are capable of providing high-quality used and refurbished phones. An UpTrade Certified Used Galaxy S20 Ultra 5G means it has passed a rigorous inspection and functions like a new one.",
      "What is the return policy for the Used and Refurbished Galaxy S20 Ultra 5G?":
        "No worries if you are not 100% satisfied with the device you have received! Each phone is granted a 30-day trial period in which buyers may return the used device to the UpTrade Certified Seller for a refund within the first 30 days.",
      "Are refurbished Android phones as good as new ones?":
        "For the most part, there is no definite difference between a new phone and a used one, aside from one previously used by another owner. All used phones listed on UpTrade must pass a rigorous inspection to guarantee quality and product performance. Refurbished devices certified by UpTrade work just as well as new, ordinary store-bought phones.",
    },
  },
  {
    productName: "Galaxy S20+",
    productCategoryValueId: 818,
    price: null,
    keyword: null,
    productImageUrl:
      "https://d3c745jesl5pj3.cloudfront.net/sell/web/Galaxy S20jia 5G_8400a4d0729d4f5e816d4353fd890efa.jpg",
    brand: "Samsung",
    type: null,
    brandCategoryValueId: 19,
    relatedGoods: [
      {
        productId: 1545689879111036928,
        name: "Galaxy A50",
        brand: "Samsung",
        merchant: "Amazon",
        brandLogoUrl:
          "https://uptrade-public-static-resources.s3.us-east-2.amazonaws.com/amazon+logo.png",
        buyUrl:
          "https://www.amazon.com/Samsung-SM-A505G-Factory-Unlocked-Renewed/dp/B07RL93F7T/ref=sr_1_3?crid=3NBH91UQVO742&keywords=Samsung+Galaxy+unlocked+renewed&qid=1654951575&sprefix=samsung+galaxy+unlocked+renewed%2Cspecialty-aps%2C382&sr=8-3&srs=17871142011",
        currentPrice: 7900,
        specs: [
          {
            productId: 1545689879111036928,
            key: "CONDITION",
            value: "Excellent",
          },
          {
            productId: 1545689879111036928,
            key: "CARRIER",
            value: "Unlocked",
          },
          {
            productId: 1545689879111036928,
            key: "STORAGE",
            value: "64GB",
          },
          {
            productId: 1545689879111036928,
            key: "COLOR",
            value: "Black",
          },
        ],
      },
      {
        productId: 1545689910836752384,
        name: "Galaxy Note 8",
        brand: "Samsung",
        merchant: "Amazon",
        brandLogoUrl:
          "https://uptrade-public-static-resources.s3.us-east-2.amazonaws.com/amazon+logo.png",
        buyUrl:
          "https://www.amazon.com/Samsung-Galaxy-Note-Smartphone-Refurbished/dp/B07HFK5PQQ/ref=sr_1_66?crid=3NBH91UQVO742&keywords=Samsung+Galaxy+unlocked+renewed&qid=1654953630&sprefix=samsung+galaxy+unlocked+renewed%2Cspecialty-aps%2C382&sr=8-66&srs=17871142011",
        currentPrice: 7999,
        specs: [
          {
            productId: 1545689910836752384,
            key: "CONDITION",
            value: "Excellent",
          },
          {
            productId: 1545689910836752384,
            key: "CARRIER",
            value: "Unlocked",
          },
          {
            productId: 1545689910836752384,
            key: "STORAGE",
            value: "64GB",
          },
          {
            productId: 1545689910836752384,
            key: "COLOR",
            value: "Orchid Gray",
          },
        ],
      },
      {
        productId: 1545689999491756032,
        name: "Galaxy S8 Plus",
        brand: "Samsung",
        merchant: "Amazon",
        brandLogoUrl:
          "https://uptrade-public-static-resources.s3.us-east-2.amazonaws.com/amazon+logo.png",
        buyUrl:
          "https://www.amazon.com/Samsung-Galaxy-T-Mobile-Unlocked-Renewed/dp/B07DZP1BDG/ref=sr_1_138?crid=3NBH91UQVO742&keywords=Samsung+Galaxy+unlocked+renewed&qid=1654956295&sprefix=samsung+galaxy+unlocked+renewed%2Cspecialty-aps%2C382&sr=8-138&srs=17871142011",
        currentPrice: 9999,
        specs: [
          {
            productId: 1545689999491756032,
            key: "CONDITION",
            value: "Excellent",
          },
          {
            productId: 1545689999491756032,
            key: "CARRIER",
            value: "Unlocked",
          },
          {
            productId: 1545689999491756032,
            key: "STORAGE",
            value: "64GB",
          },
          {
            productId: 1545689999491756032,
            key: "COLOR",
            value: "Arctic Silver",
          },
        ],
      },
      {
        productId: 1545689906340458496,
        name: "Galaxy Note 9",
        brand: "Samsung",
        merchant: "Amazon",
        brandLogoUrl:
          "https://uptrade-public-static-resources.s3.us-east-2.amazonaws.com/amazon+logo.png",
        buyUrl:
          "https://www.amazon.com/Samsung-Galaxy-N960U-T-Mobile-Unlocked/dp/B08BW9KH55/ref=sr_1_62?crid=3NBH91UQVO742&keywords=Samsung+Galaxy+unlocked+renewed&qid=1654953630&sprefix=samsung+galaxy+unlocked+renewed%2Cspecialty-aps%2C382&sr=8-62&srs=17871142011",
        currentPrice: 9999,
        specs: [
          {
            productId: 1545689906340458496,
            key: "CONDITION",
            value: "Excellent",
          },
          {
            productId: 1545689906340458496,
            key: "CARRIER",
            value: "Unlocked",
          },
          {
            productId: 1545689906340458496,
            key: "STORAGE",
            value: "128GB",
          },
          {
            productId: 1545689906340458496,
            key: "COLOR",
            value: "Ocean Blue",
          },
        ],
      },
      {
        productId: 1545689917975457792,
        name: "Galaxy S7",
        brand: "Samsung",
        merchant: "Amazon",
        brandLogoUrl:
          "https://uptrade-public-static-resources.s3.us-east-2.amazonaws.com/amazon+logo.png",
        buyUrl:
          "https://www.amazon.com/Samsung-Galaxy-G930T-T-Mobile-Unlocked/dp/B08CBKYVGT/ref=sr_1_76?crid=3NBH91UQVO742&keywords=Samsung+Galaxy+unlocked+renewed&qid=1654954075&sprefix=samsung+galaxy+unlocked+renewed%2Cspecialty-aps%2C382&sr=8-76&srs=17871142011",
        currentPrice: 9999,
        specs: [
          {
            productId: 1545689917975457792,
            key: "CONDITION",
            value: "Excellent",
          },
          {
            productId: 1545689917975457792,
            key: "CARRIER",
            value: "Unlocked",
          },
          {
            productId: 1545689917975457792,
            key: "STORAGE",
            value: "32GB",
          },
          {
            productId: 1545689917975457792,
            key: "COLOR",
            value: "Black",
          },
        ],
      },
    ],
    aboutProduct: null,
    metaDescription:
      "Upgrade your speed to 5G. Like new Galaxy S20+ 5G available without the premium price.",
    metaDescCategory: null,
    qa: {
      "Why should you buy a used or refurbished Galaxy S20+ 5G?":
        "I am glad that you asked! A refurbished Galaxy S20+ 5G is a great opportunity to save when you are looking to purchase your next phone. Buying a refurbished Galaxy S20+ 5G can be an wonderful choice and can net you huge savings, particularly when the cost of a new Galaxy S20+ 5G is crazy expensive. A refurbished Galaxy S20+ 5G is completely functional and works very much like a brand new Galaxy S20+ 5G.",
      "What does it mean if the Galaxy S20+ 5G is unlocked?":
        "You may use an unlocked Galaxy S20+ 5G with any carrier in the United States. Purchasing an unlocked Galaxy S20+ 5G is an wonderful choice if you aren’t sure which wireless carrier you want to sign up with, or if you want to be sure the Galaxy S20+ 5G will work with your current carrier. An unlocked Galaxy S20+ 5G is likewise an incredible phone to buy as a gift since it will work with any carrier or wireless plan that they may have.",
      "What does UpTrade Certified Used mean?":
        "UpTrade Certified means the Galaxy S20+ 5G you buy will work and function just like new. Among hundreds of used phone and gadget sellers, we have chosen a modest bunch of reputable resellers and marketplaces that provide high-quality used and refurbished phones. An UpTrade Certified Used Galaxy S20+ 5G means it has passed an in-depth inspection by our Certified Seller.",
      "What is the return policy for the Used and Refurbished Galaxy S20+ 5G?":
        "Yes! All UpTrade Certified Used Phone Resellers and Marketplaces offer 30-day money-back-guarantee on Galaxy S20+ 5G phones listed here. If you aren’t satisfied with your purchase you may return your Galaxy S20+ 5G to your seller for free for up to 30 days.",
      "Are refurbished Android phones as good as new ones?":
        "Many people wonder if a refurbished Android phone is as good as a new one. Typically there’s really no difference between them except for the fact that there may be signs of use (if at all) on a refurbished phone. A refurbished Android phone should be fully functional and work just like a new Android phone. All UpTrade Certified Used Phone Resellers process the phones through a rigorous inspection so that each phone is fully functional and works just like a new phone.",
    },
  },
  {
    productName: "Galaxy S20+ 5G",
    productCategoryValueId: 37,
    price: 32995,
    keyword: null,
    productImageUrl:
      "https://d3c745jesl5pj3.cloudfront.net/sell/web/Galaxy S20jia 5G_8400a4d0729d4f5e816d4353fd890efa.jpg",
    brand: "Samsung",
    type: null,
    brandCategoryValueId: 19,
    relatedGoods: [
      {
        productId: 1545698489950040064,
        name: "Galaxy S20+ 5G",
        brand: "Samsung",
        merchant: "Amazon",
        brandLogoUrl:
          "https://uptrade-public-static-resources.s3.us-east-2.amazonaws.com/amazon+logo.png",
        buyUrl:
          "https://www.amazon.com/Samsung-Galaxy-128GB-Cosmic-Black/dp/B08HBL6N91/ref=sr_1_79?keywords=Samsung+Galaxy+Unlocked+renewed&qid=1657238491&sr=8-79",
        currentPrice: 35099,
        specs: [
          {
            productId: 1545698489950040064,
            key: "CONDITION",
            value: "Excellent",
          },
          {
            productId: 1545698489950040064,
            key: "CARRIER",
            value: "Unlocked",
          },
          {
            productId: 1545698489950040064,
            key: "STORAGE",
            value: "128GB",
          },
          {
            productId: 1545698489950040064,
            key: "COLOR",
            value: "Cosmic Black",
          },
        ],
      },
      {
        productId: 1545698491799728128,
        name: "Galaxy S20+ 5G",
        brand: "Samsung",
        merchant: "Amazon",
        brandLogoUrl:
          "https://uptrade-public-static-resources.s3.us-east-2.amazonaws.com/amazon+logo.png",
        buyUrl:
          "https://www.amazon.com/Samsung-Galaxy-S20-5G-T-Mobile/dp/B0917KGM2F/ref=sr_1_176?keywords=Samsung+Galaxy+Unlocked+renewed&qid=1657238882&sr=8-176",
        currentPrice: 35700,
        specs: [
          {
            productId: 1545698491799728128,
            key: "CONDITION",
            value: "Excellent",
          },
          {
            productId: 1545698491799728128,
            key: "CARRIER",
            value: "T-Mobile",
          },
          {
            productId: 1545698491799728128,
            key: "STORAGE",
            value: "128GB",
          },
          {
            productId: 1545698491799728128,
            key: "COLOR",
            value: "Cosmic Black",
          },
        ],
      },
      {
        productId: 1545698338002989056,
        name: "Galaxy S20+ 5G",
        brand: "Samsung",
        merchant: "Amazon",
        brandLogoUrl:
          "https://uptrade-public-static-resources.s3.us-east-2.amazonaws.com/amazon+logo.png",
        buyUrl:
          "https://www.amazon.com/Galaxy-S20-5G-Unlocked-Smartphone/dp/B08FRS8NPP/ref=sr_1_1?keywords=Samsung+Galaxy+Unlocked+renewed&qid=1657216791&sr=8-1&srs=17871142011",
        currentPrice: 36299,
        specs: [
          {
            productId: 1545698338002989056,
            key: "CONDITION",
            value: "Excellent",
          },
          {
            productId: 1545698338002989056,
            key: "CARRIER",
            value: "Unlocked",
          },
          {
            productId: 1545698338002989056,
            key: "STORAGE",
            value: "128GB",
          },
          {
            productId: 1545698338002989056,
            key: "COLOR",
            value: "Cosmic Black",
          },
        ],
      },
      {
        productId: 1545698502923022336,
        name: "Galaxy S20+ 5G",
        brand: "Samsung",
        merchant: "Amazon",
        brandLogoUrl:
          "https://uptrade-public-static-resources.s3.us-east-2.amazonaws.com/amazon+logo.png",
        buyUrl:
          "https://www.amazon.com/Samsung-Galaxy-128GB-Cloud-Blue/dp/B0891VNDNT/ref=sr_1_146?keywords=Samsung+Galaxy+AT%26T+renewed&qid=1657241741&sr=8-146",
        currentPrice: 36400,
        specs: [
          {
            productId: 1545698502923022336,
            key: "CONDITION",
            value: "Excellent",
          },
          {
            productId: 1545698502923022336,
            key: "CARRIER",
            value: "AT&T",
          },
          {
            productId: 1545698502923022336,
            key: "STORAGE",
            value: "128GB",
          },
          {
            productId: 1545698502923022336,
            key: "COLOR",
            value: "Cloud Blue",
          },
        ],
      },
      {
        productId: 1545698420836298752,
        name: "Galaxy S20+ 5G",
        brand: "Samsung",
        merchant: "Amazon",
        brandLogoUrl:
          "https://uptrade-public-static-resources.s3.us-east-2.amazonaws.com/amazon+logo.png",
        buyUrl:
          "https://www.amazon.com/Samsung-Galaxy-128GB-Cosmic-Black/dp/B08CJ869Y5/ref=sr_1_11?keywords=Samsung+Galaxy+Verizon+renewed&qid=1657219261&sr=8-11",
        currentPrice: 36755,
        specs: [
          {
            productId: 1545698420836298752,
            key: "CONDITION",
            value: "Excellent",
          },
          {
            productId: 1545698420836298752,
            key: "CARRIER",
            value: "Verizon",
          },
          {
            productId: 1545698420836298752,
            key: "STORAGE",
            value: "128GB",
          },
          {
            productId: 1545698420836298752,
            key: "COLOR",
            value: "Cosmic Black",
          },
        ],
      },
    ],
    aboutProduct: null,
    metaDescription:
      "Upgrade your speed to 5G. Like new Galaxy S20+ 5G available without the premium price.",
    metaDescCategory: null,
    qa: {
      "Why should you buy a used or refurbished Galaxy S20+ 5G?":
        "I am glad that you asked! A refurbished Galaxy S20+ 5G is a great opportunity to save when you are looking to purchase your next phone. Buying a refurbished Galaxy S20+ 5G can be an wonderful choice and can net you huge savings, particularly when the cost of a new Galaxy S20+ 5G is crazy expensive. A refurbished Galaxy S20+ 5G is completely functional and works very much like a brand new Galaxy S20+ 5G.",
      "What does it mean if the Galaxy S20+ 5G is unlocked?":
        "You may use an unlocked Galaxy S20+ 5G with any carrier in the United States. Purchasing an unlocked Galaxy S20+ 5G is an wonderful choice if you aren’t sure which wireless carrier you want to sign up with, or if you want to be sure the Galaxy S20+ 5G will work with your current carrier. An unlocked Galaxy S20+ 5G is likewise an incredible phone to buy as a gift since it will work with any carrier or wireless plan that they may have.",
      "What does UpTrade Certified Used mean?":
        "UpTrade Certified means the Galaxy S20+ 5G you buy will work and function just like new. Among hundreds of used phone and gadget sellers, we have chosen a modest bunch of reputable resellers and marketplaces that provide high-quality used and refurbished phones. An UpTrade Certified Used Galaxy S20+ 5G means it has passed an in-depth inspection by our Certified Seller.",
      "What is the return policy for the Used and Refurbished Galaxy S20+ 5G?":
        "Yes! All UpTrade Certified Used Phone Resellers and Marketplaces offer 30-day money-back-guarantee on Galaxy S20+ 5G phones listed here. If you aren’t satisfied with your purchase you may return your Galaxy S20+ 5G to your seller for free for up to 30 days.",
      "Are refurbished Android phones as good as new ones?":
        "Many people wonder if a refurbished Android phone is as good as a new one. Typically there’s really no difference between them except for the fact that there may be signs of use (if at all) on a refurbished phone. A refurbished Android phone should be fully functional and work just like a new Android phone. All UpTrade Certified Used Phone Resellers process the phones through a rigorous inspection so that each phone is fully functional and works just like a new phone.",
    },
  },
  {
    productName: "Galaxy S21 5G",
    productCategoryValueId: 59,
    price: 31400,
    keyword: null,
    productImageUrl:
      "https://d3c745jesl5pj3.cloudfront.net/sell/web/Galaxy S21 5G_1cb747e7879345d69037bec850175dc2.jpg",
    brand: "Samsung",
    type: null,
    brandCategoryValueId: 19,
    relatedGoods: [
      {
        productId: 1545705581612134400,
        name: "Galaxy S21 5G",
        brand: "Samsung",
        merchant: "Gazelle",
        brandLogoUrl:
          "https://uptrade-public-static-resources.s3.us-east-2.amazonaws.com/gazelle+logo.png",
        buyUrl:
          "https://buy.gazelle.com/collections/samsung-galaxy/products/galaxy-s21-5g-128gb-at-t-4?variant=39644552003637",
        currentPrice: 31400,
        specs: [
          {
            productId: 1545705581612134400,
            key: "CONDITION",
            value: "Excellent",
          },
          {
            productId: 1545705581612134400,
            key: "CARRIER",
            value: "AT&T",
          },
          {
            productId: 1545705581612134400,
            key: "STORAGE",
            value: "128GB",
          },
          {
            productId: 1545705581612134400,
            key: "COLOR",
            value: "Phantom Pink",
          },
        ],
      },
      {
        productId: 1545705579678560256,
        name: "Galaxy S21 5G",
        brand: "Samsung",
        merchant: "Gazelle",
        brandLogoUrl:
          "https://uptrade-public-static-resources.s3.us-east-2.amazonaws.com/gazelle+logo.png",
        buyUrl:
          "https://buy.gazelle.com/collections/samsung-galaxy/products/galaxy-s21-5g-128gb-at-t-4?variant=39644551905333",
        currentPrice: 31400,
        specs: [
          {
            productId: 1545705579678560256,
            key: "CONDITION",
            value: "Excellent",
          },
          {
            productId: 1545705579678560256,
            key: "CARRIER",
            value: "AT&T",
          },
          {
            productId: 1545705579678560256,
            key: "STORAGE",
            value: "128GB",
          },
          {
            productId: 1545705579678560256,
            key: "COLOR",
            value: "Phantom Violet",
          },
        ],
      },
      {
        productId: 1545705658988654592,
        name: "Galaxy S21 5G",
        brand: "Samsung",
        merchant: "Gazelle",
        brandLogoUrl:
          "https://uptrade-public-static-resources.s3.us-east-2.amazonaws.com/gazelle+logo.png",
        buyUrl:
          "https://buy.gazelle.com/collections/samsung-galaxy/products/galaxy-s21-5g-128gb-at-t-4?variant=39644551708725",
        currentPrice: 31400,
        specs: [
          {
            productId: 1545705658988654592,
            key: "CONDITION",
            value: "Excellent",
          },
          {
            productId: 1545705658988654592,
            key: "CARRIER",
            value: "AT&T",
          },
          {
            productId: 1545705658988654592,
            key: "STORAGE",
            value: "128GB",
          },
          {
            productId: 1545705658988654592,
            key: "COLOR",
            value: "Phantom Gray",
          },
        ],
      },
      {
        productId: 1545705582878814208,
        name: "Galaxy S21 5G",
        brand: "Samsung",
        merchant: "Gazelle",
        brandLogoUrl:
          "https://uptrade-public-static-resources.s3.us-east-2.amazonaws.com/gazelle+logo.png",
        buyUrl:
          "https://buy.gazelle.com/collections/samsung-galaxy/products/galaxy-s21-5g-128gb-at-t-4?variant=39644552036405",
        currentPrice: 33900,
        specs: [
          {
            productId: 1545705582878814208,
            key: "CONDITION",
            value: "Excellent",
          },
          {
            productId: 1545705582878814208,
            key: "CARRIER",
            value: "AT&T",
          },
          {
            productId: 1545705582878814208,
            key: "STORAGE",
            value: "128GB",
          },
          {
            productId: 1545705582878814208,
            key: "COLOR",
            value: "Phantom Pink",
          },
        ],
      },
      {
        productId: 1545705580303511552,
        name: "Galaxy S21 5G",
        brand: "Samsung",
        merchant: "Gazelle",
        brandLogoUrl:
          "https://uptrade-public-static-resources.s3.us-east-2.amazonaws.com/gazelle+logo.png",
        buyUrl:
          "https://buy.gazelle.com/collections/samsung-galaxy/products/galaxy-s21-5g-128gb-at-t-4?variant=39644551938101",
        currentPrice: 33900,
        specs: [
          {
            productId: 1545705580303511552,
            key: "CONDITION",
            value: "Excellent",
          },
          {
            productId: 1545705580303511552,
            key: "CARRIER",
            value: "AT&T",
          },
          {
            productId: 1545705580303511552,
            key: "STORAGE",
            value: "128GB",
          },
          {
            productId: 1545705580303511552,
            key: "COLOR",
            value: "Phantom Violet",
          },
        ],
      },
    ],
    aboutProduct: null,
    metaDescription:
      "Budget price for a flagship phone! fully tested and certified pre-owned Galaxy S21 5G's available.",
    metaDescCategory: null,
    qa: {
      "Why should you buy a used or refurbished Galaxy S21 5G?":
        "A refurbished Galaxy S21 5G functions precisely like a new one. Why pay more? It will save you a lot of money  buying a refurbished Galaxy S21 5G. More importantly, it reduces e-waste and makes our planet a better place. Buying a refurbished Galaxy S21 5G is a smart choice.",
      "What does it mean if the Galaxy S21 5G is unlocked?":
        "Most Galaxy S21 5G’s bought from wireless carriers are locked to their network. An unlocked Galaxy S21 5G means the phone has been unlocked and can be used with any carrier in the United States. Choosing an unlocked Galaxy S21 5G is the safest option if you are unsure which carrier you will use. An unlocked Galaxy S21 5G is also a great option as a gift since it will work with any carrier or wireless phone plan they currently have.",
      "What does UpTrade Certified Used mean?":
        "UpTrade Certified means you can trust that your used Galaxy S21 5G will function just as well as a new device. Among hundreds of used phone sellers, we have chosen a modest bunch of reputable sellers and marketplaces that are capable of providing high-quality used and refurbished phones. An UpTrade Certified Used Galaxy S21 5G means it has passed a rigorous inspection and functions like a new one.",
      "What is the return policy for the Used and Refurbished Galaxy S21 5G?":
        "No worries if you are not 100% satisfied with the device you have received! Each phone is granted a 30-day trial period in which buyers may return the used device to the UpTrade Certified Seller for a refund within the first 30 days.",
      "Are refurbished Android phones as good as new ones?":
        "For the most part, there is no definite difference between a new phone and a used one, aside from one previously used by another owner. All used phones listed on UpTrade must pass a rigorous inspection to guarantee quality and product performance. Refurbished devices certified by UpTrade work just as well as new, ordinary store-bought phones.",
    },
  },
  {
    productName: "Galaxy S21 FE 5G",
    productCategoryValueId: 65,
    price: 44000,
    keyword: null,
    productImageUrl:
      "https://d3c745jesl5pj3.cloudfront.net/sell/web/Galaxy S21 FE 5G_33e332f13b8d41de8f37fe359fe64792.jpg",
    brand: "Samsung",
    type: null,
    brandCategoryValueId: 19,
    relatedGoods: [
      {
        productId: 1545698496044363776,
        name: "Galaxy S21 FE 5G",
        brand: "Samsung",
        merchant: "Amazon",
        brandLogoUrl:
          "https://uptrade-public-static-resources.s3.us-east-2.amazonaws.com/amazon+logo.png",
        buyUrl:
          "https://www.amazon.com/Samsung-Galaxy-128gb-Graphite-AT-Unlocked-Renewed/dp/B0B2M3HF9Q/ref=sr_1_307?keywords=Samsung+Galaxy+Unlocked+renewed&qid=1657239749&sr=8-307",
        currentPrice: 44499,
        specs: [
          {
            productId: 1545698496044363776,
            key: "CONDITION",
            value: "Excellent",
          },
          {
            productId: 1545698496044363776,
            key: "CARRIER",
            value: "Unlocked",
          },
          {
            productId: 1545698496044363776,
            key: "STORAGE",
            value: "128GB",
          },
          {
            productId: 1545698496044363776,
            key: "COLOR",
            value: "Graphite",
          },
        ],
      },
      {
        productId: 1545698350753673216,
        name: "Galaxy S21 FE 5G",
        brand: "Samsung",
        merchant: "Amazon",
        brandLogoUrl:
          "https://uptrade-public-static-resources.s3.us-east-2.amazonaws.com/amazon+logo.png",
        buyUrl:
          "https://www.amazon.com/Samsung-Unlocked-Smartphone-Intelligent-Graphite/dp/B09SHJGLNN/ref=sr_1_43?keywords=Samsung+Galaxy+Unlocked+renewed&qid=1657217092&sr=8-43&srs=17871142011",
        currentPrice: 46000,
        specs: [
          {
            productId: 1545698350753673216,
            key: "CONDITION",
            value: "Excellent",
          },
          {
            productId: 1545698350753673216,
            key: "CARRIER",
            value: "Unlocked",
          },
          {
            productId: 1545698350753673216,
            key: "STORAGE",
            value: "128GB",
          },
          {
            productId: 1545698350753673216,
            key: "COLOR",
            value: "Graphite",
          },
        ],
      },
      {
        productId: 1545698358873845760,
        name: "Galaxy S21 FE 5G",
        brand: "Samsung",
        merchant: "Amazon",
        brandLogoUrl:
          "https://uptrade-public-static-resources.s3.us-east-2.amazonaws.com/amazon+logo.png",
        buyUrl:
          "https://www.amazon.com/Samsung-Unlocked-Smartphone-Intelligent-Lavender/dp/B09SJ3971F/ref=sr_1_62?keywords=Samsung+Galaxy+Unlocked+renewed&qid=1657217313&sr=8-62&srs=17871142011",
        currentPrice: 46495,
        specs: [
          {
            productId: 1545698358873845760,
            key: "CONDITION",
            value: "Excellent",
          },
          {
            productId: 1545698358873845760,
            key: "CARRIER",
            value: "Unlocked",
          },
          {
            productId: 1545698358873845760,
            key: "STORAGE",
            value: "128GB",
          },
          {
            productId: 1545698358873845760,
            key: "COLOR",
            value: "Purple",
          },
        ],
      },
      {
        productId: 1545698407011872768,
        name: "Galaxy S21 FE 5G",
        brand: "Samsung",
        merchant: "Amazon",
        brandLogoUrl:
          "https://uptrade-public-static-resources.s3.us-east-2.amazonaws.com/amazon+logo.png",
        buyUrl:
          "https://www.amazon.com/Samsung-Unlocked-Smartphone-Intelligent-Graphite/dp/B09SHRCNSC/ref=sr_1_238?keywords=Samsung+Galaxy+Unlocked+renewed&qid=1657218627&sr=8-238&srs=17871142011",
        currentPrice: 54995,
        specs: [
          {
            productId: 1545698407011872768,
            key: "CONDITION",
            value: "Excellent",
          },
          {
            productId: 1545698407011872768,
            key: "CARRIER",
            value: "Unlocked",
          },
          {
            productId: 1545698407011872768,
            key: "STORAGE",
            value: "256GB",
          },
          {
            productId: 1545698407011872768,
            key: "COLOR",
            value: "Graphite",
          },
        ],
      },
      {
        productId: 1545705659433250816,
        name: "Galaxy S21 FE 5G",
        brand: "Samsung",
        merchant: "Gazelle",
        brandLogoUrl:
          "https://uptrade-public-static-resources.s3.us-east-2.amazonaws.com/gazelle+logo.png",
        buyUrl:
          "https://buy.gazelle.com/collections/samsung-galaxy/products/galaxy-s21-fe-5g-128gb-unlocked?variant=40913276862517",
        currentPrice: 66400,
        specs: [
          {
            productId: 1545705659433250816,
            key: "CONDITION",
            value: "Excellent",
          },
          {
            productId: 1545705659433250816,
            key: "CARRIER",
            value: "Unlocked",
          },
          {
            productId: 1545705659433250816,
            key: "STORAGE",
            value: "128GB",
          },
          {
            productId: 1545705659433250816,
            key: "COLOR",
            value: "Graphite",
          },
        ],
      },
    ],
    aboutProduct: null,
    metaDescription:
      "High quality in multiple colors! Experience the Galaxy S21 FE 5G in all its glory. Available in certified pre-owned.",
    metaDescCategory: null,
    qa: {
      "Why should you buy a used or refurbished Galaxy S21 FE 5G?":
        "I am glad that you asked! A refurbished Galaxy S21 FE 5G is a great opportunity to save when you are looking to purchase your next phone. Buying a refurbished Galaxy S21 FE 5G can be an wonderful choice and can net you huge savings, particularly when the cost of a new Galaxy S21 FE 5G is crazy expensive. A refurbished Galaxy S21 FE 5G is completely functional and works very much like a brand new Galaxy S21 FE 5G.",
      "What does it mean if the Galaxy S21 FE 5G is unlocked?":
        "You may use an unlocked Galaxy S21 FE 5G with any carrier in the United States. Purchasing an unlocked Galaxy S21 FE 5G is an wonderful choice if you aren’t sure which wireless carrier you want to sign up with, or if you want to be sure the Galaxy S21 FE 5G will work with your current carrier. An unlocked Galaxy S21 FE 5G is likewise an incredible phone to buy as a gift since it will work with any carrier or wireless plan that they may have.",
      "What does UpTrade Certified Used mean?":
        "UpTrade Certified means the Galaxy S21 FE 5G you buy will work and function just like new. Among hundreds of used phone and gadget sellers, we have chosen a modest bunch of reputable resellers and marketplaces that provide high-quality used and refurbished phones. An UpTrade Certified Used Galaxy S21 FE 5G means it has passed an in-depth inspection by our Certified Seller.",
      "What is the return policy for the Used and Refurbished Galaxy S21 FE 5G?":
        "Yes! All UpTrade Certified Used Phone Resellers and Marketplaces offer 30-day money-back-guarantee on Galaxy S21 FE 5G phones listed here. If you aren’t satisfied with your purchase you may return your Galaxy S21 FE 5G to your seller for free for up to 30 days.",
      "Are refurbished Android phones as good as new ones?":
        "Many people wonder if a refurbished Android phone is as good as a new one. Typically there’s really no difference between them except for the fact that there may be signs of use (if at all) on a refurbished phone. A refurbished Android phone should be fully functional and work just like a new Android phone. All UpTrade Certified Used Phone Resellers process the phones through a rigorous inspection so that each phone is fully functional and works just like a new phone.",
    },
  },
  {
    productName: "Galaxy S21 Ultra 5G",
    productCategoryValueId: 85,
    price: 47795,
    keyword: null,
    productImageUrl:
      "https://d3c745jesl5pj3.cloudfront.net/sell/web/Galaxy S21 Ultra 5G black_05da0bd329264c4aabb61b98f819a316.jpg",
    brand: "Samsung",
    type: null,
    brandCategoryValueId: 19,
    relatedGoods: [
      {
        productId: 1545698378683543552,
        name: "Galaxy S21 Ultra 5G",
        brand: "Samsung",
        merchant: "Amazon",
        brandLogoUrl:
          "https://uptrade-public-static-resources.s3.us-east-2.amazonaws.com/amazon+logo.png",
        buyUrl:
          "https://www.amazon.com/Samsung-Android-Smartphone-Pro-Grade-T-Mobile/dp/B09SK8X3TT/ref=sr_1_130?keywords=Samsung+Galaxy+Unlocked+renewed&qid=1657217786&sr=8-130&srs=17871142011",
        currentPrice: 48999,
        specs: [
          {
            productId: 1545698378683543552,
            key: "CONDITION",
            value: "Excellent",
          },
          {
            productId: 1545698378683543552,
            key: "CARRIER",
            value: "T-Mobile",
          },
          {
            productId: 1545698378683543552,
            key: "STORAGE",
            value: "128GB",
          },
          {
            productId: 1545698378683543552,
            key: "COLOR",
            value: "White",
          },
        ],
      },
      {
        productId: 1545705589233184768,
        name: "Galaxy S21 Ultra 5G",
        brand: "Samsung",
        merchant: "Gazelle",
        brandLogoUrl:
          "https://uptrade-public-static-resources.s3.us-east-2.amazonaws.com/gazelle+logo.png",
        buyUrl:
          "https://buy.gazelle.com/products/galaxy-s21-ultra-5g-128gb-at-t-2?variant=39644559376437",
        currentPrice: 54900,
        specs: [
          {
            productId: 1545705589233184768,
            key: "CONDITION",
            value: "Excellent",
          },
          {
            productId: 1545705589233184768,
            key: "CARRIER",
            value: "AT&T",
          },
          {
            productId: 1545705589233184768,
            key: "STORAGE",
            value: "128GB",
          },
          {
            productId: 1545705589233184768,
            key: "COLOR",
            value: "Phantom Black",
          },
        ],
      },
      {
        productId: 1545705592009814016,
        name: "Galaxy S21 Ultra 5G",
        brand: "Samsung",
        merchant: "Gazelle",
        brandLogoUrl:
          "https://uptrade-public-static-resources.s3.us-east-2.amazonaws.com/gazelle+logo.png",
        buyUrl:
          "https://buy.gazelle.com/products/galaxy-s21-ultra-5g-128gb-boost-1?variant=41245766615093",
        currentPrice: 54900,
        specs: [
          {
            productId: 1545705592009814016,
            key: "CONDITION",
            value: "Excellent",
          },
          {
            productId: 1545705592009814016,
            key: "CARRIER",
            value: "Boost",
          },
          {
            productId: 1545705592009814016,
            key: "STORAGE",
            value: "128GB",
          },
          {
            productId: 1545705592009814016,
            key: "COLOR",
            value: "Phantom Black",
          },
        ],
      },
      {
        productId: 1545705661404573696,
        name: "Galaxy S21 Ultra 5G",
        brand: "Samsung",
        merchant: "Gazelle",
        brandLogoUrl:
          "https://uptrade-public-static-resources.s3.us-east-2.amazonaws.com/gazelle+logo.png",
        buyUrl:
          "https://buy.gazelle.com/products/galaxy-s21-ultra-5g-128gb-verizon-1?variant=39620695916597",
        currentPrice: 57400,
        specs: [
          {
            productId: 1545705661404573696,
            key: "CONDITION",
            value: "Excellent",
          },
          {
            productId: 1545705661404573696,
            key: "CARRIER",
            value: "Verizon",
          },
          {
            productId: 1545705661404573696,
            key: "STORAGE",
            value: "128GB",
          },
          {
            productId: 1545705661404573696,
            key: "COLOR",
            value: "Phantom Black",
          },
        ],
      },
      {
        productId: 1545705662012747776,
        name: "Galaxy S21 Ultra 5G",
        brand: "Samsung",
        merchant: "Gazelle",
        brandLogoUrl:
          "https://uptrade-public-static-resources.s3.us-east-2.amazonaws.com/gazelle+logo.png",
        buyUrl:
          "https://buy.gazelle.com/products/galaxy-s21-ultra-5g-128gb-verizon-1?variant=39620696014901",
        currentPrice: 57400,
        specs: [
          {
            productId: 1545705662012747776,
            key: "CONDITION",
            value: "Excellent",
          },
          {
            productId: 1545705662012747776,
            key: "CARRIER",
            value: "Verizon",
          },
          {
            productId: 1545705662012747776,
            key: "STORAGE",
            value: "128GB",
          },
          {
            productId: 1545705662012747776,
            key: "COLOR",
            value: "Phantom Silver",
          },
        ],
      },
    ],
    aboutProduct: null,
    metaDescription:
      "Film in 8K with the Galaxy S21 Ultra 5G. Fully tested and certified pre-owned available.",
    metaDescCategory: null,
    qa: {
      "Why should you buy a used or refurbished Galaxy S21 Ultra 5G?":
        "I am glad that you asked! A refurbished Galaxy S21 Ultra 5G is a great opportunity to save when you are looking to purchase your next phone. Buying a refurbished Galaxy S21 Ultra 5G can be an wonderful choice and can net you huge savings, particularly when the cost of a new Galaxy S21 Ultra 5G is crazy expensive. A refurbished Galaxy S21 Ultra 5G is completely functional and works very much like a brand new Galaxy S21 Ultra 5G.",
      "What does it mean if the Galaxy S21 Ultra 5G is unlocked?":
        "You may use an unlocked Galaxy S21 Ultra 5G with any carrier in the United States. Purchasing an unlocked Galaxy S21 Ultra 5G is an wonderful choice if you aren’t sure which wireless carrier you want to sign up with, or if you want to be sure the Galaxy S21 Ultra 5G will work with your current carrier. An unlocked Galaxy S21 Ultra 5G is likewise an incredible phone to buy as a gift since it will work with any carrier or wireless plan that they may have.",
      "What does UpTrade Certified Used mean?":
        "UpTrade Certified means the Galaxy S21 Ultra 5G you buy will work and function just like new. Among hundreds of used phone and gadget sellers, we have chosen a modest bunch of reputable resellers and marketplaces that provide high-quality used and refurbished phones. An UpTrade Certified Used Galaxy S21 Ultra 5G means it has passed an in-depth inspection by our Certified Seller.",
      "What is the return policy for the Used and Refurbished Galaxy S21 Ultra 5G?":
        "Yes! All UpTrade Certified Used Phone Resellers and Marketplaces offer 30-day money-back-guarantee on Galaxy S21 Ultra 5G phones listed here. If you aren’t satisfied with your purchase you may return your Galaxy S21 Ultra 5G to your seller for free for up to 30 days.",
      "Are refurbished Android phones as good as new ones?":
        "Many people wonder if a refurbished Android phone is as good as a new one. Typically there’s really no difference between them except for the fact that there may be signs of use (if at all) on a refurbished phone. A refurbished Android phone should be fully functional and work just like a new Android phone. All UpTrade Certified Used Phone Resellers process the phones through a rigorous inspection so that each phone is fully functional and works just like a new phone.",
    },
  },
  {
    productName: "Galaxy S21+ 5G",
    productCategoryValueId: 44,
    price: 42400,
    keyword: null,
    productImageUrl:
      "https://d3c745jesl5pj3.cloudfront.net/sell/web/Galaxy S21jia 5G_403965f93e224cbaa0cb4280c2380e55.jpeg",
    brand: "Samsung",
    type: null,
    brandCategoryValueId: 19,
    relatedGoods: [
      {
        productId: 1545705658082684928,
        name: "Galaxy S21+ 5G",
        brand: "Samsung",
        merchant: "Gazelle",
        brandLogoUrl:
          "https://uptrade-public-static-resources.s3.us-east-2.amazonaws.com/gazelle+logo.png",
        buyUrl:
          "https://buy.gazelle.com/collections/samsung-galaxy/products/galaxy-s21-5g-128gb-verizon-3?variant=39711789416501",
        currentPrice: 42400,
        specs: [
          {
            productId: 1545705658082684928,
            key: "CONDITION",
            value: "Excellent",
          },
          {
            productId: 1545705658082684928,
            key: "CARRIER",
            value: "Verizon",
          },
          {
            productId: 1545705658082684928,
            key: "STORAGE",
            value: "128GB",
          },
          {
            productId: 1545705658082684928,
            key: "COLOR",
            value: "Phantom Black",
          },
        ],
      },
      {
        productId: 1545705566953041920,
        name: "Galaxy S21+ 5G",
        brand: "Samsung",
        merchant: "Gazelle",
        brandLogoUrl:
          "https://uptrade-public-static-resources.s3.us-east-2.amazonaws.com/gazelle+logo.png",
        buyUrl:
          "https://buy.gazelle.com/collections/samsung-galaxy/products/galaxy-s21-5g-128gb-verizon-3?variant=39711789514805",
        currentPrice: 42400,
        specs: [
          {
            productId: 1545705566953041920,
            key: "CONDITION",
            value: "Excellent",
          },
          {
            productId: 1545705566953041920,
            key: "CARRIER",
            value: "Verizon",
          },
          {
            productId: 1545705566953041920,
            key: "STORAGE",
            value: "128GB",
          },
          {
            productId: 1545705566953041920,
            key: "COLOR",
            value: "Phantom Silver",
          },
        ],
      },
      {
        productId: 1545705568186167296,
        name: "Galaxy S21+ 5G",
        brand: "Samsung",
        merchant: "Gazelle",
        brandLogoUrl:
          "https://uptrade-public-static-resources.s3.us-east-2.amazonaws.com/gazelle+logo.png",
        buyUrl:
          "https://buy.gazelle.com/collections/samsung-galaxy/products/galaxy-s21-5g-128gb-verizon-3?variant=39711789613109",
        currentPrice: 42400,
        specs: [
          {
            productId: 1545705568186167296,
            key: "CONDITION",
            value: "Excellent",
          },
          {
            productId: 1545705568186167296,
            key: "CARRIER",
            value: "Verizon",
          },
          {
            productId: 1545705568186167296,
            key: "STORAGE",
            value: "128GB",
          },
          {
            productId: 1545705568186167296,
            key: "COLOR",
            value: "Phantom Violet",
          },
        ],
      },
      {
        productId: 1545705567435386880,
        name: "Galaxy S21+ 5G",
        brand: "Samsung",
        merchant: "Gazelle",
        brandLogoUrl:
          "https://uptrade-public-static-resources.s3.us-east-2.amazonaws.com/gazelle+logo.png",
        buyUrl:
          "https://buy.gazelle.com/collections/samsung-galaxy/products/galaxy-s21-5g-128gb-verizon-3?variant=39711789547573",
        currentPrice: 43400,
        specs: [
          {
            productId: 1545705567435386880,
            key: "CONDITION",
            value: "Excellent",
          },
          {
            productId: 1545705567435386880,
            key: "CARRIER",
            value: "Verizon",
          },
          {
            productId: 1545705567435386880,
            key: "STORAGE",
            value: "128GB",
          },
          {
            productId: 1545705567435386880,
            key: "COLOR",
            value: "Phantom Silver",
          },
        ],
      },
      {
        productId: 1545705566470696960,
        name: "Galaxy S21+ 5G",
        brand: "Samsung",
        merchant: "Gazelle",
        brandLogoUrl:
          "https://uptrade-public-static-resources.s3.us-east-2.amazonaws.com/gazelle+logo.png",
        buyUrl:
          "https://buy.gazelle.com/collections/samsung-galaxy/products/galaxy-s21-5g-128gb-verizon-3?variant=39711789449269",
        currentPrice: 43400,
        specs: [
          {
            productId: 1545705566470696960,
            key: "CONDITION",
            value: "Excellent",
          },
          {
            productId: 1545705566470696960,
            key: "CARRIER",
            value: "Verizon",
          },
          {
            productId: 1545705566470696960,
            key: "STORAGE",
            value: "128GB",
          },
          {
            productId: 1545705566470696960,
            key: "COLOR",
            value: "Phantom Black",
          },
        ],
      },
    ],
    aboutProduct: null,
    metaDescription:
      "Blazing fast 5G connectivity and the preciseness of the S-Pen combined. Find Certified Used stock of the beautifully designed Samsung S21+ Ultra 5G.",
    metaDescCategory: null,
    qa: {
      "Why should you buy a used or refurbished Galaxy S21+ 5G?":
        "A refurbished Galaxy S21+ 5G functions precisely like a new one. Why pay more? It will save you a lot of money  buying a refurbished Galaxy S21+ 5G. More importantly, it reduces e-waste and makes our planet a better place. Buying a refurbished Galaxy S21+ 5G is a smart choice.",
      "What does it mean if the Galaxy S21+ 5G is unlocked?":
        "Most Galaxy S21+ 5G’s bought from wireless carriers are locked to their network. An unlocked Galaxy S21+ 5G means the phone has been unlocked and can be used with any carrier in the United States. Choosing an unlocked Galaxy S21+ 5G is the safest option if you are unsure which carrier you will use. An unlocked Galaxy S21+ 5G is also a great option as a gift since it will work with any carrier or wireless phone plan they currently have.",
      "What does UpTrade Certified Used mean?":
        "UpTrade Certified means you can trust that your used Galaxy S21+ 5G will function just as well as a new device. Among hundreds of used phone sellers, we have chosen a modest bunch of reputable sellers and marketplaces that are capable of providing high-quality used and refurbished phones. An UpTrade Certified Used Galaxy S21+ 5G means it has passed a rigorous inspection and functions like a new one.",
      "What is the return policy for the Used and Refurbished Galaxy S21+ 5G?":
        "No worries if you are not 100% satisfied with the device you have received! Each phone is granted a 30-day trial period in which buyers may return the used device to the UpTrade Certified Seller for a refund within the first 30 days.",
      "Are refurbished Android phones as good as new ones?":
        "For the most part, there is no definite difference between a new phone and a used one, aside from one previously used by another owner. All used phones listed on UpTrade must pass a rigorous inspection to guarantee quality and product performance. Refurbished devices certified by UpTrade work just as well as new, ordinary store-bought phones.",
    },
  },
  {
    productName: "Galaxy S22",
    productCategoryValueId: 76,
    price: 55395,
    keyword: null,
    productImageUrl:
      "https://d3c745jesl5pj3.cloudfront.net/sell/web/Galaxy S22_762fb2c2ef69412bad7bae9ee37f6dd8.jpg",
    brand: "Samsung",
    type: null,
    brandCategoryValueId: 19,
    relatedGoods: [
      {
        productId: 1545698517204627456,
        name: "Galaxy S22",
        brand: "Samsung",
        merchant: "Amazon",
        brandLogoUrl:
          "https://uptrade-public-static-resources.s3.us-east-2.amazonaws.com/amazon+logo.png",
        buyUrl:
          "https://www.amazon.com/SAMSUNG-Smartphone-Android-Brightest-Processor/dp/B0B2X796SX/ref=sr_1_240?keywords=Samsung+Galaxy+T-Mobile+renewed&qid=1657244773&sr=8-240",
        currentPrice: 55395,
        specs: [
          {
            productId: 1545698517204627456,
            key: "CONDITION",
            value: "Excellent",
          },
          {
            productId: 1545698517204627456,
            key: "CARRIER",
            value: "T-Mobile",
          },
          {
            productId: 1545698517204627456,
            key: "STORAGE",
            value: "128GB",
          },
          {
            productId: 1545698517204627456,
            key: "COLOR",
            value: "Black",
          },
        ],
      },
      {
        productId: 1545698439320596480,
        name: "Galaxy S22",
        brand: "Samsung",
        merchant: "Amazon",
        brandLogoUrl:
          "https://uptrade-public-static-resources.s3.us-east-2.amazonaws.com/amazon+logo.png",
        buyUrl:
          "https://www.amazon.com/Samsung-Galaxy-Phantom-Verizon-Renewed/dp/B09VT8L1B7/ref=sr_1_170?keywords=Samsung+Galaxy+Verizon+renewed&qid=1657220049&sr=8-170",
        currentPrice: 55449,
        specs: [
          {
            productId: 1545698439320596480,
            key: "CONDITION",
            value: "Excellent",
          },
          {
            productId: 1545698439320596480,
            key: "CARRIER",
            value: "Verizon",
          },
          {
            productId: 1545698439320596480,
            key: "STORAGE",
            value: "128GB",
          },
          {
            productId: 1545698439320596480,
            key: "COLOR",
            value: "Black",
          },
        ],
      },
      {
        productId: 1545698529636544512,
        name: "Galaxy S22",
        brand: "Samsung",
        merchant: "Amazon",
        brandLogoUrl:
          "https://uptrade-public-static-resources.s3.us-east-2.amazonaws.com/amazon+logo.png",
        buyUrl:
          "https://www.amazon.com/SAMSUNG-Smartphone-Android-Brightest-Processor/dp/B0B2ZGWLGS/ref=sr_1_215?keywords=Samsung+Galaxy+T-Mobile+renewed&qid=1657285023&sr=8-215",
        currentPrice: 55500,
        specs: [
          {
            productId: 1545698529636544512,
            key: "CONDITION",
            value: "Excellent",
          },
          {
            productId: 1545698529636544512,
            key: "CARRIER",
            value: "T-Mobile",
          },
          {
            productId: 1545698529636544512,
            key: "STORAGE",
            value: "256GB",
          },
          {
            productId: 1545698529636544512,
            key: "COLOR",
            value: "Green",
          },
        ],
      },
      {
        productId: 1545698516265103360,
        name: "Galaxy S22",
        brand: "Samsung",
        merchant: "Amazon",
        brandLogoUrl:
          "https://uptrade-public-static-resources.s3.us-east-2.amazonaws.com/amazon+logo.png",
        buyUrl:
          "https://www.amazon.com/SAMSUNG-Smartphone-Android-Brightest-Processor/dp/B0B2ZQKZZK/ref=sr_1_189?keywords=Samsung+Galaxy+T-Mobile+renewed&qid=1657244460&sr=8-189",
        currentPrice: 55500,
        specs: [
          {
            productId: 1545698516265103360,
            key: "CONDITION",
            value: "Excellent",
          },
          {
            productId: 1545698516265103360,
            key: "CARRIER",
            value: "T-Mobile",
          },
          {
            productId: 1545698516265103360,
            key: "STORAGE",
            value: "256GB",
          },
          {
            productId: 1545698516265103360,
            key: "COLOR",
            value: "Pink Gold",
          },
        ],
      },
      {
        productId: 1545698453090496512,
        name: "Galaxy S22",
        brand: "Samsung",
        merchant: "Amazon",
        brandLogoUrl:
          "https://uptrade-public-static-resources.s3.us-east-2.amazonaws.com/amazon+logo.png",
        buyUrl:
          "https://www.amazon.com/Samsung-Galaxy-Verizon-SM-S901U-Renewed/dp/B0B57PGVR1/ref=sr_1_245?keywords=Samsung+Galaxy+Verizon+renewed&qid=1657220535&sr=8-245",
        currentPrice: 58274,
        specs: [
          {
            productId: 1545698453090496512,
            key: "CONDITION",
            value: "Excellent",
          },
          {
            productId: 1545698453090496512,
            key: "CARRIER",
            value: "Verizon",
          },
          {
            productId: 1545698453090496512,
            key: "STORAGE",
            value: "256GB",
          },
          {
            productId: 1545698453090496512,
            key: "COLOR",
            value: "Pink Gold",
          },
        ],
      },
    ],
    aboutProduct: null,
    metaDescription:
      "The reliable and high tech Samsung Galaxy S22 with a built in nightography camera is easier than ever to afford! Buy a fully tested pre-owned Galaxy S22 now!",
    metaDescCategory: null,
    qa: {
      "Why should you buy a used or refurbished Galaxy S22?":
        "A refurbished Galaxy S22 functions precisely like a new one. Why pay more? It will save you a lot of money  buying a refurbished Galaxy S22. More importantly, it reduces e-waste and makes our planet a better place. Buying a refurbished Galaxy S22 is a smart choice.",
      "What does it mean if the Galaxy S22 is unlocked?":
        "Most Galaxy S22’s bought from wireless carriers are locked to their network. An unlocked Galaxy S22 means the phone has been unlocked and can be used with any carrier in the United States. Choosing an unlocked Galaxy S22 is the safest option if you are unsure which carrier you will use. An unlocked Galaxy S22 is also a great option as a gift since it will work with any carrier or wireless phone plan they currently have.",
      "What does UpTrade Certified Used mean?":
        "UpTrade Certified means you can trust that your used Galaxy S22 will function just as well as a new device. Among hundreds of used phone sellers, we have chosen a modest bunch of reputable sellers and marketplaces that are capable of providing high-quality used and refurbished phones. An UpTrade Certified Used Galaxy S22 means it has passed a rigorous inspection and functions like a new one.",
      "What is the return policy for the Used and Refurbished Galaxy S22?":
        "No worries if you are not 100% satisfied with the device you have received! Each phone is granted a 30-day trial period in which buyers may return the used device to the UpTrade Certified Seller for a refund within the first 30 days.",
      "Are refurbished Android phones as good as new ones?":
        "For the most part, there is no definite difference between a new phone and a used one, aside from one previously used by another owner. All used phones listed on UpTrade must pass a rigorous inspection to guarantee quality and product performance. Refurbished devices certified by UpTrade work just as well as new, ordinary store-bought phones.",
    },
  },
  {
    productName: "Galaxy S22 Ultra",
    productCategoryValueId: 345,
    price: 15999,
    keyword: null,
    productImageUrl:
      "https://d3c745jesl5pj3.cloudfront.net/sell/web/Galaxy S22 Ultra_d7637d9e87434cd1ba00c35418458a0d.jpg",
    brand: "Samsung",
    type: null,
    brandCategoryValueId: 19,
    relatedGoods: [
      {
        productId: 1545698392344391680,
        name: "Galaxy S22 Ultra",
        brand: "Samsung",
        merchant: "Amazon",
        brandLogoUrl:
          "https://uptrade-public-static-resources.s3.us-east-2.amazonaws.com/amazon+logo.png",
        buyUrl:
          "https://www.amazon.com/Samsung-International-Factory-Unlocked-Battery/dp/B08X64KB6F/ref=sr_1_181?keywords=Samsung+Galaxy+Unlocked+renewed&qid=1657218245&sr=8-181&srs=17871142011",
        currentPrice: 15999,
        specs: [
          {
            productId: 1545698392344391680,
            key: "CONDITION",
            value: "Excellent",
          },
          {
            productId: 1545698392344391680,
            key: "CARRIER",
            value: "Unlocked",
          },
          {
            productId: 1545698392344391680,
            key: "STORAGE",
            value: "64GB",
          },
          {
            productId: 1545698392344391680,
            key: "COLOR",
            value: "Blue",
          },
        ],
      },
      {
        productId: 1545698492277878784,
        name: "Galaxy S22 Ultra",
        brand: "Samsung",
        merchant: "Amazon",
        brandLogoUrl:
          "https://uptrade-public-static-resources.s3.us-east-2.amazonaws.com/amazon+logo.png",
        buyUrl:
          "https://www.amazon.com/SAMSUNG-Smartphone-Android-Brightest-Processor/dp/B0B3BKNKRW/ref=sr_1_180?keywords=Samsung+Galaxy+Unlocked+renewed&qid=1657238882&sr=8-180",
        currentPrice: 82999,
        specs: [
          {
            productId: 1545698492277878784,
            key: "CONDITION",
            value: "Excellent",
          },
          {
            productId: 1545698492277878784,
            key: "CARRIER",
            value: "T-Mobile",
          },
          {
            productId: 1545698492277878784,
            key: "STORAGE",
            value: "128GB",
          },
          {
            productId: 1545698492277878784,
            key: "COLOR",
            value: "Black",
          },
        ],
      },
      {
        productId: 1545698516751642624,
        name: "Galaxy S22 Ultra",
        brand: "Samsung",
        merchant: "Amazon",
        brandLogoUrl:
          "https://uptrade-public-static-resources.s3.us-east-2.amazonaws.com/amazon+logo.png",
        buyUrl:
          "https://www.amazon.com/SAMSUNG-Smartphone-Android-Brightest-Processor/dp/B0B3FBJS6Z/ref=sr_1_239?keywords=Samsung+Galaxy+T-Mobile+renewed&qid=1657244773&sr=8-239",
        currentPrice: 82999,
        specs: [
          {
            productId: 1545698516751642624,
            key: "CONDITION",
            value: "Excellent",
          },
          {
            productId: 1545698516751642624,
            key: "CARRIER",
            value: "T-Mobile",
          },
          {
            productId: 1545698516751642624,
            key: "STORAGE",
            value: "128GB",
          },
          {
            productId: 1545698516751642624,
            key: "COLOR",
            value: "Green",
          },
        ],
      },
      {
        productId: 1545698518135762944,
        name: "Galaxy S22 Ultra",
        brand: "Samsung",
        merchant: "Amazon",
        brandLogoUrl:
          "https://uptrade-public-static-resources.s3.us-east-2.amazonaws.com/amazon+logo.png",
        buyUrl:
          "https://www.amazon.com/SAMSUNG-Smartphone-Android-Brightest-Processor/dp/B0B3CDHDCY/ref=sr_1_271?keywords=Samsung+Galaxy+T-Mobile+renewed&qid=1657244929&sr=8-271",
        currentPrice: 84999,
        specs: [
          {
            productId: 1545698518135762944,
            key: "CONDITION",
            value: "Excellent",
          },
          {
            productId: 1545698518135762944,
            key: "CARRIER",
            value: "T-Mobile",
          },
          {
            productId: 1545698518135762944,
            key: "STORAGE",
            value: "256GB",
          },
          {
            productId: 1545698518135762944,
            key: "COLOR",
            value: "Black",
          },
        ],
      },
      {
        productId: 1545698520484573184,
        name: "Galaxy S22 Ultra",
        brand: "Samsung",
        merchant: "Amazon",
        brandLogoUrl:
          "https://uptrade-public-static-resources.s3.us-east-2.amazonaws.com/amazon+logo.png",
        buyUrl:
          "https://www.amazon.com/Samsung-Galaxy-Ultra-Factory-Unlocked/dp/B0B5B4RPK3/ref=sr_1_163?keywords=Samsung+Galaxy+Sprint+renewed&qid=1657245960&sr=8-163",
        currentPrice: 89999,
        specs: [
          {
            productId: 1545698520484573184,
            key: "CONDITION",
            value: "Excellent",
          },
          {
            productId: 1545698520484573184,
            key: "CARRIER",
            value: "Unlocked",
          },
          {
            productId: 1545698520484573184,
            key: "STORAGE",
            value: "256GB",
          },
          {
            productId: 1545698520484573184,
            key: "COLOR",
            value: "Black",
          },
        ],
      },
    ],
    aboutProduct: null,
    metaDescription:
      "The Samsung Gallaxy S22 with built in S-Pen can bring your smart device to a whole new level! Now its easily affordable when you purchase certified pre-owned.",
    metaDescCategory: null,
    qa: {
      "Why should you buy a used or refurbished Galaxy S22 Ultra?":
        "I am glad that you asked! A refurbished Galaxy S22 Ultra is a great opportunity to save when you are looking to purchase your next phone. Buying a refurbished Galaxy S22 Ultra can be an wonderful choice and can net you huge savings, particularly when the cost of a new Galaxy S22 Ultra is crazy expensive. A refurbished Galaxy S22 Ultra is completely functional and works very much like a brand new Galaxy S22 Ultra.",
      "What does it mean if the Galaxy S22 Ultra is unlocked?":
        "You may use an unlocked Galaxy S22 Ultra with any carrier in the United States. Purchasing an unlocked Galaxy S22 Ultra is an wonderful choice if you aren’t sure which wireless carrier you want to sign up with, or if you want to be sure the Galaxy S22 Ultra will work with your current carrier. An unlocked Galaxy S22 Ultra is likewise an incredible phone to buy as a gift since it will work with any carrier or wireless plan that they may have.",
      "What does UpTrade Certified Used mean?":
        "UpTrade Certified means the Galaxy S22 Ultra you buy will work and function just like new. Among hundreds of used phone and gadget sellers, we have chosen a modest bunch of reputable resellers and marketplaces that provide high-quality used and refurbished phones. An UpTrade Certified Used Galaxy S22 Ultra means it has passed an in-depth inspection by our Certified Seller.",
      "What is the return policy for the Used and Refurbished Galaxy S22 Ultra?":
        "Yes! All UpTrade Certified Used Phone Resellers and Marketplaces offer 30-day money-back-guarantee on Galaxy S22 Ultra phones listed here. If you aren’t satisfied with your purchase you may return your Galaxy S22 Ultra to your seller for free for up to 30 days.",
      "Are refurbished Android phones as good as new ones?":
        "Many people wonder if a refurbished Android phone is as good as a new one. Typically there’s really no difference between them except for the fact that there may be signs of use (if at all) on a refurbished phone. A refurbished Android phone should be fully functional and work just like a new Android phone. All UpTrade Certified Used Phone Resellers process the phones through a rigorous inspection so that each phone is fully functional and works just like a new phone.",
    },
  },
  {
    productName: "Galaxy S22+",
    productCategoryValueId: 116,
    price: 71054,
    keyword: null,
    productImageUrl:
      "https://d3c745jesl5pj3.cloudfront.net/sell/web/Galaxy S22jia_dde5b60d0cfc46d3a4f75b5969c433f7.jpg",
    brand: "Samsung",
    type: null,
    brandCategoryValueId: 19,
    relatedGoods: [
      {
        productId: 1545698384777867264,
        name: "Galaxy S22+",
        brand: "Samsung",
        merchant: "Amazon",
        brandLogoUrl:
          "https://uptrade-public-static-resources.s3.us-east-2.amazonaws.com/amazon+logo.png",
        buyUrl:
          "https://www.amazon.com/Samsung-Smartphone-Unlocked-Brightest-Processor/dp/B09W3PK64J/ref=sr_1_153?keywords=Samsung+Galaxy+Unlocked+renewed&qid=1657217972&sr=8-153&srs=17871142011",
        currentPrice: 71899,
        specs: [
          {
            productId: 1545698384777867264,
            key: "CONDITION",
            value: "Excellent",
          },
          {
            productId: 1545698384777867264,
            key: "CARRIER",
            value: "Unlocked",
          },
          {
            productId: 1545698384777867264,
            key: "STORAGE",
            value: "128GB",
          },
          {
            productId: 1545698384777867264,
            key: "COLOR",
            value: "Green",
          },
        ],
      },
      {
        productId: 1545698391870435328,
        name: "Galaxy S22+",
        brand: "Samsung",
        merchant: "Amazon",
        brandLogoUrl:
          "https://uptrade-public-static-resources.s3.us-east-2.amazonaws.com/amazon+logo.png",
        buyUrl:
          "https://www.amazon.com/SAMSUNG-Smartphone-Unlocked-Brightest-Processor/dp/B09YN5D6KF/ref=sr_1_180?keywords=Samsung+Galaxy+Unlocked+renewed&qid=1657218145&sr=8-180&srs=17871142011",
        currentPrice: 71999,
        specs: [
          {
            productId: 1545698391870435328,
            key: "CONDITION",
            value: "Excellent",
          },
          {
            productId: 1545698391870435328,
            key: "CARRIER",
            value: "Unlocked",
          },
          {
            productId: 1545698391870435328,
            key: "STORAGE",
            value: "128GB",
          },
          {
            productId: 1545698391870435328,
            key: "COLOR",
            value: "White",
          },
        ],
      },
      {
        productId: 1545698356478898176,
        name: "Galaxy S22+",
        brand: "Samsung",
        merchant: "Amazon",
        brandLogoUrl:
          "https://uptrade-public-static-resources.s3.us-east-2.amazonaws.com/amazon+logo.png",
        buyUrl:
          "https://www.amazon.com/Samsung-Smartphone-Unlocked-Brightest-Processor/dp/B09WZG188L/ref=sr_1_55?keywords=Samsung+Galaxy+Unlocked+renewed&qid=1657217201&sr=8-55&srs=17871142011",
        currentPrice: 72999,
        specs: [
          {
            productId: 1545698356478898176,
            key: "CONDITION",
            value: "Excellent",
          },
          {
            productId: 1545698356478898176,
            key: "CARRIER",
            value: "Unlocked",
          },
          {
            productId: 1545698356478898176,
            key: "STORAGE",
            value: "256GB",
          },
          {
            productId: 1545698356478898176,
            key: "COLOR",
            value: "Green",
          },
        ],
      },
    ],
    aboutProduct: null,
    metaDescription:
      "The Samsung Galaxy s22+ collides beauty and performance. Saftey built in with an ultrasonic under display finger print scanner. Purchase certified used and save!",
    metaDescCategory: null,
    qa: {
      "Why should you buy a used or refurbished Galaxy S22+?":
        "A refurbished Galaxy S22+ functions precisely like a new one. Why pay more? It will save you a lot of money  buying a refurbished Galaxy S22+. More importantly, it reduces e-waste and makes our planet a better place. Buying a refurbished Galaxy S22+ is a smart choice.",
      "What does it mean if the Galaxy S22+ is unlocked?":
        "Most Galaxy S22+’s bought from wireless carriers are locked to their network. An unlocked Galaxy S22+ means the phone has been unlocked and can be used with any carrier in the United States. Choosing an unlocked Galaxy S22+ is the safest option if you are unsure which carrier you will use. An unlocked Galaxy S22+ is also a great option as a gift since it will work with any carrier or wireless phone plan they currently have.",
      "What does UpTrade Certified Used mean?":
        "UpTrade Certified means you can trust that your used Galaxy S22+ will function just as well as a new device. Among hundreds of used phone sellers, we have chosen a modest bunch of reputable sellers and marketplaces that are capable of providing high-quality used and refurbished phones. An UpTrade Certified Used Galaxy S22+ means it has passed a rigorous inspection and functions like a new one.",
      "What is the return policy for the Used and Refurbished Galaxy S22+?":
        "No worries if you are not 100% satisfied with the device you have received! Each phone is granted a 30-day trial period in which buyers may return the used device to the UpTrade Certified Seller for a refund within the first 30 days.",
      "Are refurbished Android phones as good as new ones?":
        "For the most part, there is no definite difference between a new phone and a used one, aside from one previously used by another owner. All used phones listed on UpTrade must pass a rigorous inspection to guarantee quality and product performance. Refurbished devices certified by UpTrade work just as well as new, ordinary store-bought phones.",
    },
  },
  {
    productName: "Galaxy S5",
    productCategoryValueId: 598,
    price: null,
    keyword: null,
    productImageUrl:
      "https://d3c745jesl5pj3.cloudfront.net/sell/web/Galaxy S5_05de0b2f3f2248c68d5a355eb1f72a6e.jpg",
    brand: "Samsung",
    type: null,
    brandCategoryValueId: 19,
    relatedGoods: [
      {
        productId: 1545689879111036928,
        name: "Galaxy A50",
        brand: "Samsung",
        merchant: "Amazon",
        brandLogoUrl:
          "https://uptrade-public-static-resources.s3.us-east-2.amazonaws.com/amazon+logo.png",
        buyUrl:
          "https://www.amazon.com/Samsung-SM-A505G-Factory-Unlocked-Renewed/dp/B07RL93F7T/ref=sr_1_3?crid=3NBH91UQVO742&keywords=Samsung+Galaxy+unlocked+renewed&qid=1654951575&sprefix=samsung+galaxy+unlocked+renewed%2Cspecialty-aps%2C382&sr=8-3&srs=17871142011",
        currentPrice: 7900,
        specs: [
          {
            productId: 1545689879111036928,
            key: "CONDITION",
            value: "Excellent",
          },
          {
            productId: 1545689879111036928,
            key: "CARRIER",
            value: "Unlocked",
          },
          {
            productId: 1545689879111036928,
            key: "STORAGE",
            value: "64GB",
          },
          {
            productId: 1545689879111036928,
            key: "COLOR",
            value: "Black",
          },
        ],
      },
      {
        productId: 1545689910836752384,
        name: "Galaxy Note 8",
        brand: "Samsung",
        merchant: "Amazon",
        brandLogoUrl:
          "https://uptrade-public-static-resources.s3.us-east-2.amazonaws.com/amazon+logo.png",
        buyUrl:
          "https://www.amazon.com/Samsung-Galaxy-Note-Smartphone-Refurbished/dp/B07HFK5PQQ/ref=sr_1_66?crid=3NBH91UQVO742&keywords=Samsung+Galaxy+unlocked+renewed&qid=1654953630&sprefix=samsung+galaxy+unlocked+renewed%2Cspecialty-aps%2C382&sr=8-66&srs=17871142011",
        currentPrice: 7999,
        specs: [
          {
            productId: 1545689910836752384,
            key: "CONDITION",
            value: "Excellent",
          },
          {
            productId: 1545689910836752384,
            key: "CARRIER",
            value: "Unlocked",
          },
          {
            productId: 1545689910836752384,
            key: "STORAGE",
            value: "64GB",
          },
          {
            productId: 1545689910836752384,
            key: "COLOR",
            value: "Orchid Gray",
          },
        ],
      },
      {
        productId: 1545689999491756032,
        name: "Galaxy S8 Plus",
        brand: "Samsung",
        merchant: "Amazon",
        brandLogoUrl:
          "https://uptrade-public-static-resources.s3.us-east-2.amazonaws.com/amazon+logo.png",
        buyUrl:
          "https://www.amazon.com/Samsung-Galaxy-T-Mobile-Unlocked-Renewed/dp/B07DZP1BDG/ref=sr_1_138?crid=3NBH91UQVO742&keywords=Samsung+Galaxy+unlocked+renewed&qid=1654956295&sprefix=samsung+galaxy+unlocked+renewed%2Cspecialty-aps%2C382&sr=8-138&srs=17871142011",
        currentPrice: 9999,
        specs: [
          {
            productId: 1545689999491756032,
            key: "CONDITION",
            value: "Excellent",
          },
          {
            productId: 1545689999491756032,
            key: "CARRIER",
            value: "Unlocked",
          },
          {
            productId: 1545689999491756032,
            key: "STORAGE",
            value: "64GB",
          },
          {
            productId: 1545689999491756032,
            key: "COLOR",
            value: "Arctic Silver",
          },
        ],
      },
      {
        productId: 1545689906340458496,
        name: "Galaxy Note 9",
        brand: "Samsung",
        merchant: "Amazon",
        brandLogoUrl:
          "https://uptrade-public-static-resources.s3.us-east-2.amazonaws.com/amazon+logo.png",
        buyUrl:
          "https://www.amazon.com/Samsung-Galaxy-N960U-T-Mobile-Unlocked/dp/B08BW9KH55/ref=sr_1_62?crid=3NBH91UQVO742&keywords=Samsung+Galaxy+unlocked+renewed&qid=1654953630&sprefix=samsung+galaxy+unlocked+renewed%2Cspecialty-aps%2C382&sr=8-62&srs=17871142011",
        currentPrice: 9999,
        specs: [
          {
            productId: 1545689906340458496,
            key: "CONDITION",
            value: "Excellent",
          },
          {
            productId: 1545689906340458496,
            key: "CARRIER",
            value: "Unlocked",
          },
          {
            productId: 1545689906340458496,
            key: "STORAGE",
            value: "128GB",
          },
          {
            productId: 1545689906340458496,
            key: "COLOR",
            value: "Ocean Blue",
          },
        ],
      },
      {
        productId: 1545689917975457792,
        name: "Galaxy S7",
        brand: "Samsung",
        merchant: "Amazon",
        brandLogoUrl:
          "https://uptrade-public-static-resources.s3.us-east-2.amazonaws.com/amazon+logo.png",
        buyUrl:
          "https://www.amazon.com/Samsung-Galaxy-G930T-T-Mobile-Unlocked/dp/B08CBKYVGT/ref=sr_1_76?crid=3NBH91UQVO742&keywords=Samsung+Galaxy+unlocked+renewed&qid=1654954075&sprefix=samsung+galaxy+unlocked+renewed%2Cspecialty-aps%2C382&sr=8-76&srs=17871142011",
        currentPrice: 9999,
        specs: [
          {
            productId: 1545689917975457792,
            key: "CONDITION",
            value: "Excellent",
          },
          {
            productId: 1545689917975457792,
            key: "CARRIER",
            value: "Unlocked",
          },
          {
            productId: 1545689917975457792,
            key: "STORAGE",
            value: "32GB",
          },
          {
            productId: 1545689917975457792,
            key: "COLOR",
            value: "Black",
          },
        ],
      },
    ],
    aboutProduct:
      "The Samsung Galaxy S5 may be getting a little older, but it still can hold its own against newer and flashier competitors. Its vibrant display, super-fast processor, and excellent camera make it more than a budget option without overloading on useless features. It’s a streamlined experience that emphasises excellence in the most important smartphone elements.",
    metaDescription:
      "Affordable, pre-owned Samsung Galaxy S5 from UpTrade! Trusted reseller with fully functional smartphones, photos & video of inspection available on site.",
    metaDescCategory:
      "The Galaxy S5 has a lot of fans. Even as newer generations of smartphones are released, many continue to call the S5 the “best phone Samsung ever made.” It’s gained a following because of its durable design with a water-resistant, plastic housing that can take a few hits. Plus it still has features many of the newer phones now lack like a replaceable battery, room for additional memory, and a headphone jack.",
    qa: {
      "Why should you buy a used or refurbished Galaxy S5?":
        "I am glad that you asked! A refurbished Galaxy S5 is a great opportunity to save when you are looking to purchase your next phone. Buying a refurbished Galaxy S5 can be an wonderful choice and can net you huge savings, particularly when the cost of a new Galaxy S5 is crazy expensive. A refurbished Galaxy S5 is completely functional and works very much like a brand new Galaxy S5.",
      "What does it mean if the Galaxy S5 is unlocked?":
        "You may use an unlocked Galaxy S5 with any carrier in the United States. Purchasing an unlocked Galaxy S5 is an wonderful choice if you aren’t sure which wireless carrier you want to sign up with, or if you want to be sure the Galaxy S5 will work with your current carrier. An unlocked Galaxy S5 is likewise an incredible phone to buy as a gift since it will work with any carrier or wireless plan that they may have.",
      "What does UpTrade Certified Used mean?":
        "UpTrade Certified means the Galaxy S5 you buy will work and function just like new. Among hundreds of used phone and gadget sellers, we have chosen a modest bunch of reputable resellers and marketplaces that provide high-quality used and refurbished phones. An UpTrade Certified Used Galaxy S5 means it has passed an in-depth inspection by our Certified Seller.",
      "What is the return policy for the Used and Refurbished Galaxy S5?":
        "Yes! All UpTrade Certified Used Phone Resellers and Marketplaces offer 30-day money-back-guarantee on Galaxy S5 phones listed here. If you aren’t satisfied with your purchase you may return your Galaxy S5 to your seller for free for up to 30 days.",
      "Are refurbished Android phones as good as new ones?":
        "Many people wonder if a refurbished Android phone is as good as a new one. Typically there’s really no difference between them except for the fact that there may be signs of use (if at all) on a refurbished phone. A refurbished Android phone should be fully functional and work just like a new Android phone. All UpTrade Certified Used Phone Resellers process the phones through a rigorous inspection so that each phone is fully functional and works just like a new phone.",
    },
  },
  {
    productName: "Galaxy S6",
    productCategoryValueId: 619,
    price: null,
    keyword: null,
    productImageUrl:
      "https://d3c745jesl5pj3.cloudfront.net/sell/web/Galaxy S6_0dbdabb0bae94268b03cbafe1749e8d7.jpg",
    brand: "Samsung",
    type: null,
    brandCategoryValueId: 19,
    relatedGoods: [
      {
        productId: 1545689879111036928,
        name: "Galaxy A50",
        brand: "Samsung",
        merchant: "Amazon",
        brandLogoUrl:
          "https://uptrade-public-static-resources.s3.us-east-2.amazonaws.com/amazon+logo.png",
        buyUrl:
          "https://www.amazon.com/Samsung-SM-A505G-Factory-Unlocked-Renewed/dp/B07RL93F7T/ref=sr_1_3?crid=3NBH91UQVO742&keywords=Samsung+Galaxy+unlocked+renewed&qid=1654951575&sprefix=samsung+galaxy+unlocked+renewed%2Cspecialty-aps%2C382&sr=8-3&srs=17871142011",
        currentPrice: 7900,
        specs: [
          {
            productId: 1545689879111036928,
            key: "CONDITION",
            value: "Excellent",
          },
          {
            productId: 1545689879111036928,
            key: "CARRIER",
            value: "Unlocked",
          },
          {
            productId: 1545689879111036928,
            key: "STORAGE",
            value: "64GB",
          },
          {
            productId: 1545689879111036928,
            key: "COLOR",
            value: "Black",
          },
        ],
      },
      {
        productId: 1545689910836752384,
        name: "Galaxy Note 8",
        brand: "Samsung",
        merchant: "Amazon",
        brandLogoUrl:
          "https://uptrade-public-static-resources.s3.us-east-2.amazonaws.com/amazon+logo.png",
        buyUrl:
          "https://www.amazon.com/Samsung-Galaxy-Note-Smartphone-Refurbished/dp/B07HFK5PQQ/ref=sr_1_66?crid=3NBH91UQVO742&keywords=Samsung+Galaxy+unlocked+renewed&qid=1654953630&sprefix=samsung+galaxy+unlocked+renewed%2Cspecialty-aps%2C382&sr=8-66&srs=17871142011",
        currentPrice: 7999,
        specs: [
          {
            productId: 1545689910836752384,
            key: "CONDITION",
            value: "Excellent",
          },
          {
            productId: 1545689910836752384,
            key: "CARRIER",
            value: "Unlocked",
          },
          {
            productId: 1545689910836752384,
            key: "STORAGE",
            value: "64GB",
          },
          {
            productId: 1545689910836752384,
            key: "COLOR",
            value: "Orchid Gray",
          },
        ],
      },
      {
        productId: 1545689999491756032,
        name: "Galaxy S8 Plus",
        brand: "Samsung",
        merchant: "Amazon",
        brandLogoUrl:
          "https://uptrade-public-static-resources.s3.us-east-2.amazonaws.com/amazon+logo.png",
        buyUrl:
          "https://www.amazon.com/Samsung-Galaxy-T-Mobile-Unlocked-Renewed/dp/B07DZP1BDG/ref=sr_1_138?crid=3NBH91UQVO742&keywords=Samsung+Galaxy+unlocked+renewed&qid=1654956295&sprefix=samsung+galaxy+unlocked+renewed%2Cspecialty-aps%2C382&sr=8-138&srs=17871142011",
        currentPrice: 9999,
        specs: [
          {
            productId: 1545689999491756032,
            key: "CONDITION",
            value: "Excellent",
          },
          {
            productId: 1545689999491756032,
            key: "CARRIER",
            value: "Unlocked",
          },
          {
            productId: 1545689999491756032,
            key: "STORAGE",
            value: "64GB",
          },
          {
            productId: 1545689999491756032,
            key: "COLOR",
            value: "Arctic Silver",
          },
        ],
      },
      {
        productId: 1545689906340458496,
        name: "Galaxy Note 9",
        brand: "Samsung",
        merchant: "Amazon",
        brandLogoUrl:
          "https://uptrade-public-static-resources.s3.us-east-2.amazonaws.com/amazon+logo.png",
        buyUrl:
          "https://www.amazon.com/Samsung-Galaxy-N960U-T-Mobile-Unlocked/dp/B08BW9KH55/ref=sr_1_62?crid=3NBH91UQVO742&keywords=Samsung+Galaxy+unlocked+renewed&qid=1654953630&sprefix=samsung+galaxy+unlocked+renewed%2Cspecialty-aps%2C382&sr=8-62&srs=17871142011",
        currentPrice: 9999,
        specs: [
          {
            productId: 1545689906340458496,
            key: "CONDITION",
            value: "Excellent",
          },
          {
            productId: 1545689906340458496,
            key: "CARRIER",
            value: "Unlocked",
          },
          {
            productId: 1545689906340458496,
            key: "STORAGE",
            value: "128GB",
          },
          {
            productId: 1545689906340458496,
            key: "COLOR",
            value: "Ocean Blue",
          },
        ],
      },
      {
        productId: 1545689917975457792,
        name: "Galaxy S7",
        brand: "Samsung",
        merchant: "Amazon",
        brandLogoUrl:
          "https://uptrade-public-static-resources.s3.us-east-2.amazonaws.com/amazon+logo.png",
        buyUrl:
          "https://www.amazon.com/Samsung-Galaxy-G930T-T-Mobile-Unlocked/dp/B08CBKYVGT/ref=sr_1_76?crid=3NBH91UQVO742&keywords=Samsung+Galaxy+unlocked+renewed&qid=1654954075&sprefix=samsung+galaxy+unlocked+renewed%2Cspecialty-aps%2C382&sr=8-76&srs=17871142011",
        currentPrice: 9999,
        specs: [
          {
            productId: 1545689917975457792,
            key: "CONDITION",
            value: "Excellent",
          },
          {
            productId: 1545689917975457792,
            key: "CARRIER",
            value: "Unlocked",
          },
          {
            productId: 1545689917975457792,
            key: "STORAGE",
            value: "32GB",
          },
          {
            productId: 1545689917975457792,
            key: "COLOR",
            value: "Black",
          },
        ],
      },
    ],
    aboutProduct:
      "The Samsung Galaxy S6 is the perfect phone for users looking for a nice smartphone that comes with many modern features but that won’t break the bank. Its glass and matte-metal body give it a sleek look, and the powerful processor means the software is as good as the hardware and makes for an all-around excellent phone.",
    metaDescription:
      "Fully functioning, inspected condition Samsung Galaxy S6 from UpTrade. See for yourself with video and photos! Smooth performance, great camera & storage",
    metaDescCategory:
      "The Samsung Galaxy S6 should be a serious contender for anyone looking for a smartphone today. It has all the standard features one could ask for--a sharp and vibrant screen, amazing camera, helpful Bixby Assistant--all housed in a sleek design. Reviewers call this phone “close to perfect.”",
    qa: {
      "Why should you buy a used or refurbished Galaxy S6?":
        "A refurbished Galaxy S6 functions precisely like a new one. Why pay more? It will save you a lot of money  buying a refurbished Galaxy S6. More importantly, it reduces e-waste and makes our planet a better place. Buying a refurbished Galaxy S6 is a smart choice.",
      "What does it mean if the Galaxy S6 is unlocked?":
        "Most Galaxy S6’s bought from wireless carriers are locked to their network. An unlocked Galaxy S6 means the phone has been unlocked and can be used with any carrier in the United States. Choosing an unlocked Galaxy S6 is the safest option if you are unsure which carrier you will use. An unlocked Galaxy S6 is also a great option as a gift since it will work with any carrier or wireless phone plan they currently have.",
      "What does UpTrade Certified Used mean?":
        "UpTrade Certified means you can trust that your used Galaxy S6 will function just as well as a new device. Among hundreds of used phone sellers, we have chosen a modest bunch of reputable sellers and marketplaces that are capable of providing high-quality used and refurbished phones. An UpTrade Certified Used Galaxy S6 means it has passed a rigorous inspection and functions like a new one.",
      "What is the return policy for the Used and Refurbished Galaxy S6?":
        "No worries if you are not 100% satisfied with the device you have received! Each phone is granted a 30-day trial period in which buyers may return the used device to the UpTrade Certified Seller for a refund within the first 30 days.",
      "Are refurbished Android phones as good as new ones?":
        "For the most part, there is no definite difference between a new phone and a used one, aside from one previously used by another owner. All used phones listed on UpTrade must pass a rigorous inspection to guarantee quality and product performance. Refurbished devices certified by UpTrade work just as well as new, ordinary store-bought phones.",
    },
  },
  {
    productName: "Galaxy S7",
    productCategoryValueId: 101,
    price: 9999,
    keyword: null,
    productImageUrl:
      "https://d3c745jesl5pj3.cloudfront.net/sell/web/Galaxy S7_e2db003d4dad436ea7eda1f82d19b609.jpg",
    brand: "Samsung",
    type: null,
    brandCategoryValueId: 19,
    relatedGoods: [
      {
        productId: 1545698427647848448,
        name: "Galaxy S7",
        brand: "Samsung",
        merchant: "Amazon",
        brandLogoUrl:
          "https://uptrade-public-static-resources.s3.us-east-2.amazonaws.com/amazon+logo.png",
        buyUrl:
          "https://www.amazon.com/Samsung-Galaxy-S7-32GB-Gold/dp/B087RHZ611/ref=sr_1_38?keywords=Samsung+Galaxy+Verizon+renewed&qid=1657219448&sr=8-38",
        currentPrice: 11389,
        specs: [
          {
            productId: 1545698427647848448,
            key: "CONDITION",
            value: "Excellent",
          },
          {
            productId: 1545698427647848448,
            key: "CARRIER",
            value: "Verizon",
          },
          {
            productId: 1545698427647848448,
            key: "STORAGE",
            value: "32GB",
          },
          {
            productId: 1545698427647848448,
            key: "COLOR",
            value: "Gold",
          },
        ],
      },
      {
        productId: 1545698368550105088,
        name: "Galaxy S7",
        brand: "Samsung",
        merchant: "Amazon",
        brandLogoUrl:
          "https://uptrade-public-static-resources.s3.us-east-2.amazonaws.com/amazon+logo.png",
        buyUrl:
          "https://www.amazon.com/Samsung-Galaxy-G930T-T-Mobile-Unlocked/dp/B08CBKYVGT/ref=sr_1_91?keywords=Samsung+Galaxy+Unlocked+renewed&qid=1657217504&sr=8-91&srs=17871142011",
        currentPrice: 11900,
        specs: [
          {
            productId: 1545698368550105088,
            key: "CONDITION",
            value: "Excellent",
          },
          {
            productId: 1545698368550105088,
            key: "CARRIER",
            value: "Unlocked",
          },
          {
            productId: 1545698368550105088,
            key: "STORAGE",
            value: "32GB",
          },
          {
            productId: 1545698368550105088,
            key: "COLOR",
            value: "Black",
          },
        ],
      },
      {
        productId: 1545698365563760640,
        name: "Galaxy S7",
        brand: "Samsung",
        merchant: "Amazon",
        brandLogoUrl:
          "https://uptrade-public-static-resources.s3.us-east-2.amazonaws.com/amazon+logo.png",
        buyUrl:
          "https://www.amazon.com/Samsung-Galaxy-G930A-Unlocked-32GB/dp/B08J44K5V2/ref=sr_1_84?keywords=Samsung+Galaxy+Unlocked+renewed&qid=1657217419&sr=8-84&srs=17871142011",
        currentPrice: 11993,
        specs: [
          {
            productId: 1545698365563760640,
            key: "CONDITION",
            value: "Excellent",
          },
          {
            productId: 1545698365563760640,
            key: "CARRIER",
            value: "Unlocked",
          },
          {
            productId: 1545698365563760640,
            key: "STORAGE",
            value: "32GB",
          },
          {
            productId: 1545698365563760640,
            key: "COLOR",
            value: "Black",
          },
        ],
      },
      {
        productId: 1545698413781479424,
        name: "Galaxy S7",
        brand: "Samsung",
        merchant: "Amazon",
        brandLogoUrl:
          "https://uptrade-public-static-resources.s3.us-east-2.amazonaws.com/amazon+logo.png",
        buyUrl:
          "https://www.amazon.com/Samsung-Galaxy-Active-Unlocked-Renewed/dp/B07DKY9L78/ref=sr_1_267?keywords=Samsung+Galaxy+Unlocked+renewed&qid=1657218911&sr=8-267&srs=17871142011",
        currentPrice: 16995,
        specs: [
          {
            productId: 1545698413781479424,
            key: "CONDITION",
            value: "Excellent",
          },
          {
            productId: 1545698413781479424,
            key: "CARRIER",
            value: "Unlocked",
          },
          {
            productId: 1545698413781479424,
            key: "STORAGE",
            value: "32GB",
          },
          {
            productId: 1545698413781479424,
            key: "COLOR",
            value: "Green",
          },
        ],
      },
      {
        productId: 1545698395280404480,
        name: "Galaxy S7",
        brand: "Samsung",
        merchant: "Amazon",
        brandLogoUrl:
          "https://uptrade-public-static-resources.s3.us-east-2.amazonaws.com/amazon+logo.png",
        buyUrl:
          "https://www.amazon.com/Samsung-G891A-Shatter-Resistant-Extremely-Smartphone/dp/B01N7ZLLBI/ref=sr_1_198?keywords=Samsung+Galaxy+Unlocked+renewed&qid=1657218335&sr=8-198&srs=17871142011",
        currentPrice: 21998,
        specs: [
          {
            productId: 1545698395280404480,
            key: "CONDITION",
            value: "Excellent",
          },
          {
            productId: 1545698395280404480,
            key: "CARRIER",
            value: "Unlocked",
          },
          {
            productId: 1545698395280404480,
            key: "STORAGE",
            value: "32GB",
          },
          {
            productId: 1545698395280404480,
            key: "COLOR",
            value: "Titanium Gray",
          },
        ],
      },
    ],
    aboutProduct:
      "The Samsung Galaxy S7 was the “phone to beat” when it was released, and many fans are still holding out. With its pleasing design, amazing camera, extra-long battery life, and quick processor (not to mention the microSD storage slot that allows for memory to be added), there’s no wonder that Galaxy S7 users aren’t ready to let go yet.",
    metaDescription:
      "Samsung Galaxy S7 in great condition! Fully functional, photos and video inspection available. Sleek design, long battery life, and a microSD storage slot.",
    metaDescCategory:
      "Samsung’s Galaxy S7 may not be the newest phone on the market, but its functionality paired with a budget price make it a strong competitor for anyone looking to replace their smartphone. The S7 combines the best of its predecessors into one, excellent device with an improved waterproof body, sleek design, vibrant screen and pro-grade camera.",
    qa: {
      "Why should you buy a used or refurbished Galaxy S7?":
        "A refurbished Galaxy S7 functions precisely like a new one. Why pay more? It will save you a lot of money  buying a refurbished Galaxy S7. More importantly, it reduces e-waste and makes our planet a better place. Buying a refurbished Galaxy S7 is a smart choice.",
      "What does it mean if the Galaxy S7 is unlocked?":
        "Most Galaxy S7’s bought from wireless carriers are locked to their network. An unlocked Galaxy S7 means the phone has been unlocked and can be used with any carrier in the United States. Choosing an unlocked Galaxy S7 is the safest option if you are unsure which carrier you will use. An unlocked Galaxy S7 is also a great option as a gift since it will work with any carrier or wireless phone plan they currently have.",
      "What does UpTrade Certified Used mean?":
        "UpTrade Certified means you can trust that your used Galaxy S7 will function just as well as a new device. Among hundreds of used phone sellers, we have chosen a modest bunch of reputable sellers and marketplaces that are capable of providing high-quality used and refurbished phones. An UpTrade Certified Used Galaxy S7 means it has passed a rigorous inspection and functions like a new one.",
      "What is the return policy for the Used and Refurbished Galaxy S7?":
        "No worries if you are not 100% satisfied with the device you have received! Each phone is granted a 30-day trial period in which buyers may return the used device to the UpTrade Certified Seller for a refund within the first 30 days.",
      "Are refurbished Android phones as good as new ones?":
        "For the most part, there is no definite difference between a new phone and a used one, aside from one previously used by another owner. All used phones listed on UpTrade must pass a rigorous inspection to guarantee quality and product performance. Refurbished devices certified by UpTrade work just as well as new, ordinary store-bought phones.",
    },
  },
  {
    productName: "Galaxy S8",
    productCategoryValueId: 40,
    price: 12999,
    keyword: null,
    productImageUrl:
      "https://d3c745jesl5pj3.cloudfront.net/sell/web/Galaxy S8_d48f0d57ccfc48268361b744af53f796.jpg",
    brand: "Samsung",
    type: null,
    brandCategoryValueId: 19,
    relatedGoods: [
      {
        productId: 1545698397994119168,
        name: "Galaxy S8",
        brand: "Samsung",
        merchant: "Amazon",
        brandLogoUrl:
          "https://uptrade-public-static-resources.s3.us-east-2.amazonaws.com/amazon+logo.png",
        buyUrl:
          "https://www.amazon.com/Samsung-Galaxy-SM-G950UZVAATT-Certified-Refurbished/dp/B074PYHP6Q/ref=sr_1_203?keywords=Samsung+Galaxy+Unlocked+renewed&qid=1657218335&sr=8-203&srs=17871142011",
        currentPrice: 12999,
        specs: [
          {
            productId: 1545698397994119168,
            key: "CONDITION",
            value: "Excellent",
          },
          {
            productId: 1545698397994119168,
            key: "CARRIER",
            value: "AT&T",
          },
          {
            productId: 1545698397994119168,
            key: "STORAGE",
            value: "64GB",
          },
          {
            productId: 1545698397994119168,
            key: "COLOR",
            value: "Midnight Black",
          },
        ],
      },
      {
        productId: 1545698490394636288,
        name: "Galaxy S8",
        brand: "Samsung",
        merchant: "Amazon",
        brandLogoUrl:
          "https://uptrade-public-static-resources.s3.us-east-2.amazonaws.com/amazon+logo.png",
        buyUrl:
          "https://www.amazon.com/Samsung-Galaxy-64GB-Unlocked-Phone/dp/B07DX6XFJW/ref=sr_1_84?keywords=Samsung+Galaxy+Unlocked+renewed&qid=1657238561&sr=8-84",
        currentPrice: 13999,
        specs: [
          {
            productId: 1545698490394636288,
            key: "CONDITION",
            value: "Excellent",
          },
          {
            productId: 1545698490394636288,
            key: "CARRIER",
            value: "Unlocked",
          },
          {
            productId: 1545698490394636288,
            key: "STORAGE",
            value: "64GB",
          },
          {
            productId: 1545698490394636288,
            key: "COLOR",
            value: "Orchid Gray",
          },
        ],
      },
      {
        productId: 1545698348388085760,
        name: "Galaxy S8",
        brand: "Samsung",
        merchant: "Amazon",
        brandLogoUrl:
          "https://uptrade-public-static-resources.s3.us-east-2.amazonaws.com/amazon+logo.png",
        buyUrl:
          "https://www.amazon.com/Samsung-Galaxy-64GB-Phone-Smartphone/dp/B076M9RQJ2/ref=sr_1_36?keywords=Samsung+Galaxy+Unlocked+renewed&qid=1657216987&sr=8-36&srs=17871142011",
        currentPrice: 15100,
        specs: [
          {
            productId: 1545698348388085760,
            key: "CONDITION",
            value: "Excellent",
          },
          {
            productId: 1545698348388085760,
            key: "CARRIER",
            value: "Unlocked",
          },
          {
            productId: 1545698348388085760,
            key: "STORAGE",
            value: "64GB",
          },
          {
            productId: 1545698348388085760,
            key: "COLOR",
            value: "Midnight Black",
          },
        ],
      },
      {
        productId: 1545698366629113856,
        name: "Galaxy S8",
        brand: "Samsung",
        merchant: "Amazon",
        brandLogoUrl:
          "https://uptrade-public-static-resources.s3.us-east-2.amazonaws.com/amazon+logo.png",
        buyUrl:
          "https://www.amazon.com/Samsung-Galaxy-S8-Unlocked-64GB/dp/B07K4F5759/ref=sr_1_87?keywords=Samsung+Galaxy+Unlocked+renewed&qid=1657217504&sr=8-87&srs=17871142011",
        currentPrice: 16199,
        specs: [
          {
            productId: 1545698366629113856,
            key: "CONDITION",
            value: "Excellent",
          },
          {
            productId: 1545698366629113856,
            key: "CARRIER",
            value: "Unlocked",
          },
          {
            productId: 1545698366629113856,
            key: "STORAGE",
            value: "64GB",
          },
          {
            productId: 1545698366629113856,
            key: "COLOR",
            value: "Orchid Gray",
          },
        ],
      },
      {
        productId: 1545698473860689920,
        name: "Galaxy S8",
        brand: "Samsung",
        merchant: "Amazon",
        brandLogoUrl:
          "https://uptrade-public-static-resources.s3.us-east-2.amazonaws.com/amazon+logo.png",
        buyUrl:
          "https://www.amazon.com/Samsung-Galaxy-64GB-G950U-Unlocked/dp/B07643SM6S/ref=sr_1_23?keywords=Samsung+Galaxy+AT%26T+renewed&qid=1657221504&sr=8-23",
        currentPrice: 16399,
        specs: [
          {
            productId: 1545698473860689920,
            key: "CONDITION",
            value: "Excellent",
          },
          {
            productId: 1545698473860689920,
            key: "CARRIER",
            value: "AT&T",
          },
          {
            productId: 1545698473860689920,
            key: "STORAGE",
            value: "64GB",
          },
          {
            productId: 1545698473860689920,
            key: "COLOR",
            value: "Orchid Gray",
          },
        ],
      },
    ],
    aboutProduct:
      "The Galaxy S8 is high performing, durable and water resistant, has a long battery life and boasts one of the most stunning displays on the market. If you’re looking for a phone to show off, this one’s for you!",
    metaDescription:
      "Fully functioning Samsung Galaxy S8, hand inspected and certified. XL Gorilla glass screen, fingerprint security & facial recognition; Android platform",
    metaDescCategory:
      "For anyone looking for a truly beautiful phone, the Samsung Galaxy S8 is for you. It has a large, bezel-free display that makes it look and feel high-end and allows for easy-on-the-eyes screen time, and the powerful processor and pro-grade camera make this a phone that’s hard to pass up.",
    qa: {
      "Why should you buy a used or refurbished Galaxy S8?":
        "Why pay more if you are getting the same thing? A refurbished Galaxy S8 is fully functional and works exactly like a brand new Galaxy S8, except for minimum to normal wear and tear on the cosmetics of the phone. A refurbished Galaxy S8 is a significant saving option when you plan to buy your next Galaxy S8. Buying a refurbished Galaxy S8 is a fantastic choice. It will net you significant savings, mainly when a new Galaxy S8 costs much more.",
      "What does it mean if the Galaxy S8 is unlocked?":
        "Unlocked means the phone is not locked or limited to any carrier. An unlocked Galaxy S8 can be used with any carrier in the United States. If you are unsure whether the phone is compatible with your mobile phone carrier, buying an unlocked phone is the easiest option. An unlocked Galaxy S8 is likewise an incredible phone to buy as a gift since it will work with any carrier or wireless plan they may have.",
      "What does UpTrade Certified Used mean?":
        "There are hundreds or even thousands of used phone sellers, but unfortunately, not all are legit. To ensure the quality, we have selected a few reputable resellers and marketplaces that can provide high-quality used and refurbished phones. An UpTrade Certified Used Galaxy S8 means it has passed an in-depth inspection by our Certified Seller. UpTrade Certified means the Galaxy S8 you buy will work and function exactly like a new one.",
      "What is the return policy for the Used and Refurbished Galaxy S8?":
        "Sure! The Refurbished Galaxy S8 listed here comes with a 30-day return policy from the Sellers. So if you have any problem with your purchase, you may contact the Seller and return it to them for up to 30 days.",
      "Are refurbished Android phones as good as new ones?":
        "That’s a good question! Technically, there’s no difference between refurbished and new except that there may be signs of use (if at all) on a refurbished Android phone. All UpTrade Certified Used Phone Sellers process the phones through a rigorous inspection. As a result, each smartphone is fully functional and works just like a new one.",
    },
  },
  {
    productName: "Galaxy S8 Plus",
    productCategoryValueId: 134,
    price: 9999,
    keyword: null,
    productImageUrl:
      "https://d3c745jesl5pj3.cloudfront.net/sell/web/Galaxy S8 Plus_4b4f48512be047f68f241111e4739482.jpg",
    brand: "Samsung",
    type: null,
    brandCategoryValueId: 19,
    relatedGoods: [
      {
        productId: 1545698504311336960,
        name: "Galaxy S8 Plus",
        brand: "Samsung",
        merchant: "Amazon",
        brandLogoUrl:
          "https://uptrade-public-static-resources.s3.us-east-2.amazonaws.com/amazon+logo.png",
        buyUrl:
          "https://www.amazon.com/Samsung-Unlocked-T-Mobile-International-Renewed/dp/B09MGD87W3/ref=sr_1_181?keywords=Samsung+Galaxy+AT%26T+renewed&qid=1657242244&sr=8-181",
        currentPrice: 14900,
        specs: [
          {
            productId: 1545698504311336960,
            key: "CONDITION",
            value: "Excellent",
          },
          {
            productId: 1545698504311336960,
            key: "CARRIER",
            value: "Unlocked",
          },
          {
            productId: 1545698504311336960,
            key: "STORAGE",
            value: "64GB",
          },
          {
            productId: 1545698504311336960,
            key: "COLOR",
            value: "Black",
          },
        ],
      },
      {
        productId: 1545698434308403200,
        name: "Galaxy S8 Plus",
        brand: "Samsung",
        merchant: "Amazon",
        brandLogoUrl:
          "https://uptrade-public-static-resources.s3.us-east-2.amazonaws.com/amazon+logo.png",
        buyUrl:
          "https://www.amazon.com/Samsung-Galaxy-64GB-Orchid-Gray/dp/B078YXNKZ6/ref=sr_1_97?keywords=Samsung+Galaxy+Verizon+renewed&qid=1657219654&sr=8-97",
        currentPrice: 15900,
        specs: [
          {
            productId: 1545698434308403200,
            key: "CONDITION",
            value: "Excellent",
          },
          {
            productId: 1545698434308403200,
            key: "CARRIER",
            value: "Verizon",
          },
          {
            productId: 1545698434308403200,
            key: "STORAGE",
            value: "64GB",
          },
          {
            productId: 1545698434308403200,
            key: "COLOR",
            value: "Orchid Gray",
          },
        ],
      },
      {
        productId: 1545698361193295872,
        name: "Galaxy S8 Plus",
        brand: "Samsung",
        merchant: "Amazon",
        brandLogoUrl:
          "https://uptrade-public-static-resources.s3.us-east-2.amazonaws.com/amazon+logo.png",
        buyUrl:
          "https://www.amazon.com/Samsung-Galaxy-T-Mobile-Unlocked-Renewed/dp/B07DZMXT9Y/ref=sr_1_68?keywords=Samsung+Galaxy+Unlocked+renewed&qid=1657217313&sr=8-68&srs=17871142011",
        currentPrice: 17099,
        specs: [
          {
            productId: 1545698361193295872,
            key: "CONDITION",
            value: "Excellent",
          },
          {
            productId: 1545698361193295872,
            key: "CARRIER",
            value: "Unlocked",
          },
          {
            productId: 1545698361193295872,
            key: "STORAGE",
            value: "64GB",
          },
          {
            productId: 1545698361193295872,
            key: "COLOR",
            value: "Coral Blue",
          },
        ],
      },
      {
        productId: 1545698472891805696,
        name: "Galaxy S8 Plus",
        brand: "Samsung",
        merchant: "Amazon",
        brandLogoUrl:
          "https://uptrade-public-static-resources.s3.us-east-2.amazonaws.com/amazon+logo.png",
        buyUrl:
          "https://www.amazon.com/Samsung-Galaxy-64GB-Phone-display/dp/B079HGS4H6/ref=sr_1_16?keywords=Samsung+Galaxy+AT%26T+renewed&qid=1657221327&sr=8-16",
        currentPrice: 17799,
        specs: [
          {
            productId: 1545698472891805696,
            key: "CONDITION",
            value: "Excellent",
          },
          {
            productId: 1545698472891805696,
            key: "CARRIER",
            value: "AT&T",
          },
          {
            productId: 1545698472891805696,
            key: "STORAGE",
            value: "64GB",
          },
          {
            productId: 1545698472891805696,
            key: "COLOR",
            value: "Orchid Gray",
          },
        ],
      },
      {
        productId: 1545698490893758464,
        name: "Galaxy S8 Plus",
        brand: "Samsung",
        merchant: "Amazon",
        brandLogoUrl:
          "https://uptrade-public-static-resources.s3.us-east-2.amazonaws.com/amazon+logo.png",
        buyUrl:
          "https://www.amazon.com/Samsung-Galaxy-S8-Plus-Unlocked/dp/B0788ZD69Z/ref=sr_1_141?keywords=Samsung+Galaxy+Unlocked+renewed&qid=1657238714&sr=8-141",
        currentPrice: 17999,
        specs: [
          {
            productId: 1545698490893758464,
            key: "CONDITION",
            value: "Excellent",
          },
          {
            productId: 1545698490893758464,
            key: "CARRIER",
            value: "Unlocked",
          },
          {
            productId: 1545698490893758464,
            key: "STORAGE",
            value: "64GB",
          },
          {
            productId: 1545698490893758464,
            key: "COLOR",
            value: "Midnight Black",
          },
        ],
      },
    ],
    aboutProduct:
      "The Samsung Galaxy S8 Plus is a great choice for anyone looking for a hard working phone, and it’s almost exactly like the later S9 Plus but comes at a fraction of the price! This beauty has a sleek design and large screen with excellent front and rear-facing cameras, a fingerprint sensor and iris scanner for security, fast wireless charging, and the back panel is made from ultra-tough Gorilla Glass.",
    metaDescription:
      "Pre-owned Samsung Galaxy S8 Plus from UpTrade comes fully inspected & functional. S8+ is a great option at an affordable price. It has everything you need!",
    metaDescCategory:
      "Samsung’s Galaxy S8 Plus is an excellent phone, with a stunning, curved-edge display screen that adds screen space by being taller than your average phone while staying slim enough to fit comfortably in hand. Pair that with a better-than-average camera, easy-to-use software, and a powerful processor, and you’ve got one of the best phones of its generation.",
    qa: {
      "Why should you buy a used or refurbished Galaxy S8 Plus?":
        "Why pay more if you are getting the same thing? A refurbished Galaxy S8 Plus is fully functional and works exactly like a brand new Galaxy S8 Plus, except for minimum to normal wear and tear on the cosmetics of the phone. A refurbished Galaxy S8 Plus is a significant saving option when you plan to buy your next Galaxy S8 Plus. Buying a refurbished Galaxy S8 Plus is a fantastic choice. It will net you significant savings, mainly when a new Galaxy S8 Plus costs much more.",
      "What does it mean if the Galaxy S8 Plus is unlocked?":
        "Unlocked means the phone is not locked or limited to any carrier. An unlocked Galaxy S8 Plus can be used with any carrier in the United States. If you are unsure whether the phone is compatible with your mobile phone carrier, buying an unlocked phone is the easiest option. An unlocked Galaxy S8 Plus is likewise an incredible phone to buy as a gift since it will work with any carrier or wireless plan they may have.",
      "What does UpTrade Certified Used mean?":
        "There are hundreds or even thousands of used phone sellers, but unfortunately, not all are legit. To ensure the quality, we have selected a few reputable resellers and marketplaces that can provide high-quality used and refurbished phones. An UpTrade Certified Used Galaxy S8 Plus means it has passed an in-depth inspection by our Certified Seller. UpTrade Certified means the Galaxy S8 Plus you buy will work and function exactly like a new one.",
      "What is the return policy for the Used and Refurbished Galaxy S8 Plus?":
        "Sure! The Refurbished Galaxy S8 Plus listed here comes with a 30-day return policy from the Sellers. So if you have any problem with your purchase, you may contact the Seller and return it to them for up to 30 days.",
      "Are refurbished Android phones as good as new ones?":
        "That’s a good question! Technically, there’s no difference between refurbished and new except that there may be signs of use (if at all) on a refurbished Android phone. All UpTrade Certified Used Phone Sellers process the phones through a rigorous inspection. As a result, each smartphone is fully functional and works just like a new one.",
    },
  },
  {
    productName: "Galaxy S9",
    productCategoryValueId: 27,
    price: 12900,
    keyword: null,
    productImageUrl:
      "https://d3c745jesl5pj3.cloudfront.net/sell/web/Galaxy S9_cc4c0d8645de4190be1327fc7c99fbe8.jpg",
    brand: "Samsung",
    type: null,
    brandCategoryValueId: 19,
    relatedGoods: [
      {
        productId: 1545698348866236416,
        name: "Galaxy S9",
        brand: "Samsung",
        merchant: "Amazon",
        brandLogoUrl:
          "https://uptrade-public-static-resources.s3.us-east-2.amazonaws.com/amazon+logo.png",
        buyUrl:
          "https://www.amazon.com/Samsung-Galaxy-S9-Unlocked-Midnight/dp/B07P1BKNHP/ref=sr_1_37?keywords=Samsung+Galaxy+Unlocked+renewed&qid=1657217092&sr=8-37&srs=17871142011",
        currentPrice: 14000,
        specs: [
          {
            productId: 1545698348866236416,
            key: "CONDITION",
            value: "Excellent",
          },
          {
            productId: 1545698348866236416,
            key: "CARRIER",
            value: "Unlocked",
          },
          {
            productId: 1545698348866236416,
            key: "STORAGE",
            value: "64GB",
          },
          {
            productId: 1545698348866236416,
            key: "COLOR",
            value: "Midnight Black",
          },
        ],
      },
      {
        productId: 1545698470350057472,
        name: "Galaxy S9",
        brand: "Samsung",
        merchant: "Amazon",
        brandLogoUrl:
          "https://uptrade-public-static-resources.s3.us-east-2.amazonaws.com/amazon+logo.png",
        buyUrl:
          "https://www.amazon.com/Samsung-Galaxy-SM-G960U-Unlocked-Renewed/dp/B07KX6NPT4/ref=sr_1_6?keywords=Samsung+Galaxy+AT%26T+renewed&qid=1657221327&sr=8-6",
        currentPrice: 14100,
        specs: [
          {
            productId: 1545698470350057472,
            key: "CONDITION",
            value: "Excellent",
          },
          {
            productId: 1545698470350057472,
            key: "CARRIER",
            value: "AT&T",
          },
          {
            productId: 1545698470350057472,
            key: "STORAGE",
            value: "64GB",
          },
          {
            productId: 1545698470350057472,
            key: "COLOR",
            value: "Midnight Black",
          },
        ],
      },
      {
        productId: 1545698411285868544,
        name: "Galaxy S9",
        brand: "Samsung",
        merchant: "Amazon",
        brandLogoUrl:
          "https://uptrade-public-static-resources.s3.us-east-2.amazonaws.com/amazon+logo.png",
        buyUrl:
          "https://www.amazon.com/Samsung-Galaxy-S9-AT-Locked/dp/B07BBVPLMM/ref=sr_1_256?keywords=Samsung+Galaxy+Unlocked+renewed&qid=1657218821&sr=8-256&srs=17871142011",
        currentPrice: 14200,
        specs: [
          {
            productId: 1545698411285868544,
            key: "CONDITION",
            value: "Excellent",
          },
          {
            productId: 1545698411285868544,
            key: "CARRIER",
            value: "AT&T",
          },
          {
            productId: 1545698411285868544,
            key: "STORAGE",
            value: "64GB",
          },
          {
            productId: 1545698411285868544,
            key: "COLOR",
            value: "Midnight Black",
          },
        ],
      },
      {
        productId: 1545698499898929152,
        name: "Galaxy S9",
        brand: "Samsung",
        merchant: "Amazon",
        brandLogoUrl:
          "https://uptrade-public-static-resources.s3.us-east-2.amazonaws.com/amazon+logo.png",
        buyUrl:
          "https://www.amazon.com/Samsung-Galaxy-S9-AT-Locked/dp/B07BBW1F4T/ref=sr_1_64?keywords=Samsung+Galaxy+AT%26T+renewed&qid=1657241230&sr=8-64",
        currentPrice: 14290,
        specs: [
          {
            productId: 1545698499898929152,
            key: "CONDITION",
            value: "Excellent",
          },
          {
            productId: 1545698499898929152,
            key: "CARRIER",
            value: "AT&T",
          },
          {
            productId: 1545698499898929152,
            key: "STORAGE",
            value: "64GB",
          },
          {
            productId: 1545698499898929152,
            key: "COLOR",
            value: "Coral Blue",
          },
        ],
      },
      {
        productId: 1545698422287527936,
        name: "Galaxy S9",
        brand: "Samsung",
        merchant: "Amazon",
        brandLogoUrl:
          "https://uptrade-public-static-resources.s3.us-east-2.amazonaws.com/amazon+logo.png",
        buyUrl:
          "https://www.amazon.com/Samsung-Galaxy-64GB-Midnight-Black/dp/B07BBVFFVB/ref=sr_1_14?keywords=Samsung+Galaxy+Verizon+renewed&qid=1657219261&sr=8-14",
        currentPrice: 14300,
        specs: [
          {
            productId: 1545698422287527936,
            key: "CONDITION",
            value: "Excellent",
          },
          {
            productId: 1545698422287527936,
            key: "CARRIER",
            value: "Verizon",
          },
          {
            productId: 1545698422287527936,
            key: "STORAGE",
            value: "64GB",
          },
          {
            productId: 1545698422287527936,
            key: "COLOR",
            value: "Midnight Black",
          },
        ],
      },
    ],
    aboutProduct:
      "The Samsung Galaxy S9 is a hard phone to beat. It’s particularly popular for its gorgeous, dual-curved screen, its incredible cameras, and its lightning speeds--everything you need for the budding photographer. As an added benefit, the S9 is also equipped with wireless charging, Augmented Reality capabilities, Iris Scanning and Facial Recognition for security, and it’s water resistant!",
    metaDescription:
      "Samsung Galaxy S9 fully inspected and certified. Authentic photos show condition, lots of great features: Pro Mode camera, iris scanner, Augmented Reality",
    metaDescCategory:
      "Samsung Galaxy users looking for something a little more advanced will love the Galaxy S9! Many of its functions will be familiar to S7 and S8 owners, but you’ll also find some real improvements in the hardware, including fast and effective biometric security, a powerful processor, and an improved camera that functions well in low-lighting.",
    qa: {
      "Why should you buy a used or refurbished Galaxy S9?":
        "Why pay more if you are getting the same thing? A refurbished Galaxy S9 is fully functional and works exactly like a brand new Galaxy S9, except for minimum to normal wear and tear on the cosmetics of the phone. A refurbished Galaxy S9 is a significant saving option when you plan to buy your next Galaxy S9. Buying a refurbished Galaxy S9 is a fantastic choice. It will net you significant savings, mainly when a new Galaxy S9 costs much more.",
      "What does it mean if the Galaxy S9 is unlocked?":
        "Unlocked means the phone is not locked or limited to any carrier. An unlocked Galaxy S9 can be used with any carrier in the United States. If you are unsure whether the phone is compatible with your mobile phone carrier, buying an unlocked phone is the easiest option. An unlocked Galaxy S9 is likewise an incredible phone to buy as a gift since it will work with any carrier or wireless plan they may have.",
      "What does UpTrade Certified Used mean?":
        "There are hundreds or even thousands of used phone sellers, but unfortunately, not all are legit. To ensure the quality, we have selected a few reputable resellers and marketplaces that can provide high-quality used and refurbished phones. An UpTrade Certified Used Galaxy S9 means it has passed an in-depth inspection by our Certified Seller. UpTrade Certified means the Galaxy S9 you buy will work and function exactly like a new one.",
      "What is the return policy for the Used and Refurbished Galaxy S9?":
        "Sure! The Refurbished Galaxy S9 listed here comes with a 30-day return policy from the Sellers. So if you have any problem with your purchase, you may contact the Seller and return it to them for up to 30 days.",
      "Are refurbished Android phones as good as new ones?":
        "That’s a good question! Technically, there’s no difference between refurbished and new except that there may be signs of use (if at all) on a refurbished Android phone. All UpTrade Certified Used Phone Sellers process the phones through a rigorous inspection. As a result, each smartphone is fully functional and works just like a new one.",
    },
  },
  {
    productName: "Galaxy S9 Plus",
    productCategoryValueId: 189,
    price: 16000,
    keyword: null,
    productImageUrl:
      "https://d3c745jesl5pj3.cloudfront.net/sell/web/Galaxy S9 Plus_4cc6fb30ed16479196f948a5ef0e53bd.jpg",
    brand: "Samsung",
    type: null,
    brandCategoryValueId: 19,
    relatedGoods: [
      {
        productId: 1545698528629911552,
        name: "Galaxy S9 Plus",
        brand: "Samsung",
        merchant: "Amazon",
        brandLogoUrl:
          "https://uptrade-public-static-resources.s3.us-east-2.amazonaws.com/amazon+logo.png",
        buyUrl:
          "https://www.amazon.com/Samsung-Galaxy-S9-T-Mobile-Midnight/dp/B07L5T18L5/ref=sr_1_18?keywords=Samsung+Galaxy+T-Mobile+renewed&qid=1657284504&sr=8-18",
        currentPrice: 16099,
        specs: [
          {
            productId: 1545698528629911552,
            key: "CONDITION",
            value: "Excellent",
          },
          {
            productId: 1545698528629911552,
            key: "CARRIER",
            value: "T-Mobile",
          },
          {
            productId: 1545698528629911552,
            key: "STORAGE",
            value: "64GB",
          },
          {
            productId: 1545698528629911552,
            key: "COLOR",
            value: "Midnight Black",
          },
        ],
      },
      {
        productId: 1545698425177403392,
        name: "Galaxy S9 Plus",
        brand: "Samsung",
        merchant: "Amazon",
        brandLogoUrl:
          "https://uptrade-public-static-resources.s3.us-east-2.amazonaws.com/amazon+logo.png",
        buyUrl:
          "https://www.amazon.com/Samsung-Galaxy-SM-G9650-Factory-Unlocked/dp/B07D3Z9ZST/ref=sr_1_25?keywords=Samsung+Galaxy+Verizon+renewed&qid=1657219379&sr=8-25",
        currentPrice: 16500,
        specs: [
          {
            productId: 1545698425177403392,
            key: "CONDITION",
            value: "Excellent",
          },
          {
            productId: 1545698425177403392,
            key: "CARRIER",
            value: "Unlocked",
          },
          {
            productId: 1545698425177403392,
            key: "STORAGE",
            value: "64GB",
          },
          {
            productId: 1545698425177403392,
            key: "COLOR",
            value: "Midnight Black",
          },
        ],
      },
      {
        productId: 1545698470840791040,
        name: "Galaxy S9 Plus",
        brand: "Samsung",
        merchant: "Amazon",
        brandLogoUrl:
          "https://uptrade-public-static-resources.s3.us-east-2.amazonaws.com/amazon+logo.png",
        buyUrl:
          "https://www.amazon.com/Samsung-Galaxy-S9-Plus-Locked/dp/B07BFDK78Q/ref=sr_1_7?keywords=Samsung+Galaxy+AT%26T+renewed&qid=1657221327&sr=8-7",
        currentPrice: 16674,
        specs: [
          {
            productId: 1545698470840791040,
            key: "CONDITION",
            value: "Excellent",
          },
          {
            productId: 1545698470840791040,
            key: "CARRIER",
            value: "AT&T",
          },
          {
            productId: 1545698470840791040,
            key: "STORAGE",
            value: "64GB",
          },
          {
            productId: 1545698470840791040,
            key: "COLOR",
            value: "Midnight Black",
          },
        ],
      },
      {
        productId: 1545698436237783040,
        name: "Galaxy S9 Plus",
        brand: "Samsung",
        merchant: "Amazon",
        brandLogoUrl:
          "https://uptrade-public-static-resources.s3.us-east-2.amazonaws.com/amazon+logo.png",
        buyUrl:
          "https://www.amazon.com/Samsung-Galaxy-S9-Smartphone-SM-G965U/dp/B084JFNQVY/ref=sr_1_105?keywords=Samsung+Galaxy+Verizon+renewed&qid=1657219777&sr=8-105",
        currentPrice: 17999,
        specs: [
          {
            productId: 1545698436237783040,
            key: "CONDITION",
            value: "Excellent",
          },
          {
            productId: 1545698436237783040,
            key: "CARRIER",
            value: "Verizon",
          },
          {
            productId: 1545698436237783040,
            key: "STORAGE",
            value: "64GB",
          },
          {
            productId: 1545698436237783040,
            key: "COLOR",
            value: "Midnight Black",
          },
        ],
      },
      {
        productId: 1545698404948275200,
        name: "Galaxy S9 Plus",
        brand: "Samsung",
        merchant: "Amazon",
        brandLogoUrl:
          "https://uptrade-public-static-resources.s3.us-east-2.amazonaws.com/amazon+logo.png",
        buyUrl:
          "https://www.amazon.com/Samsung-S9-Fully-Unlocked-Midnight-Renewed/dp/B09DQZXT9K/ref=sr_1_224?keywords=Samsung+Galaxy+Unlocked+renewed&qid=1657218539&sr=8-224&srs=17871142011",
        currentPrice: 19722,
        specs: [
          {
            productId: 1545698404948275200,
            key: "CONDITION",
            value: "Excellent",
          },
          {
            productId: 1545698404948275200,
            key: "CARRIER",
            value: "Unlocked",
          },
          {
            productId: 1545698404948275200,
            key: "STORAGE",
            value: "64GB",
          },
          {
            productId: 1545698404948275200,
            key: "COLOR",
            value: "Midnight Black",
          },
        ],
      },
    ],
    aboutProduct:
      "The Galaxy S9 Plus is an excellent and stylish phone with many cutting-edge features. It has a large, HD display for an amazing viewing experience, as well as dual cameras with Clear Zoom that let you take professional-level portraits or landscape photos, and it’s one of the most water-resistant phones on the market!",
    metaDescription:
      "Amazing Samsung Galaxy S9 Plus at incredible price! Full inspection from UpTrade with photos & video. Infinity display, pro-level camera & water resistant!",
    metaDescCategory:
      "If you’re looking to buy a new-to-you phone with many of today’s latest features but without the sky-high price tags, the Samsung Galaxy S9 Plus could be right for you. No longer the newest generation, this phone can hold its own against anything currently on the market with an impressive 6.2-inch, curved screen and a dual-lense camera that takes excellent photos in any light.",
    qa: {
      "Why should you buy a used or refurbished Galaxy S9 Plus?":
        "I am glad that you asked! A refurbished Galaxy S9 Plus is a great opportunity to save when you are looking to purchase your next phone. Buying a refurbished Galaxy S9 Plus can be an wonderful choice and can net you huge savings, particularly when the cost of a new Galaxy S9 Plus is crazy expensive. A refurbished Galaxy S9 Plus is completely functional and works very much like a brand new Galaxy S9 Plus.",
      "What does it mean if the Galaxy S9 Plus is unlocked?":
        "You may use an unlocked Galaxy S9 Plus with any carrier in the United States. Purchasing an unlocked Galaxy S9 Plus is an wonderful choice if you aren’t sure which wireless carrier you want to sign up with, or if you want to be sure the Galaxy S9 Plus will work with your current carrier. An unlocked Galaxy S9 Plus is likewise an incredible phone to buy as a gift since it will work with any carrier or wireless plan that they may have.",
      "What does UpTrade Certified Used mean?":
        "UpTrade Certified means the Galaxy S9 Plus you buy will work and function just like new. Among hundreds of used phone and gadget sellers, we have chosen a modest bunch of reputable resellers and marketplaces that provide high-quality used and refurbished phones. An UpTrade Certified Used Galaxy S9 Plus means it has passed an in-depth inspection by our Certified Seller.",
      "What is the return policy for the Used and Refurbished Galaxy S9 Plus?":
        "Yes! All UpTrade Certified Used Phone Resellers and Marketplaces offer 30-day money-back-guarantee on Galaxy S9 Plus phones listed here. If you aren’t satisfied with your purchase you may return your Galaxy S9 Plus to your seller for free for up to 30 days.",
      "Are refurbished Android phones as good as new ones?":
        "Many people wonder if a refurbished Android phone is as good as a new one. Typically there’s really no difference between them except for the fact that there may be signs of use (if at all) on a refurbished phone. A refurbished Android phone should be fully functional and work just like a new Android phone. All UpTrade Certified Used Phone Resellers process the phones through a rigorous inspection so that each phone is fully functional and works just like a new phone.",
    },
  },
  {
    productName: "Galaxy Z Flip",
    productCategoryValueId: 104,
    price: 44995,
    keyword: null,
    productImageUrl:
      "https://d3c745jesl5pj3.cloudfront.net/sell/web/Galaxy Z Flip_2ccd91f64cc64b3796c0273250c01dd5.jpg",
    brand: "Samsung",
    type: null,
    brandCategoryValueId: 19,
    relatedGoods: [
      {
        productId: 1545698515807924224,
        name: "Galaxy Z Flip",
        brand: "Samsung",
        merchant: "Amazon",
        brandLogoUrl:
          "https://uptrade-public-static-resources.s3.us-east-2.amazonaws.com/amazon+logo.png",
        buyUrl:
          "https://www.amazon.com/Samsung-Flip-5G-Smartphone-Long-Lasting/dp/B0939T8ZD6/ref=sr_1_179?keywords=Samsung+Galaxy+T-Mobile+renewed&qid=1657244396&sr=8-179",
        currentPrice: 44995,
        specs: [
          {
            productId: 1545698515807924224,
            key: "CONDITION",
            value: "Excellent",
          },
          {
            productId: 1545698515807924224,
            key: "CARRIER",
            value: "T-Mobile",
          },
          {
            productId: 1545698515807924224,
            key: "STORAGE",
            value: "256GB",
          },
          {
            productId: 1545698515807924224,
            key: "COLOR",
            value: "Mystic Bronze",
          },
        ],
      },
      {
        productId: 1545698341542981632,
        name: "Galaxy Z Flip",
        brand: "Samsung",
        merchant: "Amazon",
        brandLogoUrl:
          "https://uptrade-public-static-resources.s3.us-east-2.amazonaws.com/amazon+logo.png",
        buyUrl:
          "https://www.amazon.com/Galaxy-Unlocked-Smartphone-Intuitive-Warranty/dp/B09GBLFSB2/ref=sr_1_14?keywords=Samsung+Galaxy+Unlocked+renewed&qid=1657216882&sr=8-14&srs=17871142011",
        currentPrice: 51900,
        specs: [
          {
            productId: 1545698341542981632,
            key: "CONDITION",
            value: "Excellent",
          },
          {
            productId: 1545698341542981632,
            key: "CARRIER",
            value: "Unlocked",
          },
          {
            productId: 1545698341542981632,
            key: "STORAGE",
            value: "128GB",
          },
          {
            productId: 1545698341542981632,
            key: "COLOR",
            value: "Black",
          },
        ],
      },
      {
        productId: 1545698351286349824,
        name: "Galaxy Z Flip",
        brand: "Samsung",
        merchant: "Amazon",
        brandLogoUrl:
          "https://uptrade-public-static-resources.s3.us-east-2.amazonaws.com/amazon+logo.png",
        buyUrl:
          "https://www.amazon.com/SAMSUNG-Galaxy-Unlocked-Smartphone-Intuitive/dp/B09G5ZKCXY/ref=sr_1_44?keywords=Samsung+Galaxy+Unlocked+renewed&qid=1657217092&sr=8-44&srs=17871142011",
        currentPrice: 55795,
        specs: [
          {
            productId: 1545698351286349824,
            key: "CONDITION",
            value: "Excellent",
          },
          {
            productId: 1545698351286349824,
            key: "CARRIER",
            value: "Unlocked",
          },
          {
            productId: 1545698351286349824,
            key: "STORAGE",
            value: "256GB",
          },
          {
            productId: 1545698351286349824,
            key: "COLOR",
            value: "Black",
          },
        ],
      },
      {
        productId: 1545698374447296512,
        name: "Galaxy Z Flip",
        brand: "Samsung",
        merchant: "Amazon",
        brandLogoUrl:
          "https://uptrade-public-static-resources.s3.us-east-2.amazonaws.com/amazon+logo.png",
        buyUrl:
          "https://www.amazon.com/Samsung-Unlocked-Smartphone-Technology-Long-Lasting/dp/B08KYL6V67/ref=sr_1_115?keywords=Samsung+Galaxy+Unlocked+renewed&qid=1657217683&sr=8-115&srs=17871142011",
        currentPrice: 56092,
        specs: [
          {
            productId: 1545698374447296512,
            key: "CONDITION",
            value: "Excellent",
          },
          {
            productId: 1545698374447296512,
            key: "CARRIER",
            value: "Unlocked",
          },
          {
            productId: 1545698374447296512,
            key: "STORAGE",
            value: "256GB",
          },
          {
            productId: 1545698374447296512,
            key: "COLOR",
            value: "Mystic Gray",
          },
        ],
      },
      {
        productId: 1545698343044542464,
        name: "Galaxy Z Flip",
        brand: "Samsung",
        merchant: "Amazon",
        brandLogoUrl:
          "https://uptrade-public-static-resources.s3.us-east-2.amazonaws.com/amazon+logo.png",
        buyUrl:
          "https://www.amazon.com/Galaxy-Unlocked-Smartphone-Intuitive-Warranty/dp/B09GKXZCWY/ref=sr_1_21?keywords=Samsung+Galaxy+Unlocked+renewed&qid=1657216882&sr=8-21&srs=17871142011",
        currentPrice: 56093,
        specs: [
          {
            productId: 1545698343044542464,
            key: "CONDITION",
            value: "Excellent",
          },
          {
            productId: 1545698343044542464,
            key: "CARRIER",
            value: "Unlocked",
          },
          {
            productId: 1545698343044542464,
            key: "STORAGE",
            value: "128GB",
          },
          {
            productId: 1545698343044542464,
            key: "COLOR",
            value: "Green",
          },
        ],
      },
    ],
    aboutProduct: null,
    metaDescription:
      "High tech at low cost. Galaxy Z Flip, the worlds first truly smart flip phone. Fully tested and certified pre-owned available.",
    metaDescCategory: null,
    qa: {
      "Why should you buy a used or refurbished Galaxy Z Flip?":
        "I am glad that you asked! A refurbished Galaxy Z Flip is a great opportunity to save when you are looking to purchase your next phone. Buying a refurbished Galaxy Z Flip can be an wonderful choice and can net you huge savings, particularly when the cost of a new Galaxy Z Flip is crazy expensive. A refurbished Galaxy Z Flip is completely functional and works very much like a brand new Galaxy Z Flip.",
      "What does it mean if the Galaxy Z Flip is unlocked?":
        "You may use an unlocked Galaxy Z Flip with any carrier in the United States. Purchasing an unlocked Galaxy Z Flip is an wonderful choice if you aren’t sure which wireless carrier you want to sign up with, or if you want to be sure the Galaxy Z Flip will work with your current carrier. An unlocked Galaxy Z Flip is likewise an incredible phone to buy as a gift since it will work with any carrier or wireless plan that they may have.",
      "What does UpTrade Certified Used mean?":
        "UpTrade Certified means the Galaxy Z Flip you buy will work and function just like new. Among hundreds of used phone and gadget sellers, we have chosen a modest bunch of reputable resellers and marketplaces that provide high-quality used and refurbished phones. An UpTrade Certified Used Galaxy Z Flip means it has passed an in-depth inspection by our Certified Seller.",
      "What is the return policy for the Used and Refurbished Galaxy Z Flip?":
        "Yes! All UpTrade Certified Used Phone Resellers and Marketplaces offer 30-day money-back-guarantee on Galaxy Z Flip phones listed here. If you aren’t satisfied with your purchase you may return your Galaxy Z Flip to your seller for free for up to 30 days.",
      "Are refurbished Android phones as good as new ones?":
        "Many people wonder if a refurbished Android phone is as good as a new one. Typically there’s really no difference between them except for the fact that there may be signs of use (if at all) on a refurbished phone. A refurbished Android phone should be fully functional and work just like a new Android phone. All UpTrade Certified Used Phone Resellers process the phones through a rigorous inspection so that each phone is fully functional and works just like a new phone.",
    },
  },
  {
    productName: "Galaxy Z Flip3 5G",
    productCategoryValueId: 359,
    price: 31400,
    keyword: null,
    productImageUrl:
      "https://d3c745jesl5pj3.cloudfront.net/sell/web/Galaxy Z Flip 3 5G_d96c8a270df346d8a5e6606c6e5f60ce.jpg",
    brand: "Samsung",
    type: null,
    brandCategoryValueId: 19,
    relatedGoods: [
      {
        productId: 1545705601354723328,
        name: "Galaxy Z Flip3 5G",
        brand: "Samsung",
        merchant: "Gazelle",
        brandLogoUrl:
          "https://uptrade-public-static-resources.s3.us-east-2.amazonaws.com/gazelle+logo.png",
        buyUrl:
          "https://buy.gazelle.com/products/galaxy-z-flip3-5g-128gb-at-t-1?variant=40423124828213",
        currentPrice: 31400,
        specs: [
          {
            productId: 1545705601354723328,
            key: "CONDITION",
            value: "Excellent",
          },
          {
            productId: 1545705601354723328,
            key: "CARRIER",
            value: "AT&T",
          },
          {
            productId: 1545705601354723328,
            key: "STORAGE",
            value: "128GB",
          },
          {
            productId: 1545705601354723328,
            key: "COLOR",
            value: "Phantom Black",
          },
        ],
      },
      {
        productId: 1545705603896471552,
        name: "Galaxy Z Flip3 5G",
        brand: "Samsung",
        merchant: "Gazelle",
        brandLogoUrl:
          "https://uptrade-public-static-resources.s3.us-east-2.amazonaws.com/gazelle+logo.png",
        buyUrl:
          "https://buy.gazelle.com/products/galaxy-z-flip3-5g-128gb-at-t-1?variant=40423124926517",
        currentPrice: 31400,
        specs: [
          {
            productId: 1545705603896471552,
            key: "CONDITION",
            value: "Excellent",
          },
          {
            productId: 1545705603896471552,
            key: "CARRIER",
            value: "AT&T",
          },
          {
            productId: 1545705603896471552,
            key: "STORAGE",
            value: "128GB",
          },
          {
            productId: 1545705603896471552,
            key: "COLOR",
            value: "Green",
          },
        ],
      },
      {
        productId: 1545705662952271872,
        name: "Galaxy Z Flip3 5G",
        brand: "Samsung",
        merchant: "Gazelle",
        brandLogoUrl:
          "https://uptrade-public-static-resources.s3.us-east-2.amazonaws.com/gazelle+logo.png",
        buyUrl:
          "https://buy.gazelle.com/products/galaxy-z-flip3-5g-128gb-at-t-1?variant=40423125549109",
        currentPrice: 31400,
        specs: [
          {
            productId: 1545705662952271872,
            key: "CONDITION",
            value: "Excellent",
          },
          {
            productId: 1545705662952271872,
            key: "CARRIER",
            value: "AT&T",
          },
          {
            productId: 1545705662952271872,
            key: "STORAGE",
            value: "128GB",
          },
          {
            productId: 1545705662952271872,
            key: "COLOR",
            value: "Thom Browne",
          },
        ],
      },
      {
        productId: 1545705602982113280,
        name: "Galaxy Z Flip3 5G",
        brand: "Samsung",
        merchant: "Gazelle",
        brandLogoUrl:
          "https://uptrade-public-static-resources.s3.us-east-2.amazonaws.com/gazelle+logo.png",
        buyUrl:
          "https://buy.gazelle.com/products/galaxy-z-flip3-5g-128gb-at-t-1?variant=40423124860981",
        currentPrice: 32400,
        specs: [
          {
            productId: 1545705602982113280,
            key: "CONDITION",
            value: "Excellent",
          },
          {
            productId: 1545705602982113280,
            key: "CARRIER",
            value: "AT&T",
          },
          {
            productId: 1545705602982113280,
            key: "STORAGE",
            value: "128GB",
          },
          {
            productId: 1545705602982113280,
            key: "COLOR",
            value: "Phantom Black",
          },
        ],
      },
      {
        productId: 1545705605381255168,
        name: "Galaxy Z Flip3 5G",
        brand: "Samsung",
        merchant: "Gazelle",
        brandLogoUrl:
          "https://uptrade-public-static-resources.s3.us-east-2.amazonaws.com/gazelle+logo.png",
        buyUrl:
          "https://buy.gazelle.com/products/galaxy-z-flip3-5g-128gb-at-t-1?variant=40423125614645",
        currentPrice: 34400,
        specs: [
          {
            productId: 1545705605381255168,
            key: "CONDITION",
            value: "Excellent",
          },
          {
            productId: 1545705605381255168,
            key: "CARRIER",
            value: "AT&T",
          },
          {
            productId: 1545705605381255168,
            key: "STORAGE",
            value: "128GB",
          },
          {
            productId: 1545705605381255168,
            key: "COLOR",
            value: "Thom Browne",
          },
        ],
      },
    ],
    aboutProduct: null,
    metaDescription: null,
    metaDescCategory: null,
    qa: null,
  },
  {
    productName: "Galaxy Z Fold2 5G",
    productCategoryValueId: 569,
    price: null,
    keyword: null,
    productImageUrl:
      "https://d3c745jesl5pj3.cloudfront.net/sell/web/Galaxy Z Fold2 5G_06c9f0478c254e55bdf7fa165f6d3bf1.jpg",
    brand: "Samsung",
    type: null,
    brandCategoryValueId: 19,
    relatedGoods: [
      {
        productId: 1545689879111036928,
        name: "Galaxy A50",
        brand: "Samsung",
        merchant: "Amazon",
        brandLogoUrl:
          "https://uptrade-public-static-resources.s3.us-east-2.amazonaws.com/amazon+logo.png",
        buyUrl:
          "https://www.amazon.com/Samsung-SM-A505G-Factory-Unlocked-Renewed/dp/B07RL93F7T/ref=sr_1_3?crid=3NBH91UQVO742&keywords=Samsung+Galaxy+unlocked+renewed&qid=1654951575&sprefix=samsung+galaxy+unlocked+renewed%2Cspecialty-aps%2C382&sr=8-3&srs=17871142011",
        currentPrice: 7900,
        specs: [
          {
            productId: 1545689879111036928,
            key: "CONDITION",
            value: "Excellent",
          },
          {
            productId: 1545689879111036928,
            key: "CARRIER",
            value: "Unlocked",
          },
          {
            productId: 1545689879111036928,
            key: "STORAGE",
            value: "64GB",
          },
          {
            productId: 1545689879111036928,
            key: "COLOR",
            value: "Black",
          },
        ],
      },
      {
        productId: 1545689910836752384,
        name: "Galaxy Note 8",
        brand: "Samsung",
        merchant: "Amazon",
        brandLogoUrl:
          "https://uptrade-public-static-resources.s3.us-east-2.amazonaws.com/amazon+logo.png",
        buyUrl:
          "https://www.amazon.com/Samsung-Galaxy-Note-Smartphone-Refurbished/dp/B07HFK5PQQ/ref=sr_1_66?crid=3NBH91UQVO742&keywords=Samsung+Galaxy+unlocked+renewed&qid=1654953630&sprefix=samsung+galaxy+unlocked+renewed%2Cspecialty-aps%2C382&sr=8-66&srs=17871142011",
        currentPrice: 7999,
        specs: [
          {
            productId: 1545689910836752384,
            key: "CONDITION",
            value: "Excellent",
          },
          {
            productId: 1545689910836752384,
            key: "CARRIER",
            value: "Unlocked",
          },
          {
            productId: 1545689910836752384,
            key: "STORAGE",
            value: "64GB",
          },
          {
            productId: 1545689910836752384,
            key: "COLOR",
            value: "Orchid Gray",
          },
        ],
      },
      {
        productId: 1545689999491756032,
        name: "Galaxy S8 Plus",
        brand: "Samsung",
        merchant: "Amazon",
        brandLogoUrl:
          "https://uptrade-public-static-resources.s3.us-east-2.amazonaws.com/amazon+logo.png",
        buyUrl:
          "https://www.amazon.com/Samsung-Galaxy-T-Mobile-Unlocked-Renewed/dp/B07DZP1BDG/ref=sr_1_138?crid=3NBH91UQVO742&keywords=Samsung+Galaxy+unlocked+renewed&qid=1654956295&sprefix=samsung+galaxy+unlocked+renewed%2Cspecialty-aps%2C382&sr=8-138&srs=17871142011",
        currentPrice: 9999,
        specs: [
          {
            productId: 1545689999491756032,
            key: "CONDITION",
            value: "Excellent",
          },
          {
            productId: 1545689999491756032,
            key: "CARRIER",
            value: "Unlocked",
          },
          {
            productId: 1545689999491756032,
            key: "STORAGE",
            value: "64GB",
          },
          {
            productId: 1545689999491756032,
            key: "COLOR",
            value: "Arctic Silver",
          },
        ],
      },
      {
        productId: 1545689906340458496,
        name: "Galaxy Note 9",
        brand: "Samsung",
        merchant: "Amazon",
        brandLogoUrl:
          "https://uptrade-public-static-resources.s3.us-east-2.amazonaws.com/amazon+logo.png",
        buyUrl:
          "https://www.amazon.com/Samsung-Galaxy-N960U-T-Mobile-Unlocked/dp/B08BW9KH55/ref=sr_1_62?crid=3NBH91UQVO742&keywords=Samsung+Galaxy+unlocked+renewed&qid=1654953630&sprefix=samsung+galaxy+unlocked+renewed%2Cspecialty-aps%2C382&sr=8-62&srs=17871142011",
        currentPrice: 9999,
        specs: [
          {
            productId: 1545689906340458496,
            key: "CONDITION",
            value: "Excellent",
          },
          {
            productId: 1545689906340458496,
            key: "CARRIER",
            value: "Unlocked",
          },
          {
            productId: 1545689906340458496,
            key: "STORAGE",
            value: "128GB",
          },
          {
            productId: 1545689906340458496,
            key: "COLOR",
            value: "Ocean Blue",
          },
        ],
      },
      {
        productId: 1545689917975457792,
        name: "Galaxy S7",
        brand: "Samsung",
        merchant: "Amazon",
        brandLogoUrl:
          "https://uptrade-public-static-resources.s3.us-east-2.amazonaws.com/amazon+logo.png",
        buyUrl:
          "https://www.amazon.com/Samsung-Galaxy-G930T-T-Mobile-Unlocked/dp/B08CBKYVGT/ref=sr_1_76?crid=3NBH91UQVO742&keywords=Samsung+Galaxy+unlocked+renewed&qid=1654954075&sprefix=samsung+galaxy+unlocked+renewed%2Cspecialty-aps%2C382&sr=8-76&srs=17871142011",
        currentPrice: 9999,
        specs: [
          {
            productId: 1545689917975457792,
            key: "CONDITION",
            value: "Excellent",
          },
          {
            productId: 1545689917975457792,
            key: "CARRIER",
            value: "Unlocked",
          },
          {
            productId: 1545689917975457792,
            key: "STORAGE",
            value: "32GB",
          },
          {
            productId: 1545689917975457792,
            key: "COLOR",
            value: "Black",
          },
        ],
      },
    ],
    aboutProduct: null,
    metaDescription:
      "Fully functional Galaxy Z Fold 2 5G. All day battery and a foldable screen create one amazing phone.",
    metaDescCategory: null,
    qa: {
      "Why should you buy a used or refurbished Galaxy Z Fold2 5G?":
        "I am glad that you asked! A refurbished Galaxy Z Fold2 5G is a great opportunity to save when you are looking to purchase your next phone. Buying a refurbished Galaxy Z Fold2 5G can be an wonderful choice and can net you huge savings, particularly when the cost of a new Galaxy Z Fold2 5G is crazy expensive. A refurbished Galaxy Z Fold2 5G is completely functional and works very much like a brand new Galaxy Z Fold2 5G.",
      "What does it mean if the Galaxy Z Fold2 5G is unlocked?":
        "You may use an unlocked Galaxy Z Fold2 5G with any carrier in the United States. Purchasing an unlocked Galaxy Z Fold2 5G is an wonderful choice if you aren’t sure which wireless carrier you want to sign up with, or if you want to be sure the Galaxy Z Fold2 5G will work with your current carrier. An unlocked Galaxy Z Fold2 5G is likewise an incredible phone to buy as a gift since it will work with any carrier or wireless plan that they may have.",
      "What does UpTrade Certified Used mean?":
        "UpTrade Certified means the Galaxy Z Fold2 5G you buy will work and function just like new. Among hundreds of used phone and gadget sellers, we have chosen a modest bunch of reputable resellers and marketplaces that provide high-quality used and refurbished phones. An UpTrade Certified Used Galaxy Z Fold2 5G means it has passed an in-depth inspection by our Certified Seller.",
      "What is the return policy for the Used and Refurbished Galaxy Z Fold2 5G?":
        "Yes! All UpTrade Certified Used Phone Resellers and Marketplaces offer 30-day money-back-guarantee on Galaxy Z Fold2 5G phones listed here. If you aren’t satisfied with your purchase you may return your Galaxy Z Fold2 5G to your seller for free for up to 30 days.",
      "Are refurbished Android phones as good as new ones?":
        "Many people wonder if a refurbished Android phone is as good as a new one. Typically there’s really no difference between them except for the fact that there may be signs of use (if at all) on a refurbished phone. A refurbished Android phone should be fully functional and work just like a new Android phone. All UpTrade Certified Used Phone Resellers process the phones through a rigorous inspection so that each phone is fully functional and works just like a new phone.",
    },
  },
  {
    productName: "Galaxy Z Fold3 5G",
    productCategoryValueId: 897,
    price: 85900,
    keyword: null,
    productImageUrl:
      "https://d3c745jesl5pj3.cloudfront.net/sell/web/Galaxy Z Fold3 5G_31eea7f68f43408baec2ef8030d49f0c.jpg",
    brand: "Samsung",
    type: null,
    brandCategoryValueId: 19,
    relatedGoods: [
      {
        productId: 1545705599966408704,
        name: "Galaxy Z Fold3 5G",
        brand: "Samsung",
        merchant: "Gazelle",
        brandLogoUrl:
          "https://uptrade-public-static-resources.s3.us-east-2.amazonaws.com/gazelle+logo.png",
        buyUrl:
          "https://buy.gazelle.com/collections/samsung-galaxy/products/galaxy-z-fold3-5g-256gb-verizon?variant=41029427658805",
        currentPrice: 85900,
        specs: [
          {
            productId: 1545705599966408704,
            key: "CONDITION",
            value: "Excellent",
          },
          {
            productId: 1545705599966408704,
            key: "CARRIER",
            value: "Verizon",
          },
          {
            productId: 1545705599966408704,
            key: "STORAGE",
            value: "256GB",
          },
          {
            productId: 1545705599966408704,
            key: "COLOR",
            value: "Phantom Black",
          },
        ],
      },
    ],
    aboutProduct: null,
    metaDescription:
      "Save on the Galaxy Z Fold 3. A tablet and phone in one. Doesn't have to be expensive if you buy pre-certified.",
    metaDescCategory: null,
    qa: {
      "Why should you buy a used or refurbished Galaxy Z Fold3 5G?":
        "Why pay more if you are getting the same thing? A refurbished Galaxy Z Fold3 5G is fully functional and works exactly like a brand new Galaxy Z Fold3 5G, except for minimum to normal wear and tear on the cosmetics of the phone. A refurbished Galaxy Z Fold3 5G is a significant saving option when you plan to buy your next Galaxy Z Fold3 5G. Buying a refurbished Galaxy Z Fold3 5G is a fantastic choice. It will net you significant savings, mainly when a new Galaxy Z Fold3 5G costs much more.",
      "What does it mean if the Galaxy Z Fold3 5G is unlocked?":
        "Unlocked means the phone is not locked or limited to any carrier. An unlocked Galaxy Z Fold3 5G can be used with any carrier in the United States. If you are unsure whether the phone is compatible with your mobile phone carrier, buying an unlocked phone is the easiest option. An unlocked Galaxy Z Fold3 5G is likewise an incredible phone to buy as a gift since it will work with any carrier or wireless plan they may have.",
      "What does UpTrade Certified Used mean?":
        "There are hundreds or even thousands of used phone sellers, but unfortunately, not all are legit. To ensure the quality, we have selected a few reputable resellers and marketplaces that can provide high-quality used and refurbished phones. An UpTrade Certified Used Galaxy Z Fold3 5G means it has passed an in-depth inspection by our Certified Seller. UpTrade Certified means the Galaxy Z Fold3 5G you buy will work and function exactly like a new one.",
      "What is the return policy for the Used and Refurbished Galaxy Z Fold3 5G?":
        "Sure! The Refurbished Galaxy Z Fold3 5G listed here comes with a 30-day return policy from the Sellers. So if you have any problem with your purchase, you may contact the Seller and return it to them for up to 30 days.",
      "Are refurbished Android phones as good as new ones?":
        "That’s a good question! Technically, there’s no difference between refurbished and new except that there may be signs of use (if at all) on a refurbished Android phone. All UpTrade Certified Used Phone Sellers process the phones through a rigorous inspection. As a result, each smartphone is fully functional and works just like a new one.",
    },
  },
  {
    productName: "Google Pixel",
    productCategoryValueId: 502,
    price: 10444,
    keyword: null,
    productImageUrl:
      "https://d3c745jesl5pj3.cloudfront.net/sell/web/Google Pixel_d07043fd26a145dc87ee879a2da795ac.jpg",
    brand: "Google",
    type: null,
    brandCategoryValueId: 437,
    relatedGoods: [
      {
        productId: 1545698533218480128,
        name: "Google Pixel",
        brand: "Google",
        merchant: "Amazon",
        brandLogoUrl:
          "https://uptrade-public-static-resources.s3.us-east-2.amazonaws.com/amazon+logo.png",
        buyUrl:
          "https://www.amazon.com/Google-Pixel-128GB-Verizon-Wireless/dp/B07YBH2HPD/ref=sr_1_84?keywords=Google+Pixel+Verizon+renewed&qid=1657286660&sr=8-84",
        currentPrice: 39995,
        specs: [
          {
            productId: 1545698533218480128,
            key: "CONDITION",
            value: "Excellent",
          },
          {
            productId: 1545698533218480128,
            key: "CARRIER",
            value: "Verizon",
          },
          {
            productId: 1545698533218480128,
            key: "STORAGE",
            value: "128GB",
          },
          {
            productId: 1545698533218480128,
            key: "COLOR",
            value: "Black",
          },
        ],
      },
    ],
    aboutProduct:
      "The Google Pixel changed the game when it launched this first generation phone. Consistently reviewers’ favorite phone, it’s described as the “perfect balance”--functional but pretty, usable but includes tons of features, and the best vehicle for the Android operating system and Google’s Assistant.",
    metaDescription:
      "UpTrade has a great selection of Certified Used Google Pixel phones at up to 70% off retail! You've come to the right place if you are looking for a great deal on a Google Pixel.",
    metaDescCategory:
      "Google’s Pixel, the first of its kind, is an excellent phone for anyone who’s looking for a user-friendly Android experience. It has an ergonomic design that fits comfortably in one hand, a strong camera for great photos, bright HD display, lightning fast processing speed, and best of all--a user-friendly interface.",
    qa: {
      "Why should you buy a used or refurbished Google Pixel?":
        "A refurbished Google Pixel functions precisely like a new one. Why pay more? It will save you a lot of money  buying a refurbished Google Pixel. More importantly, it reduces e-waste and makes our planet a better place. Buying a refurbished Google Pixel is a smart choice.",
      "What does it mean if the Google Pixel is unlocked?":
        "Most Google Pixel’s bought from wireless carriers are locked to their network. An unlocked Google Pixel means the phone has been unlocked and can be used with any carrier in the United States. Choosing an unlocked Google Pixel is the safest option if you are unsure which carrier you will use. An unlocked Google Pixel is also a great option as a gift since it will work with any carrier or wireless phone plan they currently have.",
      "What does UpTrade Certified Used mean?":
        "UpTrade Certified means you can trust that your used Google Pixel will function just as well as a new device. Among hundreds of used phone sellers, we have chosen a modest bunch of reputable sellers and marketplaces that are capable of providing high-quality used and refurbished phones. An UpTrade Certified Used Google Pixel means it has passed a rigorous inspection and functions like a new one.",
      "What is the return policy for the Used and Refurbished Google Pixel?":
        "No worries if you are not 100% satisfied with the device you have received! Each phone is granted a 30-day trial period in which buyers may return the used device to the UpTrade Certified Seller for a refund within the first 30 days.",
      "Are refurbished Android phones as good as new ones?":
        "Many people wonder if a refurbished Android phone is as good as a new one. Typically there’s really no difference between them except for the fact that there may be signs of use (if at all) on a refurbished phone. A refurbished Android phone should be fully functional and work just like a new Android phone. All UpTrade Certified Used Phone Resellers process the phones through a rigorous inspection so that each phone is fully functional and works just like a new phone.",
      "Does Refurbished Google Pixel perform as well as the new?":
        "For the most part, there is no definite difference between a new phone and a used one, aside from one previously used by another owner. All used phones listed on UpTrade must pass a rigorous inspection to guarantee quality and product performance. Refurbished devices certified by UpTrade work just as well as new, ordinary store-bought phones.",
    },
  },
  {
    productName: "Google Pixel 2",
    productCategoryValueId: 473,
    price: 8354,
    keyword: null,
    productImageUrl:
      "https://d3c745jesl5pj3.cloudfront.net/sell/web/Google Pixel 2_51fc683729de4abf847832c00336ff0e.jpg",
    brand: "Google",
    type: null,
    brandCategoryValueId: 437,
    relatedGoods: [
      {
        productId: 1545698530165026816,
        name: "Google Pixel 2",
        brand: "Google",
        merchant: "Amazon",
        brandLogoUrl:
          "https://uptrade-public-static-resources.s3.us-east-2.amazonaws.com/amazon+logo.png",
        buyUrl:
          "https://www.amazon.com/Google-Unlocked-warranty-Certified-Refurbished/dp/B07F1B967S/ref=sr_1_22?keywords=Google+Pixel+Unlocked+renewed&qid=1657285235&sr=8-22&srs=17871142011",
        currentPrice: 8999,
        specs: [
          {
            productId: 1545698530165026816,
            key: "CONDITION",
            value: "Excellent",
          },
          {
            productId: 1545698530165026816,
            key: "CARRIER",
            value: "Unlocked",
          },
          {
            productId: 1545698530165026816,
            key: "STORAGE",
            value: "64GB",
          },
          {
            productId: 1545698530165026816,
            key: "COLOR",
            value: "Clearly White",
          },
        ],
      },
      {
        productId: 1545698534732623872,
        name: "Google Pixel 2",
        brand: "Google",
        merchant: "Amazon",
        brandLogoUrl:
          "https://uptrade-public-static-resources.s3.us-east-2.amazonaws.com/amazon+logo.png",
        buyUrl:
          "https://www.amazon.com/Google-Pixel-GSM-CDMA-Unlocked/dp/B0787SDRQ8/ref=sr_1_147?keywords=Google+Pixel+Verizon+renewed&qid=1657287212&sr=8-147",
        currentPrice: 10995,
        specs: [
          {
            productId: 1545698534732623872,
            key: "CONDITION",
            value: "Excellent",
          },
          {
            productId: 1545698534732623872,
            key: "CARRIER",
            value: "Unlocked",
          },
          {
            productId: 1545698534732623872,
            key: "STORAGE",
            value: "64GB",
          },
          {
            productId: 1545698534732623872,
            key: "COLOR",
            value: "Kinda Blue",
          },
        ],
      },
    ],
    aboutProduct:
      "The Google Pixel 2 comes from the Google family of phones, regularly rated as some of the best phones in the industry--and the Pixel 2 is no different. It’s one of the best phones of its generation with a pro-level camera that runs on Android and offers best-in-class low-level lighting, and it has other great features like Google Lens, which lets you learn about the world around you, and water resistance.",
    metaDescription:
      "Fully inspected and functional Google Pixel 2. Photos and video show conditions--great price for a great phone! Water resistant, hi-res camera, Google Lens",
    metaDescCategory:
      "Favored by techies and photographers, Google’s Pixel 2 is still holding its own against newer generations of phones. Its camera, paired with Google’s signature photography app, can go up against the best of them, and the phone’s dual front-facing speakers, water-resistant body, superior software make it the perfect choice for any user.",
    qa: {
      "Why should you buy a used or refurbished Google Pixel 2?":
        "Why pay more if you are getting the same thing? A refurbished Google Pixel 2 is fully functional and works exactly like a brand new Google Pixel 2, except for minimum to normal wear and tear on the cosmetics of the phone. A refurbished Google Pixel 2 is a significant saving option when you plan to buy your next Google Pixel 2. Buying a refurbished Google Pixel 2 is a fantastic choice. It will net you significant savings, mainly when a new Google Pixel 2 costs much more.",
      "What does it mean if the Google Pixel 2 is unlocked?":
        "Unlocked means the phone is not locked or limited to any carrier. An unlocked Google Pixel 2 can be used with any carrier in the United States. If you are unsure whether the phone is compatible with your mobile phone carrier, buying an unlocked phone is the easiest option. An unlocked Google Pixel 2 is likewise an incredible phone to buy as a gift since it will work with any carrier or wireless plan they may have.",
      "What does UpTrade Certified Used mean?":
        "There are hundreds or even thousands of used phone sellers, but unfortunately, not all are legit. To ensure the quality, we have selected a few reputable resellers and marketplaces that can provide high-quality used and refurbished phones. An UpTrade Certified Used Google Pixel 2 means it has passed an in-depth inspection by our Certified Seller. UpTrade Certified means the Google Pixel 2 you buy will work and function exactly like a new one.",
      "What is the return policy for the Used and Refurbished Google Pixel 2?":
        "Sure! The Refurbished Google Pixel 2 listed here comes with a 30-day return policy from the Sellers. So if you have any problem with your purchase, you may contact the Seller and return it to them for up to 30 days.",
      "Are refurbished Android phones as good as new ones?":
        "That’s a good question! Technically, there’s no difference between refurbished and new except that there may be signs of use (if at all) on a refurbished Android phone. All UpTrade Certified Used Phone Sellers process the phones through a rigorous inspection. As a result, each smartphone is fully functional and works just like a new one.",
    },
  },
  {
    productName: "Google Pixel 2 XL",
    productCategoryValueId: 495,
    price: 9355,
    keyword: null,
    productImageUrl:
      "https://d3c745jesl5pj3.cloudfront.net/sell/web/Google Pixel 2 XL_20162dad5f354afea9dd376aaf256522.jpg",
    brand: "Google",
    type: null,
    brandCategoryValueId: 437,
    relatedGoods: [
      {
        productId: 1545698452641705984,
        name: "Google Pixel 2 XL",
        brand: "Google",
        merchant: "Amazon",
        brandLogoUrl:
          "https://uptrade-public-static-resources.s3.us-east-2.amazonaws.com/amazon+logo.png",
        buyUrl:
          "https://www.amazon.com/Google-Pixel-Unlocked-GSM-CDMA/dp/B07MW9KP8P/ref=sr_1_23?keywords=Google+Pixel+Unlocked+renewed&qid=1657220515&sr=8-23&srs=17871142011",
        currentPrice: 12400,
        specs: [
          {
            productId: 1545698452641705984,
            key: "CONDITION",
            value: "Excellent",
          },
          {
            productId: 1545698452641705984,
            key: "CARRIER",
            value: "Unlocked",
          },
          {
            productId: 1545698452641705984,
            key: "STORAGE",
            value: "64GB",
          },
          {
            productId: 1545698452641705984,
            key: "COLOR",
            value: "Just Black",
          },
        ],
      },
      {
        productId: 1545698455502221312,
        name: "Google Pixel 2 XL",
        brand: "Google",
        merchant: "Amazon",
        brandLogoUrl:
          "https://uptrade-public-static-resources.s3.us-east-2.amazonaws.com/amazon+logo.png",
        buyUrl:
          "https://www.amazon.com/Google-Pixel-128-Black-Renewed/dp/B0799ZMY6D/ref=sr_1_32?keywords=Google+Pixel+Unlocked+renewed&qid=1657220579&sr=8-32&srs=17871142011",
        currentPrice: 12996,
        specs: [
          {
            productId: 1545698455502221312,
            key: "CONDITION",
            value: "Excellent",
          },
          {
            productId: 1545698455502221312,
            key: "CARRIER",
            value: "Unlocked",
          },
          {
            productId: 1545698455502221312,
            key: "STORAGE",
            value: "128GB",
          },
          {
            productId: 1545698455502221312,
            key: "COLOR",
            value: "Black",
          },
        ],
      },
      {
        productId: 1545698455015682048,
        name: "Google Pixel 2 XL",
        brand: "Google",
        merchant: "Amazon",
        brandLogoUrl:
          "https://uptrade-public-static-resources.s3.us-east-2.amazonaws.com/amazon+logo.png",
        buyUrl:
          "https://www.amazon.com/Google-Pixel-64GB-Smartphone-Refurbished/dp/B07CT4JC7J/ref=sr_1_30?keywords=Google+Pixel+Unlocked+renewed&qid=1657220579&sr=8-30&srs=17871142011",
        currentPrice: 13499,
        specs: [
          {
            productId: 1545698455015682048,
            key: "CONDITION",
            value: "Excellent",
          },
          {
            productId: 1545698455015682048,
            key: "CARRIER",
            value: "Verizon",
          },
          {
            productId: 1545698455015682048,
            key: "STORAGE",
            value: "64GB",
          },
          {
            productId: 1545698455015682048,
            key: "COLOR",
            value: "Just Black",
          },
        ],
      },
      {
        productId: 1545698456982810624,
        name: "Google Pixel 2 XL",
        brand: "Google",
        merchant: "Amazon",
        brandLogoUrl:
          "https://uptrade-public-static-resources.s3.us-east-2.amazonaws.com/amazon+logo.png",
        buyUrl:
          "https://www.amazon.com/Google-Pixel-XL-White-Renewed/dp/B0799VL3SY/ref=sr_1_36?keywords=Google+Pixel+Unlocked+renewed&qid=1657220579&sr=8-36&srs=17871142011",
        currentPrice: 14955,
        specs: [
          {
            productId: 1545698456982810624,
            key: "CONDITION",
            value: "Excellent",
          },
          {
            productId: 1545698456982810624,
            key: "CARRIER",
            value: "Unlocked",
          },
          {
            productId: 1545698456982810624,
            key: "STORAGE",
            value: "64GB",
          },
          {
            productId: 1545698456982810624,
            key: "COLOR",
            value: "White",
          },
        ],
      },
      {
        productId: 1545698451228225536,
        name: "Google Pixel 2 XL",
        brand: "Google",
        merchant: "Amazon",
        brandLogoUrl:
          "https://uptrade-public-static-resources.s3.us-east-2.amazonaws.com/amazon+logo.png",
        buyUrl:
          "https://www.amazon.com/Google-Pixel-XL-Black-Renewed/dp/B079C1K282/ref=sr_1_20?keywords=Google+Pixel+Unlocked+renewed&qid=1657220515&sr=8-20&srs=17871142011",
        currentPrice: 14999,
        specs: [
          {
            productId: 1545698451228225536,
            key: "CONDITION",
            value: "Excellent",
          },
          {
            productId: 1545698451228225536,
            key: "CARRIER",
            value: "Unlocked",
          },
          {
            productId: 1545698451228225536,
            key: "STORAGE",
            value: "64GB",
          },
          {
            productId: 1545698451228225536,
            key: "COLOR",
            value: "Black",
          },
        ],
      },
    ],
    aboutProduct:
      "The Google Pixel 2 XL is the perfect phone for anyone looking for a high-end device with lots of user-friendly features. Its large HD+ display and water & dust resistant screen make the phone great to look at, while services like Google Assistant and Google Lens make using the Pixel a breeze and make almost anything possible with a simple voice command.",
    metaDescription:
      "Pre-owned and fully functional Google Pixel 2 XL available now on UpTrade! See photos & video of condition. Get it at a great budget friendly price today!",
    metaDescCategory:
      "Google’s Pixel 2 XL had some of the best hardware on the market at its launch, and it can still hold its own against the competition. Its cameras, paired with intelligent Google Lens, wowed reviewers, and the phone’s impressive look, incredible display screen, and stream-lined operating system are sure to impress users as well.",
    qa: {
      "Why should you buy a used or refurbished Google Pixel 2 XL?":
        "I am glad that you asked! A refurbished Google Pixel 2 XL is a great opportunity to save when you are looking to purchase your next phone. Buying a refurbished Google Pixel 2 XL can be an wonderful choice and can net you huge savings, particularly when the cost of a new Google Pixel 2 XL is crazy expensive. A refurbished Google Pixel 2 XL is completely functional and works very much like a brand new Google Pixel 2 XL.",
      "What does it mean if the Google Pixel 2 XL is unlocked?":
        "You may use an unlocked Google Pixel 2 XL with any carrier in the United States. Purchasing an unlocked Google Pixel 2 XL is an wonderful choice if you aren’t sure which wireless carrier you want to sign up with, or if you want to be sure the Google Pixel 2 XL will work with your current carrier. An unlocked Google Pixel 2 XL is likewise an incredible phone to buy as a gift since it will work with any carrier or wireless plan that they may have.",
      "What does UpTrade Certified Used mean?":
        "UpTrade Certified means the Google Pixel 2 XL you buy will work and function just like new. Among hundreds of used phone and gadget sellers, we have chosen a modest bunch of reputable resellers and marketplaces that provide high-quality used and refurbished phones. An UpTrade Certified Used Google Pixel 2 XL means it has passed an in-depth inspection by our Certified Seller.",
      "What is the return policy for the Used and Refurbished Google Pixel 2 XL?":
        "Yes! All UpTrade Certified Used Phone Resellers and Marketplaces offer 30-day money-back-guarantee on Google Pixel 2 XL phones listed here. If you aren’t satisfied with your purchase you may return your Google Pixel 2 XL to your seller for free for up to 30 days.",
      "Are refurbished Android phones as good as new ones?":
        "Many people wonder if a refurbished Android phone is as good as a new one. Typically there’s really no difference between them except for the fact that there may be signs of use (if at all) on a refurbished phone. A refurbished Android phone should be fully functional and work just like a new Android phone. All UpTrade Certified Used Phone Resellers process the phones through a rigorous inspection so that each phone is fully functional and works just like a new phone.",
    },
  },
  {
    productName: "Google Pixel 3",
    productCategoryValueId: 450,
    price: 10500,
    keyword: null,
    productImageUrl:
      "https://d3c745jesl5pj3.cloudfront.net/sell/web/Google Pixel 3_a5a9708998b54908816611c66ccd0a2f.jpg",
    brand: "Google",
    type: null,
    brandCategoryValueId: 437,
    relatedGoods: [
      {
        productId: 1545698446861955072,
        name: "Google Pixel 3",
        brand: "Google",
        merchant: "Amazon",
        brandLogoUrl:
          "https://uptrade-public-static-resources.s3.us-east-2.amazonaws.com/amazon+logo.png",
        buyUrl:
          "https://www.amazon.com/Google-Pixel-Unlocked-GSM-CDMA/dp/B07KX8DXW8/ref=sr_1_8?keywords=Google+Pixel+Unlocked+renewed&qid=1657220411&sr=8-8&srs=17871142011",
        currentPrice: 11499,
        specs: [
          {
            productId: 1545698446861955072,
            key: "CONDITION",
            value: "Excellent",
          },
          {
            productId: 1545698446861955072,
            key: "CARRIER",
            value: "Unlocked",
          },
          {
            productId: 1545698446861955072,
            key: "STORAGE",
            value: "64GB",
          },
          {
            productId: 1545698446861955072,
            key: "COLOR",
            value: "Just Black",
          },
        ],
      },
      {
        productId: 1545698468475203584,
        name: "Google Pixel 3",
        brand: "Google",
        merchant: "Amazon",
        brandLogoUrl:
          "https://uptrade-public-static-resources.s3.us-east-2.amazonaws.com/amazon+logo.png",
        buyUrl:
          "https://www.amazon.com/Google-Pixel-Unlocked-Certified-Refurbished/dp/B07L6DSQVR/ref=sr_1_20?keywords=Google+Pixel+Verizon+renewed&qid=1657221036&sr=8-20",
        currentPrice: 12389,
        specs: [
          {
            productId: 1545698468475203584,
            key: "CONDITION",
            value: "Excellent",
          },
          {
            productId: 1545698468475203584,
            key: "CARRIER",
            value: "Verizon",
          },
          {
            productId: 1545698468475203584,
            key: "STORAGE",
            value: "64GB",
          },
          {
            productId: 1545698468475203584,
            key: "COLOR",
            value: "Just Black",
          },
        ],
      },
      {
        productId: 1545698537219846144,
        name: "Google Pixel 3",
        brand: "Google",
        merchant: "Amazon",
        brandLogoUrl:
          "https://uptrade-public-static-resources.s3.us-east-2.amazonaws.com/amazon+logo.png",
        buyUrl:
          "https://www.amazon.com/Google-Pixel-Factory-Unlocked-Renewed/dp/B07L6QGX7K/ref=sr_1_37?keywords=Google+Pixel+AT%26T+renewed&qid=1657288370&sr=8-37",
        currentPrice: 13900,
        specs: [
          {
            productId: 1545698537219846144,
            key: "CONDITION",
            value: "Excellent",
          },
          {
            productId: 1545698537219846144,
            key: "CARRIER",
            value: "Unlocked",
          },
          {
            productId: 1545698537219846144,
            key: "STORAGE",
            value: "64GB",
          },
          {
            productId: 1545698537219846144,
            key: "COLOR",
            value: "Not Pink",
          },
        ],
      },
      {
        productId: 1545698458333376512,
        name: "Google Pixel 3",
        brand: "Google",
        merchant: "Amazon",
        brandLogoUrl:
          "https://uptrade-public-static-resources.s3.us-east-2.amazonaws.com/amazon+logo.png",
        buyUrl:
          "https://www.amazon.com/Google-Pixel-Black-T-Mobile-Renewed/dp/B08J5SPZ29/ref=sr_1_41?keywords=Google+Pixel+Unlocked+renewed&qid=1657220644&sr=8-41&srs=17871142011",
        currentPrice: 13999,
        specs: [
          {
            productId: 1545698458333376512,
            key: "CONDITION",
            value: "Excellent",
          },
          {
            productId: 1545698458333376512,
            key: "CARRIER",
            value: "T-Mobile",
          },
          {
            productId: 1545698458333376512,
            key: "STORAGE",
            value: "64GB",
          },
          {
            productId: 1545698458333376512,
            key: "COLOR",
            value: "Just Black",
          },
        ],
      },
      {
        productId: 1545698452171943936,
        name: "Google Pixel 3",
        brand: "Google",
        merchant: "Amazon",
        brandLogoUrl:
          "https://uptrade-public-static-resources.s3.us-east-2.amazonaws.com/amazon+logo.png",
        buyUrl:
          "https://www.amazon.com/Google-Pixel-64GB-Not-Pink/dp/B07L36YGM9/ref=sr_1_22?keywords=Google+Pixel+Unlocked+renewed&qid=1657220515&sr=8-22&srs=17871142011",
        currentPrice: 15495,
        specs: [
          {
            productId: 1545698452171943936,
            key: "CONDITION",
            value: "Excellent",
          },
          {
            productId: 1545698452171943936,
            key: "CARRIER",
            value: "Unlocked",
          },
          {
            productId: 1545698452171943936,
            key: "STORAGE",
            value: "64GB",
          },
          {
            productId: 1545698452171943936,
            key: "COLOR",
            value: "Not Pink",
          },
        ],
      },
    ],
    aboutProduct:
      "The Google Pixel 3 was rated the best phone of the year when it came out and is still considered one of the top phones ever. It’s perfect for the person who’s looking for quality that won’t break the bank; it’s got a wide-angle front camera for better selfies, wireless charging, and intelligent call screening to block out spammers.",
    metaDescription:
      "One of the top phones, Google Pixel 3 at a great price! Fully inspected & functional; photos & vid available. Wireless charge, call screening, Google Lens",
    metaDescCategory:
      "Even with newer phones on the market, the Google Pixel 3 still has one of the best cameras out there, making it perfect for professional and amateur photographers alike. The Pixel 3’s size makes it easy to hold in one hand, while the updated, high resolution screen makes scrolling and movie watching a delight.",
    qa: {
      "Why should you buy a used or refurbished Google Pixel 3?":
        "A refurbished Google Pixel 3 functions precisely like a new one. Why pay more? It will save you a lot of money  buying a refurbished Google Pixel 3. More importantly, it reduces e-waste and makes our planet a better place. Buying a refurbished Google Pixel 3 is a smart choice.",
      "What does it mean if the Google Pixel 3 is unlocked?":
        "Most Google Pixel 3’s bought from wireless carriers are locked to their network. An unlocked Google Pixel 3 means the phone has been unlocked and can be used with any carrier in the United States. Choosing an unlocked Google Pixel 3 is the safest option if you are unsure which carrier you will use. An unlocked Google Pixel 3 is also a great option as a gift since it will work with any carrier or wireless phone plan they currently have.",
      "What does UpTrade Certified Used mean?":
        "UpTrade Certified means you can trust that your used Google Pixel 3 will function just as well as a new device. Among hundreds of used phone sellers, we have chosen a modest bunch of reputable sellers and marketplaces that are capable of providing high-quality used and refurbished phones. An UpTrade Certified Used Google Pixel 3 means it has passed a rigorous inspection and functions like a new one.",
      "What is the return policy for the Used and Refurbished Google Pixel 3?":
        "No worries if you are not 100% satisfied with the device you have received! Each phone is granted a 30-day trial period in which buyers may return the used device to the UpTrade Certified Seller for a refund within the first 30 days.",
      "Are refurbished Android phones as good as new ones?":
        "For the most part, there is no definite difference between a new phone and a used one, aside from one previously used by another owner. All used phones listed on UpTrade must pass a rigorous inspection to guarantee quality and product performance. Refurbished devices certified by UpTrade work just as well as new, ordinary store-bought phones.",
    },
  },
  {
    productName: "Google Pixel 3 XL",
    productCategoryValueId: 466,
    price: 12500,
    keyword: null,
    productImageUrl:
      "https://d3c745jesl5pj3.cloudfront.net/sell/web/Google Pixel 3 XL_b3e8f1aedc16466fbb662ed2edd5c425.jpg",
    brand: "Google",
    type: null,
    brandCategoryValueId: 437,
    relatedGoods: [
      {
        productId: 1545698449265291264,
        name: "Google Pixel 3 XL",
        brand: "Google",
        merchant: "Amazon",
        brandLogoUrl:
          "https://uptrade-public-static-resources.s3.us-east-2.amazonaws.com/amazon+logo.png",
        buyUrl:
          "https://www.amazon.com/Google-Pixel-Smartphone-Unlocked-Verizon/dp/B07L37PZW5/ref=sr_1_13?keywords=Google+Pixel+Unlocked+renewed&qid=1657220515&sr=8-13&srs=17871142011",
        currentPrice: 16000,
        specs: [
          {
            productId: 1545698449265291264,
            key: "CONDITION",
            value: "Excellent",
          },
          {
            productId: 1545698449265291264,
            key: "CARRIER",
            value: "Unlocked",
          },
          {
            productId: 1545698449265291264,
            key: "STORAGE",
            value: "64GB",
          },
          {
            productId: 1545698449265291264,
            key: "COLOR",
            value: "Not Pink",
          },
        ],
      },
      {
        productId: 1545698448296407040,
        name: "Google Pixel 3 XL",
        brand: "Google",
        merchant: "Amazon",
        brandLogoUrl:
          "https://uptrade-public-static-resources.s3.us-east-2.amazonaws.com/amazon+logo.png",
        buyUrl:
          "https://www.amazon.com/Google-Unlocked-Android-12-2MP-Camera/dp/B07HKPMFZ5/ref=sr_1_11?keywords=Google+Pixel+Unlocked+renewed&qid=1657220411&sr=8-11&srs=17871142011",
        currentPrice: 16500,
        specs: [
          {
            productId: 1545698448296407040,
            key: "CONDITION",
            value: "Excellent",
          },
          {
            productId: 1545698448296407040,
            key: "CARRIER",
            value: "Unlocked",
          },
          {
            productId: 1545698448296407040,
            key: "STORAGE",
            value: "64GB",
          },
          {
            productId: 1545698448296407040,
            key: "COLOR",
            value: "Just Black",
          },
        ],
      },
      {
        productId: 1545698450733297664,
        name: "Google Pixel 3 XL",
        brand: "Google",
        merchant: "Amazon",
        brandLogoUrl:
          "https://uptrade-public-static-resources.s3.us-east-2.amazonaws.com/amazon+logo.png",
        buyUrl:
          "https://www.amazon.com/Google-Pixel-Unlocked-GSM-CDMA/dp/B07L375RS6/ref=sr_1_18?keywords=Google+Pixel+Unlocked+renewed&qid=1657220515&sr=8-18&srs=17871142011",
        currentPrice: 17999,
        specs: [
          {
            productId: 1545698450733297664,
            key: "CONDITION",
            value: "Excellent",
          },
          {
            productId: 1545698450733297664,
            key: "CARRIER",
            value: "Unlocked",
          },
          {
            productId: 1545698450733297664,
            key: "STORAGE",
            value: "64GB",
          },
          {
            productId: 1545698450733297664,
            key: "COLOR",
            value: "Just Black",
          },
        ],
      },
      {
        productId: 1545698457419018240,
        name: "Google Pixel 3 XL",
        brand: "Google",
        merchant: "Amazon",
        brandLogoUrl:
          "https://uptrade-public-static-resources.s3.us-east-2.amazonaws.com/amazon+logo.png",
        buyUrl:
          "https://www.amazon.com/Google-Pixel-Unlocked-GSM-CDMA/dp/B07QL34721/ref=sr_1_37?keywords=Google+Pixel+Unlocked+renewed&qid=1657220644&sr=8-37&srs=17871142011",
        currentPrice: 24999,
        specs: [
          {
            productId: 1545698457419018240,
            key: "CONDITION",
            value: "Excellent",
          },
          {
            productId: 1545698457419018240,
            key: "CARRIER",
            value: "Unlocked",
          },
          {
            productId: 1545698457419018240,
            key: "STORAGE",
            value: "128GB",
          },
          {
            productId: 1545698457419018240,
            key: "COLOR",
            value: "Just Black",
          },
        ],
      },
      {
        productId: 1545698458849275904,
        name: "Google Pixel 3 XL",
        brand: "Google",
        merchant: "Amazon",
        brandLogoUrl:
          "https://uptrade-public-static-resources.s3.us-east-2.amazonaws.com/amazon+logo.png",
        buyUrl:
          "https://www.amazon.com/Google-Pixel-Unlocked-Version-Direct/dp/B07P14LCPM/ref=sr_1_42?keywords=Google+Pixel+Unlocked+renewed&qid=1657220644&sr=8-42&srs=17871142011",
        currentPrice: 24999,
        specs: [
          {
            productId: 1545698458849275904,
            key: "CONDITION",
            value: "Excellent",
          },
          {
            productId: 1545698458849275904,
            key: "CARRIER",
            value: "Unlocked",
          },
          {
            productId: 1545698458849275904,
            key: "STORAGE",
            value: "128GB",
          },
          {
            productId: 1545698458849275904,
            key: "COLOR",
            value: "Black",
          },
        ],
      },
    ],
    aboutProduct:
      "The Google Pixel 3 XL is a great device for users wanting a reliable product with lots of amenities they’ll actually use. Google Pixels are consistently rated top products and for good reason--this one comes with a massive HD+ display that’s water and dust resistant, tons of memory and free unlimited photo storage in the cloud, and Google Assistant and Google Lens to help you with pretty much everything else!",
    metaDescription:
      "Fully functional, pre-owned Google Pixel 3 XL from UpTrade. Budget pricing for a high-end device. Google Assistant & Google Lens + unlimited photo storage!",
    metaDescCategory:
      "The Google Pixel 3 XL has one of the best camera phones on the market--it’s so good, it can be hard to tell the difference between the Pixel 3 XL’s photos and those taken with a pro-grade camera. That makes it perfect for the budding photographer and the professional alike. It also sports a powerful battery and processor, so you can work efficiently and for longer.",
    qa: {
      "Why should you buy a used or refurbished Google Pixel 3 XL?":
        "I am glad that you asked! A refurbished Google Pixel 3 XL is a great opportunity to save when you are looking to purchase your next phone. Buying a refurbished Google Pixel 3 XL can be an wonderful choice and can net you huge savings, particularly when the cost of a new Google Pixel 3 XL is crazy expensive. A refurbished Google Pixel 3 XL is completely functional and works very much like a brand new Google Pixel 3 XL.",
      "What does it mean if the Google Pixel 3 XL is unlocked?":
        "You may use an unlocked Google Pixel 3 XL with any carrier in the United States. Purchasing an unlocked Google Pixel 3 XL is an wonderful choice if you aren’t sure which wireless carrier you want to sign up with, or if you want to be sure the Google Pixel 3 XL will work with your current carrier. An unlocked Google Pixel 3 XL is likewise an incredible phone to buy as a gift since it will work with any carrier or wireless plan that they may have.",
      "What does UpTrade Certified Used mean?":
        "UpTrade Certified means the Google Pixel 3 XL you buy will work and function just like new. Among hundreds of used phone and gadget sellers, we have chosen a modest bunch of reputable resellers and marketplaces that provide high-quality used and refurbished phones. An UpTrade Certified Used Google Pixel 3 XL means it has passed an in-depth inspection by our Certified Seller.",
      "What is the return policy for the Used and Refurbished Google Pixel 3 XL?":
        "Yes! All UpTrade Certified Used Phone Resellers and Marketplaces offer 30-day money-back-guarantee on Google Pixel 3 XL phones listed here. If you aren’t satisfied with your purchase you may return your Google Pixel 3 XL to your seller for free for up to 30 days.",
      "Are refurbished Android phones as good as new ones?":
        "Many people wonder if a refurbished Android phone is as good as a new one. Typically there’s really no difference between them except for the fact that there may be signs of use (if at all) on a refurbished phone. A refurbished Android phone should be fully functional and work just like a new Android phone. All UpTrade Certified Used Phone Resellers process the phones through a rigorous inspection so that each phone is fully functional and works just like a new phone.",
    },
  },
  {
    productName: "Google Pixel 3a",
    productCategoryValueId: 462,
    price: 10799,
    keyword: null,
    productImageUrl:
      "https://d3c745jesl5pj3.cloudfront.net/sell/web/Google Pixel 3a_05872fd2ddce4d5da40187995a77a3c5.jpg",
    brand: "Google",
    type: null,
    brandCategoryValueId: 437,
    relatedGoods: [
      {
        productId: 1545698450255147008,
        name: "Google Pixel 3a",
        brand: "Google",
        merchant: "Amazon",
        brandLogoUrl:
          "https://uptrade-public-static-resources.s3.us-east-2.amazonaws.com/amazon+logo.png",
        buyUrl:
          "https://www.amazon.com/Google-Pixel-Smartphone-Unlocked-Verizon/dp/B07VHRQB8D/ref=sr_1_15?keywords=Google+Pixel+Unlocked+renewed&qid=1657220515&sr=8-15&srs=17871142011",
        currentPrice: 10799,
        specs: [
          {
            productId: 1545698450255147008,
            key: "CONDITION",
            value: "Excellent",
          },
          {
            productId: 1545698450255147008,
            key: "CARRIER",
            value: "Unlocked",
          },
          {
            productId: 1545698450255147008,
            key: "STORAGE",
            value: "64GB",
          },
          {
            productId: 1545698450255147008,
            key: "COLOR",
            value: "Just Black",
          },
        ],
      },
      {
        productId: 1545698461747539968,
        name: "Google Pixel 3a",
        brand: "Google",
        merchant: "Amazon",
        brandLogoUrl:
          "https://uptrade-public-static-resources.s3.us-east-2.amazonaws.com/amazon+logo.png",
        buyUrl:
          "https://www.amazon.com/Google-Pixel-Black-Verizon-Renewed/dp/B08CLNM313/ref=sr_1_3?keywords=Google+Pixel+Verizon+renewed&qid=1657220737&sr=8-3",
        currentPrice: 11989,
        specs: [
          {
            productId: 1545698461747539968,
            key: "CONDITION",
            value: "Excellent",
          },
          {
            productId: 1545698461747539968,
            key: "CARRIER",
            value: "Verizon",
          },
          {
            productId: 1545698461747539968,
            key: "STORAGE",
            value: "64GB",
          },
          {
            productId: 1545698461747539968,
            key: "COLOR",
            value: "Just Black",
          },
        ],
      },
      {
        productId: 1545698538763350016,
        name: "Google Pixel 3a",
        brand: "Google",
        merchant: "Amazon",
        brandLogoUrl:
          "https://uptrade-public-static-resources.s3.us-east-2.amazonaws.com/amazon+logo.png",
        buyUrl:
          "https://www.amazon.com/Google-Pixel-Purple-ish-Verizon-Renewed/dp/B07YSTK94G/ref=sr_1_81?keywords=Google+Pixel+T-Mobile+renewed&qid=1657290540&sr=8-81",
        currentPrice: 13195,
        specs: [
          {
            productId: 1545698538763350016,
            key: "CONDITION",
            value: "Excellent",
          },
          {
            productId: 1545698538763350016,
            key: "CARRIER",
            value: "Verizon",
          },
          {
            productId: 1545698538763350016,
            key: "STORAGE",
            value: "64GB",
          },
          {
            productId: 1545698538763350016,
            key: "COLOR",
            value: "Purple-ish",
          },
        ],
      },
      {
        productId: 1545698461281972224,
        name: "Google Pixel 3a",
        brand: "Google",
        merchant: "Amazon",
        brandLogoUrl:
          "https://uptrade-public-static-resources.s3.us-east-2.amazonaws.com/amazon+logo.png",
        buyUrl:
          "https://www.amazon.com/Google-Pixel-3A-64GB-Sprint/dp/B088XXBLDY/ref=sr_1_47?keywords=Google+Pixel+Unlocked+renewed&qid=1657220644&sr=8-47&srs=17871142011",
        currentPrice: 14999,
        specs: [
          {
            productId: 1545698461281972224,
            key: "CONDITION",
            value: "Excellent",
          },
          {
            productId: 1545698461281972224,
            key: "CARRIER",
            value: "Sprint",
          },
          {
            productId: 1545698461281972224,
            key: "STORAGE",
            value: "64GB",
          },
          {
            productId: 1545698461281972224,
            key: "COLOR",
            value: "Just Black",
          },
        ],
      },
      {
        productId: 1545698460824793088,
        name: "Google Pixel 3a",
        brand: "Google",
        merchant: "Amazon",
        brandLogoUrl:
          "https://uptrade-public-static-resources.s3.us-east-2.amazonaws.com/amazon+logo.png",
        buyUrl:
          "https://www.amazon.com/Google-Pixel-Factory-Unlocked-Smartphone/dp/B07Y39KM8M/ref=sr_1_46?keywords=Google+Pixel+Unlocked+renewed&qid=1657220644&sr=8-46&srs=17871142011",
        currentPrice: 39999,
        specs: [
          {
            productId: 1545698460824793088,
            key: "CONDITION",
            value: "Excellent",
          },
          {
            productId: 1545698460824793088,
            key: "CARRIER",
            value: "Unlocked",
          },
          {
            productId: 1545698460824793088,
            key: "STORAGE",
            value: "64GB",
          },
          {
            productId: 1545698460824793088,
            key: "COLOR",
            value: "Clearly White",
          },
        ],
      },
    ],
    aboutProduct:
      "If you’re looking for the best-of-the-best at a steal of a price, you won’t find better than the Google Pixel 3a. It has most of the same features and functionality as the newer Pixel 4--like a great camera, fast updates, headphone jack and durable hardware--all at a fraction of the price!",
    metaDescription:
      "Pre-owned Google Pixel 3a on UpTrade at bargain price! Inspected and fully functional. Top of the line phone with Google Assistant, Google Lens, HD display",
    metaDescCategory:
      "The Google Pixel 3a is the budget sibling of the Pixel 3 and 3 Plus, but it’s certainly not short on features. Its design, operating systems and hardware make it competitive with smartphones at higher price-points, and it’s got some excellent, unique qualities like Active Edge technology and the beloved headphone jack that most new phoned lack.",
    qa: {
      "Why should you buy a used or refurbished Google Pixel 3a?":
        "I am glad that you asked! A refurbished Google Pixel 3a is a great opportunity to save when you are looking to purchase your next phone. Buying a refurbished Google Pixel 3a can be an wonderful choice and can net you huge savings, particularly when the cost of a new Google Pixel 3a is crazy expensive. A refurbished Google Pixel 3a is completely functional and works very much like a brand new Google Pixel 3a.",
      "What does it mean if the Google Pixel 3a is unlocked?":
        "You may use an unlocked Google Pixel 3a with any carrier in the United States. Purchasing an unlocked Google Pixel 3a is an wonderful choice if you aren’t sure which wireless carrier you want to sign up with, or if you want to be sure the Google Pixel 3a will work with your current carrier. An unlocked Google Pixel 3a is likewise an incredible phone to buy as a gift since it will work with any carrier or wireless plan that they may have.",
      "What does UpTrade Certified Used mean?":
        "UpTrade Certified means the Google Pixel 3a you buy will work and function just like new. Among hundreds of used phone and gadget sellers, we have chosen a modest bunch of reputable resellers and marketplaces that provide high-quality used and refurbished phones. An UpTrade Certified Used Google Pixel 3a means it has passed an in-depth inspection by our Certified Seller.",
      "What is the return policy for the Used and Refurbished Google Pixel 3a?":
        "Yes! All UpTrade Certified Used Phone Resellers and Marketplaces offer 30-day money-back-guarantee on Google Pixel 3a phones listed here. If you aren’t satisfied with your purchase you may return your Google Pixel 3a to your seller for free for up to 30 days.",
      "Are refurbished Android phones as good as new ones?":
        "Many people wonder if a refurbished Android phone is as good as a new one. Typically there’s really no difference between them except for the fact that there may be signs of use (if at all) on a refurbished phone. A refurbished Android phone should be fully functional and work just like a new Android phone. All UpTrade Certified Used Phone Resellers process the phones through a rigorous inspection so that each phone is fully functional and works just like a new phone.",
    },
  },
  {
    productName: "Google Pixel 3a XL",
    productCategoryValueId: 481,
    price: 11000,
    keyword: null,
    productImageUrl:
      "https://d3c745jesl5pj3.cloudfront.net/sell/web/Google Pixel 3a XL_491cd66be39a48efab5db2ec1f93749a.jpg",
    brand: "Google",
    type: null,
    brandCategoryValueId: 437,
    relatedGoods: [
      {
        productId: 1545698539275055104,
        name: "Google Pixel 3a XL",
        brand: "Google",
        merchant: "Amazon",
        brandLogoUrl:
          "https://uptrade-public-static-resources.s3.us-east-2.amazonaws.com/amazon+logo.png",
        buyUrl:
          "https://www.amazon.com/Google-Pixel-3a-XL-64GB/dp/B097CJ7SQX/ref=sr_1_165?keywords=Google+Pixel+T-Mobile+renewed&qid=1657291115&sr=8-165",
        currentPrice: 12000,
        specs: [
          {
            productId: 1545698539275055104,
            key: "CONDITION",
            value: "Excellent",
          },
          {
            productId: 1545698539275055104,
            key: "CARRIER",
            value: "T-Mobile",
          },
          {
            productId: 1545698539275055104,
            key: "STORAGE",
            value: "64GB",
          },
          {
            productId: 1545698539275055104,
            key: "COLOR",
            value: "Just Black",
          },
        ],
      },
      {
        productId: 1545698462691258368,
        name: "Google Pixel 3a XL",
        brand: "Google",
        merchant: "Amazon",
        brandLogoUrl:
          "https://uptrade-public-static-resources.s3.us-east-2.amazonaws.com/amazon+logo.png",
        buyUrl:
          "https://www.amazon.com/Google-Pixel-Verizon-Purple-ish-Renewed/dp/B07Y6PQV3H/ref=sr_1_5?keywords=Google+Pixel+Verizon+renewed&qid=1657220737&sr=8-5",
        currentPrice: 12200,
        specs: [
          {
            productId: 1545698462691258368,
            key: "CONDITION",
            value: "Excellent",
          },
          {
            productId: 1545698462691258368,
            key: "CARRIER",
            value: "Verizon",
          },
          {
            productId: 1545698462691258368,
            key: "STORAGE",
            value: "64GB",
          },
          {
            productId: 1545698462691258368,
            key: "COLOR",
            value: "Purple-ish",
          },
        ],
      },
      {
        productId: 1545698530685120512,
        name: "Google Pixel 3a XL",
        brand: "Google",
        merchant: "Amazon",
        brandLogoUrl:
          "https://uptrade-public-static-resources.s3.us-east-2.amazonaws.com/amazon+logo.png",
        buyUrl:
          "https://www.amazon.com/Google-Display-Unlocked-T-Mobile-International/dp/B08GV4GMM3/ref=sr_1_34?keywords=Google+Pixel+Unlocked+renewed&qid=1657285302&sr=8-34&srs=17871142011",
        currentPrice: 14999,
        specs: [
          {
            productId: 1545698530685120512,
            key: "CONDITION",
            value: "Excellent",
          },
          {
            productId: 1545698530685120512,
            key: "CARRIER",
            value: "Unlocked",
          },
          {
            productId: 1545698530685120512,
            key: "STORAGE",
            value: "64GB",
          },
          {
            productId: 1545698530685120512,
            key: "COLOR",
            value: "Just Black",
          },
        ],
      },
      {
        productId: 1545698540462043136,
        name: "Google Pixel 3a XL",
        brand: "Google",
        merchant: "Amazon",
        brandLogoUrl:
          "https://uptrade-public-static-resources.s3.us-east-2.amazonaws.com/amazon+logo.png",
        buyUrl:
          "https://www.amazon.com/Google-Pixel-Sprint-Clearly-Renewed/dp/B088J72ZCS/ref=sr_1_72?keywords=Google+Pixel+Sprint+renewed&qid=1657291557&sr=8-72",
        currentPrice: 15997,
        specs: [
          {
            productId: 1545698540462043136,
            key: "CONDITION",
            value: "Excellent",
          },
          {
            productId: 1545698540462043136,
            key: "CARRIER",
            value: "Sprint",
          },
          {
            productId: 1545698540462043136,
            key: "STORAGE",
            value: "64GB",
          },
          {
            productId: 1545698540462043136,
            key: "COLOR",
            value: "Clearly White",
          },
        ],
      },
    ],
    aboutProduct:
      "The Google Pixel 3a XL is perfect for anyone wanting a cool-looking smartphone with excellent hardware and some of the most helpful & intuitive software on the market. The Google Pixel 3a XL has a cinematic Full HD+ display, fast updates, and tons of memory; plus, with features like Google Assistant and Google Lens, you can do or learn almost anything, just by asking!",
    metaDescription:
      "Inspected and certified Google Pixel 3a XL from UpTrade! Pre-owned and fully function, comes at a great price! Call screening, Portrait Mode + Night Sight",
    metaDescCategory:
      "Google’s Pixel 3a XL has been called “some of the best of Google in a phone.” With a fantastic camera, streamlined Android interface, vibrant display, and the ever-helpful Google Assistant, it’s easy to see why. (It also has a headphone jack!)",
    qa: {
      "Why should you buy a used or refurbished Google Pixel 3a XL?":
        "I am glad that you asked! A refurbished Google Pixel 3a XL is a great opportunity to save when you are looking to purchase your next phone. Buying a refurbished Google Pixel 3a XL can be an wonderful choice and can net you huge savings, particularly when the cost of a new Google Pixel 3a XL is crazy expensive. A refurbished Google Pixel 3a XL is completely functional and works very much like a brand new Google Pixel 3a XL.",
      "What does it mean if the Google Pixel 3a XL is unlocked?":
        "You may use an unlocked Google Pixel 3a XL with any carrier in the United States. Purchasing an unlocked Google Pixel 3a XL is an wonderful choice if you aren’t sure which wireless carrier you want to sign up with, or if you want to be sure the Google Pixel 3a XL will work with your current carrier. An unlocked Google Pixel 3a XL is likewise an incredible phone to buy as a gift since it will work with any carrier or wireless plan that they may have.",
      "What does UpTrade Certified Used mean?":
        "UpTrade Certified means the Google Pixel 3a XL you buy will work and function just like new. Among hundreds of used phone and gadget sellers, we have chosen a modest bunch of reputable resellers and marketplaces that provide high-quality used and refurbished phones. An UpTrade Certified Used Google Pixel 3a XL means it has passed an in-depth inspection by our Certified Seller.",
      "What is the return policy for the Used and Refurbished Google Pixel 3a XL?":
        "Yes! All UpTrade Certified Used Phone Resellers and Marketplaces offer 30-day money-back-guarantee on Google Pixel 3a XL phones listed here. If you aren’t satisfied with your purchase you may return your Google Pixel 3a XL to your seller for free for up to 30 days.",
      "Are refurbished Android phones as good as new ones?":
        "Many people wonder if a refurbished Android phone is as good as a new one. Typically there’s really no difference between them except for the fact that there may be signs of use (if at all) on a refurbished phone. A refurbished Android phone should be fully functional and work just like a new Android phone. All UpTrade Certified Used Phone Resellers process the phones through a rigorous inspection so that each phone is fully functional and works just like a new phone.",
    },
  },
  {
    productName: "Google Pixel 4",
    productCategoryValueId: 438,
    price: 16400,
    keyword: null,
    productImageUrl:
      "https://d3c745jesl5pj3.cloudfront.net/sell/web/Google Pixel 4_fd4301978bf24086bfe3e4f546ce85e0.jpg",
    brand: "Google",
    type: null,
    brandCategoryValueId: 437,
    relatedGoods: [
      {
        productId: 1545698464222179328,
        name: "Google Pixel 4",
        brand: "Google",
        merchant: "Amazon",
        brandLogoUrl:
          "https://uptrade-public-static-resources.s3.us-east-2.amazonaws.com/amazon+logo.png",
        buyUrl:
          "https://www.amazon.com/Google-Pixel-Verizon-Locked-Renewed/dp/B084HMNKYS/ref=sr_1_8?keywords=Google+Pixel+Verizon+renewed&qid=1657220737&sr=8-8",
        currentPrice: 16800,
        specs: [
          {
            productId: 1545698464222179328,
            key: "CONDITION",
            value: "Excellent",
          },
          {
            productId: 1545698464222179328,
            key: "CARRIER",
            value: "Verizon",
          },
          {
            productId: 1545698464222179328,
            key: "STORAGE",
            value: "64GB",
          },
          {
            productId: 1545698464222179328,
            key: "COLOR",
            value: "Just Black",
          },
        ],
      },
      {
        productId: 1545698465233006592,
        name: "Google Pixel 4",
        brand: "Google",
        merchant: "Amazon",
        brandLogoUrl:
          "https://uptrade-public-static-resources.s3.us-east-2.amazonaws.com/amazon+logo.png",
        buyUrl:
          "https://www.amazon.com/Google-Clearly-Verizon-Locked-Renewed/dp/B084HN8V35/ref=sr_1_12?keywords=Google+Pixel+Verizon+renewed&qid=1657220737&sr=8-12",
        currentPrice: 17800,
        specs: [
          {
            productId: 1545698465233006592,
            key: "CONDITION",
            value: "Excellent",
          },
          {
            productId: 1545698465233006592,
            key: "CARRIER",
            value: "Verizon",
          },
          {
            productId: 1545698465233006592,
            key: "STORAGE",
            value: "64GB",
          },
          {
            productId: 1545698465233006592,
            key: "COLOR",
            value: "Clearly White",
          },
        ],
      },
      {
        productId: 1545698444932575232,
        name: "Google Pixel 4",
        brand: "Google",
        merchant: "Amazon",
        brandLogoUrl:
          "https://uptrade-public-static-resources.s3.us-east-2.amazonaws.com/amazon+logo.png",
        buyUrl:
          "https://www.amazon.com/Unlocked-Google-Pixel-GA01187-US-Renewed/dp/B082YF9MMW/ref=sr_1_4?keywords=Google+Pixel+Unlocked+renewed&qid=1657220411&sr=8-4&srs=17871142011",
        currentPrice: 19900,
        specs: [
          {
            productId: 1545698444932575232,
            key: "CONDITION",
            value: "Excellent",
          },
          {
            productId: 1545698444932575232,
            key: "CARRIER",
            value: "Unlocked",
          },
          {
            productId: 1545698444932575232,
            key: "STORAGE",
            value: "64GB",
          },
          {
            productId: 1545698444932575232,
            key: "COLOR",
            value: "Just Black",
          },
        ],
      },
      {
        productId: 1545698467984470016,
        name: "Google Pixel 4",
        brand: "Google",
        merchant: "Amazon",
        brandLogoUrl:
          "https://uptrade-public-static-resources.s3.us-east-2.amazonaws.com/amazon+logo.png",
        buyUrl:
          "https://www.amazon.com/Google-Pixel-Smartphone-G020I-Verizon/dp/B08DRR49SC/ref=sr_1_20?keywords=Google+Pixel+Verizon+renewed&qid=1657220737&sr=8-20",
        currentPrice: 20000,
        specs: [
          {
            productId: 1545698467984470016,
            key: "CONDITION",
            value: "Excellent",
          },
          {
            productId: 1545698467984470016,
            key: "CARRIER",
            value: "Verizon",
          },
          {
            productId: 1545698467984470016,
            key: "STORAGE",
            value: "64GB",
          },
          {
            productId: 1545698467984470016,
            key: "COLOR",
            value: "Clearly White",
          },
        ],
      },
      {
        productId: 1545698463219740672,
        name: "Google Pixel 4",
        brand: "Google",
        merchant: "Amazon",
        brandLogoUrl:
          "https://uptrade-public-static-resources.s3.us-east-2.amazonaws.com/amazon+logo.png",
        buyUrl:
          "https://www.amazon.com/Google-Orange-Verizon-Locked-Renewed/dp/B084HMRCQ1/ref=sr_1_6?keywords=Google+Pixel+Verizon+renewed&qid=1657220737&sr=8-6",
        currentPrice: 20200,
        specs: [
          {
            productId: 1545698463219740672,
            key: "CONDITION",
            value: "Excellent",
          },
          {
            productId: 1545698463219740672,
            key: "CARRIER",
            value: "Verizon",
          },
          {
            productId: 1545698463219740672,
            key: "STORAGE",
            value: "64GB",
          },
          {
            productId: 1545698463219740672,
            key: "COLOR",
            value: "Orange",
          },
        ],
      },
    ],
    aboutProduct:
      "Introducing the Google Pixel 4. Take studio-quality photos on a dual 12/16 MP rear-facing camera featuring Night Sight mode. Multitask like a pro with the 5.7 inch FHD always-on display with Motion Sense.  Get stuff done with the new Google Assistant.  Control features of your device with quick and intuitive gestures using built-in Motion Sense. Face Unlock lets you securely unlock your Pixel 4, make payments, and get into apps in a flash.",
    metaDescription:
      "Google Pixel 4. All phones are Fully Inspected, Certified Used, and Fully Functional. Great price.  5.7” Display. Facial Recognition. 4G.",
    metaDescCategory:
      "Google · Pixel Family · Pixel 4 · Android · 5.7″ · Facial Recognition · 8 MP front camera · 16 MP rear camera · Smartphone · With Wireless Charging",
    qa: {
      "Why should you buy a used or refurbished Google Pixel 4?":
        "I am glad that you asked! A refurbished Google Pixel 4 is a great opportunity to save when you are looking to purchase your next phone. Buying a refurbished Google Pixel 4 can be an wonderful choice and can net you huge savings, particularly when the cost of a new Google Pixel 4 is crazy expensive. A refurbished Google Pixel 4 is completely functional and works very much like a brand new Google Pixel 4.",
      "What does it mean if the Google Pixel 4 is unlocked?":
        "You may use an unlocked Google Pixel 4 with any carrier in the United States. Purchasing an unlocked Google Pixel 4 is an wonderful choice if you aren’t sure which wireless carrier you want to sign up with, or if you want to be sure the Google Pixel 4 will work with your current carrier. An unlocked Google Pixel 4 is likewise an incredible phone to buy as a gift since it will work with any carrier or wireless plan that they may have.",
      "What does UpTrade Certified Used mean?":
        "UpTrade Certified means the Google Pixel 4 you buy will work and function just like new. Among hundreds of used phone and gadget sellers, we have chosen a modest bunch of reputable resellers and marketplaces that provide high-quality used and refurbished phones. An UpTrade Certified Used Google Pixel 4 means it has passed an in-depth inspection by our Certified Seller.",
      "What is the return policy for the Used and Refurbished Google Pixel 4?":
        "Yes! All UpTrade Certified Used Phone Resellers and Marketplaces offer 30-day money-back-guarantee on Google Pixel 4 phones listed here. If you aren’t satisfied with your purchase you may return your Google Pixel 4 to your seller for free for up to 30 days.",
      "Are refurbished Android phones as good as new ones?":
        "Many people wonder if a refurbished Android phone is as good as a new one. Typically there’s really no difference between them except for the fact that there may be signs of use (if at all) on a refurbished phone. A refurbished Android phone should be fully functional and work just like a new Android phone. All UpTrade Certified Used Phone Resellers process the phones through a rigorous inspection so that each phone is fully functional and works just like a new phone.",
    },
  },
  {
    productName: "Google Pixel 4 XL",
    productCategoryValueId: 453,
    price: 20000,
    keyword: null,
    productImageUrl:
      "https://d3c745jesl5pj3.cloudfront.net/sell/web/Google Pixel 4 XL_982799431e8940dab750dafdb143e53f.jpg",
    brand: "Google",
    type: null,
    brandCategoryValueId: 437,
    relatedGoods: [
      {
        productId: 1545698540948582400,
        name: "Google Pixel 4 XL",
        brand: "Google",
        merchant: "Amazon",
        brandLogoUrl:
          "https://uptrade-public-static-resources.s3.us-east-2.amazonaws.com/amazon+logo.png",
        buyUrl:
          "https://www.amazon.com/Google-Pixel-Black-Sprint-Renewed/dp/B089T8LTDG/ref=sr_1_98?keywords=Google+Pixel+Sprint+renewed&qid=1657291641&sr=8-98",
        currentPrice: 20000,
        specs: [
          {
            productId: 1545698540948582400,
            key: "CONDITION",
            value: "Excellent",
          },
          {
            productId: 1545698540948582400,
            key: "CARRIER",
            value: "Sprint",
          },
          {
            productId: 1545698540948582400,
            key: "STORAGE",
            value: "64GB",
          },
          {
            productId: 1545698540948582400,
            key: "COLOR",
            value: "Just Black",
          },
        ],
      },
      {
        productId: 1545698467044945920,
        name: "Google Pixel 4 XL",
        brand: "Google",
        merchant: "Amazon",
        brandLogoUrl:
          "https://uptrade-public-static-resources.s3.us-east-2.amazonaws.com/amazon+logo.png",
        buyUrl:
          "https://www.amazon.com/Google-Pixel-Smartphone-G020J-Verizon/dp/B084H17M97/ref=sr_1_19?keywords=Google+Pixel+Verizon+renewed&qid=1657220737&sr=8-19",
        currentPrice: 20929,
        specs: [
          {
            productId: 1545698467044945920,
            key: "CONDITION",
            value: "Excellent",
          },
          {
            productId: 1545698467044945920,
            key: "CARRIER",
            value: "Verizon",
          },
          {
            productId: 1545698467044945920,
            key: "STORAGE",
            value: "64GB",
          },
          {
            productId: 1545698467044945920,
            key: "COLOR",
            value: "Just Black",
          },
        ],
      },
      {
        productId: 1545698536708141056,
        name: "Google Pixel 4 XL",
        brand: "Google",
        merchant: "Amazon",
        brandLogoUrl:
          "https://uptrade-public-static-resources.s3.us-east-2.amazonaws.com/amazon+logo.png",
        buyUrl:
          "https://www.amazon.com/Google-Pixel-XL-Unlocked-Renewed/dp/B0824BR684/ref=sr_1_25?keywords=Google+Pixel+AT%26T+renewed&qid=1657288216&sr=8-25",
        currentPrice: 20999,
        specs: [
          {
            productId: 1545698536708141056,
            key: "CONDITION",
            value: "Excellent",
          },
          {
            productId: 1545698536708141056,
            key: "CARRIER",
            value: "Unlocked",
          },
          {
            productId: 1545698536708141056,
            key: "STORAGE",
            value: "64GB",
          },
          {
            productId: 1545698536708141056,
            key: "COLOR",
            value: "Just Black",
          },
        ],
      },
      {
        productId: 1545698463723057152,
        name: "Google Pixel 4 XL",
        brand: "Google",
        merchant: "Amazon",
        brandLogoUrl:
          "https://uptrade-public-static-resources.s3.us-east-2.amazonaws.com/amazon+logo.png",
        buyUrl:
          "https://www.amazon.com/Google-Pixel-XL-Clearly-Unlocked/dp/B0824B6LQ2/ref=sr_1_7?keywords=Google+Pixel+Verizon+renewed&qid=1657220737&sr=8-7",
        currentPrice: 21400,
        specs: [
          {
            productId: 1545698463723057152,
            key: "CONDITION",
            value: "Excellent",
          },
          {
            productId: 1545698463723057152,
            key: "CARRIER",
            value: "Unlocked",
          },
          {
            productId: 1545698463723057152,
            key: "STORAGE",
            value: "64GB",
          },
          {
            productId: 1545698463723057152,
            key: "COLOR",
            value: "Clearly White",
          },
        ],
      },
      {
        productId: 1545698536225796096,
        name: "Google Pixel 4 XL",
        brand: "Google",
        merchant: "Amazon",
        brandLogoUrl:
          "https://uptrade-public-static-resources.s3.us-east-2.amazonaws.com/amazon+logo.png",
        buyUrl:
          "https://www.amazon.com/Google-Pixel-XL-Black-Renewed/dp/B0B3P9VW8S/ref=sr_1_21?keywords=Google+Pixel+AT%26T+renewed&qid=1657288216&sr=8-21",
        currentPrice: 21999,
        specs: [
          {
            productId: 1545698536225796096,
            key: "CONDITION",
            value: "Excellent",
          },
          {
            productId: 1545698536225796096,
            key: "CARRIER",
            value: "AT&T",
          },
          {
            productId: 1545698536225796096,
            key: "STORAGE",
            value: "64GB",
          },
          {
            productId: 1545698536225796096,
            key: "COLOR",
            value: "Black",
          },
        ],
      },
    ],
    aboutProduct:
      "Google Pixel 4 XL smartphone has a 6.3-inch QHD+ touchscreen, providing an immersive mobile viewing experience.  Dual 16MP and 12.2MP rear-facing cameras and integrated electronic image stabilization technology let you take crisp, focused images and videos. Features extra power and battery life.",
    metaDescription:
      "Google Pixel 4XL. All phones are Fully Inspected, Certified Used, and Fully Functional. Great price.  OLED Display. 4G.",
    metaDescCategory:
      "Google · Pixel Family · Pixel 4 · Smartphone · 64 GB storage · Single SIM · OLED Display",
    qa: {
      "Why should you buy a used or refurbished Google Pixel 4 XL?":
        "A refurbished Google Pixel 4 XL functions precisely like a new one. Why pay more? It will save you a lot of money  buying a refurbished Google Pixel 4 XL. More importantly, it reduces e-waste and makes our planet a better place. Buying a refurbished Google Pixel 4 XL is a smart choice.",
      "What does it mean if the Google Pixel 4 XL is unlocked?":
        "Most Google Pixel 4 XL’s bought from wireless carriers are locked to their network. An unlocked Google Pixel 4 XL means the phone has been unlocked and can be used with any carrier in the United States. Choosing an unlocked Google Pixel 4 XL is the safest option if you are unsure which carrier you will use. An unlocked Google Pixel 4 XL is also a great option as a gift since it will work with any carrier or wireless phone plan they currently have.",
      "What does UpTrade Certified Used mean?":
        "UpTrade Certified means you can trust that your used Google Pixel 4 XL will function just as well as a new device. Among hundreds of used phone sellers, we have chosen a modest bunch of reputable sellers and marketplaces that are capable of providing high-quality used and refurbished phones. An UpTrade Certified Used Google Pixel 4 XL means it has passed a rigorous inspection and functions like a new one.",
      "What is the return policy for the Used and Refurbished Google Pixel 4 XL?":
        "No worries if you are not 100% satisfied with the device you have received! Each phone is granted a 30-day trial period in which buyers may return the used device to the UpTrade Certified Seller for a refund within the first 30 days.",
      "Are refurbished Android phones as good as new ones?":
        "For the most part, there is no definite difference between a new phone and a used one, aside from one previously used by another owner. All used phones listed on UpTrade must pass a rigorous inspection to guarantee quality and product performance. Refurbished devices certified by UpTrade work just as well as new, ordinary store-bought phones.",
    },
  },
  {
    productName: "Google Pixel 4a",
    productCategoryValueId: 441,
    price: 16900,
    keyword: null,
    productImageUrl:
      "https://d3c745jesl5pj3.cloudfront.net/sell/web/Google Pixel 4a_e845974075484443975aa748b9a98fe5.jpg",
    brand: "Google",
    type: null,
    brandCategoryValueId: 437,
    relatedGoods: [
      {
        productId: 1545705352640884736,
        name: "Google Pixel 4a",
        brand: "Google",
        merchant: "Gazelle",
        brandLogoUrl:
          "https://uptrade-public-static-resources.s3.us-east-2.amazonaws.com/gazelle+logo.png",
        buyUrl:
          "https://buy.gazelle.com/products/google-pixel-4a-128gb-t-mobile?variant=41245780869173",
        currentPrice: 16900,
        specs: [
          {
            productId: 1545705352640884736,
            key: "CONDITION",
            value: "Excellent",
          },
          {
            productId: 1545705352640884736,
            key: "CARRIER",
            value: "T-Mobile",
          },
          {
            productId: 1545705352640884736,
            key: "STORAGE",
            value: "128GB",
          },
          {
            productId: 1545705352640884736,
            key: "COLOR",
            value: "White",
          },
        ],
      },
      {
        productId: 1545698462208913408,
        name: "Google Pixel 4a",
        brand: "Google",
        merchant: "Amazon",
        brandLogoUrl:
          "https://uptrade-public-static-resources.s3.us-east-2.amazonaws.com/amazon+logo.png",
        buyUrl:
          "https://www.amazon.com/Google-Pixel-Verizon-Black-Renewed/dp/B09T7C2VKS/ref=sr_1_4?keywords=Google+Pixel+Verizon+renewed&qid=1657220737&sr=8-4",
        currentPrice: 18399,
        specs: [
          {
            productId: 1545698462208913408,
            key: "CONDITION",
            value: "Excellent",
          },
          {
            productId: 1545698462208913408,
            key: "CARRIER",
            value: "Verizon",
          },
          {
            productId: 1545698462208913408,
            key: "STORAGE",
            value: "128GB",
          },
          {
            productId: 1545698462208913408,
            key: "COLOR",
            value: "Just Black",
          },
        ],
      },
      {
        productId: 1545698445884682240,
        name: "Google Pixel 4a",
        brand: "Google",
        merchant: "Amazon",
        brandLogoUrl:
          "https://uptrade-public-static-resources.s3.us-east-2.amazonaws.com/amazon+logo.png",
        buyUrl:
          "https://www.amazon.com/Google-Smartphone-Storage-Unlocked-Cellular/dp/B08H85VZNX/ref=sr_1_6?keywords=Google+Pixel+Unlocked+renewed&qid=1657220411&sr=8-6&srs=17871142011",
        currentPrice: 23496,
        specs: [
          {
            productId: 1545698445884682240,
            key: "CONDITION",
            value: "Excellent",
          },
          {
            productId: 1545698445884682240,
            key: "CARRIER",
            value: "Unlocked",
          },
          {
            productId: 1545698445884682240,
            key: "STORAGE",
            value: "128GB",
          },
          {
            productId: 1545698445884682240,
            key: "COLOR",
            value: "Just Black",
          },
        ],
      },
      {
        productId: 1545698448770363392,
        name: "Google Pixel 4a",
        brand: "Google",
        merchant: "Amazon",
        brandLogoUrl:
          "https://uptrade-public-static-resources.s3.us-east-2.amazonaws.com/amazon+logo.png",
        buyUrl:
          "https://www.amazon.com/Google-Pixel-4a-Unlocked-Smartphone/dp/B09BX59C4P/ref=sr_1_12?keywords=Google+Pixel+Unlocked+renewed&qid=1657220411&sr=8-12&srs=17871142011",
        currentPrice: 25599,
        specs: [
          {
            productId: 1545698448770363392,
            key: "CONDITION",
            value: "Excellent",
          },
          {
            productId: 1545698448770363392,
            key: "CARRIER",
            value: "Unlocked",
          },
          {
            productId: 1545698448770363392,
            key: "STORAGE",
            value: "128GB",
          },
          {
            productId: 1545698448770363392,
            key: "COLOR",
            value: "Barely Blue",
          },
        ],
      },
      {
        productId: 1545698445414920192,
        name: "Google Pixel 4a",
        brand: "Google",
        merchant: "Amazon",
        brandLogoUrl:
          "https://uptrade-public-static-resources.s3.us-east-2.amazonaws.com/amazon+logo.png",
        buyUrl:
          "https://www.amazon.com/Google-Pixel-4a-Smartphone-Ultrawide/dp/B08R61G69Q/ref=sr_1_5?keywords=Google+Pixel+Unlocked+renewed&qid=1657220411&sr=8-5&srs=17871142011",
        currentPrice: 26799,
        specs: [
          {
            productId: 1545698445414920192,
            key: "CONDITION",
            value: "Excellent",
          },
          {
            productId: 1545698445414920192,
            key: "CARRIER",
            value: "Unlocked",
          },
          {
            productId: 1545698445414920192,
            key: "STORAGE",
            value: "128GB",
          },
          {
            productId: 1545698445414920192,
            key: "COLOR",
            value: "Just Black",
          },
        ],
      },
    ],
    aboutProduct:
      "A Google phone packed with the things you want. The Adaptive Battery of Pixel 4a learns your favorite apps and reduces power to the ones you rarely use. Keep your OS and sensitive data protected with the custom Titan M security chip. Take photos like a pro with HDR+, Night Sight, and more. The Adaptive Battery learns from your favorite apps and reduces power to the ones you rarely use. The fast-charging battery is designed to get you back to the things you love as quickly as possible. The new Google Assistant helps you control apps, send texts, and even screen calls. Peace of mind built in.\nThe Adaptive Battery of Pixel 4a learns your favorite apps and reduces power to the ones you rarely use. Keep your OS and sensitive data protected with the custom Titan M security chip. Personal Safety, built by Google, helps you stay safe and connected to first responders.",
    metaDescription:
      "Google Pixel 4a. All phones are Fully Inspected, Certified Used, and Fully Functional. Great price.  5.81” Display. 4G.",
    metaDescCategory:
      "Google · Pixel Family · Pixel 4 · Pixel 4a · Android · 5.81″ · 12.2 MP rear camera · Smartphone · 128 GB storage · 4G",
    qa: {
      "Why should you buy a used or refurbished Google Pixel 4a?":
        "I am glad that you asked! A refurbished Google Pixel 4a is a great opportunity to save when you are looking to purchase your next phone. Buying a refurbished Google Pixel 4a can be an wonderful choice and can net you huge savings, particularly when the cost of a new Google Pixel 4a is crazy expensive. A refurbished Google Pixel 4a is completely functional and works very much like a brand new Google Pixel 4a.",
      "What does it mean if the Google Pixel 4a is unlocked?":
        "You may use an unlocked Google Pixel 4a with any carrier in the United States. Purchasing an unlocked Google Pixel 4a is an wonderful choice if you aren’t sure which wireless carrier you want to sign up with, or if you want to be sure the Google Pixel 4a will work with your current carrier. An unlocked Google Pixel 4a is likewise an incredible phone to buy as a gift since it will work with any carrier or wireless plan that they may have.",
      "What does UpTrade Certified Used mean?":
        "UpTrade Certified means the Google Pixel 4a you buy will work and function just like new. Among hundreds of used phone and gadget sellers, we have chosen a modest bunch of reputable resellers and marketplaces that provide high-quality used and refurbished phones. An UpTrade Certified Used Google Pixel 4a means it has passed an in-depth inspection by our Certified Seller.",
      "What is the return policy for the Used and Refurbished Google Pixel 4a?":
        "Yes! All UpTrade Certified Used Phone Resellers and Marketplaces offer 30-day money-back-guarantee on Google Pixel 4a phones listed here. If you aren’t satisfied with your purchase you may return your Google Pixel 4a to your seller for free for up to 30 days.",
      "Are refurbished Android phones as good as new ones?":
        "Many people wonder if a refurbished Android phone is as good as a new one. Typically there’s really no difference between them except for the fact that there may be signs of use (if at all) on a refurbished phone. A refurbished Android phone should be fully functional and work just like a new Android phone. All UpTrade Certified Used Phone Resellers process the phones through a rigorous inspection so that each phone is fully functional and works just like a new phone.",
    },
  },
  {
    productName: "Google Pixel 4a 5G",
    productCategoryValueId: 476,
    price: 24396,
    keyword: null,
    productImageUrl:
      "https://d3c745jesl5pj3.cloudfront.net/sell/web/Google Pixel 4a 5g_cb5b629b219d498ab4b5625561778593.jpg",
    brand: "Google",
    type: null,
    brandCategoryValueId: 437,
    relatedGoods: [
      {
        productId: 1545698465677602816,
        name: "Google Pixel 4a 5G",
        brand: "Google",
        merchant: "Amazon",
        brandLogoUrl:
          "https://uptrade-public-static-resources.s3.us-east-2.amazonaws.com/amazon+logo.png",
        buyUrl:
          "https://www.amazon.com/Google-Pixel-4a-5G-Renewed/dp/B095JT4B2X/ref=sr_1_15?keywords=Google+Pixel+Verizon+renewed&qid=1657220737&sr=8-15",
        currentPrice: 24398,
        specs: [
          {
            productId: 1545698465677602816,
            key: "CONDITION",
            value: "Excellent",
          },
          {
            productId: 1545698465677602816,
            key: "CARRIER",
            value: "Verizon",
          },
          {
            productId: 1545698465677602816,
            key: "STORAGE",
            value: "128GB",
          },
          {
            productId: 1545698465677602816,
            key: "COLOR",
            value: "Just Black",
          },
        ],
      },
      {
        productId: 1545698532278956032,
        name: "Google Pixel 4a 5G",
        brand: "Google",
        merchant: "Amazon",
        brandLogoUrl:
          "https://uptrade-public-static-resources.s3.us-east-2.amazonaws.com/amazon+logo.png",
        buyUrl:
          "https://www.amazon.com/Google-Pixel-128GB-International-Version/dp/B08WM2KYCZ/ref=sr_1_57?keywords=Google+Pixel+Verizon+renewed&qid=1657286144&sr=8-57",
        currentPrice: 28058,
        specs: [
          {
            productId: 1545698532278956032,
            key: "CONDITION",
            value: "Excellent",
          },
          {
            productId: 1545698532278956032,
            key: "CARRIER",
            value: "Unlocked",
          },
          {
            productId: 1545698532278956032,
            key: "STORAGE",
            value: "128GB",
          },
          {
            productId: 1545698532278956032,
            key: "COLOR",
            value: "Just Black",
          },
        ],
      },
    ],
    aboutProduct:
      "Pixel 4a with 5G is the budget-friendly, super fast phone from Google. It has the helpful stuff you need in a phone, with an extra boost of 5G speed. Download a movie in seconds, enjoy smooth streaming, and play your favorite games. Pixel 4a with 5G also takes amazing ultra-wide photos in any light, keeps your data safe, blocks robocalls, helps you tackle your to-do list, and has an all-day battery that can last up to 48 hours with Extreme Battery Saver. 4 It’s a lot of help from Google, for a lot less than you’d expect.",
    metaDescription:
      "Google Pixel 4a. All phones are Fully Inspected, Certified Used, and Fully Functional. Great price.  OLED Display. 5G.",
    metaDescCategory:
      "Google · Pixel Family · Pixel 4 · Pixel 4a · Android · Smartphone · 128 GB storage · 5G · Single SIM · USB C",
    qa: {
      "Why should you buy a used or refurbished Google Pixel 4a 5G?":
        "A refurbished Google Pixel 4a 5G functions precisely like a new one. Why pay more? It will save you a lot of money  buying a refurbished Google Pixel 4a 5G. More importantly, it reduces e-waste and makes our planet a better place. Buying a refurbished Google Pixel 4a 5G is a smart choice.",
      "What does it mean if the Google Pixel 4a 5G is unlocked?":
        "Most Google Pixel 4a 5G’s bought from wireless carriers are locked to their network. An unlocked Google Pixel 4a 5G means the phone has been unlocked and can be used with any carrier in the United States. Choosing an unlocked Google Pixel 4a 5G is the safest option if you are unsure which carrier you will use. An unlocked Google Pixel 4a 5G is also a great option as a gift since it will work with any carrier or wireless phone plan they currently have.",
      "What does UpTrade Certified Used mean?":
        "UpTrade Certified means you can trust that your used Google Pixel 4a 5G will function just as well as a new device. Among hundreds of used phone sellers, we have chosen a modest bunch of reputable sellers and marketplaces that are capable of providing high-quality used and refurbished phones. An UpTrade Certified Used Google Pixel 4a 5G means it has passed a rigorous inspection and functions like a new one.",
      "What is the return policy for the Used and Refurbished Google Pixel 4a 5G?":
        "No worries if you are not 100% satisfied with the device you have received! Each phone is granted a 30-day trial period in which buyers may return the used device to the UpTrade Certified Seller for a refund within the first 30 days.",
      "Are refurbished Android phones as good as new ones?":
        "For the most part, there is no definite difference between a new phone and a used one, aside from one previously used by another owner. All used phones listed on UpTrade must pass a rigorous inspection to guarantee quality and product performance. Refurbished devices certified by UpTrade work just as well as new, ordinary store-bought phones.",
    },
  },
  {
    productName: "Google Pixel 5",
    productCategoryValueId: 444,
    price: 27900,
    keyword: null,
    productImageUrl:
      "https://d3c745jesl5pj3.cloudfront.net/sell/web/Google Pixel 5_f41326068c064a7492334c9d3293e88b.jpg",
    brand: "Google",
    type: null,
    brandCategoryValueId: 437,
    relatedGoods: [
      {
        productId: 1545705510095056896,
        name: "Google Pixel 5",
        brand: "Google",
        merchant: "Gazelle",
        brandLogoUrl:
          "https://uptrade-public-static-resources.s3.us-east-2.amazonaws.com/gazelle+logo.png",
        buyUrl:
          "https://buy.gazelle.com/collections/google-phones/products/google-pixel-5-128gb-unlocked?variant=39803066384437",
        currentPrice: 27900,
        specs: [
          {
            productId: 1545705510095056896,
            key: "CONDITION",
            value: "Excellent",
          },
          {
            productId: 1545705510095056896,
            key: "CARRIER",
            value: "Unlocked",
          },
          {
            productId: 1545705510095056896,
            key: "STORAGE",
            value: "128GB",
          },
          {
            productId: 1545705510095056896,
            key: "COLOR",
            value: "Just Black",
          },
        ],
      },
      {
        productId: 1545705335159025664,
        name: "Google Pixel 5",
        brand: "Google",
        merchant: "Gazelle",
        brandLogoUrl:
          "https://uptrade-public-static-resources.s3.us-east-2.amazonaws.com/gazelle+logo.png",
        buyUrl:
          "https://buy.gazelle.com/collections/google-phones/products/google-pixel-5-128gb-unlocked?variant=39803066449973",
        currentPrice: 32400,
        specs: [
          {
            productId: 1545705335159025664,
            key: "CONDITION",
            value: "Excellent",
          },
          {
            productId: 1545705335159025664,
            key: "CARRIER",
            value: "Unlocked",
          },
          {
            productId: 1545705335159025664,
            key: "STORAGE",
            value: "128GB",
          },
          {
            productId: 1545705335159025664,
            key: "COLOR",
            value: "Just Black",
          },
        ],
      },
      {
        productId: 1545698444479590400,
        name: "Google Pixel 5",
        brand: "Google",
        merchant: "Amazon",
        brandLogoUrl:
          "https://uptrade-public-static-resources.s3.us-east-2.amazonaws.com/amazon+logo.png",
        buyUrl:
          "https://www.amazon.com/Unlocked-Google-Pixel-GA01316-US-Renewed/dp/B08MV7HWFK/ref=sr_1_3?keywords=Google+Pixel+Unlocked+renewed&qid=1657220411&sr=8-3&srs=17871142011",
        currentPrice: 34400,
        specs: [
          {
            productId: 1545698444479590400,
            key: "CONDITION",
            value: "Excellent",
          },
          {
            productId: 1545698444479590400,
            key: "CARRIER",
            value: "Unlocked",
          },
          {
            productId: 1545698444479590400,
            key: "STORAGE",
            value: "128GB",
          },
          {
            productId: 1545698444479590400,
            key: "COLOR",
            value: "Just Black",
          },
        ],
      },
      {
        productId: 1545698453572841472,
        name: "Google Pixel 5",
        brand: "Google",
        merchant: "Amazon",
        brandLogoUrl:
          "https://uptrade-public-static-resources.s3.us-east-2.amazonaws.com/amazon+logo.png",
        buyUrl:
          "https://www.amazon.com/Verizon-Google-Pixel-128GB-GA01955-US/dp/B08PQ2JN3T/ref=sr_1_26?keywords=Google+Pixel+Unlocked+renewed&qid=1657220579&sr=8-26&srs=17871142011",
        currentPrice: 35196,
        specs: [
          {
            productId: 1545698453572841472,
            key: "CONDITION",
            value: "Excellent",
          },
          {
            productId: 1545698453572841472,
            key: "CARRIER",
            value: "Verizon",
          },
          {
            productId: 1545698453572841472,
            key: "STORAGE",
            value: "128GB",
          },
          {
            productId: 1545698453572841472,
            key: "COLOR",
            value: "Just Black",
          },
        ],
      },
      {
        productId: 1545698531742085120,
        name: "Google Pixel 5",
        brand: "Google",
        merchant: "Amazon",
        brandLogoUrl:
          "https://uptrade-public-static-resources.s3.us-east-2.amazonaws.com/amazon+logo.png",
        buyUrl:
          "https://www.amazon.com/Google-Pixel-128GB-GSM-Unlocked/dp/B09WP5X9M2/ref=sr_1_53?keywords=Google+Pixel+Verizon+renewed&qid=1657286144&sr=8-53",
        currentPrice: 36000,
        specs: [
          {
            productId: 1545698531742085120,
            key: "CONDITION",
            value: "Excellent",
          },
          {
            productId: 1545698531742085120,
            key: "CARRIER",
            value: "Unlocked",
          },
          {
            productId: 1545698531742085120,
            key: "STORAGE",
            value: "128GB",
          },
          {
            productId: 1545698531742085120,
            key: "COLOR",
            value: "Just Black",
          },
        ],
      },
    ],
    aboutProduct:
      "What happens when you bring together the ultimate Google phone and the speed of 5G?  You get Pixel 5. Download a movie in seconds, enjoy smooth streaming and play your favorite games. Pixel 5 also takes stunning ultra-wide photos in any light, charges wirelessly, and is water-resistant. It has built-in protections to keep your data safe and an all-day battery that can last up to 48  hours with Extreme Battery Saver. And it can even block robocalls.",
    metaDescription:
      "Google Pixel 5. All phones are Fully Inspected, Certified Used, and Fully Functional. Great price.  6” Display. 5G.",
    metaDescCategory:
      "Google · Pixel Family · Pixel · Pixel (Original) · Android · 6″ · Fingerprint Scanner · 8 MP front camera · 12.2 MP rear camera",
    qa: {
      "Why should you buy a used or refurbished Google Pixel 5?":
        "A refurbished Google Pixel 5 functions precisely like a new one. Why pay more? It will save you a lot of money  buying a refurbished Google Pixel 5. More importantly, it reduces e-waste and makes our planet a better place. Buying a refurbished Google Pixel 5 is a smart choice.",
      "What does it mean if the Google Pixel 5 is unlocked?":
        "Most Google Pixel 5’s bought from wireless carriers are locked to their network. An unlocked Google Pixel 5 means the phone has been unlocked and can be used with any carrier in the United States. Choosing an unlocked Google Pixel 5 is the safest option if you are unsure which carrier you will use. An unlocked Google Pixel 5 is also a great option as a gift since it will work with any carrier or wireless phone plan they currently have.",
      "What does UpTrade Certified Used mean?":
        "UpTrade Certified means you can trust that your used Google Pixel 5 will function just as well as a new device. Among hundreds of used phone sellers, we have chosen a modest bunch of reputable sellers and marketplaces that are capable of providing high-quality used and refurbished phones. An UpTrade Certified Used Google Pixel 5 means it has passed a rigorous inspection and functions like a new one.",
      "What is the return policy for the Used and Refurbished Google Pixel 5?":
        "No worries if you are not 100% satisfied with the device you have received! Each phone is granted a 30-day trial period in which buyers may return the used device to the UpTrade Certified Seller for a refund within the first 30 days.",
      "Are refurbished Android phones as good as new ones?":
        "For the most part, there is no definite difference between a new phone and a used one, aside from one previously used by another owner. All used phones listed on UpTrade must pass a rigorous inspection to guarantee quality and product performance. Refurbished devices certified by UpTrade work just as well as new, ordinary store-bought phones.",
    },
  },
  {
    productName: "Google Pixel 6",
    productCategoryValueId: 447,
    price: 44900,
    keyword: null,
    productImageUrl:
      "https://d3c745jesl5pj3.cloudfront.net/sell/web/Google Pixel 6_dc02e501f1fe4febb38c278813459a01.jpg",
    brand: "Google",
    type: null,
    brandCategoryValueId: 437,
    relatedGoods: [
      {
        productId: 1545705328162926592,
        name: "Google Pixel 6",
        brand: "Google",
        merchant: "Gazelle",
        brandLogoUrl:
          "https://uptrade-public-static-resources.s3.us-east-2.amazonaws.com/gazelle+logo.png",
        buyUrl:
          "https://buy.gazelle.com/collections/google-phones/products/google-pixel-6-128gb-unlocked?variant=41173340258357",
        currentPrice: 44900,
        specs: [
          {
            productId: 1545705328162926592,
            key: "CONDITION",
            value: "Excellent",
          },
          {
            productId: 1545705328162926592,
            key: "CARRIER",
            value: "Unlocked",
          },
          {
            productId: 1545705328162926592,
            key: "STORAGE",
            value: "128GB",
          },
          {
            productId: 1545705328162926592,
            key: "COLOR",
            value: "Kinda Coral",
          },
        ],
      },
      {
        productId: 1545705637639647232,
        name: "Google Pixel 6",
        brand: "Google",
        merchant: "Gazelle",
        brandLogoUrl:
          "https://uptrade-public-static-resources.s3.us-east-2.amazonaws.com/gazelle+logo.png",
        buyUrl:
          "https://buy.gazelle.com/collections/google-phones/products/google-pixel-6-128gb-unlocked?variant=41173782822965",
        currentPrice: 44900,
        specs: [
          {
            productId: 1545705637639647232,
            key: "CONDITION",
            value: "Excellent",
          },
          {
            productId: 1545705637639647232,
            key: "CARRIER",
            value: "Unlocked",
          },
          {
            productId: 1545705637639647232,
            key: "STORAGE",
            value: "128GB",
          },
          {
            productId: 1545705637639647232,
            key: "COLOR",
            value: "Sorta Seaform",
          },
        ],
      },
      {
        productId: 1545705326598451200,
        name: "Google Pixel 6",
        brand: "Google",
        merchant: "Gazelle",
        brandLogoUrl:
          "https://uptrade-public-static-resources.s3.us-east-2.amazonaws.com/gazelle+logo.png",
        buyUrl:
          "https://buy.gazelle.com/collections/google-phones/products/google-pixel-6-128gb-unlocked?variant=41173340192821",
        currentPrice: 47900,
        specs: [
          {
            productId: 1545705326598451200,
            key: "CONDITION",
            value: "Excellent",
          },
          {
            productId: 1545705326598451200,
            key: "CARRIER",
            value: "Unlocked",
          },
          {
            productId: 1545705326598451200,
            key: "STORAGE",
            value: "128GB",
          },
          {
            productId: 1545705326598451200,
            key: "COLOR",
            value: "Stormy Black",
          },
        ],
      },
      {
        productId: 1545705328691408896,
        name: "Google Pixel 6",
        brand: "Google",
        merchant: "Gazelle",
        brandLogoUrl:
          "https://uptrade-public-static-resources.s3.us-east-2.amazonaws.com/gazelle+logo.png",
        buyUrl:
          "https://buy.gazelle.com/collections/google-phones/products/google-pixel-6-128gb-unlocked?variant=41173782855733",
        currentPrice: 47900,
        specs: [
          {
            productId: 1545705328691408896,
            key: "CONDITION",
            value: "Excellent",
          },
          {
            productId: 1545705328691408896,
            key: "CARRIER",
            value: "Unlocked",
          },
          {
            productId: 1545705328691408896,
            key: "STORAGE",
            value: "128GB",
          },
          {
            productId: 1545705328691408896,
            key: "COLOR",
            value: "Sorta Seaform",
          },
        ],
      },
      {
        productId: 1545698444014022656,
        name: "Google Pixel 6",
        brand: "Google",
        merchant: "Amazon",
        brandLogoUrl:
          "https://uptrade-public-static-resources.s3.us-east-2.amazonaws.com/amazon+logo.png",
        buyUrl:
          "https://www.amazon.com/Google-Pixel-Unlocked-Smartphone-Ultrawide/dp/B09NP6697R/ref=sr_1_2?keywords=Google+Pixel+Unlocked+renewed&qid=1657220411&sr=8-2&srs=17871142011",
        currentPrice: 49500,
        specs: [
          {
            productId: 1545698444014022656,
            key: "CONDITION",
            value: "Excellent",
          },
          {
            productId: 1545698444014022656,
            key: "CARRIER",
            value: "Unlocked",
          },
          {
            productId: 1545698444014022656,
            key: "STORAGE",
            value: "128GB",
          },
          {
            productId: 1545698444014022656,
            key: "COLOR",
            value: "Black",
          },
        ],
      },
    ],
    aboutProduct: null,
    metaDescription:
      "Keep up with the latest Android updates with the Google Pixel 6. Fully tested and certified.",
    metaDescCategory: null,
    qa: {
      "Why should you buy a used or refurbished Google Pixel 6?":
        "Why pay more if you are getting the same thing? A refurbished Google Pixel 6 is fully functional and works exactly like a brand new Google Pixel 6, except for minimum to normal wear and tear on the cosmetics of the phone. A refurbished Google Pixel 6 is a significant saving option when you plan to buy your next Google Pixel 6. Buying a refurbished Google Pixel 6 is a fantastic choice. It will net you significant savings, mainly when a new Google Pixel 6 costs much more.",
      "What does it mean if the Google Pixel 6 is unlocked?":
        "Unlocked means the phone is not locked or limited to any carrier. An unlocked Google Pixel 6 can be used with any carrier in the United States. If you are unsure whether the phone is compatible with your mobile phone carrier, buying an unlocked phone is the easiest option. An unlocked Google Pixel 6 is likewise an incredible phone to buy as a gift since it will work with any carrier or wireless plan they may have.",
      "What does UpTrade Certified Used mean?":
        "There are hundreds or even thousands of used phone sellers, but unfortunately, not all are legit. To ensure the quality, we have selected a few reputable resellers and marketplaces that can provide high-quality used and refurbished phones. An UpTrade Certified Used Google Pixel 6 means it has passed an in-depth inspection by our Certified Seller. UpTrade Certified means the Google Pixel 6 you buy will work and function exactly like a new one.",
      "What is the return policy for the Used and Refurbished Google Pixel 6?":
        "Sure! The Refurbished Google Pixel 6 listed here comes with a 30-day return policy from the Sellers. So if you have any problem with your purchase, you may contact the Seller and return it to them for up to 30 days.",
      "Are refurbished Android phones as good as new ones?":
        "That’s a good question! Technically, there’s no difference between refurbished and new except that there may be signs of use (if at all) on a refurbished Android phone. All UpTrade Certified Used Phone Sellers process the phones through a rigorous inspection. As a result, each smartphone is fully functional and works just like a new one.",
    },
  },
  {
    productName: "Google Pixel 6 Pro",
    productCategoryValueId: 459,
    price: 58900,
    keyword: null,
    productImageUrl:
      "https://d3c745jesl5pj3.cloudfront.net/sell/web/Google Pixel 6 Pro_c67ef19dbf4443a894f2d9f6c09f6b7a.jpg",
    brand: "Google",
    type: null,
    brandCategoryValueId: 437,
    relatedGoods: [
      {
        productId: 1545705638105214976,
        name: "Google Pixel 6 Pro",
        brand: "Google",
        merchant: "Gazelle",
        brandLogoUrl:
          "https://uptrade-public-static-resources.s3.us-east-2.amazonaws.com/gazelle+logo.png",
        buyUrl:
          "https://buy.gazelle.com/products/google-pixel-6-pro-128gb-unlocked?variant=41173945352245",
        currentPrice: 58900,
        specs: [
          {
            productId: 1545705638105214976,
            key: "CONDITION",
            value: "Excellent",
          },
          {
            productId: 1545705638105214976,
            key: "CARRIER",
            value: "Verizon",
          },
          {
            productId: 1545705638105214976,
            key: "STORAGE",
            value: "256GB",
          },
          {
            productId: 1545705638105214976,
            key: "COLOR",
            value: "Sorta Sunny",
          },
        ],
      },
      {
        productId: 1545705329492520960,
        name: "Google Pixel 6 Pro",
        brand: "Google",
        merchant: "Gazelle",
        brandLogoUrl:
          "https://uptrade-public-static-resources.s3.us-east-2.amazonaws.com/gazelle+logo.png",
        buyUrl:
          "https://buy.gazelle.com/products/google-pixel-6-pro-128gb-unlocked?variant=41173945155637",
        currentPrice: 58900,
        specs: [
          {
            productId: 1545705329492520960,
            key: "CONDITION",
            value: "Excellent",
          },
          {
            productId: 1545705329492520960,
            key: "CARRIER",
            value: "Verizon",
          },
          {
            productId: 1545705329492520960,
            key: "STORAGE",
            value: "256GB",
          },
          {
            productId: 1545705329492520960,
            key: "COLOR",
            value: "Stormy Black",
          },
        ],
      },
      {
        productId: 1545705330817921024,
        name: "Google Pixel 6 Pro",
        brand: "Google",
        merchant: "Gazelle",
        brandLogoUrl:
          "https://uptrade-public-static-resources.s3.us-east-2.amazonaws.com/gazelle+logo.png",
        buyUrl:
          "https://buy.gazelle.com/products/google-pixel-6-pro-128gb-unlocked?variant=41173945253941",
        currentPrice: 58900,
        specs: [
          {
            productId: 1545705330817921024,
            key: "CONDITION",
            value: "Excellent",
          },
          {
            productId: 1545705330817921024,
            key: "CARRIER",
            value: "Verizon",
          },
          {
            productId: 1545705330817921024,
            key: "STORAGE",
            value: "256GB",
          },
          {
            productId: 1545705330817921024,
            key: "COLOR",
            value: "Cloudy White",
          },
        ],
      },
      {
        productId: 1545705503795212288,
        name: "Google Pixel 6 Pro",
        brand: "Google",
        merchant: "Gazelle",
        brandLogoUrl:
          "https://uptrade-public-static-resources.s3.us-east-2.amazonaws.com/gazelle+logo.png",
        buyUrl:
          "https://buy.gazelle.com/products/google-pixel-6-pro-128gb-unlocked?variant=41173945385013",
        currentPrice: 61900,
        specs: [
          {
            productId: 1545705503795212288,
            key: "CONDITION",
            value: "Excellent",
          },
          {
            productId: 1545705503795212288,
            key: "CARRIER",
            value: "Verizon",
          },
          {
            productId: 1545705503795212288,
            key: "STORAGE",
            value: "256GB",
          },
          {
            productId: 1545705503795212288,
            key: "COLOR",
            value: "Sorta Sunny",
          },
        ],
      },
      {
        productId: 1545705330025197568,
        name: "Google Pixel 6 Pro",
        brand: "Google",
        merchant: "Gazelle",
        brandLogoUrl:
          "https://uptrade-public-static-resources.s3.us-east-2.amazonaws.com/gazelle+logo.png",
        buyUrl:
          "https://buy.gazelle.com/products/google-pixel-6-pro-128gb-unlocked?variant=41173945188405",
        currentPrice: 61900,
        specs: [
          {
            productId: 1545705330025197568,
            key: "CONDITION",
            value: "Excellent",
          },
          {
            productId: 1545705330025197568,
            key: "CARRIER",
            value: "Verizon",
          },
          {
            productId: 1545705330025197568,
            key: "STORAGE",
            value: "256GB",
          },
          {
            productId: 1545705330025197568,
            key: "COLOR",
            value: "Stormy Black",
          },
        ],
      },
    ],
    aboutProduct: null,
    metaDescription:
      "Created for the super users, daily life. The Google Pixel 6 Pro is packed with Google's latest Android features.",
    metaDescCategory: null,
    qa: {
      "Why should you buy a used or refurbished Google Pixel 6 Pro?":
        "Why pay more if you are getting the same thing? A refurbished Google Pixel 6 Pro is fully functional and works exactly like a brand new Google Pixel 6 Pro, except for minimum to normal wear and tear on the cosmetics of the phone. A refurbished Google Pixel 6 Pro is a significant saving option when you plan to buy your next Google Pixel 6 Pro. Buying a refurbished Google Pixel 6 Pro is a fantastic choice. It will net you significant savings, mainly when a new Google Pixel 6 Pro costs much more.",
      "What does it mean if the Google Pixel 6 Pro is unlocked?":
        "Unlocked means the phone is not locked or limited to any carrier. An unlocked Google Pixel 6 Pro can be used with any carrier in the United States. If you are unsure whether the phone is compatible with your mobile phone carrier, buying an unlocked phone is the easiest option. An unlocked Google Pixel 6 Pro is likewise an incredible phone to buy as a gift since it will work with any carrier or wireless plan they may have.",
      "What does UpTrade Certified Used mean?":
        "There are hundreds or even thousands of used phone sellers, but unfortunately, not all are legit. To ensure the quality, we have selected a few reputable resellers and marketplaces that can provide high-quality used and refurbished phones. An UpTrade Certified Used Google Pixel 6 Pro means it has passed an in-depth inspection by our Certified Seller. UpTrade Certified means the Google Pixel 6 Pro you buy will work and function exactly like a new one.",
      "What is the return policy for the Used and Refurbished Google Pixel 6 Pro?":
        "Sure! The Refurbished Google Pixel 6 Pro listed here comes with a 30-day return policy from the Sellers. So if you have any problem with your purchase, you may contact the Seller and return it to them for up to 30 days.",
      "Are refurbished Android phones as good as new ones?":
        "That’s a good question! Technically, there’s no difference between refurbished and new except that there may be signs of use (if at all) on a refurbished Android phone. All UpTrade Certified Used Phone Sellers process the phones through a rigorous inspection. As a result, each smartphone is fully functional and works just like a new one.",
    },
  },
  {
    productName: "Google Pixel XL",
    productCategoryValueId: 492,
    price: 11900,
    keyword: null,
    productImageUrl:
      "https://d3c745jesl5pj3.cloudfront.net/sell/web/Google Pixel XL_574c8814091d4175a5141adb7727c083.jpg",
    brand: "Google",
    type: null,
    brandCategoryValueId: 437,
    relatedGoods: [
      {
        productId: 1545698457863614464,
        name: "Google Pixel XL",
        brand: "Google",
        merchant: "Amazon",
        brandLogoUrl:
          "https://uptrade-public-static-resources.s3.us-east-2.amazonaws.com/amazon+logo.png",
        buyUrl:
          "https://www.amazon.com/Google-Pixel-XL-32GB-International/dp/B07BFKKLWW/ref=sr_1_39?keywords=Google+Pixel+Unlocked+renewed&qid=1657220644&sr=8-39&srs=17871142011",
        currentPrice: 11900,
        specs: [
          {
            productId: 1545698457863614464,
            key: "CONDITION",
            value: "Excellent",
          },
          {
            productId: 1545698457863614464,
            key: "CARRIER",
            value: "Unlocked",
          },
          {
            productId: 1545698457863614464,
            key: "STORAGE",
            value: "32GB",
          },
          {
            productId: 1545698457863614464,
            key: "COLOR",
            value: "Very Silver",
          },
        ],
      },
      {
        productId: 1545698459365175296,
        name: "Google Pixel XL",
        brand: "Google",
        merchant: "Amazon",
        brandLogoUrl:
          "https://uptrade-public-static-resources.s3.us-east-2.amazonaws.com/amazon+logo.png",
        buyUrl:
          "https://www.amazon.com/Google-Verizon-Unlocked-Certified-Refurbished/dp/B0782131T7/ref=sr_1_43?keywords=Google+Pixel+Unlocked+renewed&qid=1657220644&sr=8-43&srs=17871142011",
        currentPrice: 15899,
        specs: [
          {
            productId: 1545698459365175296,
            key: "CONDITION",
            value: "Excellent",
          },
          {
            productId: 1545698459365175296,
            key: "CARRIER",
            value: "Unlocked",
          },
          {
            productId: 1545698459365175296,
            key: "STORAGE",
            value: "32GB",
          },
          {
            productId: 1545698459365175296,
            key: "COLOR",
            value: "Really Blue",
          },
        ],
      },
      {
        productId: 1545698460334059520,
        name: "Google Pixel XL",
        brand: "Google",
        merchant: "Amazon",
        brandLogoUrl:
          "https://uptrade-public-static-resources.s3.us-east-2.amazonaws.com/amazon+logo.png",
        buyUrl:
          "https://www.amazon.com/Google-Pixel-Silver-Certified-Refurbished/dp/B076M9SBTB/ref=sr_1_45?keywords=Google+Pixel+Unlocked+renewed&qid=1657220644&sr=8-45&srs=17871142011",
        currentPrice: 17998,
        specs: [
          {
            productId: 1545698460334059520,
            key: "CONDITION",
            value: "Excellent",
          },
          {
            productId: 1545698460334059520,
            key: "CARRIER",
            value: "Verizon",
          },
          {
            productId: 1545698460334059520,
            key: "STORAGE",
            value: "128GB",
          },
          {
            productId: 1545698460334059520,
            key: "COLOR",
            value: "Very Silver",
          },
        ],
      },
    ],
    aboutProduct:
      "The Google Pixel XL is an excellent device perfect for any user. It’s the number-one choice for Plus-size phones of its generation, beating out the competition by almost all measures. It features an excellent camera, integration with Google Assistant, and a vivid display and aesthetic design that make it an all-around high-end option.",
    metaDescription:
      "Certified, inspected, and functional Google Pixel XL at bargain pricing from UpTrade! Large screen, Google Assistant and Android make for an amazing phone",
    metaDescCategory:
      "The Google Pixel XL is a top-rated phone with a host of great functions, all with a user-friendly interface. Across the board, this phone has some of the best features of its generation, like a pro-level camera, streamlined Android software, a large and vibrant screen, and Google’s exclusive Assistant--all which makes using this phone a breeze.",
    qa: {
      "Why should you buy a used or refurbished Google Pixel XL?":
        "Why pay more if you are getting the same thing? A refurbished Google Pixel XL is fully functional and works exactly like a brand new Google Pixel XL, except for minimum to normal wear and tear on the cosmetics of the phone. A refurbished Google Pixel XL is a significant saving option when you plan to buy your next Google Pixel XL. Buying a refurbished Google Pixel XL is a fantastic choice. It will net you significant savings, mainly when a new Google Pixel XL costs much more.",
      "What does it mean if the Google Pixel XL is unlocked?":
        "Unlocked means the phone is not locked or limited to any carrier. An unlocked Google Pixel XL can be used with any carrier in the United States. If you are unsure whether the phone is compatible with your mobile phone carrier, buying an unlocked phone is the easiest option. An unlocked Google Pixel XL is likewise an incredible phone to buy as a gift since it will work with any carrier or wireless plan they may have.",
      "What does UpTrade Certified Used mean?":
        "There are hundreds or even thousands of used phone sellers, but unfortunately, not all are legit. To ensure the quality, we have selected a few reputable resellers and marketplaces that can provide high-quality used and refurbished phones. An UpTrade Certified Used Google Pixel XL means it has passed an in-depth inspection by our Certified Seller. UpTrade Certified means the Google Pixel XL you buy will work and function exactly like a new one.",
      "What is the return policy for the Used and Refurbished Google Pixel XL?":
        "Sure! The Refurbished Google Pixel XL listed here comes with a 30-day return policy from the Sellers. So if you have any problem with your purchase, you may contact the Seller and return it to them for up to 30 days.",
      "Are refurbished Android phones as good as new ones?":
        "That’s a good question! Technically, there’s no difference between refurbished and new except that there may be signs of use (if at all) on a refurbished Android phone. All UpTrade Certified Used Phone Sellers process the phones through a rigorous inspection. As a result, each smartphone is fully functional and works just like a new one.",
    },
  },
  {
    productName: "iPhone 11",
    productCategoryValueId: 217,
    price: 21510,
    keyword: null,
    productImageUrl:
      "https://d3c745jesl5pj3.cloudfront.net/sell/web/iPhone_11_113d9fe4b48f435b9dbc25f4993da897.jpg",
    brand: "Apple",
    type: null,
    brandCategoryValueId: 10,
    relatedGoods: [
      {
        productId: 1545705521600032768,
        name: "iPhone 11",
        brand: "Apple",
        merchant: "Gazelle",
        brandLogoUrl:
          "https://uptrade-public-static-resources.s3.us-east-2.amazonaws.com/gazelle+logo.png",
        buyUrl:
          "https://buy.gazelle.com/products/iphone-11-64gb-t-mobile-2?variant=30964571734069",
        currentPrice: 24900,
        specs: [
          {
            productId: 1545705521600032768,
            key: "CONDITION",
            value: "Excellent",
          },
          {
            productId: 1545705521600032768,
            key: "CARRIER",
            value: "T-Mobile",
          },
          {
            productId: 1545705521600032768,
            key: "STORAGE",
            value: "64GB",
          },
          {
            productId: 1545705521600032768,
            key: "COLOR",
            value: "Purple",
          },
        ],
      },
      {
        productId: 1545705524196306944,
        name: "iPhone 11",
        brand: "Apple",
        merchant: "Gazelle",
        brandLogoUrl:
          "https://uptrade-public-static-resources.s3.us-east-2.amazonaws.com/gazelle+logo.png",
        buyUrl:
          "https://buy.gazelle.com/products/iphone-11-64gb-t-mobile-2?variant=30964571832373",
        currentPrice: 24900,
        specs: [
          {
            productId: 1545705524196306944,
            key: "CONDITION",
            value: "Excellent",
          },
          {
            productId: 1545705524196306944,
            key: "CARRIER",
            value: "T-Mobile",
          },
          {
            productId: 1545705524196306944,
            key: "STORAGE",
            value: "64GB",
          },
          {
            productId: 1545705524196306944,
            key: "COLOR",
            value: "Red",
          },
        ],
      },
      {
        productId: 1545705514125783040,
        name: "iPhone 11",
        brand: "Apple",
        merchant: "Gazelle",
        brandLogoUrl:
          "https://uptrade-public-static-resources.s3.us-east-2.amazonaws.com/gazelle+logo.png",
        buyUrl:
          "https://buy.gazelle.com/products/iphone-11-64gb-at-t-1?variant=31233528201269",
        currentPrice: 26500,
        specs: [
          {
            productId: 1545705514125783040,
            key: "CONDITION",
            value: "Excellent",
          },
          {
            productId: 1545705514125783040,
            key: "CARRIER",
            value: "AT&T",
          },
          {
            productId: 1545705514125783040,
            key: "STORAGE",
            value: "64GB",
          },
          {
            productId: 1545705514125783040,
            key: "COLOR",
            value: "Green",
          },
        ],
      },
      {
        productId: 1545705516466204672,
        name: "iPhone 11",
        brand: "Apple",
        merchant: "Gazelle",
        brandLogoUrl:
          "https://uptrade-public-static-resources.s3.us-east-2.amazonaws.com/gazelle+logo.png",
        buyUrl:
          "https://buy.gazelle.com/products/iphone-11-64gb-at-t-1?variant=31233528397877",
        currentPrice: 26500,
        specs: [
          {
            productId: 1545705516466204672,
            key: "CONDITION",
            value: "Excellent",
          },
          {
            productId: 1545705516466204672,
            key: "CARRIER",
            value: "AT&T",
          },
          {
            productId: 1545705516466204672,
            key: "STORAGE",
            value: "64GB",
          },
          {
            productId: 1545705516466204672,
            key: "COLOR",
            value: "Purple",
          },
        ],
      },
      {
        productId: 1545705512339009536,
        name: "iPhone 11",
        brand: "Apple",
        merchant: "Gazelle",
        brandLogoUrl:
          "https://uptrade-public-static-resources.s3.us-east-2.amazonaws.com/gazelle+logo.png",
        buyUrl:
          "https://buy.gazelle.com/products/iphone-11-64gb-at-t-1?variant=31233528102965",
        currentPrice: 26500,
        specs: [
          {
            productId: 1545705512339009536,
            key: "CONDITION",
            value: "Excellent",
          },
          {
            productId: 1545705512339009536,
            key: "CARRIER",
            value: "AT&T",
          },
          {
            productId: 1545705512339009536,
            key: "STORAGE",
            value: "64GB",
          },
          {
            productId: 1545705512339009536,
            key: "COLOR",
            value: "Black",
          },
        ],
      },
    ],
    aboutProduct:
      "Called “one of the best phones the company’s ever made,” you’ll find a lot to love--including the price--with the Apple 11. Part of Apple’s 11th gen, don’t let the “mid-tier” label fool you; this phone boasts a LOT of bells and whistles, including a new Night Mode, a ultra wide-angle camera, and a vivid full-screen display.",
    metaDescription:
      "Great new-to-you Certified Used iPhone 11! Find discount pricing on fully functional, fully certified iPhones on UpTrade! Carefully inspected.",
    metaDescCategory:
      "Looking to upgrade your iPhone without emptying out your wallet? The iPhone 11 is the way to go! It packs almost as much high-tech gear into its impressive design as the 11Pro, but at a fraction of the cost. With an improved camera, a gorgeous display that boasts a new range of colors, and excellent battery life, you’ll find everything you want in a phone at an excellent value with the iPhone 11.",
    qa: {
      "Why buy a refurbished iPhone 11?":
        "Great question! A refurbished iPhone 11 is a great way to save cash when you are looking to buy an iPhone 11. Buying a refurbished iPhone 11 can is a great option and can net you big savings, especially when the price of the latest iPhone typically exceeds $1,000. Your refurbished iPhone 11 should be fully functional and work just like a brand new iPhone 11.",
      "What is an unlocked iPhone 11?":
        "An unlocked iPhone 11 means that it will work with a variety of different carriers. Buying an unlocked iPhone 11 is a great option if you aren’t sure which carrier you want to sign up with, or if you want to be sure the iPhone 11 will work with your current carrier. An unlocked iPhone 11 is also a great gift since it will work with any carrier or service plan someone may already have.",
      "What does UpTrade Certified Used mean?":
        "UpTrade Certified means the iPhone 11 you buy will work and function just like new. Among hundreds of used phone and gadget sellers, we have chosen a modest bunch of reputable resellers and marketplaces that provide high-quality used and refurbished phones. An UpTrade Certified Used iPhone 11 means it has passed an in-depth inspection by our Certified Seller.",
      "Do you offer returns on refurbished iPhone 11?":
        "Sure! The Refurbished iPhone 11 listed here comes with a 30-day return policy from the Sellers. So if you have any problem with your purchase, you may contact the Seller and return it to them for up to 30 days.",
      "Are refurbished iPhones as good as new iPhones?":
        "That’s a good question! Technically, there’s no difference between refurbished and new except that there may be signs of use (if at all) on a refurbished iPhone. All UpTrade Certified Used Phone Sellers process the iPhones through a rigorous inspection. As a result, each iPhone is fully functional and works just like a new iPhone.",
    },
  },
  {
    productName: "iPhone 11 Pro",
    productCategoryValueId: 11,
    price: 35400,
    keyword: null,
    productImageUrl:
      "https://d3c745jesl5pj3.cloudfront.net/sell/web/iPhone11pro_d54eabf125e24711bc1dc676cab7effc.jpg",
    brand: "Apple",
    type: null,
    brandCategoryValueId: 10,
    relatedGoods: [
      {
        productId: 1545705506878025728,
        name: "iPhone 11 Pro",
        brand: "Apple",
        merchant: "Gazelle",
        brandLogoUrl:
          "https://uptrade-public-static-resources.s3.us-east-2.amazonaws.com/gazelle+logo.png",
        buyUrl:
          "https://buy.gazelle.com/products/iphone-11-pro-64gb-unlocked-1?variant=31561479520309",
        currentPrice: 39400,
        specs: [
          {
            productId: 1545705506878025728,
            key: "CONDITION",
            value: "Excellent",
          },
          {
            productId: 1545705506878025728,
            key: "CARRIER",
            value: "Unlocked",
          },
          {
            productId: 1545705506878025728,
            key: "STORAGE",
            value: "64GB",
          },
          {
            productId: 1545705506878025728,
            key: "COLOR",
            value: "Midnight Green",
          },
        ],
      },
      {
        productId: 1545705504390803456,
        name: "iPhone 11 Pro",
        brand: "Apple",
        merchant: "Gazelle",
        brandLogoUrl:
          "https://uptrade-public-static-resources.s3.us-east-2.amazonaws.com/gazelle+logo.png",
        buyUrl:
          "https://buy.gazelle.com/products/iphone-11-pro-64gb-unlocked-1?variant=31561479356469",
        currentPrice: 41400,
        specs: [
          {
            productId: 1545705504390803456,
            key: "CONDITION",
            value: "Excellent",
          },
          {
            productId: 1545705504390803456,
            key: "CARRIER",
            value: "Unlocked",
          },
          {
            productId: 1545705504390803456,
            key: "STORAGE",
            value: "64GB",
          },
          {
            productId: 1545705504390803456,
            key: "COLOR",
            value: "Space Gray",
          },
        ],
      },
      {
        productId: 1545705508778045440,
        name: "iPhone 11 Pro",
        brand: "Apple",
        merchant: "Gazelle",
        brandLogoUrl:
          "https://uptrade-public-static-resources.s3.us-east-2.amazonaws.com/gazelle+logo.png",
        buyUrl:
          "https://buy.gazelle.com/products/iphone-11-pro-64gb-unlocked-1?variant=31561479651381",
        currentPrice: 41400,
        specs: [
          {
            productId: 1545705508778045440,
            key: "CONDITION",
            value: "Excellent",
          },
          {
            productId: 1545705508778045440,
            key: "CARRIER",
            value: "Unlocked",
          },
          {
            productId: 1545705508778045440,
            key: "STORAGE",
            value: "64GB",
          },
          {
            productId: 1545705508778045440,
            key: "COLOR",
            value: "Gold",
          },
        ],
      },
      {
        productId: 1545705506185965568,
        name: "iPhone 11 Pro",
        brand: "Apple",
        merchant: "Gazelle",
        brandLogoUrl:
          "https://uptrade-public-static-resources.s3.us-east-2.amazonaws.com/gazelle+logo.png",
        buyUrl:
          "https://buy.gazelle.com/products/iphone-11-pro-64gb-unlocked-1?variant=31561479454773",
        currentPrice: 41400,
        specs: [
          {
            productId: 1545705506185965568,
            key: "CONDITION",
            value: "Excellent",
          },
          {
            productId: 1545705506185965568,
            key: "CARRIER",
            value: "Unlocked",
          },
          {
            productId: 1545705506185965568,
            key: "STORAGE",
            value: "64GB",
          },
          {
            productId: 1545705506185965568,
            key: "COLOR",
            value: "Silver",
          },
        ],
      },
      {
        productId: 1545705507700109312,
        name: "iPhone 11 Pro",
        brand: "Apple",
        merchant: "Gazelle",
        brandLogoUrl:
          "https://uptrade-public-static-resources.s3.us-east-2.amazonaws.com/gazelle+logo.png",
        buyUrl:
          "https://buy.gazelle.com/products/iphone-11-pro-64gb-unlocked-1?variant=31561479553077",
        currentPrice: 41400,
        specs: [
          {
            productId: 1545705507700109312,
            key: "CONDITION",
            value: "Excellent",
          },
          {
            productId: 1545705507700109312,
            key: "CARRIER",
            value: "Unlocked",
          },
          {
            productId: 1545705507700109312,
            key: "STORAGE",
            value: "64GB",
          },
          {
            productId: 1545705507700109312,
            key: "COLOR",
            value: "Midnight Green",
          },
        ],
      },
    ],
    aboutProduct:
      "The “first iPhone powerful enough to be called a Pro,” the iPhone 11 Pro is a game-changer in hand-held technology. Its sleek design is packed with powerful hardware and software including three cameras, an incredible display with the widest range of colors Apple has ever offered, and an ultra-powerful processor perfect for work or play!",
    metaDescription:
      "Find a great deal of Certified Used iPhone 11 Pro on UpTrade! 30-day warranty, guaranteed condition. Fully inspected, sanitized and certified. OLED display & triple camera!",
    metaDescCategory:
      "If you’re looking for a new iPhone stuffed full of special features, but in a size you can still hold in one hand, the iPhone 11 Pro is the perfect smartphone for you! It’s Apple’s most powerful phone yet, and has an incredible OLED display for movie watchers, a lightning-fast processor for gamers, and three rear cameras with new Night Mode for budding photographers.",
    qa: {
      "Why buy a refurbished iPhone 11 Pro?":
        "Buying a refurbished iPhone 11 Pro is a great way to save money if you are looking to buy an iPhone 11 Pro. Buying a refurbished iPhone 11 Pro can net you huge savings, since the price of the latest iPhone typically goes for over $1,000. A refurbished iPhone 11 Pro will be fully functional and work just like a brand new iPhone 11 Pro.",
      "What is an unlocked iPhone 11 Pro?":
        "An unlocked iPhone 11 Pro will work with any carrier. Buying an unlocked iPhone 11 Pro is a great choice if you aren’t sure which carrier you want to use yet, or if you want to be sure it works with your current carrier. An unlocked iPhone 11 Pro is also a great gift option since it will work with any carrier or service plan someone may already be using.",
      "What does UpTrade Certified Used mean?":
        "UpTrade Certified means the iPhone 11 Pro you buy will work and function just like new. Among hundreds of used phone and gadget sellers, we have chosen a modest bunch of reputable resellers and marketplaces that provide high-quality used and refurbished phones. An UpTrade Certified Used iPhone 11 Pro means it has passed an in-depth inspection by our Certified Seller.",
      "Do you offer returns on refurbished iPhone 11 Pro phones?":
        "No worries if you are not 100% satisfied with the device you have received! Each phone is granted a 30-day trial period in which buyers may return the used device to the UpTrade Certified Seller for a refund within the first 30 days.",
      "Are refurbished iPhones as good as new iPhones?":
        "For the most part, there is no definite difference between a new phone and a used one, aside from one previously used by another owner. All used phones listed on UpTrade must pass a rigorous inspection to guarantee quality and product performance. Refurbished devices certified by UpTrade work just as well as new, ordinary store-bought phones.",
    },
  },
  {
    productName: "iPhone 11 Pro Max",
    productCategoryValueId: 237,
    price: 40410,
    keyword: null,
    productImageUrl:
      "https://d3c745jesl5pj3.cloudfront.net/sell/web/iPhone11promax_eedb783825e14920837709e0f4398db4.jpg",
    brand: "Apple",
    type: null,
    brandCategoryValueId: 10,
    relatedGoods: [
      {
        productId: 1545705482509119488,
        name: "iPhone 11 Pro Max",
        brand: "Apple",
        merchant: "Gazelle",
        brandLogoUrl:
          "https://uptrade-public-static-resources.s3.us-east-2.amazonaws.com/gazelle+logo.png",
        buyUrl:
          "https://buy.gazelle.com/products/iphone-11-pro-max-64gb-at-t-1?variant=31245134135349",
        currentPrice: 42900,
        specs: [
          {
            productId: 1545705482509119488,
            key: "CONDITION",
            value: "Excellent",
          },
          {
            productId: 1545705482509119488,
            key: "CARRIER",
            value: "AT&T",
          },
          {
            productId: 1545705482509119488,
            key: "STORAGE",
            value: "64GB",
          },
          {
            productId: 1545705482509119488,
            key: "COLOR",
            value: "Silver",
          },
        ],
      },
      {
        productId: 1545705478805549056,
        name: "iPhone 11 Pro Max",
        brand: "Apple",
        merchant: "Gazelle",
        brandLogoUrl:
          "https://uptrade-public-static-resources.s3.us-east-2.amazonaws.com/gazelle+logo.png",
        buyUrl:
          "https://buy.gazelle.com/products/iphone-11-pro-max-64gb-at-t-1?variant=31245133938741",
        currentPrice: 42900,
        specs: [
          {
            productId: 1545705478805549056,
            key: "CONDITION",
            value: "Excellent",
          },
          {
            productId: 1545705478805549056,
            key: "CARRIER",
            value: "AT&T",
          },
          {
            productId: 1545705478805549056,
            key: "STORAGE",
            value: "64GB",
          },
          {
            productId: 1545705478805549056,
            key: "COLOR",
            value: "Space Gray",
          },
        ],
      },
      {
        productId: 1545705476339298304,
        name: "iPhone 11 Pro Max",
        brand: "Apple",
        merchant: "Gazelle",
        brandLogoUrl:
          "https://uptrade-public-static-resources.s3.us-east-2.amazonaws.com/gazelle+logo.png",
        buyUrl:
          "https://buy.gazelle.com/products/iphone-11-pro-max-64gb-at-t-1?variant=31245133840437",
        currentPrice: 42900,
        specs: [
          {
            productId: 1545705476339298304,
            key: "CONDITION",
            value: "Excellent",
          },
          {
            productId: 1545705476339298304,
            key: "CARRIER",
            value: "AT&T",
          },
          {
            productId: 1545705476339298304,
            key: "STORAGE",
            value: "64GB",
          },
          {
            productId: 1545705476339298304,
            key: "COLOR",
            value: "Midnight Green",
          },
        ],
      },
      {
        productId: 1545705479271116800,
        name: "iPhone 11 Pro Max",
        brand: "Apple",
        merchant: "Gazelle",
        brandLogoUrl:
          "https://uptrade-public-static-resources.s3.us-east-2.amazonaws.com/gazelle+logo.png",
        buyUrl:
          "https://buy.gazelle.com/products/iphone-11-pro-max-64gb-at-t-1?variant=31245133971509",
        currentPrice: 45900,
        specs: [
          {
            productId: 1545705479271116800,
            key: "CONDITION",
            value: "Excellent",
          },
          {
            productId: 1545705479271116800,
            key: "CARRIER",
            value: "AT&T",
          },
          {
            productId: 1545705479271116800,
            key: "STORAGE",
            value: "64GB",
          },
          {
            productId: 1545705479271116800,
            key: "COLOR",
            value: "Space Gray",
          },
        ],
      },
      {
        productId: 1545705476821643264,
        name: "iPhone 11 Pro Max",
        brand: "Apple",
        merchant: "Gazelle",
        brandLogoUrl:
          "https://uptrade-public-static-resources.s3.us-east-2.amazonaws.com/gazelle+logo.png",
        buyUrl:
          "https://buy.gazelle.com/products/iphone-11-pro-max-64gb-at-t-1?variant=31245133873205",
        currentPrice: 45900,
        specs: [
          {
            productId: 1545705476821643264,
            key: "CONDITION",
            value: "Excellent",
          },
          {
            productId: 1545705476821643264,
            key: "CARRIER",
            value: "AT&T",
          },
          {
            productId: 1545705476821643264,
            key: "STORAGE",
            value: "64GB",
          },
          {
            productId: 1545705476821643264,
            key: "COLOR",
            value: "Midnight Green",
          },
        ],
      },
    ],
    aboutProduct:
      "The iPhone 11 Pro Max is the best of the best of Apple’s 11 lineup. It’s filled with all their best software and hardware including three rear cameras, a massive and vibrant OLED display screen, and lightning-fast processing--all housed in the most durable and most water-resistant body yet.",
    metaDescription:
      "Get a Certified Used iPhone 11 Pro Max now with an excellent price! Comes fully inspected and certified.",
    metaDescCategory:
      "Wow your friends and dazzle your co-workers with the iPhone 11 Pro Max. It has all the best offerings Apple could fit into one phone. Movie-watchers will love the giant 6.5” edge-to-edge screen, gamers will appreciate the powerful processing speeds and augmented reality capabilities, and photographers will be pleased to find three rear cameras, including a 2x telephoto lens, as well as new Night Mode for incredible low-light photos!",
    qa: {
      "Why buy a refurbished iPhone 11 Pro Max?":
        "Buying a refurbished iPhone 11 Pro Max is a great way to save cash when you are looking to buy an iPhone 11 Pro Max. Buying a refurbished iPhone 11 Pro Max will net you a huge savings since the latest iPhones typically sell for over $1,000. A refurbished iPhone 11 Pro Max comes fully functional and works just like a brand new iPhone 11 Pro Max.",
      "What is an unlocked iPhone 11 Pro Max?":
        "An unlocked iPhone 11 Pro Max will work with any carrier or plan. Buying an unlocked iPhone 11 Pro Max is the way to go if you aren’t sure which carrier you want to use, or if you want to be sure it works with your current carrier. An unlocked iPhone 11 Pro Max can be a great gift option since it will work with any carrier or service plan someone already has in place.",
      "What does UpTrade Certified Used mean?":
        "UpTrade Certified means the iPhone 11 Pro Max you buy will work and function just like new. Among hundreds of used phone and gadget sellers, we have chosen a modest bunch of reputable resellers and marketplaces that provide high-quality used and refurbished phones. An UpTrade Certified Used iPhone 11 Pro Max means it has passed an in-depth inspection by our Certified Seller.",
      "Do you offer returns on refurbished iPhone 11 Pro Max phones?":
        "No worries if you are not 100% satisfied with the device you have received! Each phone is granted a 30-day trial period in which buyers may return the used device to the UpTrade Certified Seller for a refund within the first 30 days.",
      "Are refurbished iPhones as good as new iPhones?":
        "For the most part, there is no definite difference between a new phone and a used one, aside from one previously used by another owner. All used phones listed on UpTrade must pass a rigorous inspection to guarantee quality and product performance. Refurbished devices certified by UpTrade work just as well as new, ordinary store-bought phones.",
    },
  },
  {
    productName: "iPhone 12",
    productCategoryValueId: 230,
    price: 33400,
    keyword: null,
    productImageUrl:
      "https://d3c745jesl5pj3.cloudfront.net/sell/web/iPhone 12_76994d8481684810864fe507a74ce3b0.jpg",
    brand: "Apple",
    type: null,
    brandCategoryValueId: 10,
    relatedGoods: [
      {
        productId: 1545705445796376576,
        name: "iPhone 12",
        brand: "Apple",
        merchant: "Gazelle",
        brandLogoUrl:
          "https://uptrade-public-static-resources.s3.us-east-2.amazonaws.com/gazelle+logo.png",
        buyUrl:
          "https://buy.gazelle.com/products/iphone-12-64gb-at-t-1?variant=33430480977973",
        currentPrice: 40900,
        specs: [
          {
            productId: 1545705445796376576,
            key: "CONDITION",
            value: "Excellent",
          },
          {
            productId: 1545705445796376576,
            key: "CARRIER",
            value: "AT&T",
          },
          {
            productId: 1545705445796376576,
            key: "STORAGE",
            value: "64GB",
          },
          {
            productId: 1545705445796376576,
            key: "COLOR",
            value: "White",
          },
        ],
      },
      {
        productId: 1545705449650941952,
        name: "iPhone 12",
        brand: "Apple",
        merchant: "Gazelle",
        brandLogoUrl:
          "https://uptrade-public-static-resources.s3.us-east-2.amazonaws.com/gazelle+logo.png",
        buyUrl:
          "https://buy.gazelle.com/products/iphone-12-64gb-at-t-1?variant=33430481174581",
        currentPrice: 40900,
        specs: [
          {
            productId: 1545705449650941952,
            key: "CONDITION",
            value: "Excellent",
          },
          {
            productId: 1545705449650941952,
            key: "CARRIER",
            value: "AT&T",
          },
          {
            productId: 1545705449650941952,
            key: "STORAGE",
            value: "64GB",
          },
          {
            productId: 1545705449650941952,
            key: "COLOR",
            value: "Red",
          },
        ],
      },
      {
        productId: 1545705454763798528,
        name: "iPhone 12",
        brand: "Apple",
        merchant: "Gazelle",
        brandLogoUrl:
          "https://uptrade-public-static-resources.s3.us-east-2.amazonaws.com/gazelle+logo.png",
        buyUrl:
          "https://buy.gazelle.com/products/iphone-12-64gb-at-t-1?variant=33430481272885",
        currentPrice: 40900,
        specs: [
          {
            productId: 1545705454763798528,
            key: "CONDITION",
            value: "Excellent",
          },
          {
            productId: 1545705454763798528,
            key: "CARRIER",
            value: "AT&T",
          },
          {
            productId: 1545705454763798528,
            key: "STORAGE",
            value: "64GB",
          },
          {
            productId: 1545705454763798528,
            key: "COLOR",
            value: "Blue",
          },
        ],
      },
      {
        productId: 1545705443279794176,
        name: "iPhone 12",
        brand: "Apple",
        merchant: "Gazelle",
        brandLogoUrl:
          "https://uptrade-public-static-resources.s3.us-east-2.amazonaws.com/gazelle+logo.png",
        buyUrl:
          "https://buy.gazelle.com/products/iphone-12-64gb-at-t-1?variant=33430480879669",
        currentPrice: 40900,
        specs: [
          {
            productId: 1545705443279794176,
            key: "CONDITION",
            value: "Excellent",
          },
          {
            productId: 1545705443279794176,
            key: "CARRIER",
            value: "AT&T",
          },
          {
            productId: 1545705443279794176,
            key: "STORAGE",
            value: "64GB",
          },
          {
            productId: 1545705443279794176,
            key: "COLOR",
            value: "Black",
          },
        ],
      },
      {
        productId: 1545705458962296832,
        name: "iPhone 12",
        brand: "Apple",
        merchant: "Gazelle",
        brandLogoUrl:
          "https://uptrade-public-static-resources.s3.us-east-2.amazonaws.com/gazelle+logo.png",
        buyUrl:
          "https://buy.gazelle.com/products/iphone-12-64gb-at-t-1?variant=39802987577397",
        currentPrice: 40900,
        specs: [
          {
            productId: 1545705458962296832,
            key: "CONDITION",
            value: "Excellent",
          },
          {
            productId: 1545705458962296832,
            key: "CARRIER",
            value: "AT&T",
          },
          {
            productId: 1545705458962296832,
            key: "STORAGE",
            value: "64GB",
          },
          {
            productId: 1545705458962296832,
            key: "COLOR",
            value: "Purple",
          },
        ],
      },
    ],
    aboutProduct:
      "iPhone 12 is the first iPhone generation that supports 5G. It features A14 Bionic chip, Super Retina XDR display with a 6.1‐inch OLED display and Ultra Wide and Wide cameras.  The iPhone 12 also features MagSafe wireless charging, a Ceramic Shield with four times better drop performance and Night mode on every camera.",
    metaDescription:
      "Certified Used Apple iPhone 12.  All phones have been fully inspected and refurbished by our certified sellers. Fantastic price.  It features A14 Bionic chip, Super Retina XDR display with a 6.1‐inch OLED display and Ultra Wide and Wide cameras.  The iPhone 12 also features MagSafe wireless charging, a Ceramic Shield with four times better drop performance and Night mode on every camera.",
    metaDescCategory:
      "Apple · iPhone · iPhone 12 · iOS · 6.1″ · Facial Recognition · 12 MP front camera · Smartphone · With Wireless Charging",
    qa: {
      "Why buy a refurbished iPhone 12?":
        "A refurbished iPhone 12 functions precisely like a new one. Why pay more? It will save you a lot of money  buying a refurbished iPhone 12. More importantly, it reduces e-waste and makes our planet a better place. Buying a refurbished iPhone 12 is an excellent choice.",
      "What is an unlocked iPhone 12?":
        "Most iPhone 12’s bought from wireless carriers are locked to their network. An unlocked iPhone 12 means the phone has been unlocked and can be used with any carrier in the United States. Choosing an unlocked iPhone 12 is the safest option if you are unsure which carrier you will use. An unlocked iPhone 12 is also a great option as a gift since it will work with any carrier or wireless phone plan they currently have.",
      "What does UpTrade Certified Used mean?":
        "UpTrade Certified means you can trust that your used iPhone 12 will function just as well as a new device. Among hundreds of used phone sellers, we have chosen a modest bunch of reputable sellers and marketplaces that are capable of providing high-quality used and refurbished phones. An UpTrade Certified Used iPhone 12 means it has passed a rigorous inspection and functions like a new one.",
      "Do you offer returns on refurbished iPhone 12 phones?":
        "No worries if you are not 100% satisfied with the device you have received! Each phone is granted a 30-day trial period in which buyers may return the used device to the UpTrade Certified Seller for a refund within the first 30 days.",
      "Are refurbished iPhones as good as new iPhones?":
        "For the most part, there is no definite difference between a new phone and a used one, aside from one previously used by another owner. All used phones listed on UpTrade must pass a rigorous inspection to guarantee quality and product performance. Refurbished devices certified by UpTrade work just as well as new, ordinary store-bought phones.",
    },
  },
  {
    productName: "iPhone 12 Mini",
    productCategoryValueId: 248,
    price: 27900,
    keyword: null,
    productImageUrl:
      "https://d3c745jesl5pj3.cloudfront.net/sell/web/iPhone 12 mini_26f1a30b047c4c4fbf289bbe40ac4788.jpg",
    brand: "Apple",
    type: null,
    brandCategoryValueId: 10,
    relatedGoods: [
      {
        productId: 1545705442646454272,
        name: "iPhone 12 Mini",
        brand: "Apple",
        merchant: "Gazelle",
        brandLogoUrl:
          "https://uptrade-public-static-resources.s3.us-east-2.amazonaws.com/gazelle+logo.png",
        buyUrl:
          "https://buy.gazelle.com/products/iphone-12-mini-128gb-at-t?variant=33431258890293",
        currentPrice: 39400,
        specs: [
          {
            productId: 1545705442646454272,
            key: "CONDITION",
            value: "Excellent",
          },
          {
            productId: 1545705442646454272,
            key: "CARRIER",
            value: "AT&T",
          },
          {
            productId: 1545705442646454272,
            key: "STORAGE",
            value: "256GB",
          },
          {
            productId: 1545705442646454272,
            key: "COLOR",
            value: "Red",
          },
        ],
      },
      {
        productId: 1545705441912451072,
        name: "iPhone 12 Mini",
        brand: "Apple",
        merchant: "Gazelle",
        brandLogoUrl:
          "https://uptrade-public-static-resources.s3.us-east-2.amazonaws.com/gazelle+logo.png",
        buyUrl:
          "https://buy.gazelle.com/products/iphone-12-mini-128gb-at-t?variant=33431258791989",
        currentPrice: 39400,
        specs: [
          {
            productId: 1545705441912451072,
            key: "CONDITION",
            value: "Excellent",
          },
          {
            productId: 1545705441912451072,
            key: "CARRIER",
            value: "AT&T",
          },
          {
            productId: 1545705441912451072,
            key: "STORAGE",
            value: "256GB",
          },
          {
            productId: 1545705441912451072,
            key: "COLOR",
            value: "Blue",
          },
        ],
      },
      {
        productId: 1545698551245598720,
        name: "iPhone 12 Mini",
        brand: "Apple",
        merchant: "Amazon",
        brandLogoUrl:
          "https://uptrade-public-static-resources.s3.us-east-2.amazonaws.com/amazon+logo.png",
        buyUrl:
          "https://www.amazon.com/Apple-iPhone-Mini-64GB-Purple/dp/B09BBT1S3Z/ref=sr_1_23?keywords=Apple+iPhone+Unlocked+renewed&qid=1657292531&sr=8-23&srs=17871142011",
        currentPrice: 45000,
        specs: [
          {
            productId: 1545698551245598720,
            key: "CONDITION",
            value: "Excellent",
          },
          {
            productId: 1545698551245598720,
            key: "CARRIER",
            value: "Unlocked",
          },
          {
            productId: 1545698551245598720,
            key: "STORAGE",
            value: "64GB",
          },
          {
            productId: 1545698551245598720,
            key: "COLOR",
            value: "Purple",
          },
        ],
      },
      {
        productId: 1545698632715759616,
        name: "iPhone 12 Mini",
        brand: "Apple",
        merchant: "Amazon",
        brandLogoUrl:
          "https://uptrade-public-static-resources.s3.us-east-2.amazonaws.com/amazon+logo.png",
        buyUrl:
          "https://www.amazon.com/Apple-iPhone-Mini-128GB-Product/dp/B08PP4X584/ref=sr_1_20?keywords=Apple+iPhone+Xfinity+renewed&qid=1657295038&s=electronics&sr=1-20",
        currentPrice: 47841,
        specs: [
          {
            productId: 1545698632715759616,
            key: "CONDITION",
            value: "Excellent",
          },
          {
            productId: 1545698632715759616,
            key: "CARRIER",
            value: "Unlocked",
          },
          {
            productId: 1545698632715759616,
            key: "STORAGE",
            value: "128GB",
          },
          {
            productId: 1545698632715759616,
            key: "COLOR",
            value: "Red",
          },
        ],
      },
      {
        productId: 1545698618518040576,
        name: "iPhone 12 Mini",
        brand: "Apple",
        merchant: "Amazon",
        brandLogoUrl:
          "https://uptrade-public-static-resources.s3.us-east-2.amazonaws.com/amazon+logo.png",
        buyUrl:
          "https://www.amazon.com/Apple-iPhone-Mini-128GB-Blue/dp/B08PNMBYZ4/ref=sr_1_33?keywords=Apple+iPhone+T-Mobile+renewed&qid=1657294339&s=electronics&sr=1-33",
        currentPrice: 48395,
        specs: [
          {
            productId: 1545698618518040576,
            key: "CONDITION",
            value: "Excellent",
          },
          {
            productId: 1545698618518040576,
            key: "CARRIER",
            value: "Unlocked",
          },
          {
            productId: 1545698618518040576,
            key: "STORAGE",
            value: "128GB",
          },
          {
            productId: 1545698618518040576,
            key: "COLOR",
            value: "Blue",
          },
        ],
      },
    ],
    aboutProduct:
      "5G speed. A14 Bionic, the fastest chip in a smartphone. The iPhone 12 mini, with a compact 5.4‐inch edge-to-edge Super Retina XDR display, is designed to fit in the palm of your hand. MagSafe wireless charging, Ceramic Shield with four times better drop performance and Night mode on every camera as well as Ultra Wide and Wide cameras.",
    metaDescription:
      "Certified Used Apple iPhone 12 mini. All phones are Fully Inspected, Certified Used, and Fully Functional. Great price.  5G connectivity and wireless charging",
    metaDescCategory:
      "Apple · iPhone · iPhone 12 · iOS · 5.4″ · Smartphone · With Wireless Charging · 5G",
    qa: {
      "Why buy a refurbished iPhone 12 Mini?":
        "A refurbished iPhone 12 Mini functions precisely like a new one. Why pay more? It will save you a lot of money  buying a refurbished iPhone 12 Mini. More importantly, it reduces e-waste and makes our planet a better place. Buying a refurbished iPhone 12 Mini is an excellent choice.",
      "What is an unlocked iPhone 12 Mini?":
        "Most iPhone 12 Mini’s bought from wireless carriers are locked to their network. An unlocked iPhone 12 Mini means the phone has been unlocked and can be used with any carrier in the United States. Choosing an unlocked iPhone 12 Mini is the safest option if you are unsure which carrier you will use. An unlocked iPhone 12 Mini is also a great option as a gift since it will work with any carrier or wireless phone plan they currently have.",
      "What does UpTrade Certified Used mean?":
        "UpTrade Certified means you can trust that your used iPhone 12 Mini will function just as well as a new device. Among hundreds of used phone sellers, we have chosen a modest bunch of reputable sellers and marketplaces that are capable of providing high-quality used and refurbished phones. An UpTrade Certified Used iPhone 12 Mini means it has passed a rigorous inspection and functions like a new one.",
      "Do you offer returns on refurbished iPhone 12 Mini phones?":
        "No worries if you are not 100% satisfied with the device you have received! Each phone is granted a 30-day trial period in which buyers may return the used device to the UpTrade Certified Seller for a refund within the first 30 days.",
      "Are refurbished iPhones as good as new iPhones?":
        "For the most part, there is no definite difference between a new phone and a used one, aside from one previously used by another owner. All used phones listed on UpTrade must pass a rigorous inspection to guarantee quality and product performance. Refurbished devices certified by UpTrade work just as well as new, ordinary store-bought phones.",
    },
  },
  {
    productName: "iPhone 12 Pro",
    productCategoryValueId: 261,
    price: 48400,
    keyword: null,
    productImageUrl:
      "https://d3c745jesl5pj3.cloudfront.net/sell/web/iPhone 12 Pro_a0e62ad3a8f74abb91fbd2e6a3ee389c.jpg",
    brand: "Apple",
    type: null,
    brandCategoryValueId: 10,
    relatedGoods: [
      {
        productId: 1545705438598950912,
        name: "iPhone 12 Pro",
        brand: "Apple",
        merchant: "Gazelle",
        brandLogoUrl:
          "https://uptrade-public-static-resources.s3.us-east-2.amazonaws.com/gazelle+logo.png",
        buyUrl:
          "https://buy.gazelle.com/products/iphone-12-pro-128gb-t-mobile?variant=33437104177205",
        currentPrice: 61900,
        specs: [
          {
            productId: 1545705438598950912,
            key: "CONDITION",
            value: "Excellent",
          },
          {
            productId: 1545705438598950912,
            key: "CARRIER",
            value: "T-Mobile",
          },
          {
            productId: 1545705438598950912,
            key: "STORAGE",
            value: "128GB",
          },
          {
            productId: 1545705438598950912,
            key: "COLOR",
            value: "Pacific Blue",
          },
        ],
      },
      {
        productId: 1545705439131627520,
        name: "iPhone 12 Pro",
        brand: "Apple",
        merchant: "Gazelle",
        brandLogoUrl:
          "https://uptrade-public-static-resources.s3.us-east-2.amazonaws.com/gazelle+logo.png",
        buyUrl:
          "https://buy.gazelle.com/products/iphone-12-pro-256gb-t-mobile?variant=33437239509045",
        currentPrice: 64400,
        specs: [
          {
            productId: 1545705439131627520,
            key: "CONDITION",
            value: "Excellent",
          },
          {
            productId: 1545705439131627520,
            key: "CARRIER",
            value: "T-Mobile",
          },
          {
            productId: 1545705439131627520,
            key: "STORAGE",
            value: "512GB",
          },
          {
            productId: 1545705439131627520,
            key: "COLOR",
            value: "Pacific Blue",
          },
        ],
      },
      {
        productId: 1545705437315493888,
        name: "iPhone 12 Pro",
        brand: "Apple",
        merchant: "Gazelle",
        brandLogoUrl:
          "https://uptrade-public-static-resources.s3.us-east-2.amazonaws.com/gazelle+logo.png",
        buyUrl:
          "https://buy.gazelle.com/products/iphone-12-pro-256gb-at-t?variant=33431021158453",
        currentPrice: 64400,
        specs: [
          {
            productId: 1545705437315493888,
            key: "CONDITION",
            value: "Excellent",
          },
          {
            productId: 1545705437315493888,
            key: "CARRIER",
            value: "AT&T",
          },
          {
            productId: 1545705437315493888,
            key: "STORAGE",
            value: "512GB",
          },
          {
            productId: 1545705437315493888,
            key: "COLOR",
            value: "Pacific Blue",
          },
        ],
      },
      {
        productId: 1545705437898502144,
        name: "iPhone 12 Pro",
        brand: "Apple",
        merchant: "Gazelle",
        brandLogoUrl:
          "https://uptrade-public-static-resources.s3.us-east-2.amazonaws.com/gazelle+logo.png",
        buyUrl:
          "https://buy.gazelle.com/products/iphone-12-pro-128gb-t-mobile?variant=33437104111669",
        currentPrice: 65400,
        specs: [
          {
            productId: 1545705437898502144,
            key: "CONDITION",
            value: "Excellent",
          },
          {
            productId: 1545705437898502144,
            key: "CARRIER",
            value: "T-Mobile",
          },
          {
            productId: 1545705437898502144,
            key: "STORAGE",
            value: "128GB",
          },
          {
            productId: 1545705437898502144,
            key: "COLOR",
            value: "Gold",
          },
        ],
      },
      {
        productId: 1545705439861436416,
        name: "iPhone 12 Pro",
        brand: "Apple",
        merchant: "Gazelle",
        brandLogoUrl:
          "https://uptrade-public-static-resources.s3.us-east-2.amazonaws.com/gazelle+logo.png",
        buyUrl:
          "https://buy.gazelle.com/products/iphone-12-pro-256gb-unlocked?variant=33437143990325",
        currentPrice: 67900,
        specs: [
          {
            productId: 1545705439861436416,
            key: "CONDITION",
            value: "Excellent",
          },
          {
            productId: 1545705439861436416,
            key: "CARRIER",
            value: "Unlocked",
          },
          {
            productId: 1545705439861436416,
            key: "STORAGE",
            value: "512GB",
          },
          {
            productId: 1545705439861436416,
            key: "COLOR",
            value: "Graphite",
          },
        ],
      },
    ],
    aboutProduct:
      "5G to download huge files on the go and stream HDR video. Beautifully bright 6.1-inch Super Retina XDR display. Ceramic Shield with 4x better drop performance. Incredible low-light photography with a new Pro camera system, and 4x optical zoom range. Cinema-grade Dolby Vision video recording, editing, and playback. Night mode portraits and next-level AR experiences with the LiDAR Scanner. Powerful A14 Bionic chip.",
    metaDescription:
      "Certified Used Apple iPhone 12 Pro. All phones are Fully Inspected, Certified Used, and Fully Functional. Great price.  5G connectivity, wireless charging and Super Retina XDR display.",
    metaDescCategory:
      "Apple · iPhone · iPhone 12 Pro · iOS · 6.1″ · Facial Recognition · 12 MP front camera · 12 MP rear camera · Smartphone · With Wireless Charging",
    qa: {
      "Why buy a refurbished iPhone 12 Pro?":
        "A refurbished iPhone 12 Pro functions precisely like a new one. Why pay more? It will save you a lot of money  buying a refurbished iPhone 12 Pro. More importantly, it reduces e-waste and makes our planet a better place. Buying a refurbished iPhone 12 Pro is an excellent choice.",
      "What is an unlocked iPhone 12 Pro?":
        "Most iPhone 12 Pro’s bought from wireless carriers are locked to their network. An unlocked iPhone 12 Pro means the phone has been unlocked and can be used with any carrier in the United States. Choosing an unlocked iPhone 12 Pro is the safest option if you are unsure which carrier you will use. An unlocked iPhone 12 Pro is also a great option as a gift since it will work with any carrier or wireless phone plan they currently have.",
      "What does UpTrade Certified Used mean?":
        "UpTrade Certified means you can trust that your used iPhone 12 Pro will function just as well as a new device. Among hundreds of used phone sellers, we have chosen a modest bunch of reputable sellers and marketplaces that are capable of providing high-quality used and refurbished phones. An UpTrade Certified Used iPhone 12 Pro means it has passed a rigorous inspection and functions like a new one.",
      "Do you offer returns on refurbished iPhone 12 Pro phones?":
        "No worries if you are not 100% satisfied with the device you have received! Each phone is granted a 30-day trial period in which buyers may return the used device to the UpTrade Certified Seller for a refund within the first 30 days.",
      "Are refurbished iPhones as good as new iPhones?":
        "For the most part, there is no definite difference between a new phone and a used one, aside from one previously used by another owner. All used phones listed on UpTrade must pass a rigorous inspection to guarantee quality and product performance. Refurbished devices certified by UpTrade work just as well as new, ordinary store-bought phones.",
    },
  },
  {
    productName: "iPhone 12 Pro Max",
    productCategoryValueId: 258,
    price: 58900,
    keyword: null,
    productImageUrl:
      "https://d3c745jesl5pj3.cloudfront.net/sell/web/iPhone 12 Pro Max_c72948854a2b4f21ae490308945b98d7.jpg",
    brand: "Apple",
    type: null,
    brandCategoryValueId: 10,
    relatedGoods: [
      {
        productId: 1545705420924153856,
        name: "iPhone 12 Pro Max",
        brand: "Apple",
        merchant: "Gazelle",
        brandLogoUrl:
          "https://uptrade-public-static-resources.s3.us-east-2.amazonaws.com/gazelle+logo.png",
        buyUrl:
          "https://buy.gazelle.com/products/iphone-12-pro-max-128gb-at-t?variant=33430866559029",
        currentPrice: 66400,
        specs: [
          {
            productId: 1545705420924153856,
            key: "CONDITION",
            value: "Excellent",
          },
          {
            productId: 1545705420924153856,
            key: "CARRIER",
            value: "AT&T",
          },
          {
            productId: 1545705420924153856,
            key: "STORAGE",
            value: "128GB",
          },
          {
            productId: 1545705420924153856,
            key: "COLOR",
            value: "Gold",
          },
        ],
      },
      {
        productId: 1545705417329635328,
        name: "iPhone 12 Pro Max",
        brand: "Apple",
        merchant: "Gazelle",
        brandLogoUrl:
          "https://uptrade-public-static-resources.s3.us-east-2.amazonaws.com/gazelle+logo.png",
        buyUrl:
          "https://buy.gazelle.com/products/iphone-12-pro-max-128gb-at-t?variant=33430866460725",
        currentPrice: 66400,
        specs: [
          {
            productId: 1545705417329635328,
            key: "CONDITION",
            value: "Excellent",
          },
          {
            productId: 1545705417329635328,
            key: "CARRIER",
            value: "AT&T",
          },
          {
            productId: 1545705417329635328,
            key: "STORAGE",
            value: "128GB",
          },
          {
            productId: 1545705417329635328,
            key: "COLOR",
            value: "Graphite",
          },
        ],
      },
      {
        productId: 1545705423000334336,
        name: "iPhone 12 Pro Max",
        brand: "Apple",
        merchant: "Gazelle",
        brandLogoUrl:
          "https://uptrade-public-static-resources.s3.us-east-2.amazonaws.com/gazelle+logo.png",
        buyUrl:
          "https://buy.gazelle.com/products/iphone-12-pro-max-128gb-at-t?variant=33430866657333",
        currentPrice: 66400,
        specs: [
          {
            productId: 1545705423000334336,
            key: "CONDITION",
            value: "Excellent",
          },
          {
            productId: 1545705423000334336,
            key: "CARRIER",
            value: "AT&T",
          },
          {
            productId: 1545705423000334336,
            key: "STORAGE",
            value: "128GB",
          },
          {
            productId: 1545705423000334336,
            key: "COLOR",
            value: "Pacific Blue",
          },
        ],
      },
      {
        productId: 1545705427916058624,
        name: "iPhone 12 Pro Max",
        brand: "Apple",
        merchant: "Gazelle",
        brandLogoUrl:
          "https://uptrade-public-static-resources.s3.us-east-2.amazonaws.com/gazelle+logo.png",
        buyUrl:
          "https://buy.gazelle.com/products/iphone-12-pro-max-128gb-t-mobile?variant=33437356949557",
        currentPrice: 66400,
        specs: [
          {
            productId: 1545705427916058624,
            key: "CONDITION",
            value: "Excellent",
          },
          {
            productId: 1545705427916058624,
            key: "CARRIER",
            value: "US Cellular",
          },
          {
            productId: 1545705427916058624,
            key: "STORAGE",
            value: "256GB",
          },
          {
            productId: 1545705427916058624,
            key: "COLOR",
            value: "Pacific Blue",
          },
        ],
      },
      {
        productId: 1545705416486580224,
        name: "iPhone 12 Pro Max",
        brand: "Apple",
        merchant: "Gazelle",
        brandLogoUrl:
          "https://uptrade-public-static-resources.s3.us-east-2.amazonaws.com/gazelle+logo.png",
        buyUrl:
          "https://buy.gazelle.com/products/iphone-12-pro-max-128gb-at-t?variant=33430866362421",
        currentPrice: 66400,
        specs: [
          {
            productId: 1545705416486580224,
            key: "CONDITION",
            value: "Excellent",
          },
          {
            productId: 1545705416486580224,
            key: "CARRIER",
            value: "AT&T",
          },
          {
            productId: 1545705416486580224,
            key: "STORAGE",
            value: "128GB",
          },
          {
            productId: 1545705416486580224,
            key: "COLOR",
            value: "Silver",
          },
        ],
      },
    ],
    aboutProduct:
      "A huge leap for Pro. iPhone 12 Pro Max. 5G to download huge files on the go and stream HDR video. Larger 6.7-inch Super Retina XDR display. Ceramic Shield with 4x better drop performance. Incredible low-light photography with the best Pro camera system on an iPhone, and 5x optical zoom range. Cinema-grade Dolby Vision video recording, editing, and playback. Night mode portraits and next-level AR experiences with the LiDAR Scanner. Powerful A14 Bionic chip. Size: 512GB. Color: Graphite.",
    metaDescription:
      "Certified Used Apple iPhone 12 Pro Max. All phones are Fully Inspected, Certified Used, and Fully Functional. Great price.  5G connectivity, wireless charging and Super Retina XDR display.",
    metaDescCategory:
      "Apple · iPhone · iPhone 12 Pro · iOS · 6.7″ · Facial Recognition · 12 MP front camera · Smartphone · With Wireless Charging",
    qa: {
      "Why buy a refurbished iPhone 12 Pro Max?":
        "I am glad that you asked! A refurbished iPhone 12 Pro Max is a great opportunity to save when you are looking to purchase your next iPhone. Buying a refurbished iPhone 12 Pro Max can be an wonderful choice and can net you huge savings, particularly when the cost of a new iPhone 12 Pro Max is crazy expensive. A refurbished iPhone 12 Pro Max is completely functional and works very much like a brand new iPhone 12 Pro Max.",
      "What is an unlocked iPhone 12 Pro Max?":
        "You may use an unlocked iPhone 12 Pro Max with any carrier in the United States. Purchasing an unlocked iPhone 12 Pro Max is an wonderful choice if you aren’t sure which wireless carrier you want to sign up with, or if you want to be sure the iPhone 12 Pro Max will work with your current carrier. An unlocked iPhone 12 Pro Max is likewise an incredible phone to buy as a gift since it will work with any carrier or wireless plan that they may have.",
      "What does UpTrade Certified Used mean?":
        "UpTrade Certified means the iPhone 12 Pro Max you buy will work and function just like new. Among hundreds of used phone and gadget sellers, we have chosen a modest bunch of reputable resellers and marketplaces that provide high-quality used and refurbished phones. An UpTrade Certified Used iPhone 12 Pro Max means it has passed an in-depth inspection by our Certified Seller.",
      "Do you offer returns on refurbished iPhone 12 Pro Max phones?":
        "Yes! All UpTrade Certified Used Phone Resellers and Marketplaces offer 30-day money-back-guarantee on iPhone 12 Pro Max phones listed here. If you aren’t satisfied with your purchase you may return your iPhone 12 Pro Max to your seller for free for up to 30 days.",
      "Are refurbished iPhones as good as new iPhones?":
        "Many people wonder if a refurbished iPhone is as good as a new iPhone. Typically there’s really no difference between them except for the fact that there may be signs of use (if at all) on a refurbished iPhone. A refurbished iPhone should be fully functional and work just like a new iPhone. All UpTrade Certified Used Phone Resellers process the iPhones through a rigorous inspection so that each iPhone is fully functional and works just like a new iPhone.",
    },
  },
  {
    productName: "iPhone 13",
    productCategoryValueId: 243,
    price: 52400,
    keyword: null,
    productImageUrl:
      "https://d3c745jesl5pj3.cloudfront.net/sell/web/apple-iphone-13_0ca6a448189d48638c7299e4ee362508.jpg",
    brand: "Apple",
    type: null,
    brandCategoryValueId: 10,
    relatedGoods: [
      {
        productId: 1545705413407961088,
        name: "iPhone 13",
        brand: "Apple",
        merchant: "Gazelle",
        brandLogoUrl:
          "https://uptrade-public-static-resources.s3.us-east-2.amazonaws.com/gazelle+logo.png",
        buyUrl:
          "https://buy.gazelle.com/products/iphone-13-128gb-at-t?variant=40465456922677",
        currentPrice: 59900,
        specs: [
          {
            productId: 1545705413407961088,
            key: "CONDITION",
            value: "Excellent",
          },
          {
            productId: 1545705413407961088,
            key: "CARRIER",
            value: "T-Mobile",
          },
          {
            productId: 1545705413407961088,
            key: "STORAGE",
            value: "256GB",
          },
          {
            productId: 1545705413407961088,
            key: "COLOR",
            value: "Midnight",
          },
        ],
      },
      {
        productId: 1545705355635617792,
        name: "iPhone 13",
        brand: "Apple",
        merchant: "Gazelle",
        brandLogoUrl:
          "https://uptrade-public-static-resources.s3.us-east-2.amazonaws.com/gazelle+logo.png",
        buyUrl:
          "https://buy.gazelle.com/products/iphone-13-128gb-at-t?variant=40465457020981",
        currentPrice: 59900,
        specs: [
          {
            productId: 1545705355635617792,
            key: "CONDITION",
            value: "Excellent",
          },
          {
            productId: 1545705355635617792,
            key: "CARRIER",
            value: "T-Mobile",
          },
          {
            productId: 1545705355635617792,
            key: "STORAGE",
            value: "256GB",
          },
          {
            productId: 1545705355635617792,
            key: "COLOR",
            value: "Blue",
          },
        ],
      },
      {
        productId: 1545705413894500352,
        name: "iPhone 13",
        brand: "Apple",
        merchant: "Gazelle",
        brandLogoUrl:
          "https://uptrade-public-static-resources.s3.us-east-2.amazonaws.com/gazelle+logo.png",
        buyUrl:
          "https://buy.gazelle.com/products/iphone-13-128gb-at-t?variant=40465457217589",
        currentPrice: 59900,
        specs: [
          {
            productId: 1545705413894500352,
            key: "CONDITION",
            value: "Excellent",
          },
          {
            productId: 1545705413894500352,
            key: "CARRIER",
            value: "T-Mobile",
          },
          {
            productId: 1545705413894500352,
            key: "STORAGE",
            value: "256GB",
          },
          {
            productId: 1545705413894500352,
            key: "COLOR",
            value: "Red",
          },
        ],
      },
      {
        productId: 1545705358005399552,
        name: "iPhone 13",
        brand: "Apple",
        merchant: "Gazelle",
        brandLogoUrl:
          "https://uptrade-public-static-resources.s3.us-east-2.amazonaws.com/gazelle+logo.png",
        buyUrl:
          "https://buy.gazelle.com/products/iphone-13-128gb-at-t?variant=40465457119285",
        currentPrice: 59900,
        specs: [
          {
            productId: 1545705358005399552,
            key: "CONDITION",
            value: "Excellent",
          },
          {
            productId: 1545705358005399552,
            key: "CARRIER",
            value: "T-Mobile",
          },
          {
            productId: 1545705358005399552,
            key: "STORAGE",
            value: "256GB",
          },
          {
            productId: 1545705358005399552,
            key: "COLOR",
            value: "Pink",
          },
        ],
      },
      {
        productId: 1545705356696776704,
        name: "iPhone 13",
        brand: "Apple",
        merchant: "Gazelle",
        brandLogoUrl:
          "https://uptrade-public-static-resources.s3.us-east-2.amazonaws.com/gazelle+logo.png",
        buyUrl:
          "https://buy.gazelle.com/products/iphone-13-128gb-at-t?variant=40465457053749",
        currentPrice: 60900,
        specs: [
          {
            productId: 1545705356696776704,
            key: "CONDITION",
            value: "Excellent",
          },
          {
            productId: 1545705356696776704,
            key: "CARRIER",
            value: "T-Mobile",
          },
          {
            productId: 1545705356696776704,
            key: "STORAGE",
            value: "256GB",
          },
          {
            productId: 1545705356696776704,
            key: "COLOR",
            value: "Blue",
          },
        ],
      },
    ],
    aboutProduct:
      'The iPhone 13 is the newest generation of iPhone. It comes equipped with the A15 bionic chip, 5G capability, and a 6.1" Super Retina Display. It boasts the biggest camera system upgrade ever between iPhone generations and has a larger battery that will last throughout the day.',
    metaDescription:
      'Certified Used iPhone 13 for sale. All phones have been fully inspected and certified. It functions like new except normal to minimum wear and tear. Great price.  5G connectivity, OLED Display and wireless charging. It comes equipped with the A15 bionic chip, 5G capability, and a 6.1" Super Retina Display. It boasts the biggest camera system upgrade ever between iPhone generations and has a larger battery that will last throughout the day.',
    metaDescCategory:
      "Apple · iPhone · iPhone 13 · iOS · 6.1″ · Facial Recognition · 12 MP front camera · Smartphone · With Wireless Charging",
    qa: {
      "Why buy a refurbished iPhone 13?":
        "I am glad that you asked! A refurbished iPhone 13 is a great opportunity to save when you are looking to purchase your next iPhone. Buying a refurbished iPhone 13 can be an wonderful choice and can net you huge savings, particularly when the cost of a new iPhone 13 is crazy expensive. A refurbished iPhone 13 is completely functional and works very much like a brand new iPhone 13.",
      "What is an unlocked iPhone 13?":
        "You may use an unlocked iPhone 13 with any carrier in the United States. Purchasing an unlocked iPhone 13 is an wonderful choice if you aren’t sure which wireless carrier you want to sign up with, or if you want to be sure the iPhone 13 will work with your current carrier. An unlocked iPhone 13 is likewise an incredible phone to buy as a gift since it will work with any carrier or wireless plan that they may have.",
      "What does UpTrade Certified Used mean?":
        "UpTrade Certified means the iPhone 13 you buy will work and function just like new. Among hundreds of used phone and gadget sellers, we have chosen a modest bunch of reputable resellers and marketplaces that provide high-quality used and refurbished phones. An UpTrade Certified Used iPhone 13 means it has passed an in-depth inspection by our Certified Seller.",
      "Do you offer returns on refurbished iPhone 13 phones?":
        "Yes! All UpTrade Certified Used Phone Resellers and Marketplaces offer 30-day money-back-guarantee on iPhone 13 phones listed here. If you aren’t satisfied with your purchase you may return your iPhone 13 to your seller for free for up to 30 days.",
      "Are refurbished iPhones as good as new iPhones?":
        "Many people wonder if a refurbished iPhone is as good as a new iPhone. Typically there’s really no difference between them except for the fact that there may be signs of use (if at all) on a refurbished iPhone. A refurbished iPhone should be fully functional and work just like a new iPhone. All UpTrade Certified Used Phone Resellers process the iPhones through a rigorous inspection so that each iPhone is fully functional and works just like a new iPhone.",
    },
  },
  {
    productName: "iPhone 13 mini",
    productCategoryValueId: 264,
    price: 46900,
    keyword: null,
    productImageUrl:
      "https://d3c745jesl5pj3.cloudfront.net/sell/web/apple-iphone-13-mini_c272563709184272a34d0952490106c2.jpg",
    brand: "Apple",
    type: null,
    brandCategoryValueId: 10,
    relatedGoods: [
      {
        productId: 1545705671466708992,
        name: "iPhone 13 Mini",
        brand: "Apple",
        merchant: "Gazelle",
        brandLogoUrl:
          "https://uptrade-public-static-resources.s3.us-east-2.amazonaws.com/gazelle+logo.png",
        buyUrl:
          "https://buy.gazelle.com/products/iphone-13-mini-128gb-t-mobile?variant=40465125965877",
        currentPrice: 54400,
        specs: [
          {
            productId: 1545705671466708992,
            key: "CONDITION",
            value: "Excellent",
          },
          {
            productId: 1545705671466708992,
            key: "CARRIER",
            value: "T-Mobile",
          },
          {
            productId: 1545705671466708992,
            key: "STORAGE",
            value: "128GB",
          },
          {
            productId: 1545705671466708992,
            key: "COLOR",
            value: "Red",
          },
        ],
      },
      {
        productId: 1545705340150247424,
        name: "iPhone 13 Mini",
        brand: "Apple",
        merchant: "Gazelle",
        brandLogoUrl:
          "https://uptrade-public-static-resources.s3.us-east-2.amazonaws.com/gazelle+logo.png",
        buyUrl:
          "https://buy.gazelle.com/products/iphone-13-mini-128gb-verizon?variant=40191064309813",
        currentPrice: 54400,
        specs: [
          {
            productId: 1545705340150247424,
            key: "CONDITION",
            value: "Excellent",
          },
          {
            productId: 1545705340150247424,
            key: "CARRIER",
            value: "Unlocked",
          },
          {
            productId: 1545705340150247424,
            key: "STORAGE",
            value: "256GB",
          },
          {
            productId: 1545705340150247424,
            key: "COLOR",
            value: "Blue",
          },
        ],
      },
      {
        productId: 1545705340674535424,
        name: "iPhone 13 Mini",
        brand: "Apple",
        merchant: "Gazelle",
        brandLogoUrl:
          "https://uptrade-public-static-resources.s3.us-east-2.amazonaws.com/gazelle+logo.png",
        buyUrl:
          "https://buy.gazelle.com/products/iphone-13-mini-128gb-verizon?variant=40191064506421",
        currentPrice: 54400,
        specs: [
          {
            productId: 1545705340674535424,
            key: "CONDITION",
            value: "Excellent",
          },
          {
            productId: 1545705340674535424,
            key: "CARRIER",
            value: "Unlocked",
          },
          {
            productId: 1545705340674535424,
            key: "STORAGE",
            value: "256GB",
          },
          {
            productId: 1545705340674535424,
            key: "COLOR",
            value: "Red",
          },
        ],
      },
      {
        productId: 1545705336752861184,
        name: "iPhone 13 Mini",
        brand: "Apple",
        merchant: "Gazelle",
        brandLogoUrl:
          "https://uptrade-public-static-resources.s3.us-east-2.amazonaws.com/gazelle+logo.png",
        buyUrl:
          "https://buy.gazelle.com/products/iphone-13-mini-128gb-verizon?variant=40191064113205",
        currentPrice: 54400,
        specs: [
          {
            productId: 1545705336752861184,
            key: "CONDITION",
            value: "Excellent",
          },
          {
            productId: 1545705336752861184,
            key: "CARRIER",
            value: "Unlocked",
          },
          {
            productId: 1545705336752861184,
            key: "STORAGE",
            value: "256GB",
          },
          {
            productId: 1545705336752861184,
            key: "COLOR",
            value: "Pink",
          },
        ],
      },
      {
        productId: 1545705671965831168,
        name: "iPhone 13 Mini",
        brand: "Apple",
        merchant: "Gazelle",
        brandLogoUrl:
          "https://uptrade-public-static-resources.s3.us-east-2.amazonaws.com/gazelle+logo.png",
        buyUrl:
          "https://buy.gazelle.com/products/iphone-13-mini-128gb-t-mobile?variant=40465125998645",
        currentPrice: 56900,
        specs: [
          {
            productId: 1545705671965831168,
            key: "CONDITION",
            value: "Excellent",
          },
          {
            productId: 1545705671965831168,
            key: "CARRIER",
            value: "T-Mobile",
          },
          {
            productId: 1545705671965831168,
            key: "STORAGE",
            value: "128GB",
          },
          {
            productId: 1545705671965831168,
            key: "COLOR",
            value: "Red",
          },
        ],
      },
    ],
    aboutProduct:
      'The new iPhone 13 Mini comes equipped with the innovative A15 bionic chip. Made to fit in the palm of your hand, this compact phone utilizes a 5.4" Super Retina XDR full screen display. The phone features the most advanced dual camera system ever in an iPhone and includes the brand new Cinematic Mode for video recording. Built with a bigger battery than its predecessor, the iPhone 13 Mini offers the newest Apple technology with the peace of mind that your phone will last you all day.',
    metaDescription:
      "Certified Used Apple iPhone 13 Mini. All phones are Fully Inspected, Certified Used, and Fully Functional. Great price.  5G connectivity and wireless charging.",
    metaDescCategory:
      "Apple · iPhone · iPhone 13 Mini · iOS · 5.4″ · Facial Recognition · 12 MP front camera · Smartphone · With Wireless Charging",
    qa: {
      "Why buy a refurbished iPhone 13 Mini?":
        "Why pay more if you are getting the same thing? A refurbished iPhone 13 Mini is fully functional and works exactly like a brand new iPhone 13 Mini, except for minimum to normal wear and tear on the cosmetics of the phone. A refurbished iPhone 13 Mini is a significant saving option when you plan to buy your next iPhone 13 Mini. Buying a refurbished iPhone 13 Mini is a fantastic choice. It will net you significant savings, mainly when a new iPhone 13 Mini costs much more.",
      "What is an unlocked iPhone 13 Mini?":
        "Unlocked means the phone is not locked or limited to any carrier. An unlocked iPhone 13 Mini can be used with any carrier in the United States. If you are unsure whether the phone is compatible with your mobile phone carrier, buying an unlocked phone is the easiest option. An unlocked iPhone 13 Mini is likewise an incredible phone to buy as a gift since it will work with any carrier or wireless plan they may have.",
      "What does UpTrade Certified Used mean?":
        "There are hundreds or even thousands of used phone sellers, but unfortunately, not all are legit. To ensure the quality, we have selected a few reputable resellers and marketplaces that can provide high-quality used and refurbished phones. An UpTrade Certified Used iPhone 13 Mini means it has passed an in-depth inspection by our Certified Seller. UpTrade Certified means the iPhone 13 Mini you buy will work and function exactly like a new one.",
      "Do you offer returns on refurbished iPhone 13 Mini phones?":
        "Sure! The Refurbished iPhone 13 Mini listed here comes with a 30-day return policy from the Sellers. So if you have any problem with your purchase, you may contact the Seller and return it to them for up to 30 days.",
      "Are refurbished iPhones as good as new iPhones?":
        "That’s a good question! Technically, there’s no difference between refurbished and new except that there may be signs of use (if at all) on a refurbished iPhone. All UpTrade Certified Used Phone Sellers process the iPhones through a rigorous inspection. As a result, each iPhone is fully functional and works just like a new iPhone.",
    },
  },
  {
    productName: "iPhone 13 Pro",
    productCategoryValueId: 267,
    price: 69900,
    keyword: null,
    productImageUrl:
      "https://d3c745jesl5pj3.cloudfront.net/sell/web/apple-iphone-13-pro_a7b2a783e09e4600861dcaf21a9605e9.jpg",
    brand: "Apple",
    type: null,
    brandCategoryValueId: 10,
    relatedGoods: [
      {
        productId: 1545705395200487424,
        name: "iPhone 13 Pro",
        brand: "Apple",
        merchant: "Gazelle",
        brandLogoUrl:
          "https://uptrade-public-static-resources.s3.us-east-2.amazonaws.com/gazelle+logo.png",
        buyUrl:
          "https://buy.gazelle.com/products/iphone-13-pro-128gb-at-t-1?variant=40408259756085",
        currentPrice: 77400,
        specs: [
          {
            productId: 1545705395200487424,
            key: "CONDITION",
            value: "Excellent",
          },
          {
            productId: 1545705395200487424,
            key: "CARRIER",
            value: "AT&T",
          },
          {
            productId: 1545705395200487424,
            key: "STORAGE",
            value: "128GB",
          },
          {
            productId: 1545705395200487424,
            key: "COLOR",
            value: "Gold",
          },
        ],
      },
      {
        productId: 1545705396332949504,
        name: "iPhone 13 Pro",
        brand: "Apple",
        merchant: "Gazelle",
        brandLogoUrl:
          "https://uptrade-public-static-resources.s3.us-east-2.amazonaws.com/gazelle+logo.png",
        buyUrl:
          "https://buy.gazelle.com/products/iphone-13-pro-128gb-at-t-1?variant=40408259854389",
        currentPrice: 77400,
        specs: [
          {
            productId: 1545705396332949504,
            key: "CONDITION",
            value: "Excellent",
          },
          {
            productId: 1545705396332949504,
            key: "CARRIER",
            value: "AT&T",
          },
          {
            productId: 1545705396332949504,
            key: "STORAGE",
            value: "128GB",
          },
          {
            productId: 1545705396332949504,
            key: "COLOR",
            value: "Silver",
          },
        ],
      },
      {
        productId: 1545705394646839296,
        name: "iPhone 13 Pro",
        brand: "Apple",
        merchant: "Gazelle",
        brandLogoUrl:
          "https://uptrade-public-static-resources.s3.us-east-2.amazonaws.com/gazelle+logo.png",
        buyUrl:
          "https://buy.gazelle.com/products/iphone-13-pro-128gb-at-t-1?variant=40408259690549",
        currentPrice: 79400,
        specs: [
          {
            productId: 1545705394646839296,
            key: "CONDITION",
            value: "Excellent",
          },
          {
            productId: 1545705394646839296,
            key: "CARRIER",
            value: "AT&T",
          },
          {
            productId: 1545705394646839296,
            key: "STORAGE",
            value: "128GB",
          },
          {
            productId: 1545705394646839296,
            key: "COLOR",
            value: "Sierra Blue",
          },
        ],
      },
      {
        productId: 1545705395703803904,
        name: "iPhone 13 Pro",
        brand: "Apple",
        merchant: "Gazelle",
        brandLogoUrl:
          "https://uptrade-public-static-resources.s3.us-east-2.amazonaws.com/gazelle+logo.png",
        buyUrl:
          "https://buy.gazelle.com/products/iphone-13-pro-128gb-at-t-1?variant=40408259821621",
        currentPrice: 82900,
        specs: [
          {
            productId: 1545705395703803904,
            key: "CONDITION",
            value: "Excellent",
          },
          {
            productId: 1545705395703803904,
            key: "CARRIER",
            value: "AT&T",
          },
          {
            productId: 1545705395703803904,
            key: "STORAGE",
            value: "128GB",
          },
          {
            productId: 1545705395703803904,
            key: "COLOR",
            value: "Gold",
          },
        ],
      },
      {
        productId: 1545705396857237504,
        name: "iPhone 13 Pro",
        brand: "Apple",
        merchant: "Gazelle",
        brandLogoUrl:
          "https://uptrade-public-static-resources.s3.us-east-2.amazonaws.com/gazelle+logo.png",
        buyUrl:
          "https://buy.gazelle.com/products/iphone-13-pro-128gb-at-t-1?variant=41016091115573",
        currentPrice: 82900,
        specs: [
          {
            productId: 1545705396857237504,
            key: "CONDITION",
            value: "Excellent",
          },
          {
            productId: 1545705396857237504,
            key: "CARRIER",
            value: "AT&T",
          },
          {
            productId: 1545705396857237504,
            key: "STORAGE",
            value: "128GB",
          },
          {
            productId: 1545705396857237504,
            key: "COLOR",
            value: "Alpine Green",
          },
        ],
      },
    ],
    aboutProduct:
      "The iPhone 13 Pro is the first generation iPhone with a 120 Hz refresh rate. Powered by the A15 bionic chip, this phone offers users the most powerful technology available in an iPhone. New features such as the Cinematic Mode for video recording and Smart Data mode for longer battery life make this phone one of the best on the market.",
    metaDescription:
      "Certified Used Apple iPhone 13 Pro. All phones are Fully Inspected, Certified Used, and Fully Functional. Great price.  5G connectivity, wireless charging and Super Retina XDR display",
    metaDescCategory:
      "Apple · iPhone · iPhone 13 Pro · iOS · 6.1″ · Facial Recognition · 12 MP front camera · 12 MP rear camera · Smartphone · With Wireless Charging",
    qa: {
      "Why buy a refurbished iPhone 13 Pro?":
        "Why pay more if you are getting the same thing? A refurbished iPhone 13 Pro is fully functional and works exactly like a brand new iPhone 13 Pro, except for minimum to normal wear and tear on the cosmetics of the phone. A refurbished iPhone 13 Pro is a significant saving option when you plan to buy your next iPhone 13 Pro. Buying a refurbished iPhone 13 Pro is a fantastic choice. It will net you significant savings, mainly when a new iPhone 13 Pro costs much more.",
      "What is an unlocked iPhone 13 Pro?":
        "Unlocked means the phone is not locked or limited to any carrier. An unlocked iPhone 13 Pro can be used with any carrier in the United States. If you are unsure whether the phone is compatible with your mobile phone carrier, buying an unlocked phone is the easiest option. An unlocked iPhone 13 Pro is likewise an incredible phone to buy as a gift since it will work with any carrier or wireless plan they may have.",
      "What does UpTrade Certified Used mean?":
        "There are hundreds or even thousands of used phone sellers, but unfortunately, not all are legit. To ensure the quality, we have selected a few reputable resellers and marketplaces that can provide high-quality used and refurbished phones. An UpTrade Certified Used iPhone 13 Pro means it has passed an in-depth inspection by our Certified Seller. UpTrade Certified means the iPhone 13 Pro you buy will work and function exactly like a new one.",
      "Do you offer returns on refurbished iPhone 13 Pro phones?":
        "Sure! The Refurbished iPhone 13 Pro listed here comes with a 30-day return policy from the Sellers. So if you have any problem with your purchase, you may contact the Seller and return it to them for up to 30 days.",
      "Are refurbished iPhones as good as new iPhones?":
        "That’s a good question! Technically, there’s no difference between refurbished and new except that there may be signs of use (if at all) on a refurbished iPhone. All UpTrade Certified Used Phone Sellers process the iPhones through a rigorous inspection. As a result, each iPhone is fully functional and works just like a new iPhone.",
    },
  },
  {
    productName: "iPhone 13 Pro Max",
    productCategoryValueId: 255,
    price: 76400,
    keyword: null,
    productImageUrl:
      "https://d3c745jesl5pj3.cloudfront.net/sell/web/apple-iphone-13-pro-max_d01943204002472aa561cb7c555c3333.jpg",
    brand: "Apple",
    type: null,
    brandCategoryValueId: 10,
    relatedGoods: [
      {
        productId: 1545705650973339648,
        name: "iPhone 13 Pro Max",
        brand: "Apple",
        merchant: "Gazelle",
        brandLogoUrl:
          "https://uptrade-public-static-resources.s3.us-east-2.amazonaws.com/gazelle+logo.png",
        buyUrl:
          "https://buy.gazelle.com/products/iphone-13-pro-max-128gb-at-t?variant=40191201443893",
        currentPrice: 86900,
        specs: [
          {
            productId: 1545705650973339648,
            key: "CONDITION",
            value: "Excellent",
          },
          {
            productId: 1545705650973339648,
            key: "CARRIER",
            value: "AT&T",
          },
          {
            productId: 1545705650973339648,
            key: "STORAGE",
            value: "128GB",
          },
          {
            productId: 1545705650973339648,
            key: "COLOR",
            value: "Gold",
          },
        ],
      },
      {
        productId: 1545705652462317568,
        name: "iPhone 13 Pro Max",
        brand: "Apple",
        merchant: "Gazelle",
        brandLogoUrl:
          "https://uptrade-public-static-resources.s3.us-east-2.amazonaws.com/gazelle+logo.png",
        buyUrl:
          "https://buy.gazelle.com/products/iphone-13-pro-max-128gb-at-t?variant=40191201542197",
        currentPrice: 86900,
        specs: [
          {
            productId: 1545705652462317568,
            key: "CONDITION",
            value: "Excellent",
          },
          {
            productId: 1545705652462317568,
            key: "CARRIER",
            value: "AT&T",
          },
          {
            productId: 1545705652462317568,
            key: "STORAGE",
            value: "128GB",
          },
          {
            productId: 1545705652462317568,
            key: "COLOR",
            value: "Silver",
          },
        ],
      },
      {
        productId: 1545705651451490304,
        name: "iPhone 13 Pro Max",
        brand: "Apple",
        merchant: "Gazelle",
        brandLogoUrl:
          "https://uptrade-public-static-resources.s3.us-east-2.amazonaws.com/gazelle+logo.png",
        buyUrl:
          "https://buy.gazelle.com/products/iphone-13-pro-max-128gb-at-t?variant=40191201476661",
        currentPrice: 87400,
        specs: [
          {
            productId: 1545705651451490304,
            key: "CONDITION",
            value: "Excellent",
          },
          {
            productId: 1545705651451490304,
            key: "CARRIER",
            value: "AT&T",
          },
          {
            productId: 1545705651451490304,
            key: "STORAGE",
            value: "128GB",
          },
          {
            productId: 1545705651451490304,
            key: "COLOR",
            value: "Gold",
          },
        ],
      },
      {
        productId: 1545705650017038336,
        name: "iPhone 13 Pro Max",
        brand: "Apple",
        merchant: "Gazelle",
        brandLogoUrl:
          "https://uptrade-public-static-resources.s3.us-east-2.amazonaws.com/gazelle+logo.png",
        buyUrl:
          "https://buy.gazelle.com/products/iphone-13-pro-max-128gb-at-t?variant=40191201378357",
        currentPrice: 87400,
        specs: [
          {
            productId: 1545705650017038336,
            key: "CONDITION",
            value: "Excellent",
          },
          {
            productId: 1545705650017038336,
            key: "CARRIER",
            value: "AT&T",
          },
          {
            productId: 1545705650017038336,
            key: "STORAGE",
            value: "128GB",
          },
          {
            productId: 1545705650017038336,
            key: "COLOR",
            value: "Sierra Blue",
          },
        ],
      },
      {
        productId: 1545705649027182592,
        name: "iPhone 13 Pro Max",
        brand: "Apple",
        merchant: "Gazelle",
        brandLogoUrl:
          "https://uptrade-public-static-resources.s3.us-east-2.amazonaws.com/gazelle+logo.png",
        buyUrl:
          "https://buy.gazelle.com/products/iphone-13-pro-max-128gb-at-t?variant=40191201247285",
        currentPrice: 87400,
        specs: [
          {
            productId: 1545705649027182592,
            key: "CONDITION",
            value: "Excellent",
          },
          {
            productId: 1545705649027182592,
            key: "CARRIER",
            value: "AT&T",
          },
          {
            productId: 1545705649027182592,
            key: "STORAGE",
            value: "128GB",
          },
          {
            productId: 1545705649027182592,
            key: "COLOR",
            value: "Graphite",
          },
        ],
      },
    ],
    aboutProduct:
      'The iPhone 13 Pro Max boasts an incredible 6.7" Super Retina XDR display with a new 120 Hz refresh rate. Powered by the A15 bionic chip, this is the most advanced iPhone ever created. Innovative camera technology, combined with the new Cinematic Mode for video recording, show incredible advancement from the iPhone 12 generation.',
    metaDescription:
      "Certified Used Apple iPhone 13 Pro Max.  Inspected, Certified, and Fully Functional. Great price. 5G connectivity, wireless charging and Super Retina XDR display.",
    metaDescCategory:
      "Apple · iPhone · iPhone 13 Pro Max · iOS · 6.7″ · Facial Recognition · 12 MP front camera · Smartphone · With Wireless Charging",
    qa: {
      "Why buy a refurbished iPhone 13 Pro Max?":
        "I am glad that you asked! A refurbished iPhone 13 Pro Max is a great opportunity to save when you are looking to purchase your next iPhone. Buying a refurbished iPhone 13 Pro Max can be an wonderful choice and can net you huge savings, particularly when the cost of a new iPhone 13 Pro Max is crazy expensive. A refurbished iPhone 13 Pro Max is completely functional and works very much like a brand new iPhone 13 Pro Max.",
      "What is an unlocked iPhone 13 Pro Max?":
        "You may use an unlocked iPhone 13 Pro Max with any carrier in the United States. Purchasing an unlocked iPhone 13 Pro Max is an wonderful choice if you aren’t sure which wireless carrier you want to sign up with, or if you want to be sure the iPhone 13 Pro Max will work with your current carrier. An unlocked iPhone 13 Pro Max is likewise an incredible phone to buy as a gift since it will work with any carrier or wireless plan that they may have.",
      "What does UpTrade Certified Used mean?":
        "UpTrade Certified means the iPhone 13 Pro Max you buy will work and function just like new. Among hundreds of used phone and gadget sellers, we have chosen a modest bunch of reputable resellers and marketplaces that provide high-quality used and refurbished phones. An UpTrade Certified Used iPhone 13 Pro Max means it has passed an in-depth inspection by our Certified Seller.",
      "Do you offer returns on refurbished iPhone 13 Pro Max phones?":
        "Yes! All UpTrade Certified Used Phone Resellers and Marketplaces offer 30-day money-back-guarantee on iPhone 13 Pro Max phones listed here. If you aren’t satisfied with your purchase you may return your iPhone 13 Pro Max to your seller for free for up to 30 days.",
      "Are refurbished iPhones as good as new iPhones?":
        "Many people wonder if a refurbished iPhone is as good as a new iPhone. Typically there’s really no difference between them except for the fact that there may be signs of use (if at all) on a refurbished iPhone. A refurbished iPhone should be fully functional and work just like a new iPhone. All UpTrade Certified Used Phone Resellers process the iPhones through a rigorous inspection so that each iPhone is fully functional and works just like a new iPhone.",
    },
  },
  {
    productName: "iPhone 6S",
    productCategoryValueId: 252,
    price: 11998,
    keyword: null,
    productImageUrl:
      "https://d3c745jesl5pj3.cloudfront.net/sell/web/iPhone 6S_6049053c5f9d42f08d517bc8f0b4cd05.jpg",
    brand: "Apple",
    type: null,
    brandCategoryValueId: 10,
    relatedGoods: [
      {
        productId: 1545698580567977984,
        name: "iPhone 6S",
        brand: "Apple",
        merchant: "Amazon",
        brandLogoUrl:
          "https://uptrade-public-static-resources.s3.us-east-2.amazonaws.com/amazon+logo.png",
        buyUrl:
          "https://www.amazon.com/Apple-iPhone-GSM-Unlocked-64GB/dp/B07DWJVR3D/ref=sr_1_55?keywords=Apple+iPhone+Verizon+renewed&qid=1657293263&sr=8-55",
        currentPrice: 11999,
        specs: [
          {
            productId: 1545698580567977984,
            key: "CONDITION",
            value: "Excellent",
          },
          {
            productId: 1545698580567977984,
            key: "CARRIER",
            value: "T-Mobile",
          },
          {
            productId: 1545698580567977984,
            key: "STORAGE",
            value: "64GB",
          },
          {
            productId: 1545698580567977984,
            key: "COLOR",
            value: "Space Gray",
          },
        ],
      },
    ],
    aboutProduct:
      "This is a great starter smartphone for someone looking to upgrade from a flip-phone or if you’re buying a first phone for a child or grandchild. It’s sturdy and has all the key components you need--plus a headphone jack--without breaking the bank.",
    metaDescription:
      "Hand inspected Certified Used Apple iPhone 6s with full functionality. Has 3D touch, camera and headphone jack. Great value!",
    metaDescCategory:
      "The Apple iPhone 6S may look similar to some earlier iPhone models, but it sure packs a punch! It debuted Apple’s 3D Touch technology, and also comes fully equipped with a sharper camera, a more durable body and faster processing speeds than any iPhone before it.",
    qa: {
      "Why buy a refurbished iPhone 6S?":
        "A refurbished iPhone 6S functions precisely like a new one. Why pay more? It will save you a lot of money  buying a refurbished iPhone 6S. More importantly, it reduces e-waste and makes our planet a better place. Buying a refurbished iPhone 6S is an excellent choice.",
      "What is an unlocked iPhone 6S?":
        "Most iPhone 6S’s bought from wireless carriers are locked to their network. An unlocked iPhone 6S means the phone has been unlocked and can be used with any carrier in the United States. Choosing an unlocked iPhone 6S is the safest option if you are unsure which carrier you will use. An unlocked iPhone 6S is also a great option as a gift since it will work with any carrier or wireless phone plan they currently have.",
      "What does UpTrade Certified Used mean?":
        "UpTrade Certified means you can trust that your used iPhone 6S will function just as well as a new device. Among hundreds of used phone sellers, we have chosen a modest bunch of reputable sellers and marketplaces that are capable of providing high-quality used and refurbished phones. An UpTrade Certified Used iPhone 6S means it has passed a rigorous inspection and functions like a new one.",
      "Do you offer returns on refurbished iPhone 6S phones?":
        "No worries if you are not 100% satisfied with the device you have received! Each phone is granted a 30-day trial period in which buyers may return the used device to the UpTrade Certified Seller for a refund within the first 30 days.",
      "Are refurbished iPhones as good as new iPhones?":
        "For the most part, there is no definite difference between a new phone and a used one, aside from one previously used by another owner. All used phones listed on UpTrade must pass a rigorous inspection to guarantee quality and product performance. Refurbished devices certified by UpTrade work just as well as new, ordinary store-bought phones.",
    },
  },
  {
    productName: "iPhone 6S Plus",
    productCategoryValueId: 309,
    price: 12500,
    keyword: null,
    productImageUrl:
      "https://d3c745jesl5pj3.cloudfront.net/sell/web/iPhone 6S Plus_13f395ddb0794930bd45255d60f2d9ab.jpg",
    brand: "Apple",
    type: null,
    brandCategoryValueId: 10,
    relatedGoods: [
      {
        productId: 1545705645050982400,
        name: "iPhone 6s Plus",
        brand: "Apple",
        merchant: "Gazelle",
        brandLogoUrl:
          "https://uptrade-public-static-resources.s3.us-east-2.amazonaws.com/gazelle+logo.png",
        buyUrl:
          "https://buy.gazelle.com/collections/iphones/products/iphone-6s-plus-64gb-unlocked?variant=8442007617589",
        currentPrice: 13900,
        specs: [
          {
            productId: 1545705645050982400,
            key: "CONDITION",
            value: "Excellent",
          },
          {
            productId: 1545705645050982400,
            key: "CARRIER",
            value: "Unlocked",
          },
          {
            productId: 1545705645050982400,
            key: "STORAGE",
            value: "64GB",
          },
          {
            productId: 1545705645050982400,
            key: "COLOR",
            value: "Space Gray",
          },
        ],
      },
    ],
    aboutProduct:
      "The iPhone 6S Plus is a great budget option for anyone looking for a phone with a little more than just the basic features. With a mega screen, voice-activated Siri, a pressure-sensitive 3D Touch display, and a high-level camera with image stabilization for professional level photos, there’s a lot to love!",
    metaDescription:
      "Certified Used Apple iPhone 6S Plus, inspected and certified. No shortcuts taken. Excellent camera and smudge-proof coating!",
    metaDescCategory:
      "Apple’s iPhone 6S Plus is a high-functioning and user-friendly phone that’s perfect for anyone looking for a device with lots of functionality at a bargain price. Its 3D touch, vibrant and large display, and easy-to-use camera lend it just the right number of special features while staying classic and intuitive.",
    qa: {
      "Why buy a refurbished iPhone 6S Plus?":
        "A refurbished iPhone 6S Plus functions precisely like a new one. Why pay more? It will save you a lot of money  buying a refurbished iPhone 6S Plus. More importantly, it reduces e-waste and makes our planet a better place. Buying a refurbished iPhone 6S Plus is an excellent choice.",
      "What is an unlocked iPhone 6S Plus?":
        "Most iPhone 6S Plus’s bought from wireless carriers are locked to their network. An unlocked iPhone 6S Plus means the phone has been unlocked and can be used with any carrier in the United States. Choosing an unlocked iPhone 6S Plus is the safest option if you are unsure which carrier you will use. An unlocked iPhone 6S Plus is also a great option as a gift since it will work with any carrier or wireless phone plan they currently have.",
      "What does UpTrade Certified Used mean?":
        "UpTrade Certified means you can trust that your used iPhone 6S Plus will function just as well as a new device. Among hundreds of used phone sellers, we have chosen a modest bunch of reputable sellers and marketplaces that are capable of providing high-quality used and refurbished phones. An UpTrade Certified Used iPhone 6S Plus means it has passed a rigorous inspection and functions like a new one.",
      "Do you offer returns on refurbished iPhone 6S Plus phones?":
        "No worries if you are not 100% satisfied with the device you have received! Each phone is granted a 30-day trial period in which buyers may return the used device to the UpTrade Certified Seller for a refund within the first 30 days.",
      "Are refurbished iPhones as good as new iPhones?":
        "For the most part, there is no definite difference between a new phone and a used one, aside from one previously used by another owner. All used phones listed on UpTrade must pass a rigorous inspection to guarantee quality and product performance. Refurbished devices certified by UpTrade work just as well as new, ordinary store-bought phones.",
    },
  },
  {
    productName: "iPhone 7",
    productCategoryValueId: 271,
    price: 10400,
    keyword: null,
    productImageUrl:
      "https://d3c745jesl5pj3.cloudfront.net/sell/web/iPhone 7_80821568f821435ea96ce956887e5f3d.jpg",
    brand: "Apple",
    type: null,
    brandCategoryValueId: 10,
    relatedGoods: [
      {
        productId: 1545705642559565824,
        name: "iPhone 7",
        brand: "Apple",
        merchant: "Gazelle",
        brandLogoUrl:
          "https://uptrade-public-static-resources.s3.us-east-2.amazonaws.com/gazelle+logo.png",
        buyUrl:
          "https://buy.gazelle.com/products/iphone-7-32gb-unlocked?variant=8442088521781",
        currentPrice: 10400,
        specs: [
          {
            productId: 1545705642559565824,
            key: "CONDITION",
            value: "Excellent",
          },
          {
            productId: 1545705642559565824,
            key: "CARRIER",
            value: "Unlocked",
          },
          {
            productId: 1545705642559565824,
            key: "STORAGE",
            value: "32GB",
          },
          {
            productId: 1545705642559565824,
            key: "COLOR",
            value: "Rose Gold",
          },
        ],
      },
      {
        productId: 1545705639577415680,
        name: "iPhone 7",
        brand: "Apple",
        merchant: "Gazelle",
        brandLogoUrl:
          "https://uptrade-public-static-resources.s3.us-east-2.amazonaws.com/gazelle+logo.png",
        buyUrl:
          "https://buy.gazelle.com/products/iphone-7-32gb-t-mobile?variant=8442081706037",
        currentPrice: 10900,
        specs: [
          {
            productId: 1545705639577415680,
            key: "CONDITION",
            value: "Excellent",
          },
          {
            productId: 1545705639577415680,
            key: "CARRIER",
            value: "T-Mobile",
          },
          {
            productId: 1545705639577415680,
            key: "STORAGE",
            value: "32GB",
          },
          {
            productId: 1545705639577415680,
            key: "COLOR",
            value: "Rose Gold",
          },
        ],
      },
      {
        productId: 1545705634762354688,
        name: "iPhone 7",
        brand: "Apple",
        merchant: "Gazelle",
        brandLogoUrl:
          "https://uptrade-public-static-resources.s3.us-east-2.amazonaws.com/gazelle+logo.png",
        buyUrl:
          "https://buy.gazelle.com/products/iphone-7-32gb-at-t?variant=8442032521269",
        currentPrice: 10900,
        specs: [
          {
            productId: 1545705634762354688,
            key: "CONDITION",
            value: "Excellent",
          },
          {
            productId: 1545705634762354688,
            key: "CARRIER",
            value: "AT&T",
          },
          {
            productId: 1545705634762354688,
            key: "STORAGE",
            value: "32GB",
          },
          {
            productId: 1545705634762354688,
            key: "COLOR",
            value: "Rose Gold",
          },
        ],
      },
      {
        productId: 1545705639036350464,
        name: "iPhone 7",
        brand: "Apple",
        merchant: "Gazelle",
        brandLogoUrl:
          "https://uptrade-public-static-resources.s3.us-east-2.amazonaws.com/gazelle+logo.png",
        buyUrl:
          "https://buy.gazelle.com/products/iphone-7-32gb-t-mobile?variant=8442081607733",
        currentPrice: 10900,
        specs: [
          {
            productId: 1545705639036350464,
            key: "CONDITION",
            value: "Excellent",
          },
          {
            productId: 1545705639036350464,
            key: "CARRIER",
            value: "T-Mobile",
          },
          {
            productId: 1545705639036350464,
            key: "STORAGE",
            value: "32GB",
          },
          {
            productId: 1545705639036350464,
            key: "COLOR",
            value: "Gold",
          },
        ],
      },
      {
        productId: 1545705636192612352,
        name: "iPhone 7",
        brand: "Apple",
        merchant: "Gazelle",
        brandLogoUrl:
          "https://uptrade-public-static-resources.s3.us-east-2.amazonaws.com/gazelle+logo.png",
        buyUrl:
          "https://buy.gazelle.com/products/iphone-7-32gb-at-t?variant=8442032619573",
        currentPrice: 10900,
        specs: [
          {
            productId: 1545705636192612352,
            key: "CONDITION",
            value: "Excellent",
          },
          {
            productId: 1545705636192612352,
            key: "CARRIER",
            value: "AT&T",
          },
          {
            productId: 1545705636192612352,
            key: "STORAGE",
            value: "32GB",
          },
          {
            productId: 1545705636192612352,
            key: "COLOR",
            value: "Silver",
          },
        ],
      },
    ],
    aboutProduct:
      "Apple’s iPhone 7 has some great new features but will also be intuitive and recognizable for Apple users. Compared to an iPhone 6s, the 7 has a faster processor, higher resolution front-facing camera, more storage and better battery capacity. It’s also now water resistant!",
    metaDescription:
      "Fully functional Certified Used Apple iPhone 7. Inspected by Certified Used and Refurbishment Sellers. Retina HD display, Touch ID, water & dust resistant.",
    metaDescCategory:
      "The Apple iPhone 7 is an ideal phone for someone looking for above-average features at a discount price. It has longer battery life, a better camera and faster processing than previous generations of the iPhone, and it offers water resistance and greater memory for photos and apps. What’s not to love?",
    qa: {
      "Why buy a refurbished iPhone 7?":
        "A refurbished iPhone 7 is a great way to save money, and at UpTrade that means you get up to 70% off the retail price. Purchasing a certified refurbished iPhone 7 at low prices net you a huge savings, especially when the cost of the newest iPhone can exceed $1,000. A certified refurbished iPhone 7 will be fully functional and work the same as a brand new iPhone 7.",
      "What is an unlocked iPhone 7?":
        "An unlocked iPhone 7 means that it will work with any carrier. Buying an unlocked iPhone 7 is the way to go if you don’t have a carrier or if you want to be sure it works with your current carrier. Unlocked iPhones are also great gifts since they work with any carrier.",
      "What does UpTrade Certified Used mean?":
        "UpTrade Certified means the iPhone 7 you buy will work and function just like new. Among hundreds of used phone and gadget sellers, we have chosen a modest bunch of reputable resellers and marketplaces that provide high-quality used and refurbished phones. An UpTrade Certified Used iPhone 7 means it has passed an in-depth inspection by our Certified Seller.",
      "Do you offer returns on refurbished iPhone 7 phones?":
        "No worries if you are not 100% satisfied with the device you have received! Each phone is granted a 30-day trial period in which buyers may return the used device to the UpTrade Certified Seller for a refund within the first 30 days.",
      "Are refurbished iPhones as good as new iPhones?":
        "For the most part, there is no definite difference between a new phone and a used one, aside from one previously used by another owner. All used phones listed on UpTrade must pass a rigorous inspection to guarantee quality and product performance. Refurbished devices certified by UpTrade work just as well as new, ordinary store-bought phones.",
    },
  },
  {
    productName: "iPhone 7 Plus",
    productCategoryValueId: 240,
    price: 12900,
    keyword: null,
    productImageUrl:
      "https://d3c745jesl5pj3.cloudfront.net/sell/web/iPhone 7 Plus_5b68cbe261184786912ac7a161524c43.jpg",
    brand: "Apple",
    type: null,
    brandCategoryValueId: 10,
    relatedGoods: [
      {
        productId: 1545705630790348800,
        name: "iPhone 7 Plus",
        brand: "Apple",
        merchant: "Gazelle",
        brandLogoUrl:
          "https://uptrade-public-static-resources.s3.us-east-2.amazonaws.com/gazelle+logo.png",
        buyUrl:
          "https://buy.gazelle.com/products/iphone-7-plus-32gb-at-t?variant=8442042351669",
        currentPrice: 12900,
        specs: [
          {
            productId: 1545705630790348800,
            key: "CONDITION",
            value: "Excellent",
          },
          {
            productId: 1545705630790348800,
            key: "CARRIER",
            value: "AT&T",
          },
          {
            productId: 1545705630790348800,
            key: "STORAGE",
            value: "128GB",
          },
          {
            productId: 1545705630790348800,
            key: "COLOR",
            value: "Rose Gold",
          },
        ],
      },
      {
        productId: 1545705633306931200,
        name: "iPhone 7 Plus",
        brand: "Apple",
        merchant: "Gazelle",
        brandLogoUrl:
          "https://uptrade-public-static-resources.s3.us-east-2.amazonaws.com/gazelle+logo.png",
        buyUrl:
          "https://buy.gazelle.com/products/iphone-7-plus-32gb-unlocked?variant=8442063519797",
        currentPrice: 13900,
        specs: [
          {
            productId: 1545705633306931200,
            key: "CONDITION",
            value: "Excellent",
          },
          {
            productId: 1545705633306931200,
            key: "CARRIER",
            value: "Unlocked",
          },
          {
            productId: 1545705633306931200,
            key: "STORAGE",
            value: "128GB",
          },
          {
            productId: 1545705633306931200,
            key: "COLOR",
            value: "Rose Gold",
          },
        ],
      },
      {
        productId: 1545705629867601920,
        name: "iPhone 7 Plus",
        brand: "Apple",
        merchant: "Gazelle",
        brandLogoUrl:
          "https://uptrade-public-static-resources.s3.us-east-2.amazonaws.com/gazelle+logo.png",
        buyUrl:
          "https://buy.gazelle.com/products/iphone-7-plus-32gb-at-t?variant=8442042089525",
        currentPrice: 13900,
        specs: [
          {
            productId: 1545705629867601920,
            key: "CONDITION",
            value: "Excellent",
          },
          {
            productId: 1545705629867601920,
            key: "CARRIER",
            value: "AT&T",
          },
          {
            productId: 1545705629867601920,
            key: "STORAGE",
            value: "128GB",
          },
          {
            productId: 1545705629867601920,
            key: "COLOR",
            value: "Black",
          },
        ],
      },
      {
        productId: 1545705632015085568,
        name: "iPhone 7 Plus",
        brand: "Apple",
        merchant: "Gazelle",
        brandLogoUrl:
          "https://uptrade-public-static-resources.s3.us-east-2.amazonaws.com/gazelle+logo.png",
        buyUrl:
          "https://buy.gazelle.com/products/iphone-7-plus-32gb-t-mobile?variant=8442056671285",
        currentPrice: 14900,
        specs: [
          {
            productId: 1545705632015085568,
            key: "CONDITION",
            value: "Excellent",
          },
          {
            productId: 1545705632015085568,
            key: "CARRIER",
            value: "T-Mobile",
          },
          {
            productId: 1545705632015085568,
            key: "STORAGE",
            value: "128GB",
          },
          {
            productId: 1545705632015085568,
            key: "COLOR",
            value: "Rose Gold",
          },
        ],
      },
      {
        productId: 1545705633806053376,
        name: "iPhone 7 Plus",
        brand: "Apple",
        merchant: "Gazelle",
        brandLogoUrl:
          "https://uptrade-public-static-resources.s3.us-east-2.amazonaws.com/gazelle+logo.png",
        buyUrl:
          "https://buy.gazelle.com/products/iphone-7-plus-32gb-unlocked?variant=8442063552565",
        currentPrice: 14900,
        specs: [
          {
            productId: 1545705633806053376,
            key: "CONDITION",
            value: "Excellent",
          },
          {
            productId: 1545705633806053376,
            key: "CARRIER",
            value: "Unlocked",
          },
          {
            productId: 1545705633806053376,
            key: "STORAGE",
            value: "128GB",
          },
          {
            productId: 1545705633806053376,
            key: "COLOR",
            value: "Rose Gold",
          },
        ],
      },
    ],
    aboutProduct:
      "The iPhone 7 Plus is known as “the photographer’s phone” because of its groundbreaking camera quality, two rear cameras and portrait mode that make it easy to take professional-looking photos. This iPhone has more battery power than earlier models, three gigs of RAM, and a Touch ID fingerprint sensor.",
    metaDescription:
      "Certified Used Apple iPhone 7 Plus with large display, Touch ID and portrait mode. Certified fully functional and individually inspected.",
    metaDescCategory:
      "The Apple iPhone 7 Plus is a perfect choice for users looking for many of the same features as the newest generations of iPhones--without the brand-new price points. It has a massive 5.5-inch display, waterproof design, powerful processor, and signature Apple Portrait Mode for the budding photographer.",
    qa: {
      "Why buy a refurbished iPhone 7 Plus?":
        "Good question! A refurbished iPhone 7 Plus from UpTrade saves you tons of money. You can save up to 70% off the retail price. Purchasing a refurbished iPhone 7 Plus at an affordable price is a huge savings when you compare the cost of the latest iPhone, which can exceed $1,000. A refurbished iPhone 7 Plus comes fully functional and works the same as a brand new iPhone 8 Plus.",
      "What is an unlocked iPhone 7 Plus?":
        "An unlocked iPhone 7 Plus means that the phone will work with any carrier. Buying an unlocked iPhone 7 Plus is the smart choice if you don’t have a carrier or if you want to be sure it works with your current carrier. Unlocked iPhones are also great as gifts since they work with any carrier or service plan.",
      "What does UpTrade Certified Used mean?":
        "UpTrade Certified means the iPhone 7 Plus you buy will work and function just like new. Among hundreds of used phone and gadget sellers, we have chosen a modest bunch of reputable resellers and marketplaces that provide high-quality used and refurbished phones. An UpTrade Certified Used iPhone 7 Plus means it has passed an in-depth inspection by our Certified Seller.",
      "Do you offer returns on refurbished iPhone 7 Plus phones?":
        "Sure! The Refurbished iPhone 7 Plus listed here comes with a 30-day return policy from the Sellers. So if you have any problem with your purchase, you may contact the Seller and return it to them for up to 30 days.",
      "Are refurbished iPhones as good as new iPhones?":
        "That’s a good question! Technically, there’s no difference between refurbished and new except that there may be signs of use (if at all) on a refurbished iPhone. All UpTrade Certified Used Phone Sellers process the iPhones through a rigorous inspection. As a result, each iPhone is fully functional and works just like a new iPhone.",
    },
  },
  {
    productName: "iPhone 8",
    productCategoryValueId: 214,
    price: 8900,
    keyword: null,
    productImageUrl:
      "https://d3c745jesl5pj3.cloudfront.net/sell/web/iPhone 8_1ccc3c022fea475f863fed81aaa7d2dd.jpg",
    brand: "Apple",
    type: null,
    brandCategoryValueId: 10,
    relatedGoods: [
      {
        productId: 1545705620824682496,
        name: "iPhone 8",
        brand: "Apple",
        merchant: "Gazelle",
        brandLogoUrl:
          "https://uptrade-public-static-resources.s3.us-east-2.amazonaws.com/gazelle+logo.png",
        buyUrl:
          "https://buy.gazelle.com/products/iphone-8-64gb-at-t?variant=8442095697973",
        currentPrice: 11400,
        specs: [
          {
            productId: 1545705620824682496,
            key: "CONDITION",
            value: "Excellent",
          },
          {
            productId: 1545705620824682496,
            key: "CARRIER",
            value: "AT&T",
          },
          {
            productId: 1545705620824682496,
            key: "STORAGE",
            value: "64GB",
          },
          {
            productId: 1545705620824682496,
            key: "COLOR",
            value: "Space Gray",
          },
        ],
      },
      {
        productId: 1545705623496454144,
        name: "iPhone 8",
        brand: "Apple",
        merchant: "Gazelle",
        brandLogoUrl:
          "https://uptrade-public-static-resources.s3.us-east-2.amazonaws.com/gazelle+logo.png",
        buyUrl:
          "https://buy.gazelle.com/products/iphone-8-64gb-at-t?variant=12368272785461",
        currentPrice: 11400,
        specs: [
          {
            productId: 1545705623496454144,
            key: "CONDITION",
            value: "Excellent",
          },
          {
            productId: 1545705623496454144,
            key: "CARRIER",
            value: "AT&T",
          },
          {
            productId: 1545705623496454144,
            key: "STORAGE",
            value: "64GB",
          },
          {
            productId: 1545705623496454144,
            key: "COLOR",
            value: "Red",
          },
        ],
      },
      {
        productId: 1545705621382524928,
        name: "iPhone 8",
        brand: "Apple",
        merchant: "Gazelle",
        brandLogoUrl:
          "https://uptrade-public-static-resources.s3.us-east-2.amazonaws.com/gazelle+logo.png",
        buyUrl:
          "https://buy.gazelle.com/products/iphone-8-64gb-at-t?variant=8442095730741",
        currentPrice: 13900,
        specs: [
          {
            productId: 1545705621382524928,
            key: "CONDITION",
            value: "Excellent",
          },
          {
            productId: 1545705621382524928,
            key: "CARRIER",
            value: "AT&T",
          },
          {
            productId: 1545705621382524928,
            key: "STORAGE",
            value: "64GB",
          },
          {
            productId: 1545705621382524928,
            key: "COLOR",
            value: "Space Gray",
          },
        ],
      },
      {
        productId: 1545705622418518016,
        name: "iPhone 8",
        brand: "Apple",
        merchant: "Gazelle",
        brandLogoUrl:
          "https://uptrade-public-static-resources.s3.us-east-2.amazonaws.com/gazelle+logo.png",
        buyUrl:
          "https://buy.gazelle.com/products/iphone-8-64gb-at-t?variant=8442095829045",
        currentPrice: 13900,
        specs: [
          {
            productId: 1545705622418518016,
            key: "CONDITION",
            value: "Excellent",
          },
          {
            productId: 1545705622418518016,
            key: "CARRIER",
            value: "AT&T",
          },
          {
            productId: 1545705622418518016,
            key: "STORAGE",
            value: "64GB",
          },
          {
            productId: 1545705622418518016,
            key: "COLOR",
            value: "Silver",
          },
        ],
      },
      {
        productId: 1545705624016547840,
        name: "iPhone 8",
        brand: "Apple",
        merchant: "Gazelle",
        brandLogoUrl:
          "https://uptrade-public-static-resources.s3.us-east-2.amazonaws.com/gazelle+logo.png",
        buyUrl:
          "https://buy.gazelle.com/products/iphone-8-64gb-t-mobile?variant=8442100842549",
        currentPrice: 14900,
        specs: [
          {
            productId: 1545705624016547840,
            key: "CONDITION",
            value: "Excellent",
          },
          {
            productId: 1545705624016547840,
            key: "CARRIER",
            value: "T-Mobile",
          },
          {
            productId: 1545705624016547840,
            key: "STORAGE",
            value: "64GB",
          },
          {
            productId: 1545705624016547840,
            key: "COLOR",
            value: "Gold",
          },
        ],
      },
    ],
    aboutProduct:
      "The iPhone 8 is the smaller version of the iPhone 8 Plus. The main difference is the screen size at 4.7 inches. They both have the same true tone display, wide color display (P3), and 3D Touch.",
    metaDescription:
      "Fully functional Certified Used Apple iPhone 8, pre-owned at a great price! Provided by Certified UpTrade Sellers.",
    metaDescCategory:
      "The iPhone 8 has a 4.7 inch screen with a true tone display, wide color display (P3), 3D touch, and 625 nits of max brightness. It‘s water resistance is rated IP67 with a maximum depth of 1 meter or 30 minutes.",
    qa: {
      "Why buy a refurbished iPhone 8?":
        "Thanks for asking! A refurbished iPhone 8 is a great way to save money, and at UpTrade that means up to 70% off the retail price. Purchasing a refurbished iPhone 8 at an affordable price will net you a huge savings, especially when the cost of the latest iPhone can exceed $1,000. A refurbished iPhone 8 comes fully functional and works the same as a brand new iPhone 8.",
      "What is an unlocked iPhone 8?":
        "An unlocked iPhone 8 means that the iPhone 8 can be used with any carrier. Buying an unlocked iPhone 8 is the way to go if you don’t have a carrier or if you want to be sure it works with your current carrier. Unlocked iPhones are also great as gifts since they work with any carrier or service plan.",
      "What does UpTrade Certified Used mean?":
        "UpTrade Certified means the iPhone 8 you buy will work and function just like new. Among hundreds of used phone and gadget sellers, we have chosen a modest bunch of reputable resellers and marketplaces that provide high-quality used and refurbished phones. An UpTrade Certified Used iPhone 8 means it has passed an in-depth inspection by our Certified Seller.",
      "Do you offer returns on refurbished iPhone 8 phones?":
        "No worries if you are not 100% satisfied with the device you have received! Each phone is granted a 30-day trial period in which buyers may return the used device to the UpTrade Certified Seller for a refund within the first 30 days.",
      "Are refurbished iPhones as good as new iPhones?":
        "For the most part, there is no definite difference between a new phone and a used one, aside from one previously used by another owner. All used phones listed on UpTrade must pass a rigorous inspection to guarantee quality and product performance. Refurbished devices certified by UpTrade work just as well as new, ordinary store-bought phones.",
    },
  },
  {
    productName: "iPhone 8 Plus",
    productCategoryValueId: 234,
    price: 14400,
    keyword: null,
    productImageUrl:
      "https://d3c745jesl5pj3.cloudfront.net/sell/web/iPhone 8 Plus_685b1832a3044b36b247e9f1a62a3136.jpg",
    brand: "Apple",
    type: null,
    brandCategoryValueId: 10,
    relatedGoods: [
      {
        productId: 1545705619314733056,
        name: "iPhone 8 Plus",
        brand: "Apple",
        merchant: "Gazelle",
        brandLogoUrl:
          "https://uptrade-public-static-resources.s3.us-east-2.amazonaws.com/gazelle+logo.png",
        buyUrl:
          "https://buy.gazelle.com/products/iphone-8-plus-64gb-unlocked?variant=8442099728437",
        currentPrice: 18900,
        specs: [
          {
            productId: 1545705619314733056,
            key: "CONDITION",
            value: "Excellent",
          },
          {
            productId: 1545705619314733056,
            key: "CARRIER",
            value: "Unlocked",
          },
          {
            productId: 1545705619314733056,
            key: "STORAGE",
            value: "64GB",
          },
          {
            productId: 1545705619314733056,
            key: "COLOR",
            value: "Silver",
          },
        ],
      },
      {
        productId: 1545705618333265920,
        name: "iPhone 8 Plus",
        brand: "Apple",
        merchant: "Gazelle",
        brandLogoUrl:
          "https://uptrade-public-static-resources.s3.us-east-2.amazonaws.com/gazelle+logo.png",
        buyUrl:
          "https://buy.gazelle.com/products/iphone-8-plus-64gb-unlocked?variant=8442099630133",
        currentPrice: 18900,
        specs: [
          {
            productId: 1545705618333265920,
            key: "CONDITION",
            value: "Excellent",
          },
          {
            productId: 1545705618333265920,
            key: "CARRIER",
            value: "Unlocked",
          },
          {
            productId: 1545705618333265920,
            key: "STORAGE",
            value: "64GB",
          },
          {
            productId: 1545705618333265920,
            key: "COLOR",
            value: "Space Gray",
          },
        ],
      },
      {
        productId: 1545705619897741312,
        name: "iPhone 8 Plus",
        brand: "Apple",
        merchant: "Gazelle",
        brandLogoUrl:
          "https://uptrade-public-static-resources.s3.us-east-2.amazonaws.com/gazelle+logo.png",
        buyUrl:
          "https://buy.gazelle.com/products/iphone-8-plus-64gb-unlocked?variant=8442099761205",
        currentPrice: 20200,
        specs: [
          {
            productId: 1545705619897741312,
            key: "CONDITION",
            value: "Excellent",
          },
          {
            productId: 1545705619897741312,
            key: "CARRIER",
            value: "Unlocked",
          },
          {
            productId: 1545705619897741312,
            key: "STORAGE",
            value: "64GB",
          },
          {
            productId: 1545705619897741312,
            key: "COLOR",
            value: "Silver",
          },
        ],
      },
      {
        productId: 1545705616882036736,
        name: "iPhone 8 Plus",
        brand: "Apple",
        merchant: "Gazelle",
        brandLogoUrl:
          "https://uptrade-public-static-resources.s3.us-east-2.amazonaws.com/gazelle+logo.png",
        buyUrl:
          "https://buy.gazelle.com/products/iphone-8-plus-64gb-t-mobile?variant=8442098581557",
        currentPrice: 20400,
        specs: [
          {
            productId: 1545705616882036736,
            key: "CONDITION",
            value: "Excellent",
          },
          {
            productId: 1545705616882036736,
            key: "CARRIER",
            value: "T-Mobile",
          },
          {
            productId: 1545705616882036736,
            key: "STORAGE",
            value: "64GB",
          },
          {
            productId: 1545705616882036736,
            key: "COLOR",
            value: "Silver",
          },
        ],
      },
      {
        productId: 1545705615917346816,
        name: "iPhone 8 Plus",
        brand: "Apple",
        merchant: "Gazelle",
        brandLogoUrl:
          "https://uptrade-public-static-resources.s3.us-east-2.amazonaws.com/gazelle+logo.png",
        buyUrl:
          "https://buy.gazelle.com/products/iphone-8-plus-64gb-t-mobile?variant=8442098483253",
        currentPrice: 20400,
        specs: [
          {
            productId: 1545705615917346816,
            key: "CONDITION",
            value: "Excellent",
          },
          {
            productId: 1545705615917346816,
            key: "CARRIER",
            value: "T-Mobile",
          },
          {
            productId: 1545705615917346816,
            key: "STORAGE",
            value: "64GB",
          },
          {
            productId: 1545705615917346816,
            key: "COLOR",
            value: "Space Gray",
          },
        ],
      },
    ],
    aboutProduct:
      "The iPhone 8 Plus is everything you need and more. It has a 5.5” Retina HD display with True Tone (so photos look great) and dual cameras with Portrait Mode and Portrait Lighting, all housed in a glass and aero-space aluminum body, for the most durable and selfie-ready iPhone yet.",
    metaDescription:
      "Fully inspected Certified Used Apple iPhone 8 Plus functional and in good condition. Durable design, sleek body and powerful processor; great for gamers",
    metaDescCategory:
      "The Apple iPhone 8 Plus is a great, feature-filled alternative to the newer--and more expensive--Apple iPhones. For those looking for an upgrade from their previous iPhones but want to keep the familiar home button and other navigation features, this phone is for you. It features a powerful dual camera, fast wireless charging, and a high-end overall design.",
    qa: {
      "Why buy a refurbished iPhone 8 Plus?":
        "Good question! A refurbished iPhone 8 Plus from UpTrade saves you tons of money. You can save up to 70% off the retail price. Purchasing a refurbished iPhone 8 Plus at an affordable price is a huge savings when you compare the cost of the latest iPhone, which can exceed $1,000. A refurbished iPhone 8 Plus comes fully functional and works the same as a brand new iPhone 8 Plus.",
      "What is an unlocked iPhone 8 Plus?":
        "An unlocked iPhone 8 Plus means that the phone will work with any carrier. Buying an unlocked iPhone 8 Plus is the smart choice if you don’t have a carrier or if you want to be sure it works with your current carrier. Unlocked iPhones are also great as gifts since they work with any carrier or service plan.",
      "What does UpTrade Certified Used mean?":
        "UpTrade Certified means the iPhone 8 Plus you buy will work and function just like new. Among hundreds of used phone and gadget sellers, we have chosen a modest bunch of reputable resellers and marketplaces that provide high-quality used and refurbished phones. An UpTrade Certified Used iPhone 8 Plus means it has passed an in-depth inspection by our Certified Seller.",
      "Do you offer returns on refurbished iPhone 8 Plus phones?":
        "Yes! All UpTrade Certified Used Phone Resellers and Marketplaces offer 30-day money-back-guarantee on iPhone 8 Plus phones listed here. If you aren’t satisfied with your purchase you may return your iPhone 8 Plus to your seller for free for up to 30 days.",
      "Are refurbished iPhones as good as new iPhones?":
        "Many people wonder if a refurbished iPhone is as good as a new iPhone. Typically there’s really no difference between them except for the fact that there may be signs of use (if at all) on a refurbished iPhone. A refurbished iPhone should be fully functional and work just like a new iPhone. All UpTrade Certified Used Phone Resellers process the iPhones through a rigorous inspection so that each iPhone is fully functional and works just like a new iPhone.",
    },
  },
  {
    productName: "iPhone SE",
    productCategoryValueId: 208,
    price: 11900,
    keyword: null,
    productImageUrl:
      "https://d3c745jesl5pj3.cloudfront.net/sell/web/iPhone SE_4842e1dab618456aabba283174797777.jpg",
    brand: "Apple",
    type: null,
    brandCategoryValueId: 10,
    relatedGoods: [
      {
        productId: 1545698605578612736,
        name: "iPhone SE",
        brand: "Apple",
        merchant: "Amazon",
        brandLogoUrl:
          "https://uptrade-public-static-resources.s3.us-east-2.amazonaws.com/amazon+logo.png",
        buyUrl:
          "https://www.amazon.com/Apple-iPhone-SE-64GB-White/dp/B088NQSLGN/ref=sr_1_24?keywords=Apple+iPhone+AT%26T+renewed&qid=1657293903&s=electronics&sr=1-24",
        currentPrice: 19250,
        specs: [
          {
            productId: 1545698605578612736,
            key: "CONDITION",
            value: "Excellent",
          },
          {
            productId: 1545698605578612736,
            key: "CARRIER",
            value: "Unlocked",
          },
          {
            productId: 1545698605578612736,
            key: "STORAGE",
            value: "64GB",
          },
          {
            productId: 1545698605578612736,
            key: "COLOR",
            value: "White",
          },
        ],
      },
      {
        productId: 1545698596250480640,
        name: "iPhone SE",
        brand: "Apple",
        merchant: "Amazon",
        brandLogoUrl:
          "https://uptrade-public-static-resources.s3.us-east-2.amazonaws.com/amazon+logo.png",
        buyUrl:
          "https://www.amazon.com/Apple-iPhone-16GB-Rose-Gold/dp/B07ZS239RS/ref=sr_1_122?keywords=Apple+iPhone+Verizon+renewed&qid=1657293586&sr=8-122",
        currentPrice: 19795,
        specs: [
          {
            productId: 1545698596250480640,
            key: "CONDITION",
            value: "Excellent",
          },
          {
            productId: 1545698596250480640,
            key: "CARRIER",
            value: "Sprint",
          },
          {
            productId: 1545698596250480640,
            key: "STORAGE",
            value: "16GB",
          },
          {
            productId: 1545698596250480640,
            key: "COLOR",
            value: "Rose Gold",
          },
        ],
      },
      {
        productId: 1545698552713605120,
        name: "iPhone SE",
        brand: "Apple",
        merchant: "Amazon",
        brandLogoUrl:
          "https://uptrade-public-static-resources.s3.us-east-2.amazonaws.com/amazon+logo.png",
        buyUrl:
          "https://www.amazon.com/Apple-iPhone-Generation-64GB-White/dp/B08R97JN7F/ref=sr_1_26?keywords=Apple+iPhone+Unlocked+renewed&qid=1657292635&sr=8-26&srs=17871142011",
        currentPrice: 31900,
        specs: [
          {
            productId: 1545698552713605120,
            key: "CONDITION",
            value: "Pristine",
          },
          {
            productId: 1545698552713605120,
            key: "CARRIER",
            value: "Unlocked",
          },
          {
            productId: 1545698552713605120,
            key: "STORAGE",
            value: "64GB",
          },
          {
            productId: 1545698552713605120,
            key: "COLOR",
            value: "White",
          },
        ],
      },
    ],
    aboutProduct:
      "The Apple iPhone SE is the perfect first smartphone for anyone looking to have some bells and whistles on a budget. It has full smartphone capabilities like texting, emailing, video chat and web surfing, along with some added features like a high resolution camera for quality photos and videos, a retina display, and fingerprint security.",
    metaDescription:
      "Fully functional and inspected Apple iPhone SE. Great starter smartphone at a great price! Fingerprint ID & high res camera.",
    metaDescCategory:
      "With new smartphones getting larger and heavier, the iPhone SE is one of the last truly single-hand-held devices. If you’re looking for updated features like larger memory, faster processing and a longer-lasting battery, all in a compact design, the Apple iPhone SE is for you!",
    qa: {
      "Why buy a refurbished iPhone SE?":
        "Why pay more if you are getting the same thing? A refurbished iPhone SE is fully functional and works exactly like a brand new iPhone SE, except for minimum to normal wear and tear on the cosmetics of the phone. A refurbished iPhone SE is a significant saving option when you plan to buy your next iPhone SE. Buying a refurbished iPhone SE is a fantastic choice. It will net you significant savings, mainly when a new iPhone SE costs much more.",
      "What is an unlocked iPhone SE?":
        "Unlocked means the phone is not locked or limited to any carrier. An unlocked iPhone SE can be used with any carrier in the United States. If you are unsure whether the phone is compatible with your mobile phone carrier, buying an unlocked phone is the easiest option. An unlocked iPhone SE is likewise an incredible phone to buy as a gift since it will work with any carrier or wireless plan they may have.",
      "What does UpTrade Certified Used mean?":
        "There are hundreds or even thousands of used phone sellers, but unfortunately, not all are legit. To ensure the quality, we have selected a few reputable resellers and marketplaces that can provide high-quality used and refurbished phones. An UpTrade Certified Used iPhone SE means it has passed an in-depth inspection by our Certified Seller. UpTrade Certified means the iPhone SE you buy will work and function exactly like a new one.",
      "Do you offer returns on refurbished iPhone SE phones?":
        "Sure! The Refurbished iPhone SE listed here comes with a 30-day return policy from the Sellers. So if you have any problem with your purchase, you may contact the Seller and return it to them for up to 30 days.",
      "Are refurbished iPhones as good as new iPhones?":
        "That’s a good question! Technically, there’s no difference between refurbished and new except that there may be signs of use (if at all) on a refurbished iPhone. All UpTrade Certified Used Phone Sellers process the iPhones through a rigorous inspection. As a result, each iPhone is fully functional and works just like a new iPhone.",
    },
  },
  {
    productName: "iPhone SE 2nd Gen",
    productCategoryValueId: 334,
    price: 15400,
    keyword: null,
    productImageUrl:
      "https://d3c745jesl5pj3.cloudfront.net/sell/web/iPhone SE 2nd Gen_7b107aba94f448c8a22fc18a8bea1675.jpg",
    brand: "Apple",
    type: null,
    brandCategoryValueId: 10,
    relatedGoods: [
      {
        productId: 1545705541841743872,
        name: "iPhone SE 2nd Gen",
        brand: "Apple",
        merchant: "Gazelle",
        brandLogoUrl:
          "https://uptrade-public-static-resources.s3.us-east-2.amazonaws.com/gazelle+logo.png",
        buyUrl:
          "https://buy.gazelle.com/products/iphone-se-2nd-gen-64gb-at-t-1?variant=32225265614901",
        currentPrice: 15400,
        specs: [
          {
            productId: 1545705541841743872,
            key: "CONDITION",
            value: "Excellent",
          },
          {
            productId: 1545705541841743872,
            key: "CARRIER",
            value: "AT&T",
          },
          {
            productId: 1545705541841743872,
            key: "STORAGE",
            value: "64GB",
          },
          {
            productId: 1545705541841743872,
            key: "COLOR",
            value: "White",
          },
        ],
      },
      {
        productId: 1545705562356084736,
        name: "iPhone SE 2nd Gen",
        brand: "Apple",
        merchant: "Gazelle",
        brandLogoUrl:
          "https://uptrade-public-static-resources.s3.us-east-2.amazonaws.com/gazelle+logo.png",
        buyUrl:
          "https://buy.gazelle.com/products/iphone-se-2nd-gen-64gb-t-mobile-1?variant=32294469500981",
        currentPrice: 15400,
        specs: [
          {
            productId: 1545705562356084736,
            key: "CONDITION",
            value: "Excellent",
          },
          {
            productId: 1545705562356084736,
            key: "CARRIER",
            value: "T-Mobile",
          },
          {
            productId: 1545705562356084736,
            key: "STORAGE",
            value: "128GB",
          },
          {
            productId: 1545705562356084736,
            key: "COLOR",
            value: "Black",
          },
        ],
      },
      {
        productId: 1545705542936457216,
        name: "iPhone SE 2nd Gen",
        brand: "Apple",
        merchant: "Gazelle",
        brandLogoUrl:
          "https://uptrade-public-static-resources.s3.us-east-2.amazonaws.com/gazelle+logo.png",
        buyUrl:
          "https://buy.gazelle.com/products/iphone-se-2nd-gen-64gb-at-t-1?variant=32225265713205",
        currentPrice: 15400,
        specs: [
          {
            productId: 1545705542936457216,
            key: "CONDITION",
            value: "Excellent",
          },
          {
            productId: 1545705542936457216,
            key: "CARRIER",
            value: "AT&T",
          },
          {
            productId: 1545705542936457216,
            key: "STORAGE",
            value: "64GB",
          },
          {
            productId: 1545705542936457216,
            key: "COLOR",
            value: "Red",
          },
        ],
      },
      {
        productId: 1545705541069991936,
        name: "iPhone SE 2nd Gen",
        brand: "Apple",
        merchant: "Gazelle",
        brandLogoUrl:
          "https://uptrade-public-static-resources.s3.us-east-2.amazonaws.com/gazelle+logo.png",
        buyUrl:
          "https://buy.gazelle.com/products/iphone-se-2nd-gen-64gb-at-t-1?variant=32225265549365",
        currentPrice: 17900,
        specs: [
          {
            productId: 1545705541069991936,
            key: "CONDITION",
            value: "Excellent",
          },
          {
            productId: 1545705541069991936,
            key: "CARRIER",
            value: "AT&T",
          },
          {
            productId: 1545705541069991936,
            key: "STORAGE",
            value: "64GB",
          },
          {
            productId: 1545705541069991936,
            key: "COLOR",
            value: "Black",
          },
        ],
      },
      {
        productId: 1545705543599157248,
        name: "iPhone SE 2nd Gen",
        brand: "Apple",
        merchant: "Gazelle",
        brandLogoUrl:
          "https://uptrade-public-static-resources.s3.us-east-2.amazonaws.com/gazelle+logo.png",
        buyUrl:
          "https://buy.gazelle.com/products/iphone-se-2nd-gen-64gb-at-t-1?variant=32225265745973",
        currentPrice: 17900,
        specs: [
          {
            productId: 1545705543599157248,
            key: "CONDITION",
            value: "Excellent",
          },
          {
            productId: 1545705543599157248,
            key: "CARRIER",
            value: "AT&T",
          },
          {
            productId: 1545705543599157248,
            key: "STORAGE",
            value: "64GB",
          },
          {
            productId: 1545705543599157248,
            key: "COLOR",
            value: "Red",
          },
        ],
      },
    ],
    aboutProduct: null,
    metaDescription:
      "Classic layout with modern redesigns like the 12MP Wide camera. Purchase certified pre own and save big.",
    metaDescCategory: null,
    qa: {
      "Why buy a refurbished iPhone SE 2nd Gen (2020)?":
        "A refurbished iPhone SE 2nd Gen (2020) functions precisely like a new one. Why pay more? It will save you a lot of money  buying a refurbished iPhone SE 2nd Gen (2020). More importantly, it reduces e-waste and makes our planet a better place. Buying a refurbished iPhone SE 2nd Gen (2020) is an excellent choice.",
      "What is an unlocked iPhone SE 2nd Gen (2020)?":
        "Most iPhone SE 2nd Gen (2020)’s bought from wireless carriers are locked to their network. An unlocked iPhone SE 2nd Gen (2020) means the phone has been unlocked and can be used with any carrier in the United States. Choosing an unlocked iPhone SE 2nd Gen (2020) is the safest option if you are unsure which carrier you will use. An unlocked iPhone SE 2nd Gen (2020) is also a great option as a gift since it will work with any carrier or wireless phone plan they currently have.",
      "What does UpTrade Certified Used mean?":
        "UpTrade Certified means you can trust that your used iPhone SE 2nd Gen (2020) will function just as well as a new device. Among hundreds of used phone sellers, we have chosen a modest bunch of reputable sellers and marketplaces that are capable of providing high-quality used and refurbished phones. An UpTrade Certified Used iPhone SE 2nd Gen (2020) means it has passed a rigorous inspection and functions like a new one.",
      "Do you offer returns on refurbished iPhone SE 2nd Gen (2020) phones?":
        "No worries if you are not 100% satisfied with the device you have received! Each phone is granted a 30-day trial period in which buyers may return the used device to the UpTrade Certified Seller for a refund within the first 30 days.",
      "Are refurbished iPhones as good as new iPhones?":
        "For the most part, there is no definite difference between a new phone and a used one, aside from one previously used by another owner. All used phones listed on UpTrade must pass a rigorous inspection to guarantee quality and product performance. Refurbished devices certified by UpTrade work just as well as new, ordinary store-bought phones.",
    },
  },
  {
    productName: "iPhone SE 3rd Gen",
    productCategoryValueId: 830,
    price: 37400,
    keyword: null,
    productImageUrl:
      "https://d3c745jesl5pj3.cloudfront.net/sell/web/iPhone SE 3rd Gen_a2dba3649786474eaf374878028fe3df.jpg",
    brand: "Apple",
    type: null,
    brandCategoryValueId: 10,
    relatedGoods: [
      {
        productId: 1545705377018179584,
        name: "iPhone SE 3rd Gen",
        brand: "Apple",
        merchant: "Gazelle",
        brandLogoUrl:
          "https://uptrade-public-static-resources.s3.us-east-2.amazonaws.com/gazelle+logo.png",
        buyUrl:
          "https://buy.gazelle.com/products/iphone-se-3rd-gen-64gb-verizon?variant=41181159850037",
        currentPrice: 37400,
        specs: [
          {
            productId: 1545705377018179584,
            key: "CONDITION",
            value: "Excellent",
          },
          {
            productId: 1545705377018179584,
            key: "CARRIER",
            value: "T-Mobile",
          },
          {
            productId: 1545705377018179584,
            key: "STORAGE",
            value: "128GB",
          },
          {
            productId: 1545705377018179584,
            key: "COLOR",
            value: "White",
          },
        ],
      },
      {
        productId: 1545705378591043584,
        name: "iPhone SE 3rd Gen",
        brand: "Apple",
        merchant: "Gazelle",
        brandLogoUrl:
          "https://uptrade-public-static-resources.s3.us-east-2.amazonaws.com/gazelle+logo.png",
        buyUrl:
          "https://buy.gazelle.com/products/iphone-se-3rd-gen-64gb-verizon?variant=41181159948341",
        currentPrice: 37400,
        specs: [
          {
            productId: 1545705378591043584,
            key: "CONDITION",
            value: "Excellent",
          },
          {
            productId: 1545705378591043584,
            key: "CARRIER",
            value: "T-Mobile",
          },
          {
            productId: 1545705378591043584,
            key: "STORAGE",
            value: "128GB",
          },
          {
            productId: 1545705378591043584,
            key: "COLOR",
            value: "Red",
          },
        ],
      },
      {
        productId: 1545705378133864448,
        name: "iPhone SE 3rd Gen",
        brand: "Apple",
        merchant: "Gazelle",
        brandLogoUrl:
          "https://uptrade-public-static-resources.s3.us-east-2.amazonaws.com/gazelle+logo.png",
        buyUrl:
          "https://buy.gazelle.com/products/iphone-se-3rd-gen-64gb-verizon?variant=41181159882805",
        currentPrice: 39400,
        specs: [
          {
            productId: 1545705378133864448,
            key: "CONDITION",
            value: "Excellent",
          },
          {
            productId: 1545705378133864448,
            key: "CARRIER",
            value: "T-Mobile",
          },
          {
            productId: 1545705378133864448,
            key: "STORAGE",
            value: "128GB",
          },
          {
            productId: 1545705378133864448,
            key: "COLOR",
            value: "White",
          },
        ],
      },
      {
        productId: 1545705646976167936,
        name: "iPhone SE 3rd Gen",
        brand: "Apple",
        merchant: "Gazelle",
        brandLogoUrl:
          "https://uptrade-public-static-resources.s3.us-east-2.amazonaws.com/gazelle+logo.png",
        buyUrl:
          "https://buy.gazelle.com/products/iphone-se-3rd-gen-256gb-unlocked-1?variant=41174236856373",
        currentPrice: 53400,
        specs: [
          {
            productId: 1545705646976167936,
            key: "CONDITION",
            value: "Excellent",
          },
          {
            productId: 1545705646976167936,
            key: "CARRIER",
            value: "Verizon",
          },
          {
            productId: 1545705646976167936,
            key: "STORAGE",
            value: "256GB",
          },
          {
            productId: 1545705646976167936,
            key: "COLOR",
            value: "Black",
          },
        ],
      },
      {
        productId: 1545705647483678720,
        name: "iPhone SE 3rd Gen",
        brand: "Apple",
        merchant: "Gazelle",
        brandLogoUrl:
          "https://uptrade-public-static-resources.s3.us-east-2.amazonaws.com/gazelle+logo.png",
        buyUrl:
          "https://buy.gazelle.com/products/iphone-se-3rd-gen-256gb-unlocked-1?variant=41174237052981",
        currentPrice: 53400,
        specs: [
          {
            productId: 1545705647483678720,
            key: "CONDITION",
            value: "Excellent",
          },
          {
            productId: 1545705647483678720,
            key: "CARRIER",
            value: "Verizon",
          },
          {
            productId: 1545705647483678720,
            key: "STORAGE",
            value: "256GB",
          },
          {
            productId: 1545705647483678720,
            key: "COLOR",
            value: "Red",
          },
        ],
      },
    ],
    aboutProduct: null,
    metaDescription:
      "Classic design with modern upgrades like the Retina HD Display. Buy used and save.",
    metaDescCategory: null,
    qa: {
      "Why buy a refurbished iPhone SE 3rd Gen (2022)?":
        "I am glad that you asked! A refurbished iPhone SE 3rd Gen (2022) is a great opportunity to save when you are looking to purchase your next iPhone. Buying a refurbished iPhone SE 3rd Gen (2022) can be an wonderful choice and can net you huge savings, particularly when the cost of a new iPhone SE 3rd Gen (2022) is crazy expensive. A refurbished iPhone SE 3rd Gen (2022) is completely functional and works very much like a brand new iPhone SE 3rd Gen (2022).",
      "What is an unlocked iPhone SE 3rd Gen (2022)?":
        "You may use an unlocked iPhone SE 3rd Gen (2022) with any carrier in the United States. Purchasing an unlocked iPhone SE 3rd Gen (2022) is an wonderful choice if you aren’t sure which wireless carrier you want to sign up with, or if you want to be sure the iPhone SE 3rd Gen (2022) will work with your current carrier. An unlocked iPhone SE 3rd Gen (2022) is likewise an incredible phone to buy as a gift since it will work with any carrier or wireless plan that they may have.",
      "What does UpTrade Certified Used mean?":
        "UpTrade Certified means the iPhone SE 3rd Gen (2022) you buy will work and function just like new. Among hundreds of used phone and gadget sellers, we have chosen a modest bunch of reputable resellers and marketplaces that provide high-quality used and refurbished phones. An UpTrade Certified Used iPhone SE 3rd Gen (2022) means it has passed an in-depth inspection by our Certified Seller.",
      "Do you offer returns on refurbished iPhone SE 3rd Gen (2022) phones?":
        "Yes! All UpTrade Certified Used Phone Resellers and Marketplaces offer 30-day money-back-guarantee on iPhone SE 3rd Gen (2022) phones listed here. If you aren’t satisfied with your purchase you may return your iPhone SE 3rd Gen (2022) to your seller for free for up to 30 days.",
      "Are refurbished iPhones as good as new iPhones?":
        "Many people wonder if a refurbished iPhone is as good as a new iPhone. Typically there’s really no difference between them except for the fact that there may be signs of use (if at all) on a refurbished iPhone. A refurbished iPhone should be fully functional and work just like a new iPhone. All UpTrade Certified Used Phone Resellers process the iPhones through a rigorous inspection so that each iPhone is fully functional and works just like a new iPhone.",
    },
  },
  {
    productName: "iPhone X",
    productCategoryValueId: 220,
    price: 19400,
    keyword: null,
    productImageUrl:
      "https://d3c745jesl5pj3.cloudfront.net/sell/web/iPhone X_4da09734176e44a98202a8400a36d044.jpg",
    brand: "Apple",
    type: null,
    brandCategoryValueId: 10,
    relatedGoods: [
      {
        productId: 1545705613954412544,
        name: "iPhone X",
        brand: "Apple",
        merchant: "Gazelle",
        brandLogoUrl:
          "https://uptrade-public-static-resources.s3.us-east-2.amazonaws.com/gazelle+logo.png",
        buyUrl:
          "https://buy.gazelle.com/products/iphone-x-64gb-unlocked?variant=8442115850293",
        currentPrice: 22900,
        specs: [
          {
            productId: 1545705613954412544,
            key: "CONDITION",
            value: "Excellent",
          },
          {
            productId: 1545705613954412544,
            key: "CARRIER",
            value: "Unlocked",
          },
          {
            productId: 1545705613954412544,
            key: "STORAGE",
            value: "64GB",
          },
          {
            productId: 1545705613954412544,
            key: "COLOR",
            value: "Silver",
          },
        ],
      },
      {
        productId: 1545698572049346560,
        name: "iPhone X",
        brand: "Apple",
        merchant: "Amazon",
        brandLogoUrl:
          "https://uptrade-public-static-resources.s3.us-east-2.amazonaws.com/amazon+logo.png",
        buyUrl:
          "https://www.amazon.com/Apple-iPhone-64GB-Silver-T-Mobile/dp/B07RV48RR1/ref=sr_1_27?keywords=Apple+iPhone+Verizon+renewed&qid=1657293017&sr=8-27",
        currentPrice: 23395,
        specs: [
          {
            productId: 1545698572049346560,
            key: "CONDITION",
            value: "Excellent",
          },
          {
            productId: 1545698572049346560,
            key: "CARRIER",
            value: "T-Mobile",
          },
          {
            productId: 1545698572049346560,
            key: "STORAGE",
            value: "64GB",
          },
          {
            productId: 1545698572049346560,
            key: "COLOR",
            value: "Silver",
          },
        ],
      },
      {
        productId: 1545705614445146112,
        name: "iPhone X",
        brand: "Apple",
        merchant: "Gazelle",
        brandLogoUrl:
          "https://uptrade-public-static-resources.s3.us-east-2.amazonaws.com/gazelle+logo.png",
        buyUrl:
          "https://buy.gazelle.com/products/iphone-x-64gb-unlocked?variant=8442115883061",
        currentPrice: 23900,
        specs: [
          {
            productId: 1545705614445146112,
            key: "CONDITION",
            value: "Excellent",
          },
          {
            productId: 1545705614445146112,
            key: "CARRIER",
            value: "Unlocked",
          },
          {
            productId: 1545705614445146112,
            key: "STORAGE",
            value: "64GB",
          },
          {
            productId: 1545705614445146112,
            key: "COLOR",
            value: "Silver",
          },
        ],
      },
      {
        productId: 1545698613111582720,
        name: "iPhone X",
        brand: "Apple",
        merchant: "Amazon",
        brandLogoUrl:
          "https://uptrade-public-static-resources.s3.us-east-2.amazonaws.com/amazon+logo.png",
        buyUrl:
          "https://www.amazon.com/Apple-iPhone-64GB-Space-Gray/dp/B07S5FQ5NQ/ref=sr_1_3?keywords=Apple+iPhone+T-Mobile+renewed&qid=1657294245&s=electronics&sr=1-3",
        currentPrice: 24400,
        specs: [
          {
            productId: 1545698613111582720,
            key: "CONDITION",
            value: "Excellent",
          },
          {
            productId: 1545698613111582720,
            key: "CARRIER",
            value: "T-Mobile",
          },
          {
            productId: 1545698613111582720,
            key: "STORAGE",
            value: "64GB",
          },
          {
            productId: 1545698613111582720,
            key: "COLOR",
            value: "Space Gray",
          },
        ],
      },
      {
        productId: 1545698631042232320,
        name: "iPhone X",
        brand: "Apple",
        merchant: "Amazon",
        brandLogoUrl:
          "https://uptrade-public-static-resources.s3.us-east-2.amazonaws.com/amazon+logo.png",
        buyUrl:
          "https://www.amazon.com/Apple-iPhone-Fully-Unlocked-64GB/dp/B077578W38/ref=sr_1_8?keywords=Apple+iPhone+Xfinity+renewed&qid=1657295038&s=electronics&sr=1-8",
        currentPrice: 25400,
        specs: [
          {
            productId: 1545698631042232320,
            key: "CONDITION",
            value: "Excellent",
          },
          {
            productId: 1545698631042232320,
            key: "CARRIER",
            value: "Unlocked",
          },
          {
            productId: 1545698631042232320,
            key: "STORAGE",
            value: "64GB",
          },
          {
            productId: 1545698631042232320,
            key: "COLOR",
            value: "Space Gray",
          },
        ],
      },
    ],
    aboutProduct:
      "The iPhone X has game-changing new features like a larger, edge-to-edge display with improved resolution, a dual 12-megapixel camera, more RAM, and a stronger battery than ever before. This phone is sure to impress!",
    metaDescription:
      "Certified Used iPhone X: fully functional, hand inspected and certified. 3D camera, facial recognition, edge-to-edge screen and great price!",
    metaDescCategory:
      "The Apple iPhone X is unlike any iPhone before it by offering Touch ID security, a sleek design, a powerful TrueDepth camera and an edge-to-display that re-imagines user. This is the perfect phone for anyone wanting to be on the fore-front of technology while staying on budget.",
    qa: {
      "Why buy a refurbished iPhone X?":
        "What a great question! A certified refurbished iPhone X is an incredible way to save cash when you are hoping to purchase the iPhone X. Purchasing a refurbished iPhone X can be an incredible alternative and can net you huge savings, particularly when the cost of a pristine iPhone X regularly surpasses $1,000. A refurbished iPhone X will be completely functional and work much the same as a new iPhone X.",
      "What is an unlocked iPhone X?":
        "An unlocked iPhone X means that the iPhone X can be used with any service plan or carrier. Buying an unlocked iPhone X is a great option if you don’t have a current carrier or if you want to be sure it works with your current carrier. An unlocked iPhone X is also a great phone to buy as a gift as it will work with any carrier or service plan.",
      "What does UpTrade Certified Used mean?":
        "There are hundreds or even thousands of used phone sellers, but unfortunately, not all are legit. To ensure the quality, we have selected a few reputable resellers and marketplaces that can provide high-quality used and refurbished phones. An UpTrade Certified Used iPhone X means it has passed an in-depth inspection by our Certified Seller. UpTrade Certified means the iPhone X you buy will work and function exactly like a new one.",
      "Do you offer returns on refurbished iPhone X phones?":
        "Sure! The Refurbished iPhone X listed here comes with a 30-day return policy from the Sellers. So if you have any problem with your purchase, you may contact the Seller and return it to them for up to 30 days.",
      "Are refurbished iPhones as good as new iPhones?":
        "That’s a good question! Technically, there’s no difference between refurbished and new except that there may be signs of use (if at all) on a refurbished iPhone. All UpTrade Certified Used Phone Sellers process the iPhones through a rigorous inspection. As a result, each iPhone is fully functional and works just like a new iPhone.",
    },
  },
  {
    productName: "iPhone XR",
    productCategoryValueId: 211,
    price: 15900,
    keyword: null,
    productImageUrl:
      "https://d3c745jesl5pj3.cloudfront.net/sell/web/iPhone XR_lagecy_494bcfc5ce224f93a2c760f6eed9d283.jpg",
    brand: "Apple",
    type: null,
    brandCategoryValueId: 10,
    relatedGoods: [
      {
        productId: 1545705612465434624,
        name: "iPhone XR",
        brand: "Apple",
        merchant: "Gazelle",
        brandLogoUrl:
          "https://uptrade-public-static-resources.s3.us-east-2.amazonaws.com/gazelle+logo.png",
        buyUrl:
          "https://buy.gazelle.com/products/iphone-xr-64gb-t-mobile-1?variant=13061149917237",
        currentPrice: 18400,
        specs: [
          {
            productId: 1545705612465434624,
            key: "CONDITION",
            value: "Excellent",
          },
          {
            productId: 1545705612465434624,
            key: "CARRIER",
            value: "T-Mobile",
          },
          {
            productId: 1545705612465434624,
            key: "STORAGE",
            value: "128GB",
          },
          {
            productId: 1545705612465434624,
            key: "COLOR",
            value: "White",
          },
        ],
      },
      {
        productId: 1545698566814855168,
        name: "iPhone XR",
        brand: "Apple",
        merchant: "Amazon",
        brandLogoUrl:
          "https://uptrade-public-static-resources.s3.us-east-2.amazonaws.com/amazon+logo.png",
        buyUrl:
          "https://www.amazon.com/Apple-iPhone-XR-Fully-Unlocked/dp/B07P6Y7954/ref=sr_1_6?keywords=Apple+iPhone+Verizon+renewed&qid=1657292922&sr=8-6",
        currentPrice: 24000,
        specs: [
          {
            productId: 1545698566814855168,
            key: "CONDITION",
            value: "Excellent",
          },
          {
            productId: 1545698566814855168,
            key: "CARRIER",
            value: "Unlocked",
          },
          {
            productId: 1545698566814855168,
            key: "STORAGE",
            value: "64GB",
          },
          {
            productId: 1545698566814855168,
            key: "COLOR",
            value: "Black",
          },
        ],
      },
      {
        productId: 1545698599203270656,
        name: "iPhone XR",
        brand: "Apple",
        merchant: "Amazon",
        brandLogoUrl:
          "https://uptrade-public-static-resources.s3.us-east-2.amazonaws.com/amazon+logo.png",
        buyUrl:
          "https://www.amazon.com/Apple-iPhone-XR-64GB-Red/dp/B07T1KTPSB/ref=sr_1_1?keywords=Apple+iPhone+AT%26T+renewed&qid=1657293903&s=electronics&sr=1-1",
        currentPrice: 24000,
        specs: [
          {
            productId: 1545698599203270656,
            key: "CONDITION",
            value: "Excellent",
          },
          {
            productId: 1545698599203270656,
            key: "CARRIER",
            value: "AT&T",
          },
          {
            productId: 1545698599203270656,
            key: "STORAGE",
            value: "64GB",
          },
          {
            productId: 1545698599203270656,
            key: "COLOR",
            value: "Red",
          },
        ],
      },
      {
        productId: 1545698630551498752,
        name: "iPhone XR",
        brand: "Apple",
        merchant: "Amazon",
        brandLogoUrl:
          "https://uptrade-public-static-resources.s3.us-east-2.amazonaws.com/amazon+logo.png",
        buyUrl:
          "https://www.amazon.com/Apple-iPhone-XR-Fully-Unlocked/dp/B07P978C2R/ref=sr_1_3?keywords=Apple+iPhone+Xfinity+renewed&qid=1657295038&s=electronics&sr=1-3",
        currentPrice: 24195,
        specs: [
          {
            productId: 1545698630551498752,
            key: "CONDITION",
            value: "Excellent",
          },
          {
            productId: 1545698630551498752,
            key: "CARRIER",
            value: "Unlocked",
          },
          {
            productId: 1545698630551498752,
            key: "STORAGE",
            value: "64GB",
          },
          {
            productId: 1545698630551498752,
            key: "COLOR",
            value: "White",
          },
        ],
      },
      {
        productId: 1545698579666202624,
        name: "iPhone XR",
        brand: "Apple",
        merchant: "Amazon",
        brandLogoUrl:
          "https://uptrade-public-static-resources.s3.us-east-2.amazonaws.com/amazon+logo.png",
        buyUrl:
          "https://www.amazon.com/Apple-iPhone-XR-64GB-Black/dp/B07SZH8X5F/ref=sr_1_53?keywords=Apple+iPhone+Verizon+renewed&qid=1657293263&sr=8-53",
        currentPrice: 25398,
        specs: [
          {
            productId: 1545698579666202624,
            key: "CONDITION",
            value: "Excellent",
          },
          {
            productId: 1545698579666202624,
            key: "CARRIER",
            value: "T-Mobile",
          },
          {
            productId: 1545698579666202624,
            key: "STORAGE",
            value: "64GB",
          },
          {
            productId: 1545698579666202624,
            key: "COLOR",
            value: "Black",
          },
        ],
      },
    ],
    aboutProduct:
      "The iPhone XR offers amazing features on a budget, including a vivid LCD Liquid Retina display that goes all the way to the edge of the screen, one of the best batteries on the market, and a variety of other high-end features you won’t find anywhere else for the price.",
    metaDescription:
      "Certified Used Apple iPhone XR - A classic model of used iPhone. All phones are fully inspected and functions like new. It has amazing features on a budget: Innovative LCD display, Advanced Face ID, Great Cameras, and a variety of other high-end features you won’t find anywhere else for the price.",
    metaDescCategory:
      "For users looking for a great value phone with lots of appealing features, the Apple iPhone XR is the device for you. It boasts updated and powerful software, running on one of the longest-lasting batteries of its generation, and it comes in an array of appealing colors!",
    qa: {
      "Why buy a refurbished iPhone XR?":
        "What a great question! A certified refurbished iPhone XR is an incredible way to save cash when you are hoping to purchase the iPhone XR. Purchasing a refurbished iPhone X can be an incredible alternative and can net you huge savings, particularly when the cost of a pristine iPhone XR regularly surpasses $1,000. A refurbished iPhone XR will be completely functional and work much the same as a new iPhone XR.",
      "What is an unlocked iPhone XR?":
        "An unlocked iPhone XR means that the iPhone XR can be used with any service plan or carrier. Buying an unlocked iPhone XR is a great option if you don’t have a current carrier or if you want to be sure it works with your current carrier. An unlocked iPhone X is also a great phone to buy as a gift as it will work with any carrier or service plan.",
      "What does UpTrade Certified Used mean?":
        "UpTrade Certified means the iPhone XR you buy will work and function just like new. Among hundreds of used phone and gadget sellers, we have chosen a modest bunch of reputable resellers and marketplaces that provide high-quality used and refurbished phones. An UpTrade Certified Used iPhone XR means it has passed an in-depth inspection by our Certified Seller.",
      "Do you offer returns on refurbished iPhone XR phones?":
        "Yes! All UpTrade Certified Used Phone Resellers and Marketplaces offer 30-day money-back-guarantee on iPhone XR phones listed here. If you aren’t satisfied with your purchase you may return your iPhone XR to your seller for free for up to 30 days.",
      "Are refurbished iPhones as good as new iPhones?":
        "Many people wonder if a refurbished iPhone is as good as a new iPhone. Typically there’s really no difference between them except for the fact that there may be signs of use (if at all) on a refurbished iPhone. A refurbished iPhone should be fully functional and work just like a new iPhone. All UpTrade Certified Used Phone Resellers process the iPhones through a rigorous inspection so that each iPhone is fully functional and works just like a new iPhone.",
    },
  },
  {
    productName: "iPhone XS",
    productCategoryValueId: 224,
    price: 18900,
    keyword: null,
    productImageUrl:
      "https://d3c745jesl5pj3.cloudfront.net/sell/web/iPhone XS_bc39aad26804469799cd1eb51032665c.jpg",
    brand: "Apple",
    type: null,
    brandCategoryValueId: 10,
    relatedGoods: [
      {
        productId: 1545705604882132992,
        name: "iPhone XS",
        brand: "Apple",
        merchant: "Gazelle",
        brandLogoUrl:
          "https://uptrade-public-static-resources.s3.us-east-2.amazonaws.com/gazelle+logo.png",
        buyUrl:
          "https://buy.gazelle.com/products/iphone-xs-64gb-at-t-2?variant=13027931488309",
        currentPrice: 24900,
        specs: [
          {
            productId: 1545705604882132992,
            key: "CONDITION",
            value: "Excellent",
          },
          {
            productId: 1545705604882132992,
            key: "CARRIER",
            value: "AT&T",
          },
          {
            productId: 1545705604882132992,
            key: "STORAGE",
            value: "64GB",
          },
          {
            productId: 1545705604882132992,
            key: "COLOR",
            value: "Gold",
          },
        ],
      },
      {
        productId: 1545698541883912192,
        name: "iPhone XS",
        brand: "Apple",
        merchant: "Amazon",
        brandLogoUrl:
          "https://uptrade-public-static-resources.s3.us-east-2.amazonaws.com/amazon+logo.png",
        buyUrl:
          "https://www.amazon.com/Apple-iPhone-64GB-Space-Gray/dp/B07SC58QBW/ref=sr_1_2?keywords=Apple+iPhone+Unlocked+renewed&qid=1657292390&sr=8-2&srs=17871142011",
        currentPrice: 26999,
        specs: [
          {
            productId: 1545698541883912192,
            key: "CONDITION",
            value: "Excellent",
          },
          {
            productId: 1545698541883912192,
            key: "CARRIER",
            value: "Unlocked",
          },
          {
            productId: 1545698541883912192,
            key: "STORAGE",
            value: "64GB",
          },
          {
            productId: 1545698541883912192,
            key: "COLOR",
            value: "Space Gray",
          },
        ],
      },
      {
        productId: 1545705605909737472,
        name: "iPhone XS",
        brand: "Apple",
        merchant: "Gazelle",
        brandLogoUrl:
          "https://uptrade-public-static-resources.s3.us-east-2.amazonaws.com/gazelle+logo.png",
        buyUrl:
          "https://buy.gazelle.com/products/iphone-xs-256gb-at-t-2?variant=12979517620277",
        currentPrice: 28400,
        specs: [
          {
            productId: 1545705605909737472,
            key: "CONDITION",
            value: "Excellent",
          },
          {
            productId: 1545705605909737472,
            key: "CARRIER",
            value: "AT&T",
          },
          {
            productId: 1545705605909737472,
            key: "STORAGE",
            value: "256GB",
          },
          {
            productId: 1545705605909737472,
            key: "COLOR",
            value: "Space Gray",
          },
        ],
      },
      {
        productId: 1545705606425636864,
        name: "iPhone XS",
        brand: "Apple",
        merchant: "Gazelle",
        brandLogoUrl:
          "https://uptrade-public-static-resources.s3.us-east-2.amazonaws.com/gazelle+logo.png",
        buyUrl:
          "https://buy.gazelle.com/products/iphone-xs-256gb-at-t-2?variant=12979520176181",
        currentPrice: 28400,
        specs: [
          {
            productId: 1545705606425636864,
            key: "CONDITION",
            value: "Excellent",
          },
          {
            productId: 1545705606425636864,
            key: "CARRIER",
            value: "AT&T",
          },
          {
            productId: 1545705606425636864,
            key: "STORAGE",
            value: "256GB",
          },
          {
            productId: 1545705606425636864,
            key: "COLOR",
            value: "Gold",
          },
        ],
      },
      {
        productId: 1545698577778765824,
        name: "iPhone XS",
        brand: "Apple",
        merchant: "Amazon",
        brandLogoUrl:
          "https://uptrade-public-static-resources.s3.us-east-2.amazonaws.com/amazon+logo.png",
        buyUrl:
          "https://www.amazon.com/Apple-iPhone-64GB-Space-Gray/dp/B07RV2BDYD/ref=sr_1_47?keywords=Apple+iPhone+Verizon+renewed&qid=1657293148&sr=8-47",
        currentPrice: 28494,
        specs: [
          {
            productId: 1545698577778765824,
            key: "CONDITION",
            value: "Excellent",
          },
          {
            productId: 1545698577778765824,
            key: "CARRIER",
            value: "AT&T",
          },
          {
            productId: 1545698577778765824,
            key: "STORAGE",
            value: "64GB",
          },
          {
            productId: 1545698577778765824,
            key: "COLOR",
            value: "Space Gray",
          },
        ],
      },
    ],
    aboutProduct:
      "If you like living the high life, then the iPhone XS is for you. This is the luxury iPhone option with top of the line everything--dual cameras with better photos in light and dark environments, clearer displays with the industry’s best color accuracy, massive amounts of memory, and Apple’s best processor that ensures everything happens at lightning speeds.",
    metaDescription:
      "Amazing Certified Used Apple iPhone XS at reduced price!All phones are Fully Inspected, Certified Used, and Fully Functional. Best display, dual cameras and powerful processor.",
    metaDescCategory:
      "Building on the iPhone X, the Apple iPhone XS is chock-full of great features and marked improvements. Its outstanding camera, attractive design and display, and top-of-the-line performance make this an excellent phone for any user looking to upgrade.",
    qa: {
      "Why buy a refurbished iPhone XS?":
        "What a great question! A refurbished iPhone XS is a great way to save money when you are looking to buy your next iPhone XS. Buying a refurbished iPhone XS can be a great option and can net you significant savings, especially when the price of a brand new iPhone XS typically exceeds $1,000. Refurbished iPhone XS should be fully functional and work just like a brand new iPhone XS.",
      "What is an unlocked iPhone XS?":
        "An unlocked iPhone XS means that the iPhone XS can be used with a variety of different carriers. Buying an unlocked iPhone XS is a great option if you aren’t sure which carrier you want to sign up with, or if you want to be sure the iPhone XS will work with your current carrier. An unlocked iPhone XS is also a great phone to buy as a gift since it will work with any carrier or service plan they may already have.",
      "What does UpTrade Certified Used mean?":
        "UpTrade Certified means you can trust that your used iPhone XS will function just as well as a new device. Among hundreds of used phone sellers, we have chosen a modest bunch of reputable sellers and marketplaces that are capable of providing high-quality used and refurbished phones. An UpTrade Certified Used iPhone XS means it has passed a rigorous inspection and functions like a new one.",
      "Do you offer returns on refurbished iPhone XS phones?":
        "No worries if you are not 100% satisfied with the device you have received! Each phone is granted a 30-day trial period in which buyers may return the used device to the UpTrade Certified Seller for a refund within the first 30 days.",
      "Are refurbished iPhones as good as new iPhones?":
        "For the most part, there is no definite difference between a new phone and a used one, aside from one previously used by another owner. All used phones listed on UpTrade must pass a rigorous inspection to guarantee quality and product performance. Refurbished devices certified by UpTrade work just as well as new, ordinary store-bought phones.",
    },
  },
  {
    productName: "iPhone XS Max",
    productCategoryValueId: 227,
    price: 21900,
    keyword: null,
    productImageUrl:
      "https://d3c745jesl5pj3.cloudfront.net/sell/web/iPhone XS Max_c6a3bdd4fab848b29db0382e30c5c17e.jpg",
    brand: "Apple",
    type: null,
    brandCategoryValueId: 10,
    relatedGoods: [
      {
        productId: 1545705600603942912,
        name: "iPhone XS Max",
        brand: "Apple",
        merchant: "Gazelle",
        brandLogoUrl:
          "https://uptrade-public-static-resources.s3.us-east-2.amazonaws.com/gazelle+logo.png",
        buyUrl:
          "https://buy.gazelle.com/products/iphone-xs-max-64gb-unlocked-1?variant=12993824161845",
        currentPrice: 30900,
        specs: [
          {
            productId: 1545705600603942912,
            key: "CONDITION",
            value: "Excellent",
          },
          {
            productId: 1545705600603942912,
            key: "CARRIER",
            value: "Unlocked",
          },
          {
            productId: 1545705600603942912,
            key: "STORAGE",
            value: "64GB",
          },
          {
            productId: 1545705600603942912,
            key: "COLOR",
            value: "Gold",
          },
        ],
      },
      {
        productId: 1545705584560730112,
        name: "iPhone XS Max",
        brand: "Apple",
        merchant: "Gazelle",
        brandLogoUrl:
          "https://uptrade-public-static-resources.s3.us-east-2.amazonaws.com/gazelle+logo.png",
        buyUrl:
          "https://buy.gazelle.com/products/iphone-xs-max-64gb-at-t-1?variant=31669903622197",
        currentPrice: 32900,
        specs: [
          {
            productId: 1545705584560730112,
            key: "CONDITION",
            value: "Excellent",
          },
          {
            productId: 1545705584560730112,
            key: "CARRIER",
            value: "AT&T",
          },
          {
            productId: 1545705584560730112,
            key: "STORAGE",
            value: "64GB",
          },
          {
            productId: 1545705584560730112,
            key: "COLOR",
            value: "Gold",
          },
        ],
      },
      {
        productId: 1545705587140227072,
        name: "iPhone XS Max",
        brand: "Apple",
        merchant: "Gazelle",
        brandLogoUrl:
          "https://uptrade-public-static-resources.s3.us-east-2.amazonaws.com/gazelle+logo.png",
        buyUrl:
          "https://buy.gazelle.com/products/iphone-xs-max-256gb-at-t-1?variant=12970044719157",
        currentPrice: 33900,
        specs: [
          {
            productId: 1545705587140227072,
            key: "CONDITION",
            value: "Excellent",
          },
          {
            productId: 1545705587140227072,
            key: "CARRIER",
            value: "AT&T",
          },
          {
            productId: 1545705587140227072,
            key: "STORAGE",
            value: "256GB",
          },
          {
            productId: 1545705587140227072,
            key: "COLOR",
            value: "Silver",
          },
        ],
      },
      {
        productId: 1545705585554780160,
        name: "iPhone XS Max",
        brand: "Apple",
        merchant: "Gazelle",
        brandLogoUrl:
          "https://uptrade-public-static-resources.s3.us-east-2.amazonaws.com/gazelle+logo.png",
        buyUrl:
          "https://buy.gazelle.com/products/iphone-xs-max-256gb-at-t-1?variant=12970044620853",
        currentPrice: 33900,
        specs: [
          {
            productId: 1545705585554780160,
            key: "CONDITION",
            value: "Excellent",
          },
          {
            productId: 1545705585554780160,
            key: "CARRIER",
            value: "AT&T",
          },
          {
            productId: 1545705585554780160,
            key: "STORAGE",
            value: "256GB",
          },
          {
            productId: 1545705585554780160,
            key: "COLOR",
            value: "Gold",
          },
        ],
      },
      {
        productId: 1545705592622182400,
        name: "iPhone XS Max",
        brand: "Apple",
        merchant: "Gazelle",
        brandLogoUrl:
          "https://uptrade-public-static-resources.s3.us-east-2.amazonaws.com/gazelle+logo.png",
        buyUrl:
          "https://buy.gazelle.com/products/iphone-xs-max-256gb-unlocked-2?variant=13028744462389",
        currentPrice: 35400,
        specs: [
          {
            productId: 1545705592622182400,
            key: "CONDITION",
            value: "Excellent",
          },
          {
            productId: 1545705592622182400,
            key: "CARRIER",
            value: "Straight Talk",
          },
          {
            productId: 1545705592622182400,
            key: "STORAGE",
            value: "256GB",
          },
          {
            productId: 1545705592622182400,
            key: "COLOR",
            value: "Gold",
          },
        ],
      },
    ],
    aboutProduct:
      "Gamers will love the high-res graphics and lightning-fast speeds of the iPhone XS Max, and TV and movie watchers will appreciate the larger screen and improved coloring. Praised as the “Best iPhone Ever” by reviewers, the XS Max has an edge-to-edge display, new controls, True Depth Facial Recognition for security, and the largest screen in Apple iPhone history.",
    metaDescription:
      "iPhone XS Max: “Best Apple iPhone Ever” Good pricing, fully functional and certified used. Huge screen, dual cameras and lightning processing.",
    metaDescCategory:
      "The Apple iPhone XS Max is perfect for movie watchers, game players, and anyone who loves a variety of top-of-the-line features. Its powerful functions make it competitive with the newest phones on the market, and at a lower price. It sports a stunning 6.5-inch display, powerful and fast processing and a professional-grade camera.",
    qa: {
      "Why buy a refurbished iPhone XS Max?":
        "A refurbished iPhone XS Max is a great way to save money if you are looking to buy an iPhone XS Max. Buying a refurbished iPhone XS Max is a great way to save money since the price of a brand new iPhone typically exceeds $1,000. A refurbished iPhone XS Max will be fully functional and work just like a brand new iPhone XS Max.",
      "What is an unlocked iPhone XS Max?":
        "An unlocked iPhone XS Max means the iPhone XS Max can be used with any carrier. Buying an unlocked iPhone XS is a great choice if you aren’t sure which carrier you want to use, or if you want to be sure the iPhone XS will work with your current carrier. An unlocked iPhone XS Max is a great phone to buy as a gift since it will work with any carrier or service plan.",
      "What does UpTrade Certified Used mean?":
        "There are hundreds or even thousands of used phone sellers, but unfortunately, not all are legit. To ensure the quality, we have selected a few reputable resellers and marketplaces that can provide high-quality used and refurbished phones. An UpTrade Certified Used iPhone XS Max means it has passed an in-depth inspection by our Certified Seller. UpTrade Certified means the iPhone XS Max you buy will work and function exactly like a new one.",
      "Do you offer returns on refurbished iPhone XS Max phones?":
        "Sure! The Refurbished iPhone XS Max listed here comes with a 30-day return policy from the Sellers. So if you have any problem with your purchase, you may contact the Seller and return it to them for up to 30 days.",
      "Are refurbished iPhones as good as new iPhones?":
        "That’s a good question! Technically, there’s no difference between refurbished and new except that there may be signs of use (if at all) on a refurbished iPhone. All UpTrade Certified Used Phone Sellers process the iPhones through a rigorous inspection. As a result, each iPhone is fully functional and works just like a new iPhone.",
    },
  },
  {
    productName: "LG Aristo",
    productCategoryValueId: 653,
    price: 7800,
    keyword: null,
    productImageUrl:
      "https://d3c745jesl5pj3.cloudfront.net/sell/web/LG Aristo_ba13ebc8ef4c41aca274846a7c78661a.png",
    brand: "LG",
    type: null,
    brandCategoryValueId: 649,
    relatedGoods: [
      {
        productId: 1545698313495670784,
        name: "LG Aristo",
        brand: "LG",
        merchant: "Amazon",
        brandLogoUrl:
          "https://uptrade-public-static-resources.s3.us-east-2.amazonaws.com/amazon+logo.png",
        buyUrl:
          "https://www.amazon.com/LG-LM-K300-Android-Smartphone-Unlocked/dp/B08PPLQB2P/ref=sr_1_2?keywords=LG+Unlocked+renewed&qid=1657213191&sr=8-2&srs=17871142011",
        currentPrice: 9198,
        specs: [
          {
            productId: 1545698313495670784,
            key: "CONDITION",
            value: "Excellent",
          },
          {
            productId: 1545698313495670784,
            key: "CARRIER",
            value: "Unlocked",
          },
          {
            productId: 1545698313495670784,
            key: "STORAGE",
            value: "32GB",
          },
          {
            productId: 1545698313495670784,
            key: "COLOR",
            value: "Silver",
          },
        ],
      },
    ],
    aboutProduct: null,
    metaDescription: null,
    metaDescCategory: null,
    qa: null,
  },
  {
    productName: "LG Aristo 2 Plus",
    productCategoryValueId: 725,
    price: 8999,
    keyword: null,
    productImageUrl:
      "https://d3c745jesl5pj3.cloudfront.net/sell/web/LG Aristo 2 Plus_36db81798a5746aabefd5bb528a0363c.png",
    brand: "LG",
    type: null,
    brandCategoryValueId: 649,
    relatedGoods: [
      {
        productId: 1545698330948169728,
        name: "LG Aristo 2 Plus",
        brand: "LG",
        merchant: "Amazon",
        brandLogoUrl:
          "https://uptrade-public-static-resources.s3.us-east-2.amazonaws.com/amazon+logo.png",
        buyUrl:
          "https://www.amazon.com/LG-Aristo-T-Mobile-Android-Smartphone/dp/B07PB78FLF/ref=sr_1_62?keywords=LG+Unlocked+renewed&qid=1657213773&sr=8-62&srs=17871142011",
        currentPrice: 8999,
        specs: [
          {
            productId: 1545698330948169728,
            key: "CONDITION",
            value: "Excellent",
          },
          {
            productId: 1545698330948169728,
            key: "CARRIER",
            value: "T-Mobile",
          },
          {
            productId: 1545698330948169728,
            key: "STORAGE",
            value: "16GB",
          },
          {
            productId: 1545698330948169728,
            key: "COLOR",
            value: "Blue",
          },
        ],
      },
    ],
    aboutProduct: null,
    metaDescription: null,
    metaDescCategory: null,
    qa: null,
  },
  {
    productName: "LG G6",
    productCategoryValueId: 680,
    price: 9495,
    keyword: null,
    productImageUrl:
      "https://d3c745jesl5pj3.cloudfront.net/sell/web/LG G6_9135744ee65348a79cf45a4f927bd463.jpg",
    brand: "LG",
    type: null,
    brandCategoryValueId: 649,
    relatedGoods: [
      {
        productId: 1545698333506695168,
        name: "LG G6",
        brand: "LG",
        merchant: "Amazon",
        brandLogoUrl:
          "https://uptrade-public-static-resources.s3.us-east-2.amazonaws.com/amazon+logo.png",
        buyUrl:
          "https://www.amazon.com/LG-G6-VS988-Certified-Refurbished/dp/B074HQT41F/ref=sr_1_11?keywords=LG+Verizon+renewed&qid=1657213793&sr=8-11",
        currentPrice: 10500,
        specs: [
          {
            productId: 1545698333506695168,
            key: "CONDITION",
            value: "Excellent",
          },
          {
            productId: 1545698333506695168,
            key: "CARRIER",
            value: "Verizon",
          },
          {
            productId: 1545698333506695168,
            key: "STORAGE",
            value: "32GB",
          },
          {
            productId: 1545698333506695168,
            key: "COLOR",
            value: "Ice Platinum",
          },
        ],
      },
      {
        productId: 1545698323876573184,
        name: "LG G6",
        brand: "LG",
        merchant: "Amazon",
        brandLogoUrl:
          "https://uptrade-public-static-resources.s3.us-east-2.amazonaws.com/amazon+logo.png",
        buyUrl:
          "https://www.amazon.com/LG-H870-Single-32GB-International/dp/B07R7QL3GQ/ref=sr_1_39?keywords=LG+Unlocked+renewed&qid=1657213559&sr=8-39&srs=17871142011",
        currentPrice: 15900,
        specs: [
          {
            productId: 1545698323876573184,
            key: "CONDITION",
            value: "Excellent",
          },
          {
            productId: 1545698323876573184,
            key: "CARRIER",
            value: "Unlocked",
          },
          {
            productId: 1545698323876573184,
            key: "STORAGE",
            value: "32GB",
          },
          {
            productId: 1545698323876573184,
            key: "COLOR",
            value: "Astro Black",
          },
        ],
      },
      {
        productId: 1545698319602577408,
        name: "LG G6",
        brand: "LG",
        merchant: "Amazon",
        brandLogoUrl:
          "https://uptrade-public-static-resources.s3.us-east-2.amazonaws.com/amazon+logo.png",
        buyUrl:
          "https://www.amazon.com/LG-G6-32-GB-US997-Smartphone/dp/B07MVJXQ3H/ref=sr_1_23?keywords=LG+Unlocked+renewed&qid=1657213318&sr=8-23&srs=17871142011",
        currentPrice: 19999,
        specs: [
          {
            productId: 1545698319602577408,
            key: "CONDITION",
            value: "Excellent",
          },
          {
            productId: 1545698319602577408,
            key: "CARRIER",
            value: "Unlocked",
          },
          {
            productId: 1545698319602577408,
            key: "STORAGE",
            value: "32GB",
          },
          {
            productId: 1545698319602577408,
            key: "COLOR",
            value: "Black",
          },
        ],
      },
    ],
    aboutProduct:
      "The LG G6 is a beautiful phone with a vivid and clear display housed in a sleek design. It has the processing power and memory of LG’s newer phones, all at a budget price! If you’re looking for solidity and useful basics in a good-looking phone, the G6 is the choice for you.",
    metaDescription:
      "Available now on Uptrade--LG G6! Sanitized, fully functional, and at a great price! See photos & video for condition. A great smartphone, budget pricing",
    metaDescCategory:
      "If you enjoy the finer things in life, but you usually end up breaking or scratching them, this phone is for you! It has a stand-out design and brilliant screen, but is sturdy and water-proof enough to withstand some wear-and-tear. And it runs on a reliable processor, so you won’t be fighting with glitches or slow speeds.",
    qa: {
      "Why should you buy a used or refurbished LG G6?":
        "I am glad that you asked! A refurbished LG G6 is a great opportunity to save when you are looking to purchase your next phone. Buying a refurbished LG G6 can be an wonderful choice and can net you huge savings, particularly when the cost of a new LG G6 is crazy expensive. A refurbished LG G6 is completely functional and works very much like a brand new LG G6.",
      "What does it mean if the LG G6 is unlocked?":
        "You may use an unlocked LG G6 with any carrier in the United States. Purchasing an unlocked LG G6 is an wonderful choice if you aren’t sure which wireless carrier you want to sign up with, or if you want to be sure the LG G6 will work with your current carrier. An unlocked LG G6 is likewise an incredible phone to buy as a gift since it will work with any carrier or wireless plan that they may have.",
      "What does UpTrade Certified Used mean?":
        "UpTrade Certified means the LG G6 you buy will work and function just like new. Among hundreds of used phone and gadget sellers, we have chosen a modest bunch of reputable resellers and marketplaces that provide high-quality used and refurbished phones. An UpTrade Certified Used LG G6 means it has passed an in-depth inspection by our Certified Seller.",
      "What is the return policy for the Used and Refurbished LG G6?":
        "Yes! All UpTrade Certified Used Phone Resellers and Marketplaces offer 30-day money-back-guarantee on LG G6 phones listed here. If you aren’t satisfied with your purchase you may return your LG G6 to your seller for free for up to 30 days.",
      "Are refurbished Android phones as good as new ones?":
        "Many people wonder if a refurbished Android phone is as good as a new one. Typically there’s really no difference between them except for the fact that there may be signs of use (if at all) on a refurbished phone. A refurbished Android phone should be fully functional and work just like a new Android phone. All UpTrade Certified Used Phone Resellers process the phones through a rigorous inspection so that each phone is fully functional and works just like a new phone.",
    },
  },
  {
    productName: "LG G7",
    productCategoryValueId: 665,
    price: 9900,
    keyword: null,
    productImageUrl:
      "https://d3c745jesl5pj3.cloudfront.net/sell/web/LG G7_a9c58e6c45e2417c958e230e209b527f.png",
    brand: "LG",
    type: null,
    brandCategoryValueId: 649,
    relatedGoods: [
      {
        productId: 1545698335020838912,
        name: "LG G7",
        brand: "LG",
        merchant: "Amazon",
        brandLogoUrl:
          "https://uptrade-public-static-resources.s3.us-east-2.amazonaws.com/amazon+logo.png",
        buyUrl:
          "https://www.amazon.com/LG-G7-ThinQ-Platinum-Renewed/dp/B07KPMBMN8/ref=sr_1_54?keywords=LG+Verizon+renewed&qid=1657214102&sr=8-54",
        currentPrice: 10095,
        specs: [
          {
            productId: 1545698335020838912,
            key: "CONDITION",
            value: "Excellent",
          },
          {
            productId: 1545698335020838912,
            key: "CARRIER",
            value: "Sprint",
          },
          {
            productId: 1545698335020838912,
            key: "STORAGE",
            value: "64GB",
          },
          {
            productId: 1545698335020838912,
            key: "COLOR",
            value: "Platinum Gray",
          },
        ],
      },
      {
        productId: 1545698352204902400,
        name: "LG G7",
        brand: "LG",
        merchant: "Amazon",
        brandLogoUrl:
          "https://uptrade-public-static-resources.s3.us-east-2.amazonaws.com/amazon+logo.png",
        buyUrl:
          "https://www.amazon.com/LG-LM-G710TM-TMobile-Smartphone-Raspberry/dp/B07K1GJGVC/ref=sr_1_4?keywords=LG+T-Mobile+renewed&qid=1657217173&sr=8-4",
        currentPrice: 11400,
        specs: [
          {
            productId: 1545698352204902400,
            key: "CONDITION",
            value: "Excellent",
          },
          {
            productId: 1545698352204902400,
            key: "CARRIER",
            value: "T-Mobile",
          },
          {
            productId: 1545698352204902400,
            key: "STORAGE",
            value: "64GB",
          },
          {
            productId: 1545698352204902400,
            key: "COLOR",
            value: "Raspberry Rose",
          },
        ],
      },
      {
        productId: 1545698315366330368,
        name: "LG G7",
        brand: "LG",
        merchant: "Amazon",
        brandLogoUrl:
          "https://uptrade-public-static-resources.s3.us-east-2.amazonaws.com/amazon+logo.png",
        buyUrl:
          "https://www.amazon.com/LG-Electronics-ThinQ-Factory-Unlocked/dp/B07JMDXXZV/ref=sr_1_8?keywords=LG+Unlocked+renewed&qid=1657213191&sr=8-8&srs=17871142011",
        currentPrice: 12999,
        specs: [
          {
            productId: 1545698315366330368,
            key: "CONDITION",
            value: "Excellent",
          },
          {
            productId: 1545698315366330368,
            key: "CARRIER",
            value: "Unlocked",
          },
          {
            productId: 1545698315366330368,
            key: "STORAGE",
            value: "64GB",
          },
          {
            productId: 1545698315366330368,
            key: "COLOR",
            value: "Aurora Black",
          },
        ],
      },
      {
        productId: 1545698316758839296,
        name: "LG G7",
        brand: "LG",
        merchant: "Amazon",
        brandLogoUrl:
          "https://uptrade-public-static-resources.s3.us-east-2.amazonaws.com/amazon+logo.png",
        buyUrl:
          "https://www.amazon.com/LG-LM-G710TM-TMobile-Smartphone-Platinum/dp/B07M9WNLD7/ref=sr_1_11?keywords=LG+Unlocked+renewed&qid=1657213191&sr=8-11&srs=17871142011",
        currentPrice: 19799,
        specs: [
          {
            productId: 1545698316758839296,
            key: "CONDITION",
            value: "Excellent",
          },
          {
            productId: 1545698316758839296,
            key: "CARRIER",
            value: "T-Mobile",
          },
          {
            productId: 1545698316758839296,
            key: "STORAGE",
            value: "64GB",
          },
          {
            productId: 1545698316758839296,
            key: "COLOR",
            value: "Platinum Gray",
          },
        ],
      },
    ],
    aboutProduct: null,
    metaDescription: null,
    metaDescCategory: null,
    qa: null,
  },
  {
    productName: "LG G8",
    productCategoryValueId: 671,
    price: 14795,
    keyword: null,
    productImageUrl:
      "https://d3c745jesl5pj3.cloudfront.net/sell/web/LG G8_d9b1a096bfe246f2911dcf375d8c4389.png",
    brand: "LG",
    type: null,
    brandCategoryValueId: 649,
    relatedGoods: [
      {
        productId: 1545698331443097600,
        name: "LG G8",
        brand: "LG",
        merchant: "Amazon",
        brandLogoUrl:
          "https://uptrade-public-static-resources.s3.us-east-2.amazonaws.com/amazon+logo.png",
        buyUrl:
          "https://www.amazon.com/LG-G8-ThinQ-Verizon-Renewed/dp/B07Z8897RV/ref=sr_1_1?keywords=LG+Verizon+renewed&qid=1657213793&sr=8-1",
        currentPrice: 15075,
        specs: [
          {
            productId: 1545698331443097600,
            key: "CONDITION",
            value: "Excellent",
          },
          {
            productId: 1545698331443097600,
            key: "CARRIER",
            value: "Verizon",
          },
          {
            productId: 1545698331443097600,
            key: "STORAGE",
            value: "128GB",
          },
          {
            productId: 1545698331443097600,
            key: "COLOR",
            value: "Aurora Black",
          },
        ],
      },
      {
        productId: 1545698336094580736,
        name: "LG G8",
        brand: "LG",
        merchant: "Amazon",
        brandLogoUrl:
          "https://uptrade-public-static-resources.s3.us-east-2.amazonaws.com/amazon+logo.png",
        buyUrl:
          "https://www.amazon.com/LG-G8-ThinQ-T-Mobile-Renewed/dp/B08N5CYNFG/ref=sr_1_120?keywords=LG+Verizon+renewed&qid=1657214525&sr=8-120",
        currentPrice: 18995,
        specs: [
          {
            productId: 1545698336094580736,
            key: "CONDITION",
            value: "Excellent",
          },
          {
            productId: 1545698336094580736,
            key: "CARRIER",
            value: "T-Mobile",
          },
          {
            productId: 1545698336094580736,
            key: "STORAGE",
            value: "128GB",
          },
          {
            productId: 1545698336094580736,
            key: "COLOR",
            value: "Black",
          },
        ],
      },
      {
        productId: 1545698337487089664,
        name: "LG G8",
        brand: "LG",
        merchant: "Amazon",
        brandLogoUrl:
          "https://uptrade-public-static-resources.s3.us-east-2.amazonaws.com/amazon+logo.png",
        buyUrl:
          "https://www.amazon.com/LG-FullVision-Display-Crystal-T-Mobile/dp/B07Y3ZZT7W/ref=sr_1_83?keywords=LG+AT%26T+renewed&qid=1657216363&sr=8-83",
        currentPrice: 19490,
        specs: [
          {
            productId: 1545698337487089664,
            key: "CONDITION",
            value: "Excellent",
          },
          {
            productId: 1545698337487089664,
            key: "CARRIER",
            value: "T-Mobile",
          },
          {
            productId: 1545698337487089664,
            key: "STORAGE",
            value: "128GB",
          },
          {
            productId: 1545698337487089664,
            key: "COLOR",
            value: "Red",
          },
        ],
      },
      {
        productId: 1545698324342140928,
        name: "LG G8",
        brand: "LG",
        merchant: "Amazon",
        brandLogoUrl:
          "https://uptrade-public-static-resources.s3.us-east-2.amazonaws.com/amazon+logo.png",
        buyUrl:
          "https://www.amazon.com/LG-LMG820TM-Android-Smartphone-Unlocked/dp/B08X9F3GHY/ref=sr_1_41?keywords=LG+Unlocked+renewed&qid=1657213559&sr=8-41&srs=17871142011",
        currentPrice: 31999,
        specs: [
          {
            productId: 1545698324342140928,
            key: "CONDITION",
            value: "Excellent",
          },
          {
            productId: 1545698324342140928,
            key: "CARRIER",
            value: "Unlocked",
          },
          {
            productId: 1545698324342140928,
            key: "STORAGE",
            value: "128GB",
          },
          {
            productId: 1545698324342140928,
            key: "COLOR",
            value: "Red",
          },
        ],
      },
    ],
    aboutProduct: null,
    metaDescription: null,
    metaDescCategory: null,
    qa: null,
  },
  {
    productName: "LG G8X",
    productCategoryValueId: 668,
    price: 15299,
    keyword: null,
    productImageUrl:
      "https://d3c745jesl5pj3.cloudfront.net/sell/web/LG G8X_55229822f5034416b7cdcca9ede06b8a.png",
    brand: "LG",
    type: null,
    brandCategoryValueId: 649,
    relatedGoods: [
      {
        productId: 1545698316310048768,
        name: "LG G8X",
        brand: "LG",
        merchant: "Amazon",
        brandLogoUrl:
          "https://uptrade-public-static-resources.s3.us-east-2.amazonaws.com/amazon+logo.png",
        buyUrl:
          "https://www.amazon.com/LG-ThinQ-G850UM-128GB-Unlocked/dp/B0888TJWCW/ref=sr_1_10?keywords=LG+Unlocked+renewed&qid=1657213191&sr=8-10&srs=17871142011",
        currentPrice: 19650,
        specs: [
          {
            productId: 1545698316310048768,
            key: "CONDITION",
            value: "Excellent",
          },
          {
            productId: 1545698316310048768,
            key: "CARRIER",
            value: "Unlocked",
          },
          {
            productId: 1545698316310048768,
            key: "STORAGE",
            value: "128GB",
          },
          {
            productId: 1545698316310048768,
            key: "COLOR",
            value: "Black",
          },
        ],
      },
    ],
    aboutProduct: null,
    metaDescription: null,
    metaDescCategory: null,
    qa: null,
  },
  {
    productName: "LG K10",
    productCategoryValueId: 718,
    price: 9999,
    keyword: null,
    productImageUrl:
      "https://d3c745jesl5pj3.cloudfront.net/sell/web/LG K10_041f67234cae4684a4cbd62714a89b32.png",
    brand: "LG",
    type: null,
    brandCategoryValueId: 649,
    relatedGoods: [
      {
        productId: 1545698326716116992,
        name: "LG K10",
        brand: "LG",
        merchant: "Amazon",
        brandLogoUrl:
          "https://uptrade-public-static-resources.s3.us-east-2.amazonaws.com/amazon+logo.png",
        buyUrl:
          "https://www.amazon.com/LG-Unlocked-Display-Quad-Core-Smartphone/dp/B078NJT1WZ/ref=sr_1_46?keywords=LG+Unlocked+renewed&qid=1657213559&sr=8-46&srs=17871142011",
        currentPrice: 9999,
        specs: [
          {
            productId: 1545698326716116992,
            key: "CONDITION",
            value: "Excellent",
          },
          {
            productId: 1545698326716116992,
            key: "CARRIER",
            value: "Unlocked",
          },
          {
            productId: 1545698326716116992,
            key: "STORAGE",
            value: "16GB",
          },
          {
            productId: 1545698326716116992,
            key: "COLOR",
            value: "Black",
          },
        ],
      },
      {
        productId: 1545698329547272192,
        name: "LG K10",
        brand: "LG",
        merchant: "Amazon",
        brandLogoUrl:
          "https://uptrade-public-static-resources.s3.us-east-2.amazonaws.com/amazon+logo.png",
        buyUrl:
          "https://www.amazon.com/LG-Display-Quad-Core-Smartphone-Camera/dp/B07QY3GQMF/ref=sr_1_58?keywords=LG+Unlocked+renewed&qid=1657213673&sr=8-58&srs=17871142011",
        currentPrice: 9999,
        specs: [
          {
            productId: 1545698329547272192,
            key: "CONDITION",
            value: "Excellent",
          },
          {
            productId: 1545698329547272192,
            key: "CARRIER",
            value: "AT&T",
          },
          {
            productId: 1545698329547272192,
            key: "STORAGE",
            value: "16GB",
          },
          {
            productId: 1545698329547272192,
            key: "COLOR",
            value: "Black",
          },
        ],
      },
    ],
    aboutProduct: null,
    metaDescription: null,
    metaDescCategory: null,
    qa: null,
  },
  {
    productName: "LG K20",
    productCategoryValueId: 677,
    price: 6499,
    keyword: null,
    productImageUrl:
      "https://d3c745jesl5pj3.cloudfront.net/sell/web/LG K20_7025e0a2ac214e789c6bcd22b10f2b80.png",
    brand: "LG",
    type: null,
    brandCategoryValueId: 649,
    relatedGoods: [
      {
        productId: 1545698317245378560,
        name: "LG K20",
        brand: "LG",
        merchant: "Amazon",
        brandLogoUrl:
          "https://uptrade-public-static-resources.s3.us-east-2.amazonaws.com/amazon+logo.png",
        buyUrl:
          "https://www.amazon.com/LG-Android-Nougat-Unlocked-Renewed/dp/B07KSJXD4L/ref=sr_1_12?keywords=LG+Unlocked+renewed&qid=1657213191&sr=8-12&srs=17871142011",
        currentPrice: 7999,
        specs: [
          {
            productId: 1545698317245378560,
            key: "CONDITION",
            value: "Excellent",
          },
          {
            productId: 1545698317245378560,
            key: "CARRIER",
            value: "Unlocked",
          },
          {
            productId: 1545698317245378560,
            key: "STORAGE",
            value: "16GB",
          },
          {
            productId: 1545698317245378560,
            key: "COLOR",
            value: "Black",
          },
        ],
      },
    ],
    aboutProduct: null,
    metaDescription: null,
    metaDescCategory: null,
    qa: null,
  },
  {
    productName: "LG K22",
    productCategoryValueId: 721,
    price: 12899,
    keyword: null,
    productImageUrl:
      "https://d3c745jesl5pj3.cloudfront.net/sell/web/LG K22_845bffc98ce348678bbf750aa9b5f666.png",
    brand: "LG",
    type: null,
    brandCategoryValueId: 649,
    relatedGoods: [
      {
        productId: 1545698326229577728,
        name: "LG K22",
        brand: "LG",
        merchant: "Amazon",
        brandLogoUrl:
          "https://uptrade-public-static-resources.s3.us-east-2.amazonaws.com/amazon+logo.png",
        buyUrl:
          "https://www.amazon.com/LG-Unlocked-Tmobile-Cricket-Android/dp/B0B4XTHV2Z/ref=sr_1_45?keywords=LG+Unlocked+renewed&qid=1657213559&sr=8-45&srs=17871142011",
        currentPrice: 15999,
        specs: [
          {
            productId: 1545698326229577728,
            key: "CONDITION",
            value: "Excellent",
          },
          {
            productId: 1545698326229577728,
            key: "CARRIER",
            value: "Unlocked",
          },
          {
            productId: 1545698326229577728,
            key: "STORAGE",
            value: "32GB",
          },
          {
            productId: 1545698326229577728,
            key: "COLOR",
            value: "Blue",
          },
        ],
      },
    ],
    aboutProduct: null,
    metaDescription: null,
    metaDescCategory: null,
    qa: null,
  },
  {
    productName: "LG K22+",
    productCategoryValueId: 701,
    price: 9999,
    keyword: null,
    productImageUrl:
      "https://d3c745jesl5pj3.cloudfront.net/sell/web/LG K22+_3bb4768953d6489cb21036f0a32c2621.png",
    brand: "LG",
    type: null,
    brandCategoryValueId: 649,
    relatedGoods: [
      {
        productId: 1545698327173296128,
        name: "LG K22+",
        brand: "LG",
        merchant: "Amazon",
        brandLogoUrl:
          "https://uptrade-public-static-resources.s3.us-east-2.amazonaws.com/amazon+logo.png",
        buyUrl:
          "https://www.amazon.com/LG-Unlocked-Tmobile-Cricket-Android/dp/B08RDZDDQP/ref=sr_1_48?keywords=LG+Unlocked+renewed&qid=1657213559&sr=8-48&srs=17871142011",
        currentPrice: 11499,
        specs: [
          {
            productId: 1545698327173296128,
            key: "CONDITION",
            value: "Excellent",
          },
          {
            productId: 1545698327173296128,
            key: "CARRIER",
            value: "Unlocked",
          },
          {
            productId: 1545698327173296128,
            key: "STORAGE",
            value: "64GB",
          },
          {
            productId: 1545698327173296128,
            key: "COLOR",
            value: "Titan",
          },
        ],
      },
      {
        productId: 1545698323423588352,
        name: "LG K22+",
        brand: "LG",
        merchant: "Amazon",
        brandLogoUrl:
          "https://uptrade-public-static-resources.s3.us-east-2.amazonaws.com/amazon+logo.png",
        buyUrl:
          "https://www.amazon.com/LG-Unlocked-T-Mobile-International-LM-K200HAW/dp/B091D5KW44/ref=sr_1_38?keywords=LG+Unlocked+renewed&qid=1657213559&sr=8-38&srs=17871142011",
        currentPrice: 14000,
        specs: [
          {
            productId: 1545698323423588352,
            key: "CONDITION",
            value: "Excellent",
          },
          {
            productId: 1545698323423588352,
            key: "CARRIER",
            value: "Unlocked",
          },
          {
            productId: 1545698323423588352,
            key: "STORAGE",
            value: "64GB",
          },
          {
            productId: 1545698323423588352,
            key: "COLOR",
            value: "Titan",
          },
        ],
      },
    ],
    aboutProduct: null,
    metaDescription: null,
    metaDescCategory: null,
    qa: null,
  },
  {
    productName: "LG K30",
    productCategoryValueId: 698,
    price: 8999,
    keyword: null,
    productImageUrl:
      "https://d3c745jesl5pj3.cloudfront.net/sell/web/LG K30_f5c331bef52c4ceb88592d1b6af7a6c8.png",
    brand: "LG",
    type: null,
    brandCategoryValueId: 649,
    relatedGoods: [
      {
        productId: 1545698336543371264,
        name: "LG K30",
        brand: "LG",
        merchant: "Amazon",
        brandLogoUrl:
          "https://uptrade-public-static-resources.s3.us-east-2.amazonaws.com/amazon+logo.png",
        buyUrl:
          "https://www.amazon.com/LG-LM-x410-Smartphone-TMobile-Android/dp/B07K2K7KY2/ref=sr_1_154?keywords=LG+Verizon+renewed&qid=1657214725&sr=8-154",
        currentPrice: 8999,
        specs: [
          {
            productId: 1545698336543371264,
            key: "CONDITION",
            value: "Excellent",
          },
          {
            productId: 1545698336543371264,
            key: "CARRIER",
            value: "T-Mobile",
          },
          {
            productId: 1545698336543371264,
            key: "STORAGE",
            value: "32GB",
          },
          {
            productId: 1545698336543371264,
            key: "COLOR",
            value: "Black",
          },
        ],
      },
      {
        productId: 1545698322022690816,
        name: "LG K30",
        brand: "LG",
        merchant: "Amazon",
        brandLogoUrl:
          "https://uptrade-public-static-resources.s3.us-east-2.amazonaws.com/amazon+logo.png",
        buyUrl:
          "https://www.amazon.com/Unlocked-LG-K30-16GB-Black/dp/B08HCRWV68/ref=sr_1_33?keywords=LG+Unlocked+renewed&qid=1657213439&sr=8-33&srs=17871142011",
        currentPrice: 9900,
        specs: [
          {
            productId: 1545698322022690816,
            key: "CONDITION",
            value: "Excellent",
          },
          {
            productId: 1545698322022690816,
            key: "CARRIER",
            value: "Unlocked",
          },
          {
            productId: 1545698322022690816,
            key: "STORAGE",
            value: "16GB",
          },
          {
            productId: 1545698322022690816,
            key: "COLOR",
            value: "Black",
          },
        ],
      },
      {
        productId: 1545698322492452864,
        name: "LG K30",
        brand: "LG",
        merchant: "Amazon",
        brandLogoUrl:
          "https://uptrade-public-static-resources.s3.us-east-2.amazonaws.com/amazon+logo.png",
        buyUrl:
          "https://www.amazon.com/LG-VS988-32GB-Ice-Platinum/dp/B07YCTY7FK/ref=sr_1_35?keywords=LG+Unlocked+renewed&qid=1657213439&sr=8-35&srs=17871142011",
        currentPrice: 10495,
        specs: [
          {
            productId: 1545698322492452864,
            key: "CONDITION",
            value: "Excellent",
          },
          {
            productId: 1545698322492452864,
            key: "CARRIER",
            value: "Verizon",
          },
          {
            productId: 1545698322492452864,
            key: "STORAGE",
            value: "32GB",
          },
          {
            productId: 1545698322492452864,
            key: "COLOR",
            value: "Ice Platinum",
          },
        ],
      },
      {
        productId: 1545698526092357632,
        name: "LG K30",
        brand: "LG",
        merchant: "Amazon",
        brandLogoUrl:
          "https://uptrade-public-static-resources.s3.us-east-2.amazonaws.com/amazon+logo.png",
        buyUrl:
          "https://www.amazon.com/LG-Electronics-Factory-Unlocked-Warranty/dp/B07MQGBZW6/ref=sr_1_61?keywords=LG+Unlocked+renewed&qid=1657256554&sr=8-61",
        currentPrice: 12999,
        specs: [
          {
            productId: 1545698526092357632,
            key: "CONDITION",
            value: "Excellent",
          },
          {
            productId: 1545698526092357632,
            key: "CARRIER",
            value: "Unlocked",
          },
          {
            productId: 1545698526092357632,
            key: "STORAGE",
            value: "16GB",
          },
          {
            productId: 1545698526092357632,
            key: "COLOR",
            value: "Black",
          },
        ],
      },
      {
        productId: 1545698325772398592,
        name: "LG K30",
        brand: "LG",
        merchant: "Amazon",
        brandLogoUrl:
          "https://uptrade-public-static-resources.s3.us-east-2.amazonaws.com/amazon+logo.png",
        buyUrl:
          "https://www.amazon.com/LG-H871-Unlocked-Android-Phone/dp/B075VB576X/ref=sr_1_44?keywords=LG+Unlocked+renewed&qid=1657213559&sr=8-44&srs=17871142011",
        currentPrice: 14599,
        specs: [
          {
            productId: 1545698325772398592,
            key: "CONDITION",
            value: "Excellent",
          },
          {
            productId: 1545698325772398592,
            key: "CARRIER",
            value: "Unlocked",
          },
          {
            productId: 1545698325772398592,
            key: "STORAGE",
            value: "32GB",
          },
          {
            productId: 1545698325772398592,
            key: "COLOR",
            value: "Astro Black",
          },
        ],
      },
    ],
    aboutProduct: null,
    metaDescription: null,
    metaDescCategory: null,
    qa: null,
  },
  {
    productName: "LG K50",
    productCategoryValueId: 710,
    price: 13499,
    keyword: null,
    productImageUrl:
      "https://d3c745jesl5pj3.cloudfront.net/sell/web/LG K50_34d0a54634e444f7b5ae482a24f5cbf6.png",
    brand: "LG",
    type: null,
    brandCategoryValueId: 649,
    relatedGoods: [
      {
        productId: 1545698328553222144,
        name: "LG K50",
        brand: "LG",
        merchant: "Amazon",
        brandLogoUrl:
          "https://uptrade-public-static-resources.s3.us-east-2.amazonaws.com/amazon+logo.png",
        buyUrl:
          "https://www.amazon.com/LG-Display-Factory-Unlocked-International/dp/B08BDQZ58R/ref=sr_1_52?keywords=LG+Unlocked+renewed&qid=1657213673&sr=8-52&srs=17871142011",
        currentPrice: 13499,
        specs: [
          {
            productId: 1545698328553222144,
            key: "CONDITION",
            value: "Excellent",
          },
          {
            productId: 1545698328553222144,
            key: "CARRIER",
            value: "Unlocked",
          },
          {
            productId: 1545698328553222144,
            key: "STORAGE",
            value: "32GB",
          },
          {
            productId: 1545698328553222144,
            key: "COLOR",
            value: "Blue",
          },
        ],
      },
    ],
    aboutProduct: null,
    metaDescription: null,
    metaDescCategory: null,
    qa: null,
  },
  {
    productName: "LG K71",
    productCategoryValueId: 715,
    price: null,
    keyword: null,
    productImageUrl:
      "https://d3c745jesl5pj3.cloudfront.net/sell/web/LG K71_0351bcb96aeb4b4781704b3c55e2aaa2.png",
    brand: "LG",
    type: null,
    brandCategoryValueId: 649,
    relatedGoods: [
      {
        productId: 1545696089738604544,
        name: "LG K20",
        brand: "LG",
        merchant: "Amazon",
        brandLogoUrl:
          "https://uptrade-public-static-resources.s3.us-east-2.amazonaws.com/amazon+logo.png",
        buyUrl:
          "https://www.amazon.com/LG-Android-Nougat-Unlocked-Renewed/dp/B07KSJXD4L/ref=sr_1_17?keywords=LG+Unlocked+renewed&qid=1656596671&sr=8-17&srs=17871142011",
        currentPrice: 6499,
        specs: [
          {
            productId: 1545696089738604544,
            key: "CONDITION",
            value: "Excellent",
          },
          {
            productId: 1545696089738604544,
            key: "CARRIER",
            value: "Unlocked",
          },
          {
            productId: 1545696089738604544,
            key: "STORAGE",
            value: "16GB",
          },
          {
            productId: 1545696089738604544,
            key: "COLOR",
            value: "Black",
          },
        ],
      },
      {
        productId: 1545696085766598656,
        name: "LG Stylo 5",
        brand: "LG",
        merchant: "Amazon",
        brandLogoUrl:
          "https://uptrade-public-static-resources.s3.us-east-2.amazonaws.com/amazon+logo.png",
        buyUrl:
          "https://www.amazon.com/LG-Stylo-Alexa-Push-Talk/dp/B081D7WHPH/ref=sr_1_7?keywords=LG+Unlocked+renewed&qid=1656596511&sr=8-7&srs=17871142011",
        currentPrice: 6499,
        specs: [
          {
            productId: 1545696085766598656,
            key: "CONDITION",
            value: "Excellent",
          },
          {
            productId: 1545696085766598656,
            key: "CARRIER",
            value: "Unlocked",
          },
          {
            productId: 1545696085766598656,
            key: "STORAGE",
            value: "32GB",
          },
          {
            productId: 1545696085766598656,
            key: "COLOR",
            value: "Silver",
          },
        ],
      },
      {
        productId: 1545696091403743232,
        name: "LG Phoenix 4",
        brand: "LG",
        merchant: "Amazon",
        brandLogoUrl:
          "https://uptrade-public-static-resources.s3.us-east-2.amazonaws.com/amazon+logo.png",
        buyUrl:
          "https://www.amazon.com/LG-Phoenix-Prepaid-Smartphone-Android/dp/B07WTR5Q9F/ref=sr_1_22?keywords=LG+Unlocked+renewed&qid=1656596671&sr=8-22&srs=17871142011",
        currentPrice: 6499,
        specs: [
          {
            productId: 1545696091403743232,
            key: "CONDITION",
            value: "Excellent",
          },
          {
            productId: 1545696091403743232,
            key: "CARRIER",
            value: "AT&T",
          },
          {
            productId: 1545696091403743232,
            key: "STORAGE",
            value: "16GB",
          },
          {
            productId: 1545696091403743232,
            key: "COLOR",
            value: "Black",
          },
        ],
      },
      {
        productId: 1545696085179396096,
        name: "LG Aristo",
        brand: "LG",
        merchant: "Amazon",
        brandLogoUrl:
          "https://uptrade-public-static-resources.s3.us-east-2.amazonaws.com/amazon+logo.png",
        buyUrl:
          "https://www.amazon.com/LG-LM-K300-Android-Smartphone-Unlocked/dp/B08PPLQB2P/ref=sr_1_4?keywords=LG+Unlocked+renewed&qid=1656596511&sr=8-4&srs=17871142011",
        currentPrice: 7800,
        specs: [
          {
            productId: 1545696085179396096,
            key: "CONDITION",
            value: "Excellent",
          },
          {
            productId: 1545696085179396096,
            key: "CARRIER",
            value: "Unlocked",
          },
          {
            productId: 1545696085179396096,
            key: "STORAGE",
            value: "32GB",
          },
          {
            productId: 1545696085179396096,
            key: "COLOR",
            value: "Silver",
          },
        ],
      },
      {
        productId: 1545696901973962752,
        name: "LG Phoenix Plus",
        brand: "LG",
        merchant: "Amazon",
        brandLogoUrl:
          "https://uptrade-public-static-resources.s3.us-east-2.amazonaws.com/amazon+logo.png",
        buyUrl:
          "https://www.amazon.com/LG-Phoenix-LM-X410AS-Unlocked-Smartphone/dp/B07S8QZQ42/ref=sr_1_95?keywords=LG+Unlocked+renewed&qid=1656796140&sr=8-95",
        currentPrice: 8999,
        specs: [
          {
            productId: 1545696901973962752,
            key: "CONDITION",
            value: "Excellent",
          },
          {
            productId: 1545696901973962752,
            key: "CARRIER",
            value: "Unlocked",
          },
          {
            productId: 1545696901973962752,
            key: "STORAGE",
            value: "16GB",
          },
          {
            productId: 1545696901973962752,
            key: "COLOR",
            value: "Black",
          },
        ],
      },
    ],
    aboutProduct: null,
    metaDescription: null,
    metaDescCategory: null,
    qa: null,
  },
  {
    productName: "LG K92",
    productCategoryValueId: 742,
    price: 19999,
    keyword: null,
    productImageUrl:
      "https://d3c745jesl5pj3.cloudfront.net/sell/web/LG K92_25f42414130b47cb995fac12e9dcced8.png",
    brand: "LG",
    type: null,
    brandCategoryValueId: 649,
    relatedGoods: [
      {
        productId: 1545698317773860864,
        name: "LG K92",
        brand: "LG",
        merchant: "Amazon",
        brandLogoUrl:
          "https://uptrade-public-static-resources.s3.us-east-2.amazonaws.com/amazon+logo.png",
        buyUrl:
          "https://www.amazon.com/LG-Snapdragon-Unlocked-T-Mobile-LM-K920AM/dp/B094N67BMW/ref=sr_1_16?keywords=LG+Unlocked+renewed&qid=1657213318&sr=8-16&srs=17871142011",
        currentPrice: 19999,
        specs: [
          {
            productId: 1545698317773860864,
            key: "CONDITION",
            value: "Excellent",
          },
          {
            productId: 1545698317773860864,
            key: "CARRIER",
            value: "Unlocked",
          },
          {
            productId: 1545698317773860864,
            key: "STORAGE",
            value: "128GB",
          },
          {
            productId: 1545698317773860864,
            key: "COLOR",
            value: "Titan Gray",
          },
        ],
      },
    ],
    aboutProduct: null,
    metaDescription: null,
    metaDescCategory: null,
    qa: null,
  },
  {
    productName: "LG Phoenix 4",
    productCategoryValueId: 686,
    price: null,
    keyword: null,
    productImageUrl:
      "https://d3c745jesl5pj3.cloudfront.net/sell/web/LG Phoenix 4_a3bb9dbbab0a49eda353a4f466b27c80.png",
    brand: "LG",
    type: null,
    brandCategoryValueId: 649,
    relatedGoods: [
      {
        productId: 1545696089738604544,
        name: "LG K20",
        brand: "LG",
        merchant: "Amazon",
        brandLogoUrl:
          "https://uptrade-public-static-resources.s3.us-east-2.amazonaws.com/amazon+logo.png",
        buyUrl:
          "https://www.amazon.com/LG-Android-Nougat-Unlocked-Renewed/dp/B07KSJXD4L/ref=sr_1_17?keywords=LG+Unlocked+renewed&qid=1656596671&sr=8-17&srs=17871142011",
        currentPrice: 6499,
        specs: [
          {
            productId: 1545696089738604544,
            key: "CONDITION",
            value: "Excellent",
          },
          {
            productId: 1545696089738604544,
            key: "CARRIER",
            value: "Unlocked",
          },
          {
            productId: 1545696089738604544,
            key: "STORAGE",
            value: "16GB",
          },
          {
            productId: 1545696089738604544,
            key: "COLOR",
            value: "Black",
          },
        ],
      },
      {
        productId: 1545696085766598656,
        name: "LG Stylo 5",
        brand: "LG",
        merchant: "Amazon",
        brandLogoUrl:
          "https://uptrade-public-static-resources.s3.us-east-2.amazonaws.com/amazon+logo.png",
        buyUrl:
          "https://www.amazon.com/LG-Stylo-Alexa-Push-Talk/dp/B081D7WHPH/ref=sr_1_7?keywords=LG+Unlocked+renewed&qid=1656596511&sr=8-7&srs=17871142011",
        currentPrice: 6499,
        specs: [
          {
            productId: 1545696085766598656,
            key: "CONDITION",
            value: "Excellent",
          },
          {
            productId: 1545696085766598656,
            key: "CARRIER",
            value: "Unlocked",
          },
          {
            productId: 1545696085766598656,
            key: "STORAGE",
            value: "32GB",
          },
          {
            productId: 1545696085766598656,
            key: "COLOR",
            value: "Silver",
          },
        ],
      },
      {
        productId: 1545696091403743232,
        name: "LG Phoenix 4",
        brand: "LG",
        merchant: "Amazon",
        brandLogoUrl:
          "https://uptrade-public-static-resources.s3.us-east-2.amazonaws.com/amazon+logo.png",
        buyUrl:
          "https://www.amazon.com/LG-Phoenix-Prepaid-Smartphone-Android/dp/B07WTR5Q9F/ref=sr_1_22?keywords=LG+Unlocked+renewed&qid=1656596671&sr=8-22&srs=17871142011",
        currentPrice: 6499,
        specs: [
          {
            productId: 1545696091403743232,
            key: "CONDITION",
            value: "Excellent",
          },
          {
            productId: 1545696091403743232,
            key: "CARRIER",
            value: "AT&T",
          },
          {
            productId: 1545696091403743232,
            key: "STORAGE",
            value: "16GB",
          },
          {
            productId: 1545696091403743232,
            key: "COLOR",
            value: "Black",
          },
        ],
      },
      {
        productId: 1545696085179396096,
        name: "LG Aristo",
        brand: "LG",
        merchant: "Amazon",
        brandLogoUrl:
          "https://uptrade-public-static-resources.s3.us-east-2.amazonaws.com/amazon+logo.png",
        buyUrl:
          "https://www.amazon.com/LG-LM-K300-Android-Smartphone-Unlocked/dp/B08PPLQB2P/ref=sr_1_4?keywords=LG+Unlocked+renewed&qid=1656596511&sr=8-4&srs=17871142011",
        currentPrice: 7800,
        specs: [
          {
            productId: 1545696085179396096,
            key: "CONDITION",
            value: "Excellent",
          },
          {
            productId: 1545696085179396096,
            key: "CARRIER",
            value: "Unlocked",
          },
          {
            productId: 1545696085179396096,
            key: "STORAGE",
            value: "32GB",
          },
          {
            productId: 1545696085179396096,
            key: "COLOR",
            value: "Silver",
          },
        ],
      },
      {
        productId: 1545696901973962752,
        name: "LG Phoenix Plus",
        brand: "LG",
        merchant: "Amazon",
        brandLogoUrl:
          "https://uptrade-public-static-resources.s3.us-east-2.amazonaws.com/amazon+logo.png",
        buyUrl:
          "https://www.amazon.com/LG-Phoenix-LM-X410AS-Unlocked-Smartphone/dp/B07S8QZQ42/ref=sr_1_95?keywords=LG+Unlocked+renewed&qid=1656796140&sr=8-95",
        currentPrice: 8999,
        specs: [
          {
            productId: 1545696901973962752,
            key: "CONDITION",
            value: "Excellent",
          },
          {
            productId: 1545696901973962752,
            key: "CARRIER",
            value: "Unlocked",
          },
          {
            productId: 1545696901973962752,
            key: "STORAGE",
            value: "16GB",
          },
          {
            productId: 1545696901973962752,
            key: "COLOR",
            value: "Black",
          },
        ],
      },
    ],
    aboutProduct: null,
    metaDescription: null,
    metaDescCategory: null,
    qa: null,
  },
  {
    productName: "LG Phoenix Plus",
    productCategoryValueId: 747,
    price: 8999,
    keyword: null,
    productImageUrl:
      "https://d3c745jesl5pj3.cloudfront.net/sell/web/LG Phoenix Plus_48a4303340ac4734ad603ea02f6b8985.png",
    brand: "LG",
    type: null,
    brandCategoryValueId: 649,
    relatedGoods: [
      {
        productId: 1545698324820291584,
        name: "LG Phoenix Plus",
        brand: "LG",
        merchant: "Amazon",
        brandLogoUrl:
          "https://uptrade-public-static-resources.s3.us-east-2.amazonaws.com/amazon+logo.png",
        buyUrl:
          "https://www.amazon.com/LG-Phoenix-LM-X410AS-Unlocked-Smartphone/dp/B07S8QZQ42/ref=sr_1_42?keywords=LG+Unlocked+renewed&qid=1657213559&sr=8-42&srs=17871142011",
        currentPrice: 8999,
        specs: [
          {
            productId: 1545698324820291584,
            key: "CONDITION",
            value: "Excellent",
          },
          {
            productId: 1545698324820291584,
            key: "CARRIER",
            value: "Unlocked",
          },
          {
            productId: 1545698324820291584,
            key: "STORAGE",
            value: "16GB",
          },
          {
            productId: 1545698324820291584,
            key: "COLOR",
            value: "Black",
          },
        ],
      },
    ],
    aboutProduct: null,
    metaDescription: null,
    metaDescCategory: null,
    qa: null,
  },
  {
    productName: "LG Q7 Plus",
    productCategoryValueId: 695,
    price: 11400,
    keyword: null,
    productImageUrl:
      "https://d3c745jesl5pj3.cloudfront.net/sell/web/LG Q7 Plus_e7b82a366ffd41bd9ea2aaa320cf934e.png",
    brand: "LG",
    type: null,
    brandCategoryValueId: 649,
    relatedGoods: [
      {
        productId: 1545698321041223680,
        name: "LG Q7 Plus",
        brand: "LG",
        merchant: "Amazon",
        brandLogoUrl:
          "https://uptrade-public-static-resources.s3.us-east-2.amazonaws.com/amazon+logo.png",
        buyUrl:
          "https://www.amazon.com/LG-Q610TA-T-Mobile-Android-Smartphone/dp/B07N8JMK4Q/ref=sr_1_30?keywords=LG+Unlocked+renewed&qid=1657213439&sr=8-30&srs=17871142011",
        currentPrice: 11400,
        specs: [
          {
            productId: 1545698321041223680,
            key: "CONDITION",
            value: "Excellent",
          },
          {
            productId: 1545698321041223680,
            key: "CARRIER",
            value: "T-Mobile",
          },
          {
            productId: 1545698321041223680,
            key: "STORAGE",
            value: "64GB",
          },
          {
            productId: 1545698321041223680,
            key: "COLOR",
            value: "Blue",
          },
        ],
      },
    ],
    aboutProduct: null,
    metaDescription: null,
    metaDescCategory: null,
    qa: null,
  },
  {
    productName: "LG Stylo 4",
    productCategoryValueId: 674,
    price: 11500,
    keyword: null,
    productImageUrl:
      "https://d3c745jesl5pj3.cloudfront.net/sell/web/LG Stylo 4_7c156c46d56b4dd29775c2fb4ec26ac6.png",
    brand: "LG",
    type: null,
    brandCategoryValueId: 649,
    relatedGoods: [
      {
        productId: 1545698318235234304,
        name: "LG Stylo 4",
        brand: "LG",
        merchant: "Amazon",
        brandLogoUrl:
          "https://uptrade-public-static-resources.s3.us-east-2.amazonaws.com/amazon+logo.png",
        buyUrl:
          "https://www.amazon.com/LG-Q710-Android-Smartphone-Unlocked/dp/B081VWTM76/ref=sr_1_17?keywords=LG+Unlocked+renewed&qid=1657213318&sr=8-17&srs=17871142011",
        currentPrice: 11500,
        specs: [
          {
            productId: 1545698318235234304,
            key: "CONDITION",
            value: "Excellent",
          },
          {
            productId: 1545698318235234304,
            key: "CARRIER",
            value: "Unlocked",
          },
          {
            productId: 1545698318235234304,
            key: "STORAGE",
            value: "16GB",
          },
          {
            productId: 1545698318235234304,
            key: "COLOR",
            value: "Aurora Black",
          },
        ],
      },
    ],
    aboutProduct: null,
    metaDescription: null,
    metaDescCategory: null,
    qa: null,
  },
  {
    productName: "LG Stylo 5",
    productCategoryValueId: 656,
    price: 6499,
    keyword: null,
    productImageUrl:
      "https://d3c745jesl5pj3.cloudfront.net/sell/web/LG Stylo 5_7b570ff3e0454d1a88b3920711d00a09.jpg",
    brand: "LG",
    type: null,
    brandCategoryValueId: 649,
    relatedGoods: [
      {
        productId: 1545698335524155392,
        name: "LG Stylo 5",
        brand: "LG",
        merchant: "Amazon",
        brandLogoUrl:
          "https://uptrade-public-static-resources.s3.us-east-2.amazonaws.com/amazon+logo.png",
        buyUrl:
          "https://www.amazon.com/LG-K20-Unlocked-LTE-inches/dp/B07Y1LVVQC/ref=sr_1_117?keywords=LG+Verizon+renewed&qid=1657214525&sr=8-117",
        currentPrice: 6499,
        specs: [
          {
            productId: 1545698335524155392,
            key: "CONDITION",
            value: "Excellent",
          },
          {
            productId: 1545698335524155392,
            key: "CARRIER",
            value: "Unlocked",
          },
          {
            productId: 1545698335524155392,
            key: "STORAGE",
            value: "16GB",
          },
          {
            productId: 1545698335524155392,
            key: "COLOR",
            value: "Black",
          },
        ],
      },
      {
        productId: 1545698328083460096,
        name: "LG Stylo 5",
        brand: "LG",
        merchant: "Amazon",
        brandLogoUrl:
          "https://uptrade-public-static-resources.s3.us-east-2.amazonaws.com/amazon+logo.png",
        buyUrl:
          "https://www.amazon.com/LG-X420-T-Mobile-Android-Smartphone/dp/B0863GX63W/ref=sr_1_51?keywords=LG+Unlocked+renewed&qid=1657213673&sr=8-51&srs=17871142011",
        currentPrice: 10999,
        specs: [
          {
            productId: 1545698328083460096,
            key: "CONDITION",
            value: "Excellent",
          },
          {
            productId: 1545698328083460096,
            key: "CARRIER",
            value: "T-Mobile",
          },
          {
            productId: 1545698328083460096,
            key: "STORAGE",
            value: "32GB",
          },
          {
            productId: 1545698328083460096,
            key: "COLOR",
            value: "Platinum Gray",
          },
        ],
      },
      {
        productId: 1545698525140250624,
        name: "LG Stylo 5",
        brand: "LG",
        merchant: "Amazon",
        brandLogoUrl:
          "https://uptrade-public-static-resources.s3.us-east-2.amazonaws.com/amazon+logo.png",
        buyUrl:
          "https://www.amazon.com/LG-Snapdragon-Unlocked-T-Mobile-LM-Q720AM/dp/B08WJJNJ95/ref=sr_1_52?keywords=LG+Unlocked+renewed&qid=1657256554&sr=8-52",
        currentPrice: 11799,
        specs: [
          {
            productId: 1545698525140250624,
            key: "CONDITION",
            value: "Excellent",
          },
          {
            productId: 1545698525140250624,
            key: "CARRIER",
            value: "Unlocked",
          },
          {
            productId: 1545698525140250624,
            key: "STORAGE",
            value: "32GB",
          },
          {
            productId: 1545698525140250624,
            key: "COLOR",
            value: "Aurora Black",
          },
        ],
      },
      {
        productId: 1545698334534299648,
        name: "LG Stylo 5",
        brand: "LG",
        merchant: "Amazon",
        brandLogoUrl:
          "https://uptrade-public-static-resources.s3.us-east-2.amazonaws.com/amazon+logo.png",
        buyUrl:
          "https://www.amazon.com/LG-LMQ720-Android-Smartphone-T-Mobile/dp/B0859J7XNB/ref=sr_1_50?keywords=LG+Verizon+renewed&qid=1657213968&sr=8-50",
        currentPrice: 12272,
        specs: [
          {
            productId: 1545698334534299648,
            key: "CONDITION",
            value: "Excellent",
          },
          {
            productId: 1545698334534299648,
            key: "CARRIER",
            value: "T-Mobile",
          },
          {
            productId: 1545698334534299648,
            key: "STORAGE",
            value: "32GB",
          },
          {
            productId: 1545698334534299648,
            key: "COLOR",
            value: "Silver",
          },
        ],
      },
      {
        productId: 1545698314468749312,
        name: "LG Stylo 5",
        brand: "LG",
        merchant: "Amazon",
        brandLogoUrl:
          "https://uptrade-public-static-resources.s3.us-east-2.amazonaws.com/amazon+logo.png",
        buyUrl:
          "https://www.amazon.com/LG-Stylo-Alexa-Push-Talk/dp/B081D7WHPH/ref=sr_1_6?keywords=LG+Unlocked+renewed&qid=1657213191&sr=8-6&srs=17871142011",
        currentPrice: 12349,
        specs: [
          {
            productId: 1545698314468749312,
            key: "CONDITION",
            value: "Excellent",
          },
          {
            productId: 1545698314468749312,
            key: "CARRIER",
            value: "Unlocked",
          },
          {
            productId: 1545698314468749312,
            key: "STORAGE",
            value: "32GB",
          },
          {
            productId: 1545698314468749312,
            key: "COLOR",
            value: "Silver",
          },
        ],
      },
    ],
    aboutProduct:
      "LG Stylo 5 Cell Phone comes equipped with a 6.2-inch Full HD+ FullVision display delivering sharp visuals, while a 16.0MP rear-facing camera with auto-focus technology captures stunning photos. This LG Stylo 5 cell phone is powered by a 1.8GHz Octa-Core processor and 3GB of RAM for solid everyday performance.",
    metaDescription:
      "LG Stylo 5. All phones are Fully Inspected, Certified Used, and Fully Functional.  Great price. FullVision HD Display.",
    metaDescCategory:
      "LG · LG Stylo · Android · 6.2″ · Fingerprint Scanner · Facial Recognition · 5 MP front camera · 13 MP rear camera · Smartphone · 20 days max standby",
    qa: {
      "Why should you buy a used or refurbished LG Stylo 5?":
        "A refurbished LG Stylo 5 functions precisely like a new one. Why pay more? It will save you a lot of money  buying a refurbished LG Stylo 5. More importantly, it reduces e-waste and makes our planet a better place. Buying a refurbished LG Stylo 5 is a smart choice.",
      "What does it mean if the LG Stylo 5 is unlocked?":
        "Most LG Stylo 5’s bought from wireless carriers are locked to their network. An unlocked LG Stylo 5 means the phone has been unlocked and can be used with any carrier in the United States. Choosing an unlocked LG Stylo 5 is the safest option if you are unsure which carrier you will use. An unlocked LG Stylo 5 is also a great option as a gift since it will work with any carrier or wireless phone plan they currently have.",
      "What does UpTrade Certified Used mean?":
        "UpTrade Certified means you can trust that your used LG Stylo 5 will function just as well as a new device. Among hundreds of used phone sellers, we have chosen a modest bunch of reputable sellers and marketplaces that are capable of providing high-quality used and refurbished phones. An UpTrade Certified Used LG Stylo 5 means it has passed a rigorous inspection and functions like a new one.",
      "What is the return policy for the Used and Refurbished LG Stylo 5?":
        "No worries if you are not 100% satisfied with the device you have received! Each phone is granted a 30-day trial period in which buyers may return the used device to the UpTrade Certified Seller for a refund within the first 30 days.",
      "Are refurbished Android phones as good as new ones?":
        "For the most part, there is no definite difference between a new phone and a used one, aside from one previously used by another owner. All used phones listed on UpTrade must pass a rigorous inspection to guarantee quality and product performance. Refurbished devices certified by UpTrade work just as well as new, ordinary store-bought phones.",
    },
  },
  {
    productName: "LG Stylo 6",
    productCategoryValueId: 659,
    price: 13999,
    keyword: null,
    productImageUrl:
      "https://d3c745jesl5pj3.cloudfront.net/sell/web/LG Stylo 6_b8aa87f7a58345dab279f5d9e02cef1c.jpg",
    brand: "LG",
    type: null,
    brandCategoryValueId: 649,
    relatedGoods: [
      {
        productId: 1545698353127649280,
        name: "LG Stylo 6",
        brand: "LG",
        merchant: "Amazon",
        brandLogoUrl:
          "https://uptrade-public-static-resources.s3.us-east-2.amazonaws.com/amazon+logo.png",
        buyUrl:
          "https://www.amazon.com/LG-Stylo-Android-Smartphone-T-Mobile/dp/B08LQXR9RQ/ref=sr_1_11?keywords=LG+T-Mobile+renewed&qid=1657217173&sr=8-11",
        currentPrice: 13999,
        specs: [
          {
            productId: 1545698353127649280,
            key: "CONDITION",
            value: "Excellent",
          },
          {
            productId: 1545698353127649280,
            key: "CARRIER",
            value: "T-Mobile",
          },
          {
            productId: 1545698353127649280,
            key: "STORAGE",
            value: "64GB",
          },
          {
            productId: 1545698353127649280,
            key: "COLOR",
            value: "White",
          },
        ],
      },
      {
        productId: 1545698315827703808,
        name: "LG Stylo 6",
        brand: "LG",
        merchant: "Amazon",
        brandLogoUrl:
          "https://uptrade-public-static-resources.s3.us-east-2.amazonaws.com/amazon+logo.png",
        buyUrl:
          "https://www.amazon.com/LG-Stylo-Android-Smartphone-Unlocked/dp/B08K3QM79K/ref=sr_1_9?keywords=LG+Unlocked+renewed&qid=1657213191&sr=8-9&srs=17871142011",
        currentPrice: 16249,
        specs: [
          {
            productId: 1545698315827703808,
            key: "CONDITION",
            value: "Excellent",
          },
          {
            productId: 1545698315827703808,
            key: "CARRIER",
            value: "Unlocked",
          },
          {
            productId: 1545698315827703808,
            key: "STORAGE",
            value: "64GB",
          },
          {
            productId: 1545698315827703808,
            key: "COLOR",
            value: "White",
          },
        ],
      },
    ],
    aboutProduct:
      "Express who you are to the world with the Stylo 6 from LG.  This device enhances your mobile life and all the ways you live it. Whether you're watching, creating or sharing content, the Stylo 6 gives you unlimited potential, even if you're on a limited budget. The 6.8\" FHD+ FullVision display, spectacular rear cameras and the built-in stylus pen all help you celebrate the ways you live the Stylo life.",
    metaDescription:
      "LG Stylo 5. All phones are Fully Inspected, Certified Used, and Fully Functional. Great price. FullVision HD Display.",
    metaDescCategory:
      "LG · LG Stylo · Android · 6.8″ · Fingerprint Scanner · 13 MP front camera · 13 MP rear camera · Smartphone · 14.6 days max standby · 7.76 oz",
    qa: {
      "Why should you buy a used or refurbished LG Stylo 6?":
        "Why pay more if you are getting the same thing? A refurbished LG Stylo 6 is fully functional and works exactly like a brand new LG Stylo 6, except for minimum to normal wear and tear on the cosmetics of the phone. A refurbished LG Stylo 6 is a significant saving option when you plan to buy your next LG Stylo 6. Buying a refurbished LG Stylo 6 is a fantastic choice. It will net you significant savings, mainly when a new LG Stylo 6 costs much more.",
      "What does it mean if the LG Stylo 6 is unlocked?":
        "Unlocked means the phone is not locked or limited to any carrier. An unlocked LG Stylo 6 can be used with any carrier in the United States. If you are unsure whether the phone is compatible with your mobile phone carrier, buying an unlocked phone is the easiest option. An unlocked LG Stylo 6 is likewise an incredible phone to buy as a gift since it will work with any carrier or wireless plan they may have.",
      "What does UpTrade Certified Used mean?":
        "There are hundreds or even thousands of used phone sellers, but unfortunately, not all are legit. To ensure the quality, we have selected a few reputable resellers and marketplaces that can provide high-quality used and refurbished phones. An UpTrade Certified Used LG Stylo 6 means it has passed an in-depth inspection by our Certified Seller. UpTrade Certified means the LG Stylo 6 you buy will work and function exactly like a new one.",
      "What is the return policy for the Used and Refurbished LG Stylo 6?":
        "Sure! The Refurbished LG Stylo 6 listed here comes with a 30-day return policy from the Sellers. So if you have any problem with your purchase, you may contact the Seller and return it to them for up to 30 days.",
      "Are refurbished Android phones as good as new ones?":
        "That’s a good question! Technically, there’s no difference between refurbished and new except that there may be signs of use (if at all) on a refurbished Android phone. All UpTrade Certified Used Phone Sellers process the phones through a rigorous inspection. As a result, each smartphone is fully functional and works just like a new one.",
    },
  },
  {
    productName: "LG V20",
    productCategoryValueId: 707,
    price: 12499,
    keyword: null,
    productImageUrl:
      "https://d3c745jesl5pj3.cloudfront.net/sell/web/LG V20_854bc81b6d824dc7a1f83e6852854369.jpg",
    brand: "LG",
    type: null,
    brandCategoryValueId: 649,
    relatedGoods: [
      {
        productId: 1545698327630475264,
        name: "LG V20",
        brand: "LG",
        merchant: "Amazon",
        brandLogoUrl:
          "https://uptrade-public-static-resources.s3.us-east-2.amazonaws.com/amazon+logo.png",
        buyUrl:
          "https://www.amazon.com/LG-H910A-Unlocked-Quad-Core-Camera/dp/B079C3VDLG/ref=sr_1_49?keywords=LG+Unlocked+renewed&qid=1657213673&sr=8-49&srs=17871142011",
        currentPrice: 12499,
        specs: [
          {
            productId: 1545698327630475264,
            key: "CONDITION",
            value: "Excellent",
          },
          {
            productId: 1545698327630475264,
            key: "CARRIER",
            value: "Unlocked",
          },
          {
            productId: 1545698327630475264,
            key: "STORAGE",
            value: "64GB",
          },
          {
            productId: 1545698327630475264,
            key: "COLOR",
            value: "Silver",
          },
        ],
      },
      {
        productId: 1545698329073315840,
        name: "LG V20",
        brand: "LG",
        merchant: "Amazon",
        brandLogoUrl:
          "https://uptrade-public-static-resources.s3.us-east-2.amazonaws.com/amazon+logo.png",
        buyUrl:
          "https://www.amazon.com/LG-V20-LS997-64GB-Titan/dp/B06WP9X8MZ/ref=sr_1_56?keywords=LG+Unlocked+renewed&qid=1657213673&sr=8-56&srs=17871142011",
        currentPrice: 13000,
        specs: [
          {
            productId: 1545698329073315840,
            key: "CONDITION",
            value: "Excellent",
          },
          {
            productId: 1545698329073315840,
            key: "CARRIER",
            value: "Sprint",
          },
          {
            productId: 1545698329073315840,
            key: "STORAGE",
            value: "64GB",
          },
          {
            productId: 1545698329073315840,
            key: "COLOR",
            value: "Titan",
          },
        ],
      },
      {
        productId: 1545698330495184896,
        name: "LG V20",
        brand: "LG",
        merchant: "Amazon",
        brandLogoUrl:
          "https://uptrade-public-static-resources.s3.us-east-2.amazonaws.com/amazon+logo.png",
        buyUrl:
          "https://www.amazon.com/LG-H918T-T-Mobile-Quad-Core-Camera/dp/B0719WRVKH/ref=sr_1_61?keywords=LG+Unlocked+renewed&qid=1657213773&sr=8-61&srs=17871142011",
        currentPrice: 14900,
        specs: [
          {
            productId: 1545698330495184896,
            key: "CONDITION",
            value: "Excellent",
          },
          {
            productId: 1545698330495184896,
            key: "CARRIER",
            value: "T-Mobile",
          },
          {
            productId: 1545698330495184896,
            key: "STORAGE",
            value: "64GB",
          },
          {
            productId: 1545698330495184896,
            key: "COLOR",
            value: "Titan",
          },
        ],
      },
    ],
    aboutProduct:
      "The LG V20 is sometimes called “the musician’s phone” for its amazing audio recording quality. It has other great benefits that you’ll miss on with other smartphones like a replaceable battery, a secondary wide-angle lens, and a micro SD slot that lets you add storage at any time.",
    metaDescription:
      "Great pre-owned LG V20 at an even better price on UpTrade! Fully inspected and functional--see for yourself with photos & video! Amazing audio recording.",
    metaDescCategory:
      "The LG V20 is a feature-rich phone sure to please anyone looking for an affordable device with a slew of bells and whistles--and maybe even a few surprises. It has two screens and three cameras (including a wide-angle), an appealing design that’s also water and drop resistant, and professional-grade audio hardware.",
    qa: {
      "Why should you buy a used or refurbished LG V20?":
        "Why pay more if you are getting the same thing? A refurbished LG V20 is fully functional and works exactly like a brand new LG V20, except for minimum to normal wear and tear on the cosmetics of the phone. A refurbished LG V20 is a significant saving option when you plan to buy your next LG V20. Buying a refurbished LG V20 is a fantastic choice. It will net you significant savings, mainly when a new LG V20 costs much more.",
      "What does it mean if the LG V20 is unlocked?":
        "Unlocked means the phone is not locked or limited to any carrier. An unlocked LG V20 can be used with any carrier in the United States. If you are unsure whether the phone is compatible with your mobile phone carrier, buying an unlocked phone is the easiest option. An unlocked LG V20 is likewise an incredible phone to buy as a gift since it will work with any carrier or wireless plan they may have.",
      "What does UpTrade Certified Used mean?":
        "There are hundreds or even thousands of used phone sellers, but unfortunately, not all are legit. To ensure the quality, we have selected a few reputable resellers and marketplaces that can provide high-quality used and refurbished phones. An UpTrade Certified Used LG V20 means it has passed an in-depth inspection by our Certified Seller. UpTrade Certified means the LG V20 you buy will work and function exactly like a new one.",
      "What is the return policy for the Used and Refurbished LG V20?":
        "Sure! The Refurbished LG V20 listed here comes with a 30-day return policy from the Sellers. So if you have any problem with your purchase, you may contact the Seller and return it to them for up to 30 days.",
      "Are refurbished Android phones as good as new ones?":
        "That’s a good question! Technically, there’s no difference between refurbished and new except that there may be signs of use (if at all) on a refurbished Android phone. All UpTrade Certified Used Phone Sellers process the phones through a rigorous inspection. As a result, each smartphone is fully functional and works just like a new one.",
    },
  },
  {
    productName: "LG V30",
    productCategoryValueId: 683,
    price: 9999,
    keyword: null,
    productImageUrl:
      "https://d3c745jesl5pj3.cloudfront.net/sell/web/LG V30_736e066023874835bbd4f3fc05267165.jpg",
    brand: "LG",
    type: null,
    brandCategoryValueId: 649,
    relatedGoods: [
      {
        productId: 1545698325273276416,
        name: "LG V30",
        brand: "LG",
        merchant: "Amazon",
        brandLogoUrl:
          "https://uptrade-public-static-resources.s3.us-east-2.amazonaws.com/amazon+logo.png",
        buyUrl:
          "https://www.amazon.com/LG-V30-Silver-Verizon-64gb/dp/B079YSZ9R2/ref=sr_1_43?keywords=LG+Unlocked+renewed&qid=1657213559&sr=8-43&srs=17871142011",
        currentPrice: 11400,
        specs: [
          {
            productId: 1545698325273276416,
            key: "CONDITION",
            value: "Excellent",
          },
          {
            productId: 1545698325273276416,
            key: "CARRIER",
            value: "Verizon",
          },
          {
            productId: 1545698325273276416,
            key: "STORAGE",
            value: "64GB",
          },
          {
            productId: 1545698325273276416,
            key: "COLOR",
            value: "Silver",
          },
        ],
      },
      {
        productId: 1545698525593235456,
        name: "LG V30",
        brand: "LG",
        merchant: "Amazon",
        brandLogoUrl:
          "https://uptrade-public-static-resources.s3.us-east-2.amazonaws.com/amazon+logo.png",
        buyUrl:
          "https://www.amazon.com/LG-Camera-Silver-Unlocked-Renewed/dp/B07L9H4G9K/ref=sr_1_55?keywords=LG+Unlocked+renewed&qid=1657256554&sr=8-55",
        currentPrice: 14999,
        specs: [
          {
            productId: 1545698525593235456,
            key: "CONDITION",
            value: "Excellent",
          },
          {
            productId: 1545698525593235456,
            key: "CARRIER",
            value: "Unlocked",
          },
          {
            productId: 1545698525593235456,
            key: "STORAGE",
            value: "64GB",
          },
          {
            productId: 1545698525593235456,
            key: "COLOR",
            value: "Silver",
          },
        ],
      },
      {
        productId: 1545698319149592576,
        name: "LG V30",
        brand: "LG",
        merchant: "Amazon",
        brandLogoUrl:
          "https://uptrade-public-static-resources.s3.us-east-2.amazonaws.com/amazon+logo.png",
        buyUrl:
          "https://www.amazon.com/LG-V30-Plus-LS998-128GB/dp/B07VBHFC5R/ref=sr_1_22?keywords=LG+Unlocked+renewed&qid=1657213318&sr=8-22&srs=17871142011",
        currentPrice: 19999,
        specs: [
          {
            productId: 1545698319149592576,
            key: "CONDITION",
            value: "Excellent",
          },
          {
            productId: 1545698319149592576,
            key: "CARRIER",
            value: "Unlocked",
          },
          {
            productId: 1545698319149592576,
            key: "STORAGE",
            value: "128GB",
          },
          {
            productId: 1545698319149592576,
            key: "COLOR",
            value: "Aurora Black",
          },
        ],
      },
      {
        productId: 1545698527065436160,
        name: "LG V30",
        brand: "LG",
        merchant: "Amazon",
        brandLogoUrl:
          "https://uptrade-public-static-resources.s3.us-east-2.amazonaws.com/amazon+logo.png",
        buyUrl:
          "https://www.amazon.com/Google-Pixel-4a-Unlocked-Smartphone/dp/B08FKYPC7F/ref=sr_1_101?keywords=LG+Unlocked+renewed&qid=1657256966&sr=8-101",
        currentPrice: 34400,
        specs: [
          {
            productId: 1545698527065436160,
            key: "CONDITION",
            value: "Excellent",
          },
          {
            productId: 1545698527065436160,
            key: "CARRIER",
            value: "Verizon",
          },
          {
            productId: 1545698527065436160,
            key: "STORAGE",
            value: "128GB",
          },
          {
            productId: 1545698527065436160,
            key: "COLOR",
            value: "White",
          },
        ],
      },
    ],
    aboutProduct:
      "The LG V30 is a dependable phone with all the hardware amenities you could want without having to compromise on software or processing quality. It has a great camera and wide-angle lense, a huge and vibrant display, wireless charging, a super-powered battery with extra long life, a micro SD slot for added storage, and a headphone jack! All of this plus superior audio & video recording make this a great purchase for content creators.",
    metaDescription:
      "Check out the LG V30 on UpTrade for a great phone at an even better price! Fully functional, photos & video of inspection available. Dependable smartphone!",
    metaDescCategory:
      "LG keeps on the cutting edge in its V models, and the LG V30 is no different. It’s been called “one of the best Android phones you can buy,” and for good reason. It’s bursting with special features, particularly its cameras and display, and it’s all housed in a durable and stream-lined design.",
    qa: {
      "Why should you buy a used or refurbished LG V30?":
        "A refurbished LG V30 functions precisely like a new one. Why pay more? It will save you a lot of money  buying a refurbished LG V30. More importantly, it reduces e-waste and makes our planet a better place. Buying a refurbished LG V30 is a smart choice.",
      "What does it mean if the LG V30 is unlocked?":
        "Most LG V30’s bought from wireless carriers are locked to their network. An unlocked LG V30 means the phone has been unlocked and can be used with any carrier in the United States. Choosing an unlocked LG V30 is the safest option if you are unsure which carrier you will use. An unlocked LG V30 is also a great option as a gift since it will work with any carrier or wireless phone plan they currently have.",
      "What does UpTrade Certified Used mean?":
        "UpTrade Certified means you can trust that your used LG V30 will function just as well as a new device. Among hundreds of used phone sellers, we have chosen a modest bunch of reputable sellers and marketplaces that are capable of providing high-quality used and refurbished phones. An UpTrade Certified Used LG V30 means it has passed a rigorous inspection and functions like a new one.",
      "What is the return policy for the Used and Refurbished LG V30?":
        "No worries if you are not 100% satisfied with the device you have received! Each phone is granted a 30-day trial period in which buyers may return the used device to the UpTrade Certified Seller for a refund within the first 30 days.",
      "Are refurbished Android phones as good as new ones?":
        "For the most part, there is no definite difference between a new phone and a used one, aside from one previously used by another owner. All used phones listed on UpTrade must pass a rigorous inspection to guarantee quality and product performance. Refurbished devices certified by UpTrade work just as well as new, ordinary store-bought phones.",
    },
  },
  {
    productName: "LG V40",
    productCategoryValueId: 732,
    price: 9591,
    keyword: null,
    productImageUrl:
      "https://d3c745jesl5pj3.cloudfront.net/sell/web/lg V40_9f93c2b367da4f9da5b22cbb798544db.png",
    brand: "LG",
    type: null,
    brandCategoryValueId: 649,
    relatedGoods: [
      {
        productId: 1545698399013335040,
        name: "LG V40",
        brand: "LG",
        merchant: "Amazon",
        brandLogoUrl:
          "https://uptrade-public-static-resources.s3.us-east-2.amazonaws.com/amazon+logo.png",
        buyUrl:
          "https://www.amazon.com/LG-ThinQ-64GB-Aurora-Black/dp/B07N4B63BM/ref=sr_1_3?keywords=LG+Sprint+renewed&qid=1657218440&sr=8-3",
        currentPrice: 9591,
        specs: [
          {
            productId: 1545698399013335040,
            key: "CONDITION",
            value: "Excellent",
          },
          {
            productId: 1545698399013335040,
            key: "CARRIER",
            value: "Sprint",
          },
          {
            productId: 1545698399013335040,
            key: "STORAGE",
            value: "64GB",
          },
          {
            productId: 1545698399013335040,
            key: "COLOR",
            value: "Aurora Black",
          },
        ],
      },
      {
        productId: 1545698331921248256,
        name: "LG V40",
        brand: "LG",
        merchant: "Amazon",
        brandLogoUrl:
          "https://uptrade-public-static-resources.s3.us-east-2.amazonaws.com/amazon+logo.png",
        buyUrl:
          "https://www.amazon.com/LG-V40-ThinQ-Verizon-Renewed/dp/B07P5P1DLF/ref=sr_1_3?keywords=LG+Verizon+renewed&qid=1657213793&sr=8-3",
        currentPrice: 12079,
        specs: [
          {
            productId: 1545698331921248256,
            key: "CONDITION",
            value: "Excellent",
          },
          {
            productId: 1545698331921248256,
            key: "CARRIER",
            value: "Verizon",
          },
          {
            productId: 1545698331921248256,
            key: "STORAGE",
            value: "64GB",
          },
          {
            productId: 1545698331921248256,
            key: "COLOR",
            value: "Aurora Black",
          },
        ],
      },
      {
        productId: 1545698337008939008,
        name: "LG V40",
        brand: "LG",
        merchant: "Amazon",
        brandLogoUrl:
          "https://uptrade-public-static-resources.s3.us-east-2.amazonaws.com/amazon+logo.png",
        buyUrl:
          "https://www.amazon.com/LG-Unlocked-T-Mobile-5-Camera-Smartphone/dp/B07RX8TP36/ref=sr_1_4?keywords=LG+AT%26T+renewed&qid=1657216010&sr=8-4",
        currentPrice: 14700,
        specs: [
          {
            productId: 1545698337008939008,
            key: "CONDITION",
            value: "Excellent",
          },
          {
            productId: 1545698337008939008,
            key: "CARRIER",
            value: "Unlocked",
          },
          {
            productId: 1545698337008939008,
            key: "STORAGE",
            value: "64GB",
          },
          {
            productId: 1545698337008939008,
            key: "COLOR",
            value: "Aurora Black",
          },
        ],
      },
    ],
    aboutProduct: null,
    metaDescription: null,
    metaDescCategory: null,
    qa: null,
  },
  {
    productName: "LG V50",
    productCategoryValueId: 662,
    price: 16370,
    keyword: null,
    productImageUrl:
      "https://d3c745jesl5pj3.cloudfront.net/sell/web/LG V50_4d7a24c82be444579f193d60018a365b.png",
    brand: "LG",
    type: null,
    brandCategoryValueId: 649,
    relatedGoods: [
      {
        productId: 1545698400007385088,
        name: "LG V50",
        brand: "LG",
        merchant: "Amazon",
        brandLogoUrl:
          "https://uptrade-public-static-resources.s3.us-east-2.amazonaws.com/amazon+logo.png",
        buyUrl:
          "https://www.amazon.com/LG-LM-V450-Smartphone-Renewed-Sprint/dp/B08NLLDG1K/ref=sr_1_7?keywords=LG+Sprint+renewed&qid=1657218440&sr=8-7",
        currentPrice: 16371,
        specs: [
          {
            productId: 1545698400007385088,
            key: "CONDITION",
            value: "Excellent",
          },
          {
            productId: 1545698400007385088,
            key: "CARRIER",
            value: "Sprint",
          },
          {
            productId: 1545698400007385088,
            key: "STORAGE",
            value: "128GB",
          },
          {
            productId: 1545698400007385088,
            key: "COLOR",
            value: "Black",
          },
        ],
      },
      {
        productId: 1545698332932075520,
        name: "LG V50",
        brand: "LG",
        merchant: "Amazon",
        brandLogoUrl:
          "https://uptrade-public-static-resources.s3.us-east-2.amazonaws.com/amazon+logo.png",
        buyUrl:
          "https://www.amazon.com/LG-LM-V450-Smartphone-Verizon-Renewed/dp/B095NWR9D3/ref=sr_1_7?keywords=LG+Verizon+renewed&qid=1657213793&sr=8-7",
        currentPrice: 21700,
        specs: [
          {
            productId: 1545698332932075520,
            key: "CONDITION",
            value: "Excellent",
          },
          {
            productId: 1545698332932075520,
            key: "CARRIER",
            value: "Verizon",
          },
          {
            productId: 1545698332932075520,
            key: "STORAGE",
            value: "128GB",
          },
          {
            productId: 1545698332932075520,
            key: "COLOR",
            value: "Black",
          },
        ],
      },
      {
        productId: 1545698320080728064,
        name: "LG V50",
        brand: "LG",
        merchant: "Amazon",
        brandLogoUrl:
          "https://uptrade-public-static-resources.s3.us-east-2.amazonaws.com/amazon+logo.png",
        buyUrl:
          "https://www.amazon.com/LG-LM-V450-Smartphone-Renewed-Verizon/dp/B08NM1CHG4/ref=sr_1_27?keywords=LG+Unlocked+renewed&qid=1657213439&sr=8-27&srs=17871142011",
        currentPrice: 22600,
        specs: [
          {
            productId: 1545698320080728064,
            key: "CONDITION",
            value: "Excellent",
          },
          {
            productId: 1545698320080728064,
            key: "CARRIER",
            value: "Verizon",
          },
          {
            productId: 1545698320080728064,
            key: "STORAGE",
            value: "128GB",
          },
          {
            productId: 1545698320080728064,
            key: "COLOR",
            value: "Black",
          },
        ],
      },
      {
        productId: 1545698314913345536,
        name: "LG V50",
        brand: "LG",
        merchant: "Amazon",
        brandLogoUrl:
          "https://uptrade-public-static-resources.s3.us-east-2.amazonaws.com/amazon+logo.png",
        buyUrl:
          "https://www.amazon.com/LG-V50-ThinQ-128GB-5G/dp/B08B7Y51ZS/ref=sr_1_7?keywords=LG+Unlocked+renewed&qid=1657213191&sr=8-7&srs=17871142011",
        currentPrice: 24900,
        specs: [
          {
            productId: 1545698314913345536,
            key: "CONDITION",
            value: "Excellent",
          },
          {
            productId: 1545698314913345536,
            key: "CARRIER",
            value: "Unlocked",
          },
          {
            productId: 1545698314913345536,
            key: "STORAGE",
            value: "128GB",
          },
          {
            productId: 1545698314913345536,
            key: "COLOR",
            value: "Black",
          },
        ],
      },
    ],
    aboutProduct: null,
    metaDescription: null,
    metaDescCategory: null,
    qa: null,
  },
  {
    productName: "LG V60",
    productCategoryValueId: 729,
    price: 26567,
    keyword: null,
    productImageUrl:
      "https://d3c745jesl5pj3.cloudfront.net/sell/web/LG V60_b4b1914c9b7b4c108e3659090b0dfa94.png",
    brand: "LG",
    type: null,
    brandCategoryValueId: 649,
    relatedGoods: [
      {
        productId: 1545698332395204608,
        name: "LG V60",
        brand: "LG",
        merchant: "Amazon",
        brandLogoUrl:
          "https://uptrade-public-static-resources.s3.us-east-2.amazonaws.com/amazon+logo.png",
        buyUrl:
          "https://www.amazon.com/LG-ThinQ-128GB-Verizon-Renewed/dp/B08FL1N9V3/ref=sr_1_4?keywords=LG+Verizon+renewed&qid=1657213793&sr=8-4",
        currentPrice: 27463,
        specs: [
          {
            productId: 1545698332395204608,
            key: "CONDITION",
            value: "Excellent",
          },
          {
            productId: 1545698332395204608,
            key: "CARRIER",
            value: "Verizon",
          },
          {
            productId: 1545698332395204608,
            key: "STORAGE",
            value: "128GB",
          },
          {
            productId: 1545698332395204608,
            key: "COLOR",
            value: "Blue",
          },
        ],
      },
      {
        productId: 1545698334022594560,
        name: "LG V60",
        brand: "LG",
        merchant: "Amazon",
        brandLogoUrl:
          "https://uptrade-public-static-resources.s3.us-east-2.amazonaws.com/amazon+logo.png",
        buyUrl:
          "https://www.amazon.com/LG-Android-Smartphone-LM-V600TM-T-Mobile/dp/B08LQSK9VH/ref=sr_1_30?keywords=LG+Verizon+renewed&qid=1657213872&sr=8-30",
        currentPrice: 28947,
        specs: [
          {
            productId: 1545698334022594560,
            key: "CONDITION",
            value: "Excellent",
          },
          {
            productId: 1545698334022594560,
            key: "CARRIER",
            value: "T-Mobile",
          },
          {
            productId: 1545698334022594560,
            key: "STORAGE",
            value: "128GB",
          },
          {
            productId: 1545698334022594560,
            key: "COLOR",
            value: "Blue",
          },
        ],
      },
    ],
    aboutProduct: null,
    metaDescription: null,
    metaDescCategory: null,
    qa: null,
  },
  {
    productName: "LG Velvet",
    productCategoryValueId: 650,
    price: 18499,
    keyword: null,
    productImageUrl:
      "https://d3c745jesl5pj3.cloudfront.net/sell/web/LG Velvet_0e411eb8623d470981c5175aa6c6aa1d.png",
    brand: "LG",
    type: null,
    brandCategoryValueId: 649,
    relatedGoods: [
      {
        productId: 1545698321498402816,
        name: "LG Velvet",
        brand: "LG",
        merchant: "Amazon",
        brandLogoUrl:
          "https://uptrade-public-static-resources.s3.us-east-2.amazonaws.com/amazon+logo.png",
        buyUrl:
          "https://www.amazon.com/LG-Snapdragon-T-Mobile-Unlocked-LM-G900TM/dp/B0921NWKX3/ref=sr_1_31?keywords=LG+Unlocked+renewed&qid=1657213439&sr=8-31&srs=17871142011",
        currentPrice: 18900,
        specs: [
          {
            productId: 1545698321498402816,
            key: "CONDITION",
            value: "Excellent",
          },
          {
            productId: 1545698321498402816,
            key: "CARRIER",
            value: "Unlocked",
          },
          {
            productId: 1545698321498402816,
            key: "STORAGE",
            value: "128GB",
          },
          {
            productId: 1545698321498402816,
            key: "COLOR",
            value: "White",
          },
        ],
      },
      {
        productId: 1545698320579850240,
        name: "LG Velvet",
        brand: "LG",
        merchant: "Amazon",
        brandLogoUrl:
          "https://uptrade-public-static-resources.s3.us-east-2.amazonaws.com/amazon+logo.png",
        buyUrl:
          "https://www.amazon.com/LG-Velvet-Display-LM-G900TM-Unlocked/dp/B08YL6SS2P/ref=sr_1_28?keywords=LG+Unlocked+renewed&qid=1657213439&sr=8-28&srs=17871142011",
        currentPrice: 19999,
        specs: [
          {
            productId: 1545698320579850240,
            key: "CONDITION",
            value: "Excellent",
          },
          {
            productId: 1545698320579850240,
            key: "CARRIER",
            value: "Unlocked",
          },
          {
            productId: 1545698320579850240,
            key: "STORAGE",
            value: "128GB",
          },
          {
            productId: 1545698320579850240,
            key: "COLOR",
            value: "White",
          },
        ],
      },
      {
        productId: 1545698313978015744,
        name: "LG Velvet",
        brand: "LG",
        merchant: "Amazon",
        brandLogoUrl:
          "https://uptrade-public-static-resources.s3.us-east-2.amazonaws.com/amazon+logo.png",
        buyUrl:
          "https://www.amazon.com/LG-Velvet-5G-128GB-Unlocked/dp/B08TZ68NRH/ref=sr_1_4?keywords=LG+Unlocked+renewed&qid=1657213191&sr=8-4&srs=17871142011",
        currentPrice: 22999,
        specs: [
          {
            productId: 1545698313978015744,
            key: "CONDITION",
            value: "Excellent",
          },
          {
            productId: 1545698313978015744,
            key: "CARRIER",
            value: "Unlocked",
          },
          {
            productId: 1545698313978015744,
            key: "STORAGE",
            value: "128GB",
          },
          {
            productId: 1545698313978015744,
            key: "COLOR",
            value: "Silver",
          },
        ],
      },
    ],
    aboutProduct: null,
    metaDescription: null,
    metaDescCategory: null,
    qa: null,
  },
  {
    productName: "LG X Venture",
    productCategoryValueId: 692,
    price: 9999,
    keyword: null,
    productImageUrl:
      "https://d3c745jesl5pj3.cloudfront.net/sell/web/LG X Venture_2ce9e9ba49144312b34f71a43a489726.png",
    brand: "LG",
    type: null,
    brandCategoryValueId: 649,
    relatedGoods: [
      {
        productId: 1545698318692413440,
        name: "LG X Venture",
        brand: "LG",
        merchant: "Amazon",
        brandLogoUrl:
          "https://uptrade-public-static-resources.s3.us-east-2.amazonaws.com/amazon+logo.png",
        buyUrl:
          "https://www.amazon.com/LG-Venture-Unlocked-Phone-Refurbished/dp/B079YVKTJN/ref=sr_1_19?keywords=LG+Unlocked+renewed&qid=1657213318&sr=8-19&srs=17871142011",
        currentPrice: 9999,
        specs: [
          {
            productId: 1545698318692413440,
            key: "CONDITION",
            value: "Excellent",
          },
          {
            productId: 1545698318692413440,
            key: "CARRIER",
            value: "Unlocked",
          },
          {
            productId: 1545698318692413440,
            key: "STORAGE",
            value: "32GB",
          },
          {
            productId: 1545698318692413440,
            key: "COLOR",
            value: "Black",
          },
        ],
      },
    ],
    aboutProduct: null,
    metaDescription: null,
    metaDescCategory: null,
    qa: null,
  },
  {
    productName: "Nova 5T",
    productCategoryValueId: 640,
    price: null,
    keyword: null,
    productImageUrl:
      "https://d3c745jesl5pj3.cloudfront.net/sell/web/Huawei Nova 5T_6b55e26458cd44efa75f1ae9fb0d1396.png",
    brand: "Huawei",
    type: null,
    brandCategoryValueId: 639,
    relatedGoods: [
      {
        productId: 1545696045685829632,
        name: "Nova 5T",
        brand: "Huawei",
        merchant: "Amazon",
        brandLogoUrl:
          "https://uptrade-public-static-resources.s3.us-east-2.amazonaws.com/amazon+logo.png",
        buyUrl:
          "https://www.amazon.com/Huawei-Unlocked-International-YAL-L21-Renewed/dp/B08LR2RFYY/ref=sr_1_5?keywords=Huawei+Unlocked+renewed&qid=1656590297&sr=8-5&srs=17871142011",
        currentPrice: 24999,
        specs: [
          {
            productId: 1545696045685829632,
            key: "CONDITION",
            value: "Excellent",
          },
          {
            productId: 1545696045685829632,
            key: "CARRIER",
            value: "Unlocked",
          },
          {
            productId: 1545696045685829632,
            key: "STORAGE",
            value: "128GB",
          },
          {
            productId: 1545696045685829632,
            key: "COLOR",
            value: "Blue",
          },
        ],
      },
    ],
    aboutProduct: null,
    metaDescription: null,
    metaDescCategory: null,
    qa: null,
  },
  {
    productName: "OnePlus 10 Pro 5G",
    productCategoryValueId: 754,
    price: 72995,
    keyword: null,
    productImageUrl:
      "https://d3c745jesl5pj3.cloudfront.net/sell/web/OnePlus 10 Pro 5G_1e371b2c21bb46ccaede7b969b8efe19.jpg",
    brand: "OnePlus",
    type: null,
    brandCategoryValueId: 393,
    relatedGoods: [
      {
        productId: 1545698484359032832,
        name: "OnePlus 10 Pro 5G",
        brand: "OnePlus",
        merchant: "Amazon",
        brandLogoUrl:
          "https://uptrade-public-static-resources.s3.us-east-2.amazonaws.com/amazon+logo.png",
        buyUrl:
          "https://www.amazon.com/OnePlus-Emerald-Green-Unlocked-Renewed/dp/B09YM1TBHG/ref=sr_1_53?keywords=OnePlus+Unlocked+renewed&qid=1657224453&sr=8-53",
        currentPrice: 72995,
        specs: [
          {
            productId: 1545698484359032832,
            key: "CONDITION",
            value: "Excellent",
          },
          {
            productId: 1545698484359032832,
            key: "CARRIER",
            value: "Unlocked",
          },
          {
            productId: 1545698484359032832,
            key: "STORAGE",
            value: "128GB",
          },
          {
            productId: 1545698484359032832,
            key: "COLOR",
            value: "Green",
          },
        ],
      },
    ],
    aboutProduct: null,
    metaDescription:
      "A fully decked out One Plus premium handset. 50 megapixel camera. Buy pre-owned to save big on this beast of a phone.",
    metaDescCategory: null,
    qa: {
      "Why should you buy a used or refurbished OnePlus 10 Pro 5G?":
        "Why pay more if you are getting the same thing? A refurbished OnePlus 10 Pro 5G is fully functional and works exactly like a brand new OnePlus 10 Pro 5G, except for minimum to normal wear and tear on the cosmetics of the phone. A refurbished OnePlus 10 Pro 5G is a significant saving option when you plan to buy your next OnePlus 10 Pro 5G. Buying a refurbished OnePlus 10 Pro 5G is a fantastic choice. It will net you significant savings, mainly when a new OnePlus 10 Pro 5G costs much more.",
      "What does it mean if the OnePlus 10 Pro 5G is unlocked?":
        "Unlocked means the phone is not locked or limited to any carrier. An unlocked OnePlus 10 Pro 5G can be used with any carrier in the United States. If you are unsure whether the phone is compatible with your mobile phone carrier, buying an unlocked phone is the easiest option. An unlocked OnePlus 10 Pro 5G is likewise an incredible phone to buy as a gift since it will work with any carrier or wireless plan they may have.",
      "What does UpTrade Certified Used mean?":
        "There are hundreds or even thousands of used phone sellers, but unfortunately, not all are legit. To ensure the quality, we have selected a few reputable resellers and marketplaces that can provide high-quality used and refurbished phones. An UpTrade Certified Used OnePlus 10 Pro 5G means it has passed an in-depth inspection by our Certified Seller. UpTrade Certified means the OnePlus 10 Pro 5G you buy will work and function exactly like a new one.",
      "What is the return policy for the Used and Refurbished OnePlus 10 Pro 5G?":
        "Sure! The Refurbished OnePlus 10 Pro 5G listed here comes with a 30-day return policy from the Sellers. So if you have any problem with your purchase, you may contact the Seller and return it to them for up to 30 days.",
      "Are refurbished Android phones as good as new ones?":
        "That’s a good question! Technically, there’s no difference between refurbished and new except that there may be signs of use (if at all) on a refurbished Android phone. All UpTrade Certified Used Phone Sellers process the phones through a rigorous inspection. As a result, each smartphone is fully functional and works just like a new one.",
    },
  },
  {
    productName: "OnePlus 6T",
    productCategoryValueId: 409,
    price: 17900,
    keyword: null,
    productImageUrl:
      "https://d3c745jesl5pj3.cloudfront.net/sell/web/OnePlus 6T_4230757a6bbc403ebc23f2d69c5cfb15.jpg",
    brand: "OnePlus",
    type: null,
    brandCategoryValueId: 393,
    relatedGoods: [
      {
        productId: 1545698481909559296,
        name: "OnePlus 6T",
        brand: "OnePlus",
        merchant: "Amazon",
        brandLogoUrl:
          "https://uptrade-public-static-resources.s3.us-east-2.amazonaws.com/amazon+logo.png",
        buyUrl:
          "https://www.amazon.com/OnePlus-A6013-128GB-Mirror-Black/dp/B07V3TL48P/ref=sr_1_36?keywords=OnePlus+Unlocked+renewed&qid=1657224297&sr=8-36",
        currentPrice: 18499,
        specs: [
          {
            productId: 1545698481909559296,
            key: "CONDITION",
            value: "Excellent",
          },
          {
            productId: 1545698481909559296,
            key: "CARRIER",
            value: "Unlocked",
          },
          {
            productId: 1545698481909559296,
            key: "STORAGE",
            value: "128GB",
          },
          {
            productId: 1545698481909559296,
            key: "COLOR",
            value: "Mirror Black",
          },
        ],
      },
      {
        productId: 1545698486326161408,
        name: "OnePlus 6T",
        brand: "OnePlus",
        merchant: "Amazon",
        brandLogoUrl:
          "https://uptrade-public-static-resources.s3.us-east-2.amazonaws.com/amazon+logo.png",
        buyUrl:
          "https://www.amazon.com/OnePlus-A6013-128GB-Mirror-Black/dp/B07PQSYGKB/ref=sr_1_82?keywords=OnePlus+Unlocked+renewed&qid=1657224581&sr=8-82",
        currentPrice: 18499,
        specs: [
          {
            productId: 1545698486326161408,
            key: "CONDITION",
            value: "Excellent",
          },
          {
            productId: 1545698486326161408,
            key: "CARRIER",
            value: "T-Mobile",
          },
          {
            productId: 1545698486326161408,
            key: "STORAGE",
            value: "128GB",
          },
          {
            productId: 1545698486326161408,
            key: "COLOR",
            value: "Mirror Black",
          },
        ],
      },
      {
        productId: 1545698482391904256,
        name: "OnePlus 6T",
        brand: "OnePlus",
        merchant: "Amazon",
        brandLogoUrl:
          "https://uptrade-public-static-resources.s3.us-east-2.amazonaws.com/amazon+logo.png",
        buyUrl:
          "https://www.amazon.com/OnePlus-Unlocked-Smartphone-Midnight-Refresh/dp/B08XJVZT4R/ref=sr_1_42?keywords=OnePlus+Unlocked+renewed&qid=1657224297&sr=8-42",
        currentPrice: 19699,
        specs: [
          {
            productId: 1545698482391904256,
            key: "CONDITION",
            value: "Excellent",
          },
          {
            productId: 1545698482391904256,
            key: "CARRIER",
            value: "Unlocked",
          },
          {
            productId: 1545698482391904256,
            key: "STORAGE",
            value: "128GB",
          },
          {
            productId: 1545698482391904256,
            key: "COLOR",
            value: "Midnight",
          },
        ],
      },
    ],
    aboutProduct:
      "The OnePlus 6T is like the unsung hero of smartphones. Those in know--in this case tech people--swear by this phone. It’s got work-horse hardware like lightning-speed processing, an incredible camera, and the longest battery life of any phone in its class, and it all comes for a fraction of the cost. It’s time to be in the know!",
    metaDescription:
      "Fully functional OnePlus 6T! An amazing phone at an even better price; photos show condition. Top-notch hardware: excellent camera & lightning processing.",
    metaDescCategory:
      "The OnePlus 6T is the best phone you’ve probably never heard of. The features of the OnePlus 6T make it competitive with other phones of its generation, but it comes in at a fraction of the price. It’s sleek design makes it look high-end; and inside, things get even better with an ultra-powerful rear camera and a battery that actually lasts all day.",
    qa: {
      "Why should you buy a used or refurbished OnePlus 6T?":
        "Why pay more if you are getting the same thing? A refurbished OnePlus 6T is fully functional and works exactly like a brand new OnePlus 6T, except for minimum to normal wear and tear on the cosmetics of the phone. A refurbished OnePlus 6T is a significant saving option when you plan to buy your next OnePlus 6T. Buying a refurbished OnePlus 6T is a fantastic choice. It will net you significant savings, mainly when a new OnePlus 6T costs much more.",
      "What does it mean if the OnePlus 6T is unlocked?":
        "Unlocked means the phone is not locked or limited to any carrier. An unlocked OnePlus 6T can be used with any carrier in the United States. If you are unsure whether the phone is compatible with your mobile phone carrier, buying an unlocked phone is the easiest option. An unlocked OnePlus 6T is likewise an incredible phone to buy as a gift since it will work with any carrier or wireless plan they may have.",
      "What does UpTrade Certified Used mean?":
        "There are hundreds or even thousands of used phone sellers, but unfortunately, not all are legit. To ensure the quality, we have selected a few reputable resellers and marketplaces that can provide high-quality used and refurbished phones. An UpTrade Certified Used OnePlus 6T means it has passed an in-depth inspection by our Certified Seller. UpTrade Certified means the OnePlus 6T you buy will work and function exactly like a new one.",
      "What is the return policy for the Used and Refurbished OnePlus 6T?":
        "Sure! The Refurbished OnePlus 6T listed here comes with a 30-day return policy from the Sellers. So if you have any problem with your purchase, you may contact the Seller and return it to them for up to 30 days.",
      "Are refurbished Android phones as good as new ones?":
        "That’s a good question! Technically, there’s no difference between refurbished and new except that there may be signs of use (if at all) on a refurbished Android phone. All UpTrade Certified Used Phone Sellers process the phones through a rigorous inspection. As a result, each smartphone is fully functional and works just like a new one.",
    },
  },
  {
    productName: "OnePlus 7 Pro",
    productCategoryValueId: 404,
    price: 26799,
    keyword: null,
    productImageUrl:
      "https://d3c745jesl5pj3.cloudfront.net/sell/web/OnePlus 7 Pro_0abde7978e3c4b45b0952f9b27f5a7db.jpg",
    brand: "OnePlus",
    type: null,
    brandCategoryValueId: 393,
    relatedGoods: [
      {
        productId: 1545698479648829440,
        name: "OnePlus 7 Pro",
        brand: "OnePlus",
        merchant: "Amazon",
        brandLogoUrl:
          "https://uptrade-public-static-resources.s3.us-east-2.amazonaws.com/amazon+logo.png",
        buyUrl:
          "https://www.amazon.com/OnePlus-GM1915-256GB-T-Mobile-Unlocked/dp/B085PZQPFX/ref=sr_1_14?keywords=OnePlus+Unlocked+renewed&qid=1657223991&sr=8-14",
        currentPrice: 27488,
        specs: [
          {
            productId: 1545698479648829440,
            key: "CONDITION",
            value: "Excellent",
          },
          {
            productId: 1545698479648829440,
            key: "CARRIER",
            value: "Unlocked",
          },
          {
            productId: 1545698479648829440,
            key: "STORAGE",
            value: "256GB",
          },
          {
            productId: 1545698479648829440,
            key: "COLOR",
            value: "Nebula Blue",
          },
        ],
      },
      {
        productId: 1545698479195844608,
        name: "OnePlus 7 Pro",
        brand: "OnePlus",
        merchant: "Amazon",
        brandLogoUrl:
          "https://uptrade-public-static-resources.s3.us-east-2.amazonaws.com/amazon+logo.png",
        buyUrl:
          "https://www.amazon.com/OnePlus-GM1915-T-Mobile-Unlocked-Renewed/dp/B07YQ8YQCW/ref=sr_1_12?keywords=OnePlus+Unlocked+renewed&qid=1657223991&sr=8-12",
        currentPrice: 27499,
        specs: [
          {
            productId: 1545698479195844608,
            key: "CONDITION",
            value: "Excellent",
          },
          {
            productId: 1545698479195844608,
            key: "CARRIER",
            value: "Unlocked",
          },
          {
            productId: 1545698479195844608,
            key: "STORAGE",
            value: "256GB",
          },
          {
            productId: 1545698479195844608,
            key: "COLOR",
            value: "Mirror Gray",
          },
        ],
      },
      {
        productId: 1545698478747054080,
        name: "OnePlus 7 Pro",
        brand: "OnePlus",
        merchant: "Amazon",
        brandLogoUrl:
          "https://uptrade-public-static-resources.s3.us-east-2.amazonaws.com/amazon+logo.png",
        buyUrl:
          "https://www.amazon.com/GM1925-8GB-RAM-256GB-Unlocked/dp/B08G4M48F3/ref=sr_1_11?keywords=OnePlus+Unlocked+renewed&qid=1657223991&sr=8-11",
        currentPrice: 27999,
        specs: [
          {
            productId: 1545698478747054080,
            key: "CONDITION",
            value: "Excellent",
          },
          {
            productId: 1545698478747054080,
            key: "CARRIER",
            value: "Unlocked",
          },
          {
            productId: 1545698478747054080,
            key: "STORAGE",
            value: "256GB",
          },
          {
            productId: 1545698478747054080,
            key: "COLOR",
            value: "Nebula Blue",
          },
        ],
      },
    ],
    aboutProduct:
      "Never heard of a OnePlus before? Don’t worry, you’re not alone. OnePlus is the best-kept secret of the tech industry. The 7 Pro was rated the best phone of 2019--it’s got all the bells and whistles you could want, like a pop-up selfie camera, three rear-facing cameras, and a in-display fingerprint sensor, all at a lower price than any other comparable phone!",
    metaDescription:
      "Fully functioning, great condition OnePlus 7 Pro. Budget price for an excellent phone--tons of extras. Pop-up selfie cam, triple camera, in-display sensor",
    metaDescCategory:
      "OnePlus phones are consistently some of reviewers’ favorite devices, and the OnePlus 7 Pro is no different. It features a stunning all-screen front, pop-up selfie camera, and a lightning-speed refresh rate that makes movie-watching or gaming seamless. It also boasts competitively fast performance and charging speeds.",
    qa: {
      "Why should you buy a used or refurbished OnePlus 7 Pro?":
        "I am glad that you asked! A refurbished OnePlus 7 Pro is a great opportunity to save when you are looking to purchase your next phone. Buying a refurbished OnePlus 7 Pro can be an wonderful choice and can net you huge savings, particularly when the cost of a new OnePlus 7 Pro is crazy expensive. A refurbished OnePlus 7 Pro is completely functional and works very much like a brand new OnePlus 7 Pro.",
      "What does it mean if the OnePlus 7 Pro is unlocked?":
        "You may use an unlocked OnePlus 7 Pro with any carrier in the United States. Purchasing an unlocked OnePlus 7 Pro is an wonderful choice if you aren’t sure which wireless carrier you want to sign up with, or if you want to be sure the OnePlus 7 Pro will work with your current carrier. An unlocked OnePlus 7 Pro is likewise an incredible phone to buy as a gift since it will work with any carrier or wireless plan that they may have.",
      "What does UpTrade Certified Used mean?":
        "UpTrade Certified means the OnePlus 7 Pro you buy will work and function just like new. Among hundreds of used phone and gadget sellers, we have chosen a modest bunch of reputable resellers and marketplaces that provide high-quality used and refurbished phones. An UpTrade Certified Used OnePlus 7 Pro means it has passed an in-depth inspection by our Certified Seller.",
      "What is the return policy for the Used and Refurbished OnePlus 7 Pro?":
        "Yes! All UpTrade Certified Used Phone Resellers and Marketplaces offer 30-day money-back-guarantee on OnePlus 7 Pro phones listed here. If you aren’t satisfied with your purchase you may return your OnePlus 7 Pro to your seller for free for up to 30 days.",
      "Are refurbished Android phones as good as new ones?":
        "Many people wonder if a refurbished Android phone is as good as a new one. Typically there’s really no difference between them except for the fact that there may be signs of use (if at all) on a refurbished phone. A refurbished Android phone should be fully functional and work just like a new Android phone. All UpTrade Certified Used Phone Resellers process the phones through a rigorous inspection so that each phone is fully functional and works just like a new phone.",
    },
  },
  {
    productName: "OnePlus 7T",
    productCategoryValueId: 397,
    price: 20488,
    keyword: null,
    productImageUrl:
      "https://d3c745jesl5pj3.cloudfront.net/sell/web/OnePlus 7T_a1f3d67fb9c14a9bb6e4e67ce03ec1b5.jpg",
    brand: "OnePlus",
    type: null,
    brandCategoryValueId: 393,
    relatedGoods: [
      {
        productId: 1545698481016172544,
        name: "OnePlus 7T",
        brand: "OnePlus",
        merchant: "Amazon",
        brandLogoUrl:
          "https://uptrade-public-static-resources.s3.us-east-2.amazonaws.com/amazon+logo.png",
        buyUrl:
          "https://www.amazon.com/OnePlus-7T-Snapdragon-T-Mobile-Unlocked/dp/B08J8C5PGW/ref=sr_1_24?keywords=OnePlus+Unlocked+renewed&qid=1657224157&sr=8-24",
        currentPrice: 21059,
        specs: [
          {
            productId: 1545698481016172544,
            key: "CONDITION",
            value: "Excellent",
          },
          {
            productId: 1545698481016172544,
            key: "CARRIER",
            value: "Unlocked",
          },
          {
            productId: 1545698481016172544,
            key: "STORAGE",
            value: "128GB",
          },
          {
            productId: 1545698481016172544,
            key: "COLOR",
            value: "Silver",
          },
        ],
      },
      {
        productId: 1545698481464963072,
        name: "OnePlus 7T",
        brand: "OnePlus",
        merchant: "Amazon",
        brandLogoUrl:
          "https://uptrade-public-static-resources.s3.us-east-2.amazonaws.com/amazon+logo.png",
        buyUrl:
          "https://www.amazon.com/OnePlus-HD1907-Renewed-Frosted-T-Mobile/dp/B095PWJZN6/ref=sr_1_31?keywords=OnePlus+Unlocked+renewed&qid=1657224157&sr=8-31",
        currentPrice: 21295,
        specs: [
          {
            productId: 1545698481464963072,
            key: "CONDITION",
            value: "Excellent",
          },
          {
            productId: 1545698481464963072,
            key: "CARRIER",
            value: "T-Mobile",
          },
          {
            productId: 1545698481464963072,
            key: "STORAGE",
            value: "128GB",
          },
          {
            productId: 1545698481464963072,
            key: "COLOR",
            value: "Silver",
          },
        ],
      },
      {
        productId: 1545698477862055936,
        name: "OnePlus 7T",
        brand: "OnePlus",
        merchant: "Amazon",
        brandLogoUrl:
          "https://uptrade-public-static-resources.s3.us-east-2.amazonaws.com/amazon+logo.png",
        buyUrl:
          "https://www.amazon.com/OnePlus-Display-Snapdragon-T-Mobile-Unlocked/dp/B08GY1PFLX/ref=sr_1_7?keywords=OnePlus+Unlocked+renewed&qid=1657223991&sr=8-7",
        currentPrice: 22284,
        specs: [
          {
            productId: 1545698477862055936,
            key: "CONDITION",
            value: "Excellent",
          },
          {
            productId: 1545698477862055936,
            key: "CARRIER",
            value: "Unlocked",
          },
          {
            productId: 1545698477862055936,
            key: "STORAGE",
            value: "128GB",
          },
          {
            productId: 1545698477862055936,
            key: "COLOR",
            value: "Blue",
          },
        ],
      },
      {
        productId: 1545698478302457856,
        name: "OnePlus 7T",
        brand: "OnePlus",
        merchant: "Amazon",
        brandLogoUrl:
          "https://uptrade-public-static-resources.s3.us-east-2.amazonaws.com/amazon+logo.png",
        buyUrl:
          "https://www.amazon.com/OnePlus-HD1907-8GB-RAM-128GB/dp/B08GL32TW5/ref=sr_1_9?keywords=OnePlus+Unlocked+renewed&qid=1657223991&sr=8-9",
        currentPrice: 23499,
        specs: [
          {
            productId: 1545698478302457856,
            key: "CONDITION",
            value: "Excellent",
          },
          {
            productId: 1545698478302457856,
            key: "CARRIER",
            value: "Unlocked",
          },
          {
            productId: 1545698478302457856,
            key: "STORAGE",
            value: "128GB",
          },
          {
            productId: 1545698478302457856,
            key: "COLOR",
            value: "Blue",
          },
        ],
      },
      {
        productId: 1545698486787534848,
        name: "OnePlus 7T",
        brand: "OnePlus",
        merchant: "Amazon",
        brandLogoUrl:
          "https://uptrade-public-static-resources.s3.us-east-2.amazonaws.com/amazon+logo.png",
        buyUrl:
          "https://www.amazon.com/OnePlus-Android-Smartphone-Single-Sim-T-Mobile/dp/B0947GC4S6/ref=sr_1_85?keywords=OnePlus+Unlocked+renewed&qid=1657224709&sr=8-85",
        currentPrice: 24999,
        specs: [
          {
            productId: 1545698486787534848,
            key: "CONDITION",
            value: "Excellent",
          },
          {
            productId: 1545698486787534848,
            key: "CARRIER",
            value: "T-Mobile",
          },
          {
            productId: 1545698486787534848,
            key: "STORAGE",
            value: "128GB",
          },
          {
            productId: 1545698486787534848,
            key: "COLOR",
            value: "Blue",
          },
        ],
      },
    ],
    aboutProduct:
      "If you’re looking for a newer phone with dependable hardware and software, without a lot of confusing extras, the OnePlus 7 is for you! It has premium quality with high-end power, and boasts all the features you need with nothing you don’t. And fitting OnePlus’ reputation, it gives you more for your dollar!",
    metaDescription:
      "Amazing OnePlus 7 available pre-owned on UpTrade! Fully functional, carefully inspected & sanitized before shipping. Everything you need in a smartphone!",
    metaDescCategory:
      "This is the perfect phone for the practical person in your life. It sits at an excellent price point while offering many of the premium features of high-end phones. It gives you everything you need without bogging down the system or draining your battery with a bunch of extras. A powerful processor and great battery life make this phone top-tier!",
    qa: {
      "Why should you buy a used or refurbished OnePlus 7T?":
        "A refurbished OnePlus 7T functions precisely like a new one. Why pay more? It will save you a lot of money  buying a refurbished OnePlus 7T. More importantly, it reduces e-waste and makes our planet a better place. Buying a refurbished OnePlus 7T is a smart choice.",
      "What does it mean if the OnePlus 7T is unlocked?":
        "Most OnePlus 7T’s bought from wireless carriers are locked to their network. An unlocked OnePlus 7T means the phone has been unlocked and can be used with any carrier in the United States. Choosing an unlocked OnePlus 7T is the safest option if you are unsure which carrier you will use. An unlocked OnePlus 7T is also a great option as a gift since it will work with any carrier or wireless phone plan they currently have.",
      "What does UpTrade Certified Used mean?":
        "UpTrade Certified means you can trust that your used OnePlus 7T will function just as well as a new device. Among hundreds of used phone sellers, we have chosen a modest bunch of reputable sellers and marketplaces that are capable of providing high-quality used and refurbished phones. An UpTrade Certified Used OnePlus 7T means it has passed a rigorous inspection and functions like a new one.",
      "What is the return policy for the Used and Refurbished OnePlus 7T?":
        "No worries if you are not 100% satisfied with the device you have received! Each phone is granted a 30-day trial period in which buyers may return the used device to the UpTrade Certified Seller for a refund within the first 30 days.",
      "Are refurbished Android phones as good as new ones?":
        "For the most part, there is no definite difference between a new phone and a used one, aside from one previously used by another owner. All used phones listed on UpTrade must pass a rigorous inspection to guarantee quality and product performance. Refurbished devices certified by UpTrade work just as well as new, ordinary store-bought phones.",
    },
  },
  {
    productName: "OnePlus 8",
    productCategoryValueId: 401,
    price: 22999,
    keyword: null,
    productImageUrl:
      "https://d3c745jesl5pj3.cloudfront.net/sell/web/OnePlus 8_a3b859390fd84a0fa15fdbf490ae851e.jpg",
    brand: "OnePlus",
    type: null,
    brandCategoryValueId: 393,
    relatedGoods: [
      {
        productId: 1545698480085037056,
        name: "OnePlus 8",
        brand: "OnePlus",
        merchant: "Amazon",
        brandLogoUrl:
          "https://uptrade-public-static-resources.s3.us-east-2.amazonaws.com/amazon+logo.png",
        buyUrl:
          "https://www.amazon.com/Verizon-OnePlus-5G-128GB-OPIN20190BKLR/dp/B08PC849LD/ref=sr_1_18?keywords=OnePlus+Unlocked+renewed&qid=1657223991&sr=8-18",
        currentPrice: 22999,
        specs: [
          {
            productId: 1545698480085037056,
            key: "CONDITION",
            value: "Excellent",
          },
          {
            productId: 1545698480085037056,
            key: "CARRIER",
            value: "Verizon",
          },
          {
            productId: 1545698480085037056,
            key: "STORAGE",
            value: "128GB",
          },
          {
            productId: 1545698480085037056,
            key: "COLOR",
            value: "Onyx Black",
          },
        ],
      },
      {
        productId: 1545698477375516672,
        name: "OnePlus 8",
        brand: "OnePlus",
        merchant: "Amazon",
        brandLogoUrl:
          "https://uptrade-public-static-resources.s3.us-east-2.amazonaws.com/amazon+logo.png",
        buyUrl:
          "https://www.amazon.com/OnePlus-Dual-SIM-Unlocked-Smartphone-International/dp/B088KP8LDG/ref=sr_1_6?keywords=OnePlus+Unlocked+renewed&qid=1657223991&sr=8-6",
        currentPrice: 24200,
        specs: [
          {
            productId: 1545698477375516672,
            key: "CONDITION",
            value: "Excellent",
          },
          {
            productId: 1545698477375516672,
            key: "CARRIER",
            value: "Unlocked",
          },
          {
            productId: 1545698477375516672,
            key: "STORAGE",
            value: "128GB",
          },
          {
            productId: 1545698477375516672,
            key: "COLOR",
            value: "Black",
          },
        ],
      },
      {
        productId: 1545698487227936768,
        name: "OnePlus 8",
        brand: "OnePlus",
        merchant: "Amazon",
        brandLogoUrl:
          "https://uptrade-public-static-resources.s3.us-east-2.amazonaws.com/amazon+logo.png",
        buyUrl:
          "https://www.amazon.com/OnePlus-5G-128GB-8GB-RAM/dp/B08DZR7G46/ref=sr_1_14?keywords=OnePlus+AT%26T+renewed&qid=1657225906&sr=8-14",
        currentPrice: 24245,
        specs: [
          {
            productId: 1545698487227936768,
            key: "CONDITION",
            value: "Excellent",
          },
          {
            productId: 1545698487227936768,
            key: "CARRIER",
            value: "T-Mobile",
          },
          {
            productId: 1545698487227936768,
            key: "STORAGE",
            value: "128GB",
          },
          {
            productId: 1545698487227936768,
            key: "COLOR",
            value: "Black",
          },
        ],
      },
      {
        productId: 1545698475957841920,
        name: "OnePlus 8",
        brand: "OnePlus",
        merchant: "Amazon",
        brandLogoUrl:
          "https://uptrade-public-static-resources.s3.us-east-2.amazonaws.com/amazon+logo.png",
        buyUrl:
          "https://www.amazon.com/OnePlus-IN2019-128GB-8GB-Verizon/dp/B08TCJ9J78/ref=sr_1_3?keywords=OnePlus+Unlocked+renewed&qid=1657223991&sr=8-3",
        currentPrice: 26000,
        specs: [
          {
            productId: 1545698475957841920,
            key: "CONDITION",
            value: "Excellent",
          },
          {
            productId: 1545698475957841920,
            key: "CARRIER",
            value: "Verizon",
          },
          {
            productId: 1545698475957841920,
            key: "STORAGE",
            value: "128GB",
          },
          {
            productId: 1545698475957841920,
            key: "COLOR",
            value: "Silver",
          },
        ],
      },
      {
        productId: 1545698483838939136,
        name: "OnePlus 8",
        brand: "OnePlus",
        merchant: "Amazon",
        brandLogoUrl:
          "https://uptrade-public-static-resources.s3.us-east-2.amazonaws.com/amazon+logo.png",
        buyUrl:
          "https://www.amazon.com/OnePlus-Snapdragon-Verizon-Unlocked-T-Mobile/dp/B08W2BCDBH/ref=sr_1_52?keywords=OnePlus+Unlocked+renewed&qid=1657224453&sr=8-52",
        currentPrice: 34999,
        specs: [
          {
            productId: 1545698483838939136,
            key: "CONDITION",
            value: "Excellent",
          },
          {
            productId: 1545698483838939136,
            key: "CARRIER",
            value: "Unlocked",
          },
          {
            productId: 1545698483838939136,
            key: "STORAGE",
            value: "128GB",
          },
          {
            productId: 1545698483838939136,
            key: "COLOR",
            value: "Onyx Black",
          },
        ],
      },
    ],
    aboutProduct:
      "The OnePlus 8 5G delivers a flagship-level experience at an amazing price. The AMOLED 90Hz Fluid Display refreshes 50% more than average smartphones every second, and delivers an ultra-smooth and stunning visual experience. Shoot brilliant photos and videos with the enhanced triple camera system. Experience long-lasting battery with OnePlus Warp Charge 30T.",
    metaDescription:
      "OnePlus 8 Pro. All phones are Fully Inspected, Certified Used, and Fully Functional. Great price.  6.55” Display. 5G.",
    metaDescCategory:
      "OnePlus · OnePlus 8 · Android · 6.78″ · Fingerprint Scanner · Facial Recognition · 16 MP front camera · 48 MP rear camera · Smartphone · With Wireless Charging",
    qa: {
      "Why should you buy a used or refurbished OnePlus 8?":
        "Why pay more if you are getting the same thing? A refurbished OnePlus 8 is fully functional and works exactly like a brand new OnePlus 8, except for minimum to normal wear and tear on the cosmetics of the phone. A refurbished OnePlus 8 is a significant saving option when you plan to buy your next OnePlus 8. Buying a refurbished OnePlus 8 is a fantastic choice. It will net you significant savings, mainly when a new OnePlus 8 costs much more.",
      "What does it mean if the OnePlus 8 is unlocked?":
        "Unlocked means the phone is not locked or limited to any carrier. An unlocked OnePlus 8 can be used with any carrier in the United States. If you are unsure whether the phone is compatible with your mobile phone carrier, buying an unlocked phone is the easiest option. An unlocked OnePlus 8 is likewise an incredible phone to buy as a gift since it will work with any carrier or wireless plan they may have.",
      "What does UpTrade Certified Used mean?":
        "There are hundreds or even thousands of used phone sellers, but unfortunately, not all are legit. To ensure the quality, we have selected a few reputable resellers and marketplaces that can provide high-quality used and refurbished phones. An UpTrade Certified Used OnePlus 8 means it has passed an in-depth inspection by our Certified Seller. UpTrade Certified means the OnePlus 8 you buy will work and function exactly like a new one.",
      "What is the return policy for the Used and Refurbished OnePlus 8?":
        "Sure! The Refurbished OnePlus 8 listed here comes with a 30-day return policy from the Sellers. So if you have any problem with your purchase, you may contact the Seller and return it to them for up to 30 days.",
      "Are refurbished Android phones as good as new ones?":
        "That’s a good question! Technically, there’s no difference between refurbished and new except that there may be signs of use (if at all) on a refurbished Android phone. All UpTrade Certified Used Phone Sellers process the phones through a rigorous inspection. As a result, each smartphone is fully functional and works just like a new one.",
    },
  },
  {
    productName: "OnePlus 8 Pro",
    productCategoryValueId: 515,
    price: null,
    keyword: null,
    productImageUrl:
      "https://d3c745jesl5pj3.cloudfront.net/sell/web/OnePlus 8 Pro_6b7f2b5284274544ae88f0273afc1c14.jpg",
    brand: "OnePlus",
    type: null,
    brandCategoryValueId: 393,
    relatedGoods: [
      {
        productId: 1545690893755117568,
        name: "OnePlus 6T",
        brand: "OnePlus",
        merchant: "Amazon",
        brandLogoUrl:
          "https://uptrade-public-static-resources.s3.us-east-2.amazonaws.com/amazon+logo.png",
        buyUrl:
          "https://www.amazon.com/OnePlus-A6013-128GB-Mirror-Black/dp/B07V3TL48P/ref=sr_1_21?crid=L7GC4NIUEDR8&keywords=OnePlus+Unlocked+renewed&qid=1655047520&sprefix=oneplus+unlocked+ren%2Caps%2C138&sr=8-21",
        currentPrice: 17900,
        specs: [
          {
            productId: 1545690893755117568,
            key: "CONDITION",
            value: "Excellent",
          },
          {
            productId: 1545690893755117568,
            key: "CARRIER",
            value: "Unlocked",
          },
          {
            productId: 1545690893755117568,
            key: "STORAGE",
            value: "128GB",
          },
          {
            productId: 1545690893755117568,
            key: "COLOR",
            value: "Mirror Black",
          },
        ],
      },
      {
        productId: 1545690890059935744,
        name: "OnePlus 7T",
        brand: "OnePlus",
        merchant: "Amazon",
        brandLogoUrl:
          "https://uptrade-public-static-resources.s3.us-east-2.amazonaws.com/amazon+logo.png",
        buyUrl:
          "https://www.amazon.com/OnePlus-HD1907-8GB-RAM-128GB/dp/B08GL32TW5/ref=sr_1_5?crid=L7GC4NIUEDR8&keywords=OnePlus+Unlocked+renewed&qid=1655047220&sprefix=oneplus+unlocked+ren%2Caps%2C138&sr=8-5",
        currentPrice: 20488,
        specs: [
          {
            productId: 1545690890059935744,
            key: "CONDITION",
            value: "Excellent",
          },
          {
            productId: 1545690890059935744,
            key: "CARRIER",
            value: "Unlocked",
          },
          {
            productId: 1545690890059935744,
            key: "STORAGE",
            value: "128GB",
          },
          {
            productId: 1545690890059935744,
            key: "COLOR",
            value: "Blue",
          },
        ],
      },
      {
        productId: 1545690891125288960,
        name: "OnePlus 8",
        brand: "OnePlus",
        merchant: "Amazon",
        brandLogoUrl:
          "https://uptrade-public-static-resources.s3.us-east-2.amazonaws.com/amazon+logo.png",
        buyUrl:
          "https://www.amazon.com/OnePlus-Dual-SIM-Unlocked-Smartphone-International/dp/B088KP8LDG/ref=sr_1_7?crid=L7GC4NIUEDR8&keywords=OnePlus+Unlocked+renewed&qid=1655047220&sprefix=oneplus+unlocked+ren%2Caps%2C138&sr=8-7",
        currentPrice: 22999,
        specs: [
          {
            productId: 1545690891125288960,
            key: "CONDITION",
            value: "Excellent",
          },
          {
            productId: 1545690891125288960,
            key: "CARRIER",
            value: "Unlocked",
          },
          {
            productId: 1545690891125288960,
            key: "STORAGE",
            value: "128GB",
          },
          {
            productId: 1545690891125288960,
            key: "COLOR",
            value: "Black",
          },
        ],
      },
      {
        productId: 1545691261201313792,
        name: "OnePlus 8 Pro",
        brand: "OnePlus",
        merchant: "Amazon",
        brandLogoUrl:
          "https://uptrade-public-static-resources.s3.us-east-2.amazonaws.com/amazon+logo.png",
        buyUrl:
          "https://www.amazon.com/OnePlus-Unlocked-Android-Smartphone-Wireless/dp/B08H7P9Z7D/ref=sr_1_3?crid=1J8S6VZVBJHST&keywords=OnePlus+Unlocked+renewed&qid=1655113923&sprefix=oneplus+unlocked+renewed%2Caps%2C2809&sr=8-3",
        currentPrice: 24444,
        specs: [
          {
            productId: 1545691261201313792,
            key: "CONDITION",
            value: "Excellent",
          },
          {
            productId: 1545691261201313792,
            key: "CARRIER",
            value: "Unlocked",
          },
          {
            productId: 1545691261201313792,
            key: "STORAGE",
            value: "256GB",
          },
          {
            productId: 1545691261201313792,
            key: "COLOR",
            value: "Onyx Black",
          },
        ],
      },
      {
        productId: 1545690891695714304,
        name: "OnePlus 7 Pro",
        brand: "OnePlus",
        merchant: "Amazon",
        brandLogoUrl:
          "https://uptrade-public-static-resources.s3.us-east-2.amazonaws.com/amazon+logo.png",
        buyUrl:
          "https://www.amazon.com/OnePlus-Unlocked-GM1915-T-Mobile-Renewed/dp/B07YQ6X515/ref=sr_1_13?crid=L7GC4NIUEDR8&keywords=OnePlus+Unlocked+renewed&qid=1655047220&sprefix=oneplus+unlocked+ren%2Caps%2C138&sr=8-13",
        currentPrice: 26799,
        specs: [
          {
            productId: 1545690891695714304,
            key: "CONDITION",
            value: "Excellent",
          },
          {
            productId: 1545690891695714304,
            key: "CARRIER",
            value: "Unlocked",
          },
          {
            productId: 1545690891695714304,
            key: "STORAGE",
            value: "256GB",
          },
          {
            productId: 1545690891695714304,
            key: "COLOR",
            value: "Nebula Blue",
          },
        ],
      },
    ],
    aboutProduct:
      "The OnePlus 8 Pro is equipped with a 2K+ 120Hz screen which received an A+ from the world’s leading authority on screen quality and performance. The OnePlus 8 Pro's Fluid Engine ensures that the content flows seamlessly on the brilliant QHD+ display with 3168 x 1440 pixels and 513ppi. The OP8 Pro comes with an aspect ratio of 19.8:9 and the cover glass is 3D Corning Gorilla Glass for the best possible protection. Additional features of the display include Adaptive Display, Vibrant Color Effect Pro, Motion Graphics Smoothing, Reading Mode and Night Mode. Beside DisplayMate A+, the brand new OnePlus 8 Pro comes with dual 5G support and is powered by a Qualcomm Snapdragon 865 including a X55 modem, DDR5 RAM and UFS3.0 internal storage standard.",
    metaDescription:
      "OnePlus 8 Pro. All phones are Fully Inspected, Certified Used, and Fully Functional. Great price.  6.78” Display. 5G.",
    metaDescCategory:
      "OnePlus · OnePlus 8 · OnePlus 8 Pro · Android · 6.78″ · Fingerprint Scanner · 16 MP front camera · 48 MP rear camera · Smartphone · With Wireless Charging · 7.02 oz",
    qa: {
      "Why should you buy a used or refurbished OnePlus 8 Pro?":
        "I am glad that you asked! A refurbished OnePlus 8 Pro is a great opportunity to save when you are looking to purchase your next phone. Buying a refurbished OnePlus 8 Pro can be an wonderful choice and can net you huge savings, particularly when the cost of a new OnePlus 8 Pro is crazy expensive. A refurbished OnePlus 8 Pro is completely functional and works very much like a brand new OnePlus 8 Pro.",
      "What does it mean if the OnePlus 8 Pro is unlocked?":
        "You may use an unlocked OnePlus 8 Pro with any carrier in the United States. Purchasing an unlocked OnePlus 8 Pro is an wonderful choice if you aren’t sure which wireless carrier you want to sign up with, or if you want to be sure the OnePlus 8 Pro will work with your current carrier. An unlocked OnePlus 8 Pro is likewise an incredible phone to buy as a gift since it will work with any carrier or wireless plan that they may have.",
      "What does UpTrade Certified Used mean?":
        "UpTrade Certified means the OnePlus 8 Pro you buy will work and function just like new. Among hundreds of used phone and gadget sellers, we have chosen a modest bunch of reputable resellers and marketplaces that provide high-quality used and refurbished phones. An UpTrade Certified Used OnePlus 8 Pro means it has passed an in-depth inspection by our Certified Seller.",
      "What is the return policy for the Used and Refurbished OnePlus 8 Pro?":
        "Yes! All UpTrade Certified Used Phone Resellers and Marketplaces offer 30-day money-back-guarantee on OnePlus 8 Pro phones listed here. If you aren’t satisfied with your purchase you may return your OnePlus 8 Pro to your seller for free for up to 30 days.",
      "Are refurbished Android phones as good as new ones?":
        "Many people wonder if a refurbished Android phone is as good as a new one. Typically there’s really no difference between them except for the fact that there may be signs of use (if at all) on a refurbished phone. A refurbished Android phone should be fully functional and work just like a new Android phone. All UpTrade Certified Used Phone Resellers process the phones through a rigorous inspection so that each phone is fully functional and works just like a new phone.",
    },
  },
  {
    productName: "OnePlus 8T",
    productCategoryValueId: 394,
    price: 26999,
    keyword: null,
    productImageUrl:
      "https://d3c745jesl5pj3.cloudfront.net/sell/web/OnePlus 8T_d64aec8d1cf94a8ab1b9ef02d1683161.jpg",
    brand: "OnePlus",
    type: null,
    brandCategoryValueId: 393,
    relatedGoods: [
      {
        productId: 1545698538268422144,
        name: "OnePlus 8T",
        brand: "OnePlus",
        merchant: "Amazon",
        brandLogoUrl:
          "https://uptrade-public-static-resources.s3.us-east-2.amazonaws.com/amazon+logo.png",
        buyUrl:
          "https://www.amazon.com/OnePlus-8T-5G-KB2007-Smartphone/dp/B08PDN4C33/ref=sr_1_6?keywords=OnePlus+Unlocked+renewed&qid=1657288790&sr=8-6",
        currentPrice: 29489,
        specs: [
          {
            productId: 1545698538268422144,
            key: "CONDITION",
            value: "Excellent",
          },
          {
            productId: 1545698538268422144,
            key: "CARRIER",
            value: "Unlocked",
          },
          {
            productId: 1545698538268422144,
            key: "STORAGE",
            value: "256GB",
          },
          {
            productId: 1545698538268422144,
            key: "COLOR",
            value: "Lunar Silver",
          },
        ],
      },
      {
        productId: 1545698476930920448,
        name: "OnePlus 8T",
        brand: "OnePlus",
        merchant: "Amazon",
        brandLogoUrl:
          "https://uptrade-public-static-resources.s3.us-east-2.amazonaws.com/amazon+logo.png",
        buyUrl:
          "https://www.amazon.com/OnePlus-8T-5G-KB2007-Smartphone/dp/B08NK4FHRW/ref=sr_1_5?keywords=OnePlus+Unlocked+renewed&qid=1657223991&sr=8-5",
        currentPrice: 29999,
        specs: [
          {
            productId: 1545698476930920448,
            key: "CONDITION",
            value: "Excellent",
          },
          {
            productId: 1545698476930920448,
            key: "CARRIER",
            value: "Unlocked",
          },
          {
            productId: 1545698476930920448,
            key: "STORAGE",
            value: "256GB",
          },
          {
            productId: 1545698476930920448,
            key: "COLOR",
            value: "Aquamarine Green",
          },
        ],
      },
      {
        productId: 1545698483339816960,
        name: "OnePlus 8T",
        brand: "OnePlus",
        merchant: "Amazon",
        brandLogoUrl:
          "https://uptrade-public-static-resources.s3.us-east-2.amazonaws.com/amazon+logo.png",
        buyUrl:
          "https://www.amazon.com/OnePlus-Android-Smartphone-Aquamarine-T-Mobile/dp/B09Q1HT5GM/ref=sr_1_45?keywords=OnePlus+Unlocked+renewed&qid=1657224297&sr=8-45",
        currentPrice: 30900,
        specs: [
          {
            productId: 1545698483339816960,
            key: "CONDITION",
            value: "Excellent",
          },
          {
            productId: 1545698483339816960,
            key: "CARRIER",
            value: "T-Mobile",
          },
          {
            productId: 1545698483339816960,
            key: "STORAGE",
            value: "256GB",
          },
          {
            productId: 1545698483339816960,
            key: "COLOR",
            value: "Aquamarine Green",
          },
        ],
      },
    ],
    aboutProduct:
      "The OnePlus 8T is your premium smartphone experience at an amazing price. The 120 Hz AMOLED display refreshes 2 times faster than standard displays every second and makes your everyday uses on the smartphone feel much smoother. OnePlus 8T also brings its fastest ever charging to this smartphone with Warp Charge 65 - takes you from 1% to 40% in just 10 minutes. This means you can be ready for an entire day of use in a matter of minutes.",
    metaDescription:
      "OnePlus 8T. All phones are Fully Inspected, Certified Used, and Fully Functional. Great price.  6.55” Display. 5G.",
    metaDescCategory:
      "OnePlus · OnePlus 8 · OnePlus 8T · Android · 6.55″ · 16 MP rear camera · Smartphone · 6.63 oz · 5G",
    qa: {
      "Why should you buy a used or refurbished OnePlus 8T?":
        "I am glad that you asked! A refurbished OnePlus 8T is a great opportunity to save when you are looking to purchase your next phone. Buying a refurbished OnePlus 8T can be an wonderful choice and can net you huge savings, particularly when the cost of a new OnePlus 8T is crazy expensive. A refurbished OnePlus 8T is completely functional and works very much like a brand new OnePlus 8T.",
      "What does it mean if the OnePlus 8T is unlocked?":
        "You may use an unlocked OnePlus 8T with any carrier in the United States. Purchasing an unlocked OnePlus 8T is an wonderful choice if you aren’t sure which wireless carrier you want to sign up with, or if you want to be sure the OnePlus 8T will work with your current carrier. An unlocked OnePlus 8T is likewise an incredible phone to buy as a gift since it will work with any carrier or wireless plan that they may have.",
      "What does UpTrade Certified Used mean?":
        "UpTrade Certified means the OnePlus 8T you buy will work and function just like new. Among hundreds of used phone and gadget sellers, we have chosen a modest bunch of reputable resellers and marketplaces that provide high-quality used and refurbished phones. An UpTrade Certified Used OnePlus 8T means it has passed an in-depth inspection by our Certified Seller.",
      "What is the return policy for the Used and Refurbished OnePlus 8T?":
        "Yes! All UpTrade Certified Used Phone Resellers and Marketplaces offer 30-day money-back-guarantee on OnePlus 8T phones listed here. If you aren’t satisfied with your purchase you may return your OnePlus 8T to your seller for free for up to 30 days.",
      "Are refurbished Android phones as good as new ones?":
        "Many people wonder if a refurbished Android phone is as good as a new one. Typically there’s really no difference between them except for the fact that there may be signs of use (if at all) on a refurbished phone. A refurbished Android phone should be fully functional and work just like a new Android phone. All UpTrade Certified Used Phone Resellers process the phones through a rigorous inspection so that each phone is fully functional and works just like a new phone.",
    },
  },
  {
    productName: "OnePlus 9",
    productCategoryValueId: 417,
    price: null,
    keyword: null,
    productImageUrl:
      "https://d3c745jesl5pj3.cloudfront.net/sell/web/OnePlus 9_9ed9985b56094caaa24813fbb2935912.jpg",
    brand: "OnePlus",
    type: null,
    brandCategoryValueId: 393,
    relatedGoods: [
      {
        productId: 1545690893755117568,
        name: "OnePlus 6T",
        brand: "OnePlus",
        merchant: "Amazon",
        brandLogoUrl:
          "https://uptrade-public-static-resources.s3.us-east-2.amazonaws.com/amazon+logo.png",
        buyUrl:
          "https://www.amazon.com/OnePlus-A6013-128GB-Mirror-Black/dp/B07V3TL48P/ref=sr_1_21?crid=L7GC4NIUEDR8&keywords=OnePlus+Unlocked+renewed&qid=1655047520&sprefix=oneplus+unlocked+ren%2Caps%2C138&sr=8-21",
        currentPrice: 17900,
        specs: [
          {
            productId: 1545690893755117568,
            key: "CONDITION",
            value: "Excellent",
          },
          {
            productId: 1545690893755117568,
            key: "CARRIER",
            value: "Unlocked",
          },
          {
            productId: 1545690893755117568,
            key: "STORAGE",
            value: "128GB",
          },
          {
            productId: 1545690893755117568,
            key: "COLOR",
            value: "Mirror Black",
          },
        ],
      },
      {
        productId: 1545690890059935744,
        name: "OnePlus 7T",
        brand: "OnePlus",
        merchant: "Amazon",
        brandLogoUrl:
          "https://uptrade-public-static-resources.s3.us-east-2.amazonaws.com/amazon+logo.png",
        buyUrl:
          "https://www.amazon.com/OnePlus-HD1907-8GB-RAM-128GB/dp/B08GL32TW5/ref=sr_1_5?crid=L7GC4NIUEDR8&keywords=OnePlus+Unlocked+renewed&qid=1655047220&sprefix=oneplus+unlocked+ren%2Caps%2C138&sr=8-5",
        currentPrice: 20488,
        specs: [
          {
            productId: 1545690890059935744,
            key: "CONDITION",
            value: "Excellent",
          },
          {
            productId: 1545690890059935744,
            key: "CARRIER",
            value: "Unlocked",
          },
          {
            productId: 1545690890059935744,
            key: "STORAGE",
            value: "128GB",
          },
          {
            productId: 1545690890059935744,
            key: "COLOR",
            value: "Blue",
          },
        ],
      },
      {
        productId: 1545690891125288960,
        name: "OnePlus 8",
        brand: "OnePlus",
        merchant: "Amazon",
        brandLogoUrl:
          "https://uptrade-public-static-resources.s3.us-east-2.amazonaws.com/amazon+logo.png",
        buyUrl:
          "https://www.amazon.com/OnePlus-Dual-SIM-Unlocked-Smartphone-International/dp/B088KP8LDG/ref=sr_1_7?crid=L7GC4NIUEDR8&keywords=OnePlus+Unlocked+renewed&qid=1655047220&sprefix=oneplus+unlocked+ren%2Caps%2C138&sr=8-7",
        currentPrice: 22999,
        specs: [
          {
            productId: 1545690891125288960,
            key: "CONDITION",
            value: "Excellent",
          },
          {
            productId: 1545690891125288960,
            key: "CARRIER",
            value: "Unlocked",
          },
          {
            productId: 1545690891125288960,
            key: "STORAGE",
            value: "128GB",
          },
          {
            productId: 1545690891125288960,
            key: "COLOR",
            value: "Black",
          },
        ],
      },
      {
        productId: 1545691261201313792,
        name: "OnePlus 8 Pro",
        brand: "OnePlus",
        merchant: "Amazon",
        brandLogoUrl:
          "https://uptrade-public-static-resources.s3.us-east-2.amazonaws.com/amazon+logo.png",
        buyUrl:
          "https://www.amazon.com/OnePlus-Unlocked-Android-Smartphone-Wireless/dp/B08H7P9Z7D/ref=sr_1_3?crid=1J8S6VZVBJHST&keywords=OnePlus+Unlocked+renewed&qid=1655113923&sprefix=oneplus+unlocked+renewed%2Caps%2C2809&sr=8-3",
        currentPrice: 24444,
        specs: [
          {
            productId: 1545691261201313792,
            key: "CONDITION",
            value: "Excellent",
          },
          {
            productId: 1545691261201313792,
            key: "CARRIER",
            value: "Unlocked",
          },
          {
            productId: 1545691261201313792,
            key: "STORAGE",
            value: "256GB",
          },
          {
            productId: 1545691261201313792,
            key: "COLOR",
            value: "Onyx Black",
          },
        ],
      },
      {
        productId: 1545690891695714304,
        name: "OnePlus 7 Pro",
        brand: "OnePlus",
        merchant: "Amazon",
        brandLogoUrl:
          "https://uptrade-public-static-resources.s3.us-east-2.amazonaws.com/amazon+logo.png",
        buyUrl:
          "https://www.amazon.com/OnePlus-Unlocked-GM1915-T-Mobile-Renewed/dp/B07YQ6X515/ref=sr_1_13?crid=L7GC4NIUEDR8&keywords=OnePlus+Unlocked+renewed&qid=1655047220&sprefix=oneplus+unlocked+ren%2Caps%2C138&sr=8-13",
        currentPrice: 26799,
        specs: [
          {
            productId: 1545690891695714304,
            key: "CONDITION",
            value: "Excellent",
          },
          {
            productId: 1545690891695714304,
            key: "CARRIER",
            value: "Unlocked",
          },
          {
            productId: 1545690891695714304,
            key: "STORAGE",
            value: "256GB",
          },
          {
            productId: 1545690891695714304,
            key: "COLOR",
            value: "Nebula Blue",
          },
        ],
      },
    ],
    aboutProduct: null,
    metaDescription:
      "OnePlus at it's finest! Fully certified used OnePlus 9 available with the all new high performing camera designed by Hasselblad.",
    metaDescCategory: null,
    qa: {
      "Why should you buy a used or refurbished OnePlus 9?":
        "I am glad that you asked! A refurbished OnePlus 9 is a great opportunity to save when you are looking to purchase your next phone. Buying a refurbished OnePlus 9 can be an wonderful choice and can net you huge savings, particularly when the cost of a new OnePlus 9 is crazy expensive. A refurbished OnePlus 9 is completely functional and works very much like a brand new OnePlus 9.",
      "What does it mean if the OnePlus 9 is unlocked?":
        "You may use an unlocked OnePlus 9 with any carrier in the United States. Purchasing an unlocked OnePlus 9 is an wonderful choice if you aren’t sure which wireless carrier you want to sign up with, or if you want to be sure the OnePlus 9 will work with your current carrier. An unlocked OnePlus 9 is likewise an incredible phone to buy as a gift since it will work with any carrier or wireless plan that they may have.",
      "What does UpTrade Certified Used mean?":
        "UpTrade Certified means the OnePlus 9 you buy will work and function just like new. Among hundreds of used phone and gadget sellers, we have chosen a modest bunch of reputable resellers and marketplaces that provide high-quality used and refurbished phones. An UpTrade Certified Used OnePlus 9 means it has passed an in-depth inspection by our Certified Seller.",
      "What is the return policy for the Used and Refurbished OnePlus 9?":
        "Yes! All UpTrade Certified Used Phone Resellers and Marketplaces offer 30-day money-back-guarantee on OnePlus 9 phones listed here. If you aren’t satisfied with your purchase you may return your OnePlus 9 to your seller for free for up to 30 days.",
      "Are refurbished Android phones as good as new ones?":
        "Many people wonder if a refurbished Android phone is as good as a new one. Typically there’s really no difference between them except for the fact that there may be signs of use (if at all) on a refurbished phone. A refurbished Android phone should be fully functional and work just like a new Android phone. All UpTrade Certified Used Phone Resellers process the phones through a rigorous inspection so that each phone is fully functional and works just like a new phone.",
    },
  },
  {
    productName: "OnePlus 9 Pro",
    productCategoryValueId: 577,
    price: null,
    keyword: null,
    productImageUrl:
      "https://d3c745jesl5pj3.cloudfront.net/sell/web/oneplus 9 pro_7995fed9a6d44ac4855d9af7dcfa92f6.jpg",
    brand: "OnePlus",
    type: null,
    brandCategoryValueId: 393,
    relatedGoods: [
      {
        productId: 1545690893755117568,
        name: "OnePlus 6T",
        brand: "OnePlus",
        merchant: "Amazon",
        brandLogoUrl:
          "https://uptrade-public-static-resources.s3.us-east-2.amazonaws.com/amazon+logo.png",
        buyUrl:
          "https://www.amazon.com/OnePlus-A6013-128GB-Mirror-Black/dp/B07V3TL48P/ref=sr_1_21?crid=L7GC4NIUEDR8&keywords=OnePlus+Unlocked+renewed&qid=1655047520&sprefix=oneplus+unlocked+ren%2Caps%2C138&sr=8-21",
        currentPrice: 17900,
        specs: [
          {
            productId: 1545690893755117568,
            key: "CONDITION",
            value: "Excellent",
          },
          {
            productId: 1545690893755117568,
            key: "CARRIER",
            value: "Unlocked",
          },
          {
            productId: 1545690893755117568,
            key: "STORAGE",
            value: "128GB",
          },
          {
            productId: 1545690893755117568,
            key: "COLOR",
            value: "Mirror Black",
          },
        ],
      },
      {
        productId: 1545690890059935744,
        name: "OnePlus 7T",
        brand: "OnePlus",
        merchant: "Amazon",
        brandLogoUrl:
          "https://uptrade-public-static-resources.s3.us-east-2.amazonaws.com/amazon+logo.png",
        buyUrl:
          "https://www.amazon.com/OnePlus-HD1907-8GB-RAM-128GB/dp/B08GL32TW5/ref=sr_1_5?crid=L7GC4NIUEDR8&keywords=OnePlus+Unlocked+renewed&qid=1655047220&sprefix=oneplus+unlocked+ren%2Caps%2C138&sr=8-5",
        currentPrice: 20488,
        specs: [
          {
            productId: 1545690890059935744,
            key: "CONDITION",
            value: "Excellent",
          },
          {
            productId: 1545690890059935744,
            key: "CARRIER",
            value: "Unlocked",
          },
          {
            productId: 1545690890059935744,
            key: "STORAGE",
            value: "128GB",
          },
          {
            productId: 1545690890059935744,
            key: "COLOR",
            value: "Blue",
          },
        ],
      },
      {
        productId: 1545690891125288960,
        name: "OnePlus 8",
        brand: "OnePlus",
        merchant: "Amazon",
        brandLogoUrl:
          "https://uptrade-public-static-resources.s3.us-east-2.amazonaws.com/amazon+logo.png",
        buyUrl:
          "https://www.amazon.com/OnePlus-Dual-SIM-Unlocked-Smartphone-International/dp/B088KP8LDG/ref=sr_1_7?crid=L7GC4NIUEDR8&keywords=OnePlus+Unlocked+renewed&qid=1655047220&sprefix=oneplus+unlocked+ren%2Caps%2C138&sr=8-7",
        currentPrice: 22999,
        specs: [
          {
            productId: 1545690891125288960,
            key: "CONDITION",
            value: "Excellent",
          },
          {
            productId: 1545690891125288960,
            key: "CARRIER",
            value: "Unlocked",
          },
          {
            productId: 1545690891125288960,
            key: "STORAGE",
            value: "128GB",
          },
          {
            productId: 1545690891125288960,
            key: "COLOR",
            value: "Black",
          },
        ],
      },
      {
        productId: 1545691261201313792,
        name: "OnePlus 8 Pro",
        brand: "OnePlus",
        merchant: "Amazon",
        brandLogoUrl:
          "https://uptrade-public-static-resources.s3.us-east-2.amazonaws.com/amazon+logo.png",
        buyUrl:
          "https://www.amazon.com/OnePlus-Unlocked-Android-Smartphone-Wireless/dp/B08H7P9Z7D/ref=sr_1_3?crid=1J8S6VZVBJHST&keywords=OnePlus+Unlocked+renewed&qid=1655113923&sprefix=oneplus+unlocked+renewed%2Caps%2C2809&sr=8-3",
        currentPrice: 24444,
        specs: [
          {
            productId: 1545691261201313792,
            key: "CONDITION",
            value: "Excellent",
          },
          {
            productId: 1545691261201313792,
            key: "CARRIER",
            value: "Unlocked",
          },
          {
            productId: 1545691261201313792,
            key: "STORAGE",
            value: "256GB",
          },
          {
            productId: 1545691261201313792,
            key: "COLOR",
            value: "Onyx Black",
          },
        ],
      },
      {
        productId: 1545690891695714304,
        name: "OnePlus 7 Pro",
        brand: "OnePlus",
        merchant: "Amazon",
        brandLogoUrl:
          "https://uptrade-public-static-resources.s3.us-east-2.amazonaws.com/amazon+logo.png",
        buyUrl:
          "https://www.amazon.com/OnePlus-Unlocked-GM1915-T-Mobile-Renewed/dp/B07YQ6X515/ref=sr_1_13?crid=L7GC4NIUEDR8&keywords=OnePlus+Unlocked+renewed&qid=1655047220&sprefix=oneplus+unlocked+ren%2Caps%2C138&sr=8-13",
        currentPrice: 26799,
        specs: [
          {
            productId: 1545690891695714304,
            key: "CONDITION",
            value: "Excellent",
          },
          {
            productId: 1545690891695714304,
            key: "CARRIER",
            value: "Unlocked",
          },
          {
            productId: 1545690891695714304,
            key: "STORAGE",
            value: "256GB",
          },
          {
            productId: 1545690891695714304,
            key: "COLOR",
            value: "Nebula Blue",
          },
        ],
      },
    ],
    aboutProduct: null,
    metaDescription:
      "Innovation in the palm of your hand. Certified pre-owned One Plus 9 Pro is a premium flagship phone without the flagship price!",
    metaDescCategory: null,
    qa: {
      "Why should you buy a used or refurbished OnePlus 9 Pro?":
        "A refurbished OnePlus 9 Pro functions precisely like a new one. Why pay more? It will save you a lot of money  buying a refurbished OnePlus 9 Pro. More importantly, it reduces e-waste and makes our planet a better place. Buying a refurbished OnePlus 9 Pro is a smart choice.",
      "What does it mean if the OnePlus 9 Pro is unlocked?":
        "Most OnePlus 9 Pro’s bought from wireless carriers are locked to their network. An unlocked OnePlus 9 Pro means the phone has been unlocked and can be used with any carrier in the United States. Choosing an unlocked OnePlus 9 Pro is the safest option if you are unsure which carrier you will use. An unlocked OnePlus 9 Pro is also a great option as a gift since it will work with any carrier or wireless phone plan they currently have.",
      "What does UpTrade Certified Used mean?":
        "UpTrade Certified means you can trust that your used OnePlus 9 Pro will function just as well as a new device. Among hundreds of used phone sellers, we have chosen a modest bunch of reputable sellers and marketplaces that are capable of providing high-quality used and refurbished phones. An UpTrade Certified Used OnePlus 9 Pro means it has passed a rigorous inspection and functions like a new one.",
      "What is the return policy for the Used and Refurbished OnePlus 9 Pro?":
        "No worries if you are not 100% satisfied with the device you have received! Each phone is granted a 30-day trial period in which buyers may return the used device to the UpTrade Certified Seller for a refund within the first 30 days.",
      "Are refurbished Android phones as good as new ones?":
        "For the most part, there is no definite difference between a new phone and a used one, aside from one previously used by another owner. All used phones listed on UpTrade must pass a rigorous inspection to guarantee quality and product performance. Refurbished devices certified by UpTrade work just as well as new, ordinary store-bought phones.",
    },
  },
  {
    productName: "iPhone XR",
    productCategoryValueId: 211,
    price: 15900,
    keyword: "Apple iPhone",
    productImageUrl:
      "https://d3c745jesl5pj3.cloudfront.net/sell/web/iPhone XR_lagecy_494bcfc5ce224f93a2c760f6eed9d283.jpg",
    brand: "Apple",
    type: "BRAND",
    brandCategoryValueId: 10,
    relatedGoods: [
      {
        productId: 1545705612465434624,
        name: "iPhone XR",
        brand: "Apple",
        merchant: "Gazelle",
        brandLogoUrl:
          "https://uptrade-public-static-resources.s3.us-east-2.amazonaws.com/gazelle+logo.png",
        buyUrl:
          "https://buy.gazelle.com/products/iphone-xr-64gb-t-mobile-1?variant=13061149917237",
        currentPrice: 18400,
        specs: [
          {
            productId: 1545705612465434624,
            key: "CONDITION",
            value: "Excellent",
          },
          {
            productId: 1545705612465434624,
            key: "CARRIER",
            value: "T-Mobile",
          },
          {
            productId: 1545705612465434624,
            key: "STORAGE",
            value: "128GB",
          },
          {
            productId: 1545705612465434624,
            key: "COLOR",
            value: "White",
          },
        ],
      },
      {
        productId: 1545698566814855168,
        name: "iPhone XR",
        brand: "Apple",
        merchant: "Amazon",
        brandLogoUrl:
          "https://uptrade-public-static-resources.s3.us-east-2.amazonaws.com/amazon+logo.png",
        buyUrl:
          "https://www.amazon.com/Apple-iPhone-XR-Fully-Unlocked/dp/B07P6Y7954/ref=sr_1_6?keywords=Apple+iPhone+Verizon+renewed&qid=1657292922&sr=8-6",
        currentPrice: 24000,
        specs: [
          {
            productId: 1545698566814855168,
            key: "CONDITION",
            value: "Excellent",
          },
          {
            productId: 1545698566814855168,
            key: "CARRIER",
            value: "Unlocked",
          },
          {
            productId: 1545698566814855168,
            key: "STORAGE",
            value: "64GB",
          },
          {
            productId: 1545698566814855168,
            key: "COLOR",
            value: "Black",
          },
        ],
      },
      {
        productId: 1545698599203270656,
        name: "iPhone XR",
        brand: "Apple",
        merchant: "Amazon",
        brandLogoUrl:
          "https://uptrade-public-static-resources.s3.us-east-2.amazonaws.com/amazon+logo.png",
        buyUrl:
          "https://www.amazon.com/Apple-iPhone-XR-64GB-Red/dp/B07T1KTPSB/ref=sr_1_1?keywords=Apple+iPhone+AT%26T+renewed&qid=1657293903&s=electronics&sr=1-1",
        currentPrice: 24000,
        specs: [
          {
            productId: 1545698599203270656,
            key: "CONDITION",
            value: "Excellent",
          },
          {
            productId: 1545698599203270656,
            key: "CARRIER",
            value: "AT&T",
          },
          {
            productId: 1545698599203270656,
            key: "STORAGE",
            value: "64GB",
          },
          {
            productId: 1545698599203270656,
            key: "COLOR",
            value: "Red",
          },
        ],
      },
      {
        productId: 1545698630551498752,
        name: "iPhone XR",
        brand: "Apple",
        merchant: "Amazon",
        brandLogoUrl:
          "https://uptrade-public-static-resources.s3.us-east-2.amazonaws.com/amazon+logo.png",
        buyUrl:
          "https://www.amazon.com/Apple-iPhone-XR-Fully-Unlocked/dp/B07P978C2R/ref=sr_1_3?keywords=Apple+iPhone+Xfinity+renewed&qid=1657295038&s=electronics&sr=1-3",
        currentPrice: 24195,
        specs: [
          {
            productId: 1545698630551498752,
            key: "CONDITION",
            value: "Excellent",
          },
          {
            productId: 1545698630551498752,
            key: "CARRIER",
            value: "Unlocked",
          },
          {
            productId: 1545698630551498752,
            key: "STORAGE",
            value: "64GB",
          },
          {
            productId: 1545698630551498752,
            key: "COLOR",
            value: "White",
          },
        ],
      },
      {
        productId: 1545698579666202624,
        name: "iPhone XR",
        brand: "Apple",
        merchant: "Amazon",
        brandLogoUrl:
          "https://uptrade-public-static-resources.s3.us-east-2.amazonaws.com/amazon+logo.png",
        buyUrl:
          "https://www.amazon.com/Apple-iPhone-XR-64GB-Black/dp/B07SZH8X5F/ref=sr_1_53?keywords=Apple+iPhone+Verizon+renewed&qid=1657293263&sr=8-53",
        currentPrice: 25398,
        specs: [
          {
            productId: 1545698579666202624,
            key: "CONDITION",
            value: "Excellent",
          },
          {
            productId: 1545698579666202624,
            key: "CARRIER",
            value: "T-Mobile",
          },
          {
            productId: 1545698579666202624,
            key: "STORAGE",
            value: "64GB",
          },
          {
            productId: 1545698579666202624,
            key: "COLOR",
            value: "Black",
          },
        ],
      },
    ],
    aboutProduct: null,
    metaDescription:
      "UpTrade specializes in high quality, certified used iPhones and we offer them to you at up to 70% off the retail price! All phones are certified by professional resellers. Shop with confidence.",
    metaDescCategory: null,
    qa: {
      "Why should you buy a used or refurbished Apple iPhone?":
        "I am glad that you asked! A refurbished iPhone is a great opportunity to save when you are looking to purchase your next iPhone. Buying a refurbished iPhone can be an wonderful choice and can net you huge savings, particularly when the cost of a new iPhone is crazy expensive. A refurbished iPhone is completely functional and works very much like a brand new iPhone.",
      "What does it mean if the Apple iPhone is unlocked?":
        "You may use an unlocked iPhone with any carrier in the United States. Purchasing an unlocked iPhone is an wonderful choice if you aren’t sure which wireless carrier you want to sign up with, or if you want to be sure the iPhone will work with your current carrier. An unlocked iPhone is likewise an incredible phone to buy as a gift since it will work with any carrier or wireless plan that they may have.",
      "What does UpTrade Certified Used mean?":
        "UpTrade Certified means the iPhone you buy will work and function just like new. Among hundreds of used phone and gadget sellers, we have chosen a modest bunch of reputable resellers and marketplaces that provide high-quality used and refurbished phones. An UpTrade Certified Used iPhone means it has passed an in-depth inspection by our Certified Seller.",
      "What is the return policy for the Used and Refurbished Apple iPhone?":
        "Yes! All UpTrade Certified Used Phone Resellers and Marketplaces offer 30-day money-back-guarantee on phones listed here. If you aren’t satisfied with your purchase you may return your iPhone to your seller for free for up to 30 days.",
      "Does Refurbished Apple iPhone perform as well as the new?":
        "Many people wonder if a refurbished iPhone is as good as a new iPhone. Typically there’s really no difference between them except for the fact that there may be signs of use (if at all) on a refurbished iPhone. A refurbished iPhone should be fully functional and work just like a new iPhone. All UpTrade Certified Used Phone Resellers process iPhone through a rigorous inspection so that each iPhone is fully functional and works just like a new iPhone.",
    },
  },
  {
    productName: "Galaxy S10",
    productCategoryValueId: 20,
    price: 16400,
    keyword: "Samsung Galaxy",
    productImageUrl:
      "https://d3c745jesl5pj3.cloudfront.net/sell/web/Galaxy S10_d9924abad4f9447aadb33da6257392e3.jpg",
    brand: "Samsung",
    type: "BRAND",
    brandCategoryValueId: 19,
    relatedGoods: [
      {
        productId: 1545698507696140288,
        name: "Galaxy S10",
        brand: "Samsung",
        merchant: "Amazon",
        brandLogoUrl:
          "https://uptrade-public-static-resources.s3.us-east-2.amazonaws.com/amazon+logo.png",
        buyUrl:
          "https://www.amazon.com/Samsung-Galaxy-G973U-128GB-T-Mobile/dp/B07T8CN8WZ/ref=sr_1_3?keywords=Samsung+Galaxy+T-Mobile+renewed&qid=1657243701&sr=8-3",
        currentPrice: 16499,
        specs: [
          {
            productId: 1545698507696140288,
            key: "CONDITION",
            value: "Excellent",
          },
          {
            productId: 1545698507696140288,
            key: "CARRIER",
            value: "T-Mobile",
          },
          {
            productId: 1545698507696140288,
            key: "STORAGE",
            value: "128GB",
          },
          {
            productId: 1545698507696140288,
            key: "COLOR",
            value: "Prism Black",
          },
        ],
      },
      {
        productId: 1545698523575775232,
        name: "Galaxy S10",
        brand: "Samsung",
        merchant: "Amazon",
        brandLogoUrl:
          "https://uptrade-public-static-resources.s3.us-east-2.amazonaws.com/amazon+logo.png",
        buyUrl:
          "https://www.amazon.com/Samsung-Factory-Unlocked-Warranty-Renewed/dp/B07PFL3DFX/ref=sr_1_4?keywords=Samsung+Galaxy+Xfinity+renewed&qid=1657246912&sr=8-4",
        currentPrice: 17400,
        specs: [
          {
            productId: 1545698523575775232,
            key: "CONDITION",
            value: "Excellent",
          },
          {
            productId: 1545698523575775232,
            key: "CARRIER",
            value: "Unlocked",
          },
          {
            productId: 1545698523575775232,
            key: "STORAGE",
            value: "128GB",
          },
          {
            productId: 1545698523575775232,
            key: "COLOR",
            value: "Prism Blue",
          },
        ],
      },
      {
        productId: 1545698468932382720,
        name: "Galaxy S10",
        brand: "Samsung",
        merchant: "Amazon",
        brandLogoUrl:
          "https://uptrade-public-static-resources.s3.us-east-2.amazonaws.com/amazon+logo.png",
        buyUrl:
          "https://www.amazon.com/Samsung-Galaxy-S10-SM-G973UZKAATT-Renewed/dp/B07T7LS29H/ref=sr_1_1?keywords=Samsung+Galaxy+AT%26T+renewed&qid=1657221327&sr=8-1",
        currentPrice: 17600,
        specs: [
          {
            productId: 1545698468932382720,
            key: "CONDITION",
            value: "Excellent",
          },
          {
            productId: 1545698468932382720,
            key: "CARRIER",
            value: "AT&T",
          },
          {
            productId: 1545698468932382720,
            key: "STORAGE",
            value: "128GB",
          },
          {
            productId: 1545698468932382720,
            key: "COLOR",
            value: "Prism Black",
          },
        ],
      },
      {
        productId: 1545698338590191616,
        name: "Galaxy S10",
        brand: "Samsung",
        merchant: "Amazon",
        brandLogoUrl:
          "https://uptrade-public-static-resources.s3.us-east-2.amazonaws.com/amazon+logo.png",
        buyUrl:
          "https://www.amazon.com/Samsung-Galaxy-S10-Fully-Unlocked-Renewed/dp/B09DRCTNB9/ref=sr_1_2?keywords=Samsung+Galaxy+Unlocked+renewed&qid=1657216791&sr=8-2&srs=17871142011",
        currentPrice: 18200,
        specs: [
          {
            productId: 1545698338590191616,
            key: "CONDITION",
            value: "Excellent",
          },
          {
            productId: 1545698338590191616,
            key: "CARRIER",
            value: "Unlocked",
          },
          {
            productId: 1545698338590191616,
            key: "STORAGE",
            value: "128GB",
          },
          {
            productId: 1545698338590191616,
            key: "COLOR",
            value: "Prism Black",
          },
        ],
      },
      {
        productId: 1545698518601330688,
        name: "Galaxy S10",
        brand: "Samsung",
        merchant: "Amazon",
        brandLogoUrl:
          "https://uptrade-public-static-resources.s3.us-east-2.amazonaws.com/amazon+logo.png",
        buyUrl:
          "https://www.amazon.com/Samsung-Factory-Unlocked-Warranty-Renewed/dp/B07PDN414K/ref=sr_1_1?keywords=Samsung+Galaxy+Sprint+renewed&qid=1657245452&sr=8-1",
        currentPrice: 18500,
        specs: [
          {
            productId: 1545698518601330688,
            key: "CONDITION",
            value: "Excellent",
          },
          {
            productId: 1545698518601330688,
            key: "CARRIER",
            value: "Unlocked",
          },
          {
            productId: 1545698518601330688,
            key: "STORAGE",
            value: "128GB",
          },
          {
            productId: 1545698518601330688,
            key: "COLOR",
            value: "Prism White",
          },
        ],
      },
    ],
    aboutProduct: null,
    metaDescription:
      "UpTrade offers a great selection of Certified Used Samsung phones at up to 70% off the manufacturer's price. In addition, all phones come with a 30-day money-back guarantee, so you can buy with confidence!",
    metaDescCategory: null,
    qa: {
      "Why should you buy a used or refurbished Samsung Galaxy?":
        "A refurbished Samsung Galaxy functions precisely like a new one. Why pay more? It will save you a lot of money  buying a refurbished Samsung Galaxy. More importantly, it reduces e-waste and makes our planet a better place. Buying a refurbished Samsung Galaxy is a smart choice.",
      "What does it mean if the Samsung Galaxy is unlocked?":
        "Most Samsung Galaxy’s bought from wireless carriers are locked to their network. An unlocked Samsung Galaxy means the phone has been unlocked and can be used with any carrier in the United States. Choosing an unlocked Samsung Galaxy is the safest option if you are unsure which carrier you will use. An unlocked Samsung Galaxy is also a great option as a gift since it will work with any carrier or wireless phone plan they currently have.",
      "What does UpTrade Certified Used mean?":
        "UpTrade Certified means you can trust that your used Samsung Galaxy will function just as well as a new device. Among hundreds of used phone sellers, we have chosen a modest bunch of reputable sellers and marketplaces that are capable of providing high-quality used and refurbished phones. An UpTrade Certified Used Samsung Galaxy means it has passed a rigorous inspection and functions like a new one.",
      "What is the return policy for the Used and Refurbished Samsung Galaxy?":
        "No worries if you are not 100% satisfied with the device you have received! Each phone is granted a 30-day trial period in which buyers may return the used device to the UpTrade Certified Seller for a refund within the first 30 days.",
      "Does Refurbished Samsung Galaxy perform as well as the new?":
        "For the most part, there is no definite difference between a new phone and a used one, aside from one previously used by another owner. All used phones listed on UpTrade must pass a rigorous inspection to guarantee quality and product performance. Refurbished devices certified by UpTrade work just as well as new, ordinary store-bought phones.",
    },
  },
  {
    productName: "Pixel 4",
    productCategoryValueId: null,
    price: null,
    keyword: "Google Pixel",
    productImageUrl: null,
    brand: "Google",
    type: "BRAND",
    brandCategoryValueId: null,
    relatedGoods: [
      {
        productId: 1545691027456946176,
        name: "Google Pixel 2",
        brand: "Google",
        merchant: "Amazon",
        brandLogoUrl:
          "https://uptrade-public-static-resources.s3.us-east-2.amazonaws.com/amazon+logo.png",
        buyUrl:
          "https://www.amazon.com/Google-Pixel-G011A-Factory-Unlocked/dp/B07HXQ6KNS/ref=sr_1_23?crid=23CIYQ0ILU9MR&keywords=Google+Pixel+Unlocked+renewed&qid=1655063687&sprefix=google+pixel+unlocked+renewed%2Caps%2C2615&sr=8-23",
        currentPrice: 8354,
        specs: [
          {
            productId: 1545691027456946176,
            key: "CONDITION",
            value: "Excellent",
          },
          {
            productId: 1545691027456946176,
            key: "CARRIER",
            value: "Unlocked",
          },
          {
            productId: 1545691027456946176,
            key: "STORAGE",
            value: "128GB",
          },
          {
            productId: 1545691027456946176,
            key: "COLOR",
            value: "Just Black",
          },
        ],
      },
      {
        productId: 1545691041625305088,
        name: "Google Pixel 2 XL",
        brand: "Google",
        merchant: "Amazon",
        brandLogoUrl:
          "https://uptrade-public-static-resources.s3.us-east-2.amazonaws.com/amazon+logo.png",
        buyUrl:
          "https://www.amazon.com/Google-Pixel-Unlocked-GSM-CDMA/dp/B07MWHJ7JD/ref=sr_1_82?crid=23CIYQ0ILU9MR&keywords=Google+Pixel+Unlocked+renewed&qid=1655064632&sprefix=google+pixel+unlocked+renewed%2Caps%2C2615&sr=8-82",
        currentPrice: 9355,
        specs: [
          {
            productId: 1545691041625305088,
            key: "CONDITION",
            value: "Excellent",
          },
          {
            productId: 1545691041625305088,
            key: "CARRIER",
            value: "Unlocked",
          },
          {
            productId: 1545691041625305088,
            key: "STORAGE",
            value: "64GB",
          },
          {
            productId: 1545691041625305088,
            key: "COLOR",
            value: "Just Black",
          },
        ],
      },
      {
        productId: 1545691051909738496,
        name: "Google Pixel",
        brand: "Google",
        merchant: "Amazon",
        brandLogoUrl:
          "https://uptrade-public-static-resources.s3.us-east-2.amazonaws.com/amazon+logo.png",
        buyUrl:
          "https://www.amazon.com/Google-Pixel-128GB-Verizon-Wireless/dp/B07YBH2HPD/ref=sr_1_104?crid=3C977KY3KMUDP&keywords=Google+Pixel+Verizon+renewed&qid=1655067607&sprefix=google+pixel+verizon+renewed%2Caps%2C616&sr=8-104",
        currentPrice: 10444,
        specs: [
          {
            productId: 1545691051909738496,
            key: "CONDITION",
            value: "Excellent",
          },
          {
            productId: 1545691051909738496,
            key: "CARRIER",
            value: "Verizon",
          },
          {
            productId: 1545691051909738496,
            key: "STORAGE",
            value: "128GB",
          },
          {
            productId: 1545691051909738496,
            key: "COLOR",
            value: "Black",
          },
        ],
      },
      {
        productId: 1545691019873644544,
        name: "Google Pixel 3",
        brand: "Google",
        merchant: "Amazon",
        brandLogoUrl:
          "https://uptrade-public-static-resources.s3.us-east-2.amazonaws.com/amazon+logo.png",
        buyUrl:
          "https://www.amazon.com/Google-Pixel-Unlocked-GSM-CDMA/dp/B07KX8DXW8/ref=sr_1_6?crid=23CIYQ0ILU9MR&keywords=Google+Pixel+Unlocked+renewed&qid=1655063255&sprefix=google+pixel+unlocked+renewed%2Caps%2C2615&sr=8-6",
        currentPrice: 10500,
        specs: [
          {
            productId: 1545691019873644544,
            key: "CONDITION",
            value: "Excellent",
          },
          {
            productId: 1545691019873644544,
            key: "CARRIER",
            value: "Unlocked",
          },
          {
            productId: 1545691019873644544,
            key: "STORAGE",
            value: "64GB",
          },
          {
            productId: 1545691019873644544,
            key: "COLOR",
            value: "Just Black",
          },
        ],
      },
      {
        productId: 1545691023107452928,
        name: "Google Pixel 3a",
        brand: "Google",
        merchant: "Amazon",
        brandLogoUrl:
          "https://uptrade-public-static-resources.s3.us-east-2.amazonaws.com/amazon+logo.png",
        buyUrl:
          "https://www.amazon.com/Google-Pixel-Smartphone-Unlocked-Verizon/dp/B07VHRQB8D/ref=sr_1_13?crid=23CIYQ0ILU9MR&keywords=Google+Pixel+Unlocked+renewed&qid=1655063255&sprefix=google+pixel+unlocked+renewed%2Caps%2C2615&sr=8-13",
        currentPrice: 10799,
        specs: [
          {
            productId: 1545691023107452928,
            key: "CONDITION",
            value: "Excellent",
          },
          {
            productId: 1545691023107452928,
            key: "CARRIER",
            value: "Unlocked",
          },
          {
            productId: 1545691023107452928,
            key: "STORAGE",
            value: "64GB",
          },
          {
            productId: 1545691023107452928,
            key: "COLOR",
            value: "Just Black",
          },
        ],
      },
    ],
    aboutProduct:
      "The Google Pixel changed the game when it launched this first generation phone. Consistently reviewers’ favorite phone, it’s described as the “perfect balance”--functional but pretty, usable but includes tons of features, and the best vehicle for the Android operating system and Google’s Assistant.",
    metaDescription:
      "UpTrade has a great selection of Certified Used Google Pixel phones at up to 70% off retail! You've come to the right place if you are looking for a great deal on a Google Pixel.",
    metaDescCategory:
      "Google’s Pixel, the first of its kind, is an excellent phone for anyone who’s looking for a user-friendly Android experience. It has an ergonomic design that fits comfortably in one hand, a strong camera for great photos, bright HD display, lightning fast processing speed, and best of all--a user-friendly interface.",
    qa: {
      "Why should you buy a used or refurbished Google Pixel?":
        "A refurbished Google Pixel functions precisely like a new one. Why pay more? It will save you a lot of money  buying a refurbished Google Pixel. More importantly, it reduces e-waste and makes our planet a better place. Buying a refurbished Google Pixel is a smart choice.",
      "What does it mean if the Google Pixel is unlocked?":
        "Most Google Pixel’s bought from wireless carriers are locked to their network. An unlocked Google Pixel means the phone has been unlocked and can be used with any carrier in the United States. Choosing an unlocked Google Pixel is the safest option if you are unsure which carrier you will use. An unlocked Google Pixel is also a great option as a gift since it will work with any carrier or wireless phone plan they currently have.",
      "What does UpTrade Certified Used mean?":
        "UpTrade Certified means you can trust that your used Google Pixel will function just as well as a new device. Among hundreds of used phone sellers, we have chosen a modest bunch of reputable sellers and marketplaces that are capable of providing high-quality used and refurbished phones. An UpTrade Certified Used Google Pixel means it has passed a rigorous inspection and functions like a new one.",
      "What is the return policy for the Used and Refurbished Google Pixel?":
        "No worries if you are not 100% satisfied with the device you have received! Each phone is granted a 30-day trial period in which buyers may return the used device to the UpTrade Certified Seller for a refund within the first 30 days.",
      "Are refurbished Android phones as good as new ones?":
        "Many people wonder if a refurbished Android phone is as good as a new one. Typically there’s really no difference between them except for the fact that there may be signs of use (if at all) on a refurbished phone. A refurbished Android phone should be fully functional and work just like a new Android phone. All UpTrade Certified Used Phone Resellers process the phones through a rigorous inspection so that each phone is fully functional and works just like a new phone.",
      "Does Refurbished Google Pixel perform as well as the new?":
        "For the most part, there is no definite difference between a new phone and a used one, aside from one previously used by another owner. All used phones listed on UpTrade must pass a rigorous inspection to guarantee quality and product performance. Refurbished devices certified by UpTrade work just as well as new, ordinary store-bought phones.",
    },
  },
  {
    productName: "OnePlus 7T",
    productCategoryValueId: 397,
    price: 20488,
    keyword: "OnePlus phone",
    productImageUrl:
      "https://d3c745jesl5pj3.cloudfront.net/sell/web/OnePlus 7T_a1f3d67fb9c14a9bb6e4e67ce03ec1b5.jpg",
    brand: "OnePlus",
    type: "BRAND",
    brandCategoryValueId: 393,
    relatedGoods: [
      {
        productId: 1545698481016172544,
        name: "OnePlus 7T",
        brand: "OnePlus",
        merchant: "Amazon",
        brandLogoUrl:
          "https://uptrade-public-static-resources.s3.us-east-2.amazonaws.com/amazon+logo.png",
        buyUrl:
          "https://www.amazon.com/OnePlus-7T-Snapdragon-T-Mobile-Unlocked/dp/B08J8C5PGW/ref=sr_1_24?keywords=OnePlus+Unlocked+renewed&qid=1657224157&sr=8-24",
        currentPrice: 21059,
        specs: [
          {
            productId: 1545698481016172544,
            key: "CONDITION",
            value: "Excellent",
          },
          {
            productId: 1545698481016172544,
            key: "CARRIER",
            value: "Unlocked",
          },
          {
            productId: 1545698481016172544,
            key: "STORAGE",
            value: "128GB",
          },
          {
            productId: 1545698481016172544,
            key: "COLOR",
            value: "Silver",
          },
        ],
      },
      {
        productId: 1545698481464963072,
        name: "OnePlus 7T",
        brand: "OnePlus",
        merchant: "Amazon",
        brandLogoUrl:
          "https://uptrade-public-static-resources.s3.us-east-2.amazonaws.com/amazon+logo.png",
        buyUrl:
          "https://www.amazon.com/OnePlus-HD1907-Renewed-Frosted-T-Mobile/dp/B095PWJZN6/ref=sr_1_31?keywords=OnePlus+Unlocked+renewed&qid=1657224157&sr=8-31",
        currentPrice: 21295,
        specs: [
          {
            productId: 1545698481464963072,
            key: "CONDITION",
            value: "Excellent",
          },
          {
            productId: 1545698481464963072,
            key: "CARRIER",
            value: "T-Mobile",
          },
          {
            productId: 1545698481464963072,
            key: "STORAGE",
            value: "128GB",
          },
          {
            productId: 1545698481464963072,
            key: "COLOR",
            value: "Silver",
          },
        ],
      },
      {
        productId: 1545698477862055936,
        name: "OnePlus 7T",
        brand: "OnePlus",
        merchant: "Amazon",
        brandLogoUrl:
          "https://uptrade-public-static-resources.s3.us-east-2.amazonaws.com/amazon+logo.png",
        buyUrl:
          "https://www.amazon.com/OnePlus-Display-Snapdragon-T-Mobile-Unlocked/dp/B08GY1PFLX/ref=sr_1_7?keywords=OnePlus+Unlocked+renewed&qid=1657223991&sr=8-7",
        currentPrice: 22284,
        specs: [
          {
            productId: 1545698477862055936,
            key: "CONDITION",
            value: "Excellent",
          },
          {
            productId: 1545698477862055936,
            key: "CARRIER",
            value: "Unlocked",
          },
          {
            productId: 1545698477862055936,
            key: "STORAGE",
            value: "128GB",
          },
          {
            productId: 1545698477862055936,
            key: "COLOR",
            value: "Blue",
          },
        ],
      },
      {
        productId: 1545698478302457856,
        name: "OnePlus 7T",
        brand: "OnePlus",
        merchant: "Amazon",
        brandLogoUrl:
          "https://uptrade-public-static-resources.s3.us-east-2.amazonaws.com/amazon+logo.png",
        buyUrl:
          "https://www.amazon.com/OnePlus-HD1907-8GB-RAM-128GB/dp/B08GL32TW5/ref=sr_1_9?keywords=OnePlus+Unlocked+renewed&qid=1657223991&sr=8-9",
        currentPrice: 23499,
        specs: [
          {
            productId: 1545698478302457856,
            key: "CONDITION",
            value: "Excellent",
          },
          {
            productId: 1545698478302457856,
            key: "CARRIER",
            value: "Unlocked",
          },
          {
            productId: 1545698478302457856,
            key: "STORAGE",
            value: "128GB",
          },
          {
            productId: 1545698478302457856,
            key: "COLOR",
            value: "Blue",
          },
        ],
      },
      {
        productId: 1545698486787534848,
        name: "OnePlus 7T",
        brand: "OnePlus",
        merchant: "Amazon",
        brandLogoUrl:
          "https://uptrade-public-static-resources.s3.us-east-2.amazonaws.com/amazon+logo.png",
        buyUrl:
          "https://www.amazon.com/OnePlus-Android-Smartphone-Single-Sim-T-Mobile/dp/B0947GC4S6/ref=sr_1_85?keywords=OnePlus+Unlocked+renewed&qid=1657224709&sr=8-85",
        currentPrice: 24999,
        specs: [
          {
            productId: 1545698486787534848,
            key: "CONDITION",
            value: "Excellent",
          },
          {
            productId: 1545698486787534848,
            key: "CARRIER",
            value: "T-Mobile",
          },
          {
            productId: 1545698486787534848,
            key: "STORAGE",
            value: "128GB",
          },
          {
            productId: 1545698486787534848,
            key: "COLOR",
            value: "Blue",
          },
        ],
      },
    ],
    aboutProduct: null,
    metaDescription:
      "A great selection of Certified Used OnePlus phones with up to 70% off retail price!",
    metaDescCategory: null,
    qa: {
      "Why should you buy a used or refurbished OnePlus phone?":
        "A refurbished OnePlus phone functions precisely like a new one. Why pay more? It will save you a lot of money  buying a refurbished OnePlus phone. More importantly, it reduces e-waste and makes our planet a better place. Buying a refurbished OnePlus phone is a smart choice.",
      "What does it mean if the OnePlus phone is unlocked?":
        "Most OnePlus phone’s bought from wireless carriers are locked to their network. An unlocked OnePlus phone means the phone has been unlocked and can be used with any carrier in the United States. Choosing an unlocked OnePlus phone is the safest option if you are unsure which carrier you will use. An unlocked OnePlus phone is also a great option as a gift since it will work with any carrier or wireless phone plan they currently have.",
      "What does UpTrade Certified Used mean?":
        "UpTrade Certified means you can trust that your used OnePlus phone will function just as well as a new device. Among hundreds of used phone sellers, we have chosen a modest bunch of reputable sellers and marketplaces that are capable of providing high-quality used and refurbished phones. An UpTrade Certified Used OnePlus phone means it has passed a rigorous inspection and functions like a new one.",
      "What is the return policy for the Used and Refurbished OnePlus phone?":
        "No worries if you are not 100% satisfied with the device you have received! Each phone is granted a 30-day trial period in which buyers may return the used device to the UpTrade Certified Seller for a refund within the first 30 days.",
      "Does Refurbished OnePlus phone perform as well as the new?":
        "For the most part, there is no definite difference between a new phone and a used one, aside from one previously used by another owner. All used phones listed on UpTrade must pass a rigorous inspection to guarantee quality and product performance. Refurbished devices certified by UpTrade work just as well as new, ordinary store-bought phones.",
    },
  },
  {
    productName: "LG G8",
    productCategoryValueId: 671,
    price: 14795,
    keyword: "LG phone",
    productImageUrl:
      "https://d3c745jesl5pj3.cloudfront.net/sell/web/LG G8_d9b1a096bfe246f2911dcf375d8c4389.png",
    brand: "LG",
    type: "BRAND",
    brandCategoryValueId: 649,
    relatedGoods: [
      {
        productId: 1545698331443097600,
        name: "LG G8",
        brand: "LG",
        merchant: "Amazon",
        brandLogoUrl:
          "https://uptrade-public-static-resources.s3.us-east-2.amazonaws.com/amazon+logo.png",
        buyUrl:
          "https://www.amazon.com/LG-G8-ThinQ-Verizon-Renewed/dp/B07Z8897RV/ref=sr_1_1?keywords=LG+Verizon+renewed&qid=1657213793&sr=8-1",
        currentPrice: 15075,
        specs: [
          {
            productId: 1545698331443097600,
            key: "CONDITION",
            value: "Excellent",
          },
          {
            productId: 1545698331443097600,
            key: "CARRIER",
            value: "Verizon",
          },
          {
            productId: 1545698331443097600,
            key: "STORAGE",
            value: "128GB",
          },
          {
            productId: 1545698331443097600,
            key: "COLOR",
            value: "Aurora Black",
          },
        ],
      },
      {
        productId: 1545698336094580736,
        name: "LG G8",
        brand: "LG",
        merchant: "Amazon",
        brandLogoUrl:
          "https://uptrade-public-static-resources.s3.us-east-2.amazonaws.com/amazon+logo.png",
        buyUrl:
          "https://www.amazon.com/LG-G8-ThinQ-T-Mobile-Renewed/dp/B08N5CYNFG/ref=sr_1_120?keywords=LG+Verizon+renewed&qid=1657214525&sr=8-120",
        currentPrice: 18995,
        specs: [
          {
            productId: 1545698336094580736,
            key: "CONDITION",
            value: "Excellent",
          },
          {
            productId: 1545698336094580736,
            key: "CARRIER",
            value: "T-Mobile",
          },
          {
            productId: 1545698336094580736,
            key: "STORAGE",
            value: "128GB",
          },
          {
            productId: 1545698336094580736,
            key: "COLOR",
            value: "Black",
          },
        ],
      },
      {
        productId: 1545698337487089664,
        name: "LG G8",
        brand: "LG",
        merchant: "Amazon",
        brandLogoUrl:
          "https://uptrade-public-static-resources.s3.us-east-2.amazonaws.com/amazon+logo.png",
        buyUrl:
          "https://www.amazon.com/LG-FullVision-Display-Crystal-T-Mobile/dp/B07Y3ZZT7W/ref=sr_1_83?keywords=LG+AT%26T+renewed&qid=1657216363&sr=8-83",
        currentPrice: 19490,
        specs: [
          {
            productId: 1545698337487089664,
            key: "CONDITION",
            value: "Excellent",
          },
          {
            productId: 1545698337487089664,
            key: "CARRIER",
            value: "T-Mobile",
          },
          {
            productId: 1545698337487089664,
            key: "STORAGE",
            value: "128GB",
          },
          {
            productId: 1545698337487089664,
            key: "COLOR",
            value: "Red",
          },
        ],
      },
      {
        productId: 1545698324342140928,
        name: "LG G8",
        brand: "LG",
        merchant: "Amazon",
        brandLogoUrl:
          "https://uptrade-public-static-resources.s3.us-east-2.amazonaws.com/amazon+logo.png",
        buyUrl:
          "https://www.amazon.com/LG-LMG820TM-Android-Smartphone-Unlocked/dp/B08X9F3GHY/ref=sr_1_41?keywords=LG+Unlocked+renewed&qid=1657213559&sr=8-41&srs=17871142011",
        currentPrice: 31999,
        specs: [
          {
            productId: 1545698324342140928,
            key: "CONDITION",
            value: "Excellent",
          },
          {
            productId: 1545698324342140928,
            key: "CARRIER",
            value: "Unlocked",
          },
          {
            productId: 1545698324342140928,
            key: "STORAGE",
            value: "128GB",
          },
          {
            productId: 1545698324342140928,
            key: "COLOR",
            value: "Red",
          },
        ],
      },
    ],
    aboutProduct: null,
    metaDescription:
      "Fully functional Certified Used LG phones with hugh discount",
    metaDescCategory: null,
    qa: {
      "Why should you buy a used or refurbished LG phone?":
        "I am glad that you asked! A refurbished LG phone is a great opportunity to save when you are looking to purchase your next iPhone. Buying a refurbished LG phone can be an wonderful choice and can net you huge savings, particularly when the cost of a new LG phone is crazy expensive. A refurbished LG phone is completely functional and works very much like a brand new LG phone.",
      "What does it mean if the LG phone is unlocked?":
        "You may use an unlocked LG phone with any carrier in the United States. Purchasing an unlocked LG phone is an wonderful choice if you aren’t sure which wireless carrier you want to sign up with, or if you want to be sure the LG phone will work with your current carrier. An unlocked LG phone is likewise an incredible phone to buy as a gift since it will work with any carrier or wireless plan that they may have.",
      "What does UpTrade Certified Used mean?":
        "UpTrade Certified means the LG phone you buy will work and function just like new. Among hundreds of used phone and gadget sellers, we have chosen a modest bunch of reputable resellers and marketplaces that provide high-quality used and refurbished phones. An UpTrade Certified Used LG phone means it has passed an in-depth inspection by our Certified Seller.",
      "What is the return policy for the Used and Refurbished LG phone?":
        "Yes! All UpTrade Certified Used Phone Resellers and Marketplaces offer 30-day money-back-guarantee on LG phone phones listed here. If you aren’t satisfied with your purchase you may return your LG phone to your seller for free for up to 30 days.",
      "Does Refurbished LG phone perform as well as the new?":
        "Many people wonder if a refurbished LG phone is as good as a new LG phone. Typically there’s really no difference between them except for the fact that there may be signs of use (if at all) on a refurbished LG phone. A refurbished LG phone should be fully functional and work just like a new LG phone. All UpTrade Certified Used Phone Resellers process LG phone through a rigorous inspection so that each LG phone is fully functional and works just like a new LG phone.",
    },
  },
  {
    productName: "Nova 5T",
    productCategoryValueId: 640,
    price: null,
    keyword: "Huawei phone",
    productImageUrl:
      "https://d3c745jesl5pj3.cloudfront.net/sell/web/Huawei Nova 5T_6b55e26458cd44efa75f1ae9fb0d1396.png",
    brand: "Huawei",
    type: "BRAND",
    brandCategoryValueId: 639,
    relatedGoods: [
      {
        productId: 1545696045685829632,
        name: "Nova 5T",
        brand: "Huawei",
        merchant: "Amazon",
        brandLogoUrl:
          "https://uptrade-public-static-resources.s3.us-east-2.amazonaws.com/amazon+logo.png",
        buyUrl:
          "https://www.amazon.com/Huawei-Unlocked-International-YAL-L21-Renewed/dp/B08LR2RFYY/ref=sr_1_5?keywords=Huawei+Unlocked+renewed&qid=1656590297&sr=8-5&srs=17871142011",
        currentPrice: 24999,
        specs: [
          {
            productId: 1545696045685829632,
            key: "CONDITION",
            value: "Excellent",
          },
          {
            productId: 1545696045685829632,
            key: "CARRIER",
            value: "Unlocked",
          },
          {
            productId: 1545696045685829632,
            key: "STORAGE",
            value: "128GB",
          },
          {
            productId: 1545696045685829632,
            key: "COLOR",
            value: "Blue",
          },
        ],
      },
    ],
    aboutProduct: null,
    metaDescription: "Certified Used Huawei phones up to 70% Off.",
    metaDescCategory: null,
    qa: {
      "Why should you buy a used or refurbished Huawei phone?":
        "I am glad that you asked! A refurbished Huawei phone is a great opportunity to save when you are looking to purchase your next iPhone. Buying a refurbished Huawei phone can be an wonderful choice and can net you huge savings, particularly when the cost of a new Huawei phone is crazy expensive. A refurbished Huawei phone is completely functional and works very much like a brand new Huawei phone.",
      "What does it mean if the Huawei phone is unlocked?":
        "You may use an unlocked Huawei phone with any carrier in the United States. Purchasing an unlocked Huawei phone is an wonderful choice if you aren’t sure which wireless carrier you want to sign up with, or if you want to be sure the Huawei phone will work with your current carrier. An unlocked Huawei phone is likewise an incredible phone to buy as a gift since it will work with any carrier or wireless plan that they may have.",
      "What does UpTrade Certified Used mean?":
        "UpTrade Certified means the Huawei phone you buy will work and function just like new. Among hundreds of used phone and gadget sellers, we have chosen a modest bunch of reputable resellers and marketplaces that provide high-quality used and refurbished phones. An UpTrade Certified Used Huawei phone means it has passed an in-depth inspection by our Certified Seller.",
      "What is the return policy for the Used and Refurbished Huawei phone?":
        "Yes! All UpTrade Certified Used Phone Resellers and Marketplaces offer 30-day money-back-guarantee on Huawei phone phones listed here. If you aren’t satisfied with your purchase you may return your Huawei phone to your seller for free for up to 30 days.",
      "Does Refurbished Huawei phone perform as well as the new?":
        "Many people wonder if a refurbished Huawei phone is as good as a new Huawei phone. Typically there’s really no difference between them except for the fact that there may be signs of use (if at all) on a refurbished Huawei phone. A refurbished Huawei phone should be fully functional and work just like a new Huawei phone. All UpTrade Certified Used Phone Resellers process Huawei phone through a rigorous inspection so that each Huawei phone is fully functional and works just like a new Huawei phone.",
    },
  },
  {
    productName: "Essential PH-1",
    productCategoryValueId: 646,
    price: 11000,
    keyword: "Essential phone",
    productImageUrl:
      "https://d3c745jesl5pj3.cloudfront.net/sell/web/Essential_tinified_5f03b4d511f24eb6bb7392d4ff6fec79.jpg",
    brand: "Essential",
    type: "BRAND",
    brandCategoryValueId: 645,
    relatedGoods: [
      {
        productId: 1545698312988160000,
        name: "Essential PH-1",
        brand: "Essential",
        merchant: "Amazon",
        brandLogoUrl:
          "https://uptrade-public-static-resources.s3.us-east-2.amazonaws.com/amazon+logo.png",
        buyUrl:
          "https://www.amazon.com/Essential-128GB-Sprint-Locked-Renewed/dp/B07N8JQBD3/ref=sr_1_28?keywords=Essential+Unlocked+renewed&qid=1657209628&sr=8-28&srs=17871142011",
        currentPrice: 11000,
        specs: [
          {
            productId: 1545698312988160000,
            key: "CONDITION",
            value: "Excellent",
          },
          {
            productId: 1545698312988160000,
            key: "CARRIER",
            value: "Sprint",
          },
          {
            productId: 1545698312988160000,
            key: "STORAGE",
            value: "128GB",
          },
          {
            productId: 1545698312988160000,
            key: "COLOR",
            value: "Black Moon",
          },
        ],
      },
    ],
    aboutProduct: null,
    metaDescription:
      "Certified Used Essential phones on sales. Fully functional, 30-day money-back guarantee.",
    metaDescCategory: null,
    qa: {
      "Why should you buy a used or refurbished Essential phone?":
        "A refurbished Essential phone functions precisely like a new one. Why pay more? It will save you a lot of money  buying a refurbished Essential phone. More importantly, it reduces e-waste and makes our planet a better place. Buying a refurbished Essential phone is a smart choice.",
      "What does it mean if the Essential phone is unlocked?":
        "Most Essential phone’s bought from wireless carriers are locked to their network. An unlocked Essential phone means the phone has been unlocked and can be used with any carrier in the United States. Choosing an unlocked Essential phone is the safest option if you are unsure which carrier you will use. An unlocked Essential phone is also a great option as a gift since it will work with any carrier or wireless phone plan they currently have.",
      "What does UpTrade Certified Used mean?":
        "UpTrade Certified means you can trust that your used Essential phone will function just as well as a new device. Among hundreds of used phone sellers, we have chosen a modest bunch of reputable sellers and marketplaces that are capable of providing high-quality used and refurbished phones. An UpTrade Certified Used Essential phone means it has passed a rigorous inspection and functions like a new one.",
      "What is the return policy for the Used and Refurbished Essential phone?":
        "No worries if you are not 100% satisfied with the device you have received! Each phone is granted a 30-day trial period in which buyers may return the used device to the UpTrade Certified Seller for a refund within the first 30 days.",
      "Does Refurbished Essential phone perform as well as the new?":
        "For the most part, there is no definite difference between a new phone and a used one, aside from one previously used by another owner. All used phones listed on UpTrade must pass a rigorous inspection to guarantee quality and product performance. Refurbished devices certified by UpTrade work just as well as new, ordinary store-bought phones.",
    },
  },
  {
    productName: "iPhone 8",
    productCategoryValueId: 214,
    price: 8900,
    keyword: "AT&T phone",
    productImageUrl:
      "https://d3c745jesl5pj3.cloudfront.net/sell/web/iPhone 8_1ccc3c022fea475f863fed81aaa7d2dd.jpg",
    brand: "AT&T",
    type: "CARRIER",
    brandCategoryValueId: 10,
    relatedGoods: [
      {
        productId: 1545705620824682496,
        name: "iPhone 8",
        brand: "Apple",
        merchant: "Gazelle",
        brandLogoUrl:
          "https://uptrade-public-static-resources.s3.us-east-2.amazonaws.com/gazelle+logo.png",
        buyUrl:
          "https://buy.gazelle.com/products/iphone-8-64gb-at-t?variant=8442095697973",
        currentPrice: 11400,
        specs: [
          {
            productId: 1545705620824682496,
            key: "CONDITION",
            value: "Excellent",
          },
          {
            productId: 1545705620824682496,
            key: "CARRIER",
            value: "AT&T",
          },
          {
            productId: 1545705620824682496,
            key: "STORAGE",
            value: "64GB",
          },
          {
            productId: 1545705620824682496,
            key: "COLOR",
            value: "Space Gray",
          },
        ],
      },
      {
        productId: 1545705623496454144,
        name: "iPhone 8",
        brand: "Apple",
        merchant: "Gazelle",
        brandLogoUrl:
          "https://uptrade-public-static-resources.s3.us-east-2.amazonaws.com/gazelle+logo.png",
        buyUrl:
          "https://buy.gazelle.com/products/iphone-8-64gb-at-t?variant=12368272785461",
        currentPrice: 11400,
        specs: [
          {
            productId: 1545705623496454144,
            key: "CONDITION",
            value: "Excellent",
          },
          {
            productId: 1545705623496454144,
            key: "CARRIER",
            value: "AT&T",
          },
          {
            productId: 1545705623496454144,
            key: "STORAGE",
            value: "64GB",
          },
          {
            productId: 1545705623496454144,
            key: "COLOR",
            value: "Red",
          },
        ],
      },
      {
        productId: 1545705621382524928,
        name: "iPhone 8",
        brand: "Apple",
        merchant: "Gazelle",
        brandLogoUrl:
          "https://uptrade-public-static-resources.s3.us-east-2.amazonaws.com/gazelle+logo.png",
        buyUrl:
          "https://buy.gazelle.com/products/iphone-8-64gb-at-t?variant=8442095730741",
        currentPrice: 13900,
        specs: [
          {
            productId: 1545705621382524928,
            key: "CONDITION",
            value: "Excellent",
          },
          {
            productId: 1545705621382524928,
            key: "CARRIER",
            value: "AT&T",
          },
          {
            productId: 1545705621382524928,
            key: "STORAGE",
            value: "64GB",
          },
          {
            productId: 1545705621382524928,
            key: "COLOR",
            value: "Space Gray",
          },
        ],
      },
      {
        productId: 1545705622418518016,
        name: "iPhone 8",
        brand: "Apple",
        merchant: "Gazelle",
        brandLogoUrl:
          "https://uptrade-public-static-resources.s3.us-east-2.amazonaws.com/gazelle+logo.png",
        buyUrl:
          "https://buy.gazelle.com/products/iphone-8-64gb-at-t?variant=8442095829045",
        currentPrice: 13900,
        specs: [
          {
            productId: 1545705622418518016,
            key: "CONDITION",
            value: "Excellent",
          },
          {
            productId: 1545705622418518016,
            key: "CARRIER",
            value: "AT&T",
          },
          {
            productId: 1545705622418518016,
            key: "STORAGE",
            value: "64GB",
          },
          {
            productId: 1545705622418518016,
            key: "COLOR",
            value: "Silver",
          },
        ],
      },
      {
        productId: 1545705624016547840,
        name: "iPhone 8",
        brand: "Apple",
        merchant: "Gazelle",
        brandLogoUrl:
          "https://uptrade-public-static-resources.s3.us-east-2.amazonaws.com/gazelle+logo.png",
        buyUrl:
          "https://buy.gazelle.com/products/iphone-8-64gb-t-mobile?variant=8442100842549",
        currentPrice: 14900,
        specs: [
          {
            productId: 1545705624016547840,
            key: "CONDITION",
            value: "Excellent",
          },
          {
            productId: 1545705624016547840,
            key: "CARRIER",
            value: "T-Mobile",
          },
          {
            productId: 1545705624016547840,
            key: "STORAGE",
            value: "64GB",
          },
          {
            productId: 1545705624016547840,
            key: "COLOR",
            value: "Gold",
          },
        ],
      },
    ],
    aboutProduct: null,
    metaDescription:
      "Certified Used AT&T phones on sale. Free Shipping, Fully functional, 30-day money-back guarantee.",
    metaDescCategory: null,
    qa: {
      "Why should you buy a used or refurbished AT&T phone?":
        "A refurbished AT&T phone functions precisely like a new one. Why pay more? It will save you a lot of money  buying a refurbished AT&T phone. More importantly, it reduces e-waste and makes our planet a better place. Buying a refurbished AT&T phone is a smart choice.",
      "What does UpTrade Certified Used mean?":
        "UpTrade Certified means you can trust that your used AT&T phone will function just as well as a new device. Among hundreds of used phone sellers, we have chosen a modest bunch of reputable sellers and marketplaces that are capable of providing high-quality used and refurbished phones. An UpTrade Certified Used AT&T phone means it has passed a rigorous inspection and functions like a new one.",
      "What is the return policy for the Used and Refurbished AT&T phone?":
        "No worries if you are not 100% satisfied with the device you have received! Each phone is granted a 30-day trial period in which buyers may return the used device to the UpTrade Certified Seller for a refund within the first 30 days.",
      "Does Refurbished AT&T phone perform as well as the new?":
        "For the most part, there is no definite difference between a new phone and a used one, aside from one previously used by another owner. All used phones listed on UpTrade must pass a rigorous inspection to guarantee quality and product performance. Refurbished devices certified by UpTrade work just as well as new, ordinary store-bought phones.",
    },
  },
  {
    productName: "iPhone X",
    productCategoryValueId: 220,
    price: 19400,
    keyword: "Verizon phone",
    productImageUrl:
      "https://d3c745jesl5pj3.cloudfront.net/sell/web/iPhone X_4da09734176e44a98202a8400a36d044.jpg",
    brand: "Verizon",
    type: "CARRIER",
    brandCategoryValueId: 10,
    relatedGoods: [
      {
        productId: 1545705613954412544,
        name: "iPhone X",
        brand: "Apple",
        merchant: "Gazelle",
        brandLogoUrl:
          "https://uptrade-public-static-resources.s3.us-east-2.amazonaws.com/gazelle+logo.png",
        buyUrl:
          "https://buy.gazelle.com/products/iphone-x-64gb-unlocked?variant=8442115850293",
        currentPrice: 22900,
        specs: [
          {
            productId: 1545705613954412544,
            key: "CONDITION",
            value: "Excellent",
          },
          {
            productId: 1545705613954412544,
            key: "CARRIER",
            value: "Unlocked",
          },
          {
            productId: 1545705613954412544,
            key: "STORAGE",
            value: "64GB",
          },
          {
            productId: 1545705613954412544,
            key: "COLOR",
            value: "Silver",
          },
        ],
      },
      {
        productId: 1545698572049346560,
        name: "iPhone X",
        brand: "Apple",
        merchant: "Amazon",
        brandLogoUrl:
          "https://uptrade-public-static-resources.s3.us-east-2.amazonaws.com/amazon+logo.png",
        buyUrl:
          "https://www.amazon.com/Apple-iPhone-64GB-Silver-T-Mobile/dp/B07RV48RR1/ref=sr_1_27?keywords=Apple+iPhone+Verizon+renewed&qid=1657293017&sr=8-27",
        currentPrice: 23395,
        specs: [
          {
            productId: 1545698572049346560,
            key: "CONDITION",
            value: "Excellent",
          },
          {
            productId: 1545698572049346560,
            key: "CARRIER",
            value: "T-Mobile",
          },
          {
            productId: 1545698572049346560,
            key: "STORAGE",
            value: "64GB",
          },
          {
            productId: 1545698572049346560,
            key: "COLOR",
            value: "Silver",
          },
        ],
      },
      {
        productId: 1545705614445146112,
        name: "iPhone X",
        brand: "Apple",
        merchant: "Gazelle",
        brandLogoUrl:
          "https://uptrade-public-static-resources.s3.us-east-2.amazonaws.com/gazelle+logo.png",
        buyUrl:
          "https://buy.gazelle.com/products/iphone-x-64gb-unlocked?variant=8442115883061",
        currentPrice: 23900,
        specs: [
          {
            productId: 1545705614445146112,
            key: "CONDITION",
            value: "Excellent",
          },
          {
            productId: 1545705614445146112,
            key: "CARRIER",
            value: "Unlocked",
          },
          {
            productId: 1545705614445146112,
            key: "STORAGE",
            value: "64GB",
          },
          {
            productId: 1545705614445146112,
            key: "COLOR",
            value: "Silver",
          },
        ],
      },
      {
        productId: 1545698613111582720,
        name: "iPhone X",
        brand: "Apple",
        merchant: "Amazon",
        brandLogoUrl:
          "https://uptrade-public-static-resources.s3.us-east-2.amazonaws.com/amazon+logo.png",
        buyUrl:
          "https://www.amazon.com/Apple-iPhone-64GB-Space-Gray/dp/B07S5FQ5NQ/ref=sr_1_3?keywords=Apple+iPhone+T-Mobile+renewed&qid=1657294245&s=electronics&sr=1-3",
        currentPrice: 24400,
        specs: [
          {
            productId: 1545698613111582720,
            key: "CONDITION",
            value: "Excellent",
          },
          {
            productId: 1545698613111582720,
            key: "CARRIER",
            value: "T-Mobile",
          },
          {
            productId: 1545698613111582720,
            key: "STORAGE",
            value: "64GB",
          },
          {
            productId: 1545698613111582720,
            key: "COLOR",
            value: "Space Gray",
          },
        ],
      },
      {
        productId: 1545698631042232320,
        name: "iPhone X",
        brand: "Apple",
        merchant: "Amazon",
        brandLogoUrl:
          "https://uptrade-public-static-resources.s3.us-east-2.amazonaws.com/amazon+logo.png",
        buyUrl:
          "https://www.amazon.com/Apple-iPhone-Fully-Unlocked-64GB/dp/B077578W38/ref=sr_1_8?keywords=Apple+iPhone+Xfinity+renewed&qid=1657295038&s=electronics&sr=1-8",
        currentPrice: 25400,
        specs: [
          {
            productId: 1545698631042232320,
            key: "CONDITION",
            value: "Excellent",
          },
          {
            productId: 1545698631042232320,
            key: "CARRIER",
            value: "Unlocked",
          },
          {
            productId: 1545698631042232320,
            key: "STORAGE",
            value: "64GB",
          },
          {
            productId: 1545698631042232320,
            key: "COLOR",
            value: "Space Gray",
          },
        ],
      },
    ],
    aboutProduct: null,
    metaDescription:
      "Certified Used Verizon phones up to 70% off retail price. Get one for you today.",
    metaDescCategory: null,
    qa: {
      "Why should you buy a used or refurbished Verizon phone?":
        "A refurbished Verizon phone functions precisely like a new one. Why pay more? It will save you a lot of money  buying a refurbished Verizon phone. More importantly, it reduces e-waste and makes our planet a better place. Buying a refurbished Verizon phone is a smart choice.",
      "What does UpTrade Certified Used mean?":
        "UpTrade Certified means you can trust that your used Verizon phone will function just as well as a new device. Among hundreds of used phone sellers, we have chosen a modest bunch of reputable sellers and marketplaces that are capable of providing high-quality used and refurbished phones. An UpTrade Certified Used Verizon phone means it has passed a rigorous inspection and functions like a new one.",
      "What is the return policy for the Used and Refurbished Verizon phone?":
        "No worries if you are not 100% satisfied with the device you have received! Each phone is granted a 30-day trial period in which buyers may return the used device to the UpTrade Certified Seller for a refund within the first 30 days.",
      "Does Refurbished Verizon phone perform as well as the new?":
        "For the most part, there is no definite difference between a new phone and a used one, aside from one previously used by another owner. All used phones listed on UpTrade must pass a rigorous inspection to guarantee quality and product performance. Refurbished devices certified by UpTrade work just as well as new, ordinary store-bought phones.",
    },
  },
  {
    productName: "iPhone XR",
    productCategoryValueId: 211,
    price: 15900,
    keyword: "T-Mobile phone",
    productImageUrl:
      "https://d3c745jesl5pj3.cloudfront.net/sell/web/iPhone XR_lagecy_494bcfc5ce224f93a2c760f6eed9d283.jpg",
    brand: "T-Mobile",
    type: "CARRIER",
    brandCategoryValueId: 10,
    relatedGoods: [
      {
        productId: 1545705612465434624,
        name: "iPhone XR",
        brand: "Apple",
        merchant: "Gazelle",
        brandLogoUrl:
          "https://uptrade-public-static-resources.s3.us-east-2.amazonaws.com/gazelle+logo.png",
        buyUrl:
          "https://buy.gazelle.com/products/iphone-xr-64gb-t-mobile-1?variant=13061149917237",
        currentPrice: 18400,
        specs: [
          {
            productId: 1545705612465434624,
            key: "CONDITION",
            value: "Excellent",
          },
          {
            productId: 1545705612465434624,
            key: "CARRIER",
            value: "T-Mobile",
          },
          {
            productId: 1545705612465434624,
            key: "STORAGE",
            value: "128GB",
          },
          {
            productId: 1545705612465434624,
            key: "COLOR",
            value: "White",
          },
        ],
      },
      {
        productId: 1545698566814855168,
        name: "iPhone XR",
        brand: "Apple",
        merchant: "Amazon",
        brandLogoUrl:
          "https://uptrade-public-static-resources.s3.us-east-2.amazonaws.com/amazon+logo.png",
        buyUrl:
          "https://www.amazon.com/Apple-iPhone-XR-Fully-Unlocked/dp/B07P6Y7954/ref=sr_1_6?keywords=Apple+iPhone+Verizon+renewed&qid=1657292922&sr=8-6",
        currentPrice: 24000,
        specs: [
          {
            productId: 1545698566814855168,
            key: "CONDITION",
            value: "Excellent",
          },
          {
            productId: 1545698566814855168,
            key: "CARRIER",
            value: "Unlocked",
          },
          {
            productId: 1545698566814855168,
            key: "STORAGE",
            value: "64GB",
          },
          {
            productId: 1545698566814855168,
            key: "COLOR",
            value: "Black",
          },
        ],
      },
      {
        productId: 1545698599203270656,
        name: "iPhone XR",
        brand: "Apple",
        merchant: "Amazon",
        brandLogoUrl:
          "https://uptrade-public-static-resources.s3.us-east-2.amazonaws.com/amazon+logo.png",
        buyUrl:
          "https://www.amazon.com/Apple-iPhone-XR-64GB-Red/dp/B07T1KTPSB/ref=sr_1_1?keywords=Apple+iPhone+AT%26T+renewed&qid=1657293903&s=electronics&sr=1-1",
        currentPrice: 24000,
        specs: [
          {
            productId: 1545698599203270656,
            key: "CONDITION",
            value: "Excellent",
          },
          {
            productId: 1545698599203270656,
            key: "CARRIER",
            value: "AT&T",
          },
          {
            productId: 1545698599203270656,
            key: "STORAGE",
            value: "64GB",
          },
          {
            productId: 1545698599203270656,
            key: "COLOR",
            value: "Red",
          },
        ],
      },
      {
        productId: 1545698630551498752,
        name: "iPhone XR",
        brand: "Apple",
        merchant: "Amazon",
        brandLogoUrl:
          "https://uptrade-public-static-resources.s3.us-east-2.amazonaws.com/amazon+logo.png",
        buyUrl:
          "https://www.amazon.com/Apple-iPhone-XR-Fully-Unlocked/dp/B07P978C2R/ref=sr_1_3?keywords=Apple+iPhone+Xfinity+renewed&qid=1657295038&s=electronics&sr=1-3",
        currentPrice: 24195,
        specs: [
          {
            productId: 1545698630551498752,
            key: "CONDITION",
            value: "Excellent",
          },
          {
            productId: 1545698630551498752,
            key: "CARRIER",
            value: "Unlocked",
          },
          {
            productId: 1545698630551498752,
            key: "STORAGE",
            value: "64GB",
          },
          {
            productId: 1545698630551498752,
            key: "COLOR",
            value: "White",
          },
        ],
      },
      {
        productId: 1545698579666202624,
        name: "iPhone XR",
        brand: "Apple",
        merchant: "Amazon",
        brandLogoUrl:
          "https://uptrade-public-static-resources.s3.us-east-2.amazonaws.com/amazon+logo.png",
        buyUrl:
          "https://www.amazon.com/Apple-iPhone-XR-64GB-Black/dp/B07SZH8X5F/ref=sr_1_53?keywords=Apple+iPhone+Verizon+renewed&qid=1657293263&sr=8-53",
        currentPrice: 25398,
        specs: [
          {
            productId: 1545698579666202624,
            key: "CONDITION",
            value: "Excellent",
          },
          {
            productId: 1545698579666202624,
            key: "CARRIER",
            value: "T-Mobile",
          },
          {
            productId: 1545698579666202624,
            key: "STORAGE",
            value: "64GB",
          },
          {
            productId: 1545698579666202624,
            key: "COLOR",
            value: "Black",
          },
        ],
      },
    ],
    aboutProduct: null,
    metaDescription:
      "Certified Used T-Mobile phones on sale (up to 70% off). Free shipping and 30-day Money-back Guarantee. Shop with confidence.",
    metaDescCategory: null,
    qa: {
      "Why should you buy a used or refurbished T-Mobile phone?":
        "I am glad that you asked! A refurbished T-Mobile phone is a great opportunity to save when you are looking to purchase your next iPhone. Buying a refurbished T-Mobile phone can be an wonderful choice and can net you huge savings, particularly when the cost of a new T-Mobile phone is crazy expensive. A refurbished T-Mobile phone is completely functional and works very much like a brand new T-Mobile phone.",
      "What does UpTrade Certified Used mean?":
        "UpTrade Certified means the T-Mobile phone you buy will work and function just like new. Among hundreds of used phone and gadget sellers, we have chosen a modest bunch of reputable resellers and marketplaces that provide high-quality used and refurbished phones. An UpTrade Certified Used T-Mobile phone means it has passed an in-depth inspection by our Certified Seller.",
      "What is the return policy for the Used and Refurbished T-Mobile phone?":
        "Yes! All UpTrade Certified Used Phone Resellers and Marketplaces offer 30-day money-back-guarantee on T-Mobile phone phones listed here. If you aren’t satisfied with your purchase you may return your T-Mobile phone to your seller for free for up to 30 days.",
      "Does Refurbished T-Mobile phone perform as well as the new?":
        "Many people wonder if a refurbished T-Mobile phone is as good as a new T-Mobile phone. Typically there’s really no difference between them except for the fact that there may be signs of use (if at all) on a refurbished T-Mobile phone. A refurbished T-Mobile phone should be fully functional and work just like a new T-Mobile phone. All UpTrade Certified Used Phone Resellers process T-Mobile phone through a rigorous inspection so that each T-Mobile phone is fully functional and works just like a new T-Mobile phone.",
    },
  },
  {
    productName: "iPhone 8",
    productCategoryValueId: 214,
    price: 8900,
    keyword: "Sprint phone",
    productImageUrl:
      "https://d3c745jesl5pj3.cloudfront.net/sell/web/iPhone 8_1ccc3c022fea475f863fed81aaa7d2dd.jpg",
    brand: "Sprint",
    type: "CARRIER",
    brandCategoryValueId: 10,
    relatedGoods: [
      {
        productId: 1545705620824682496,
        name: "iPhone 8",
        brand: "Apple",
        merchant: "Gazelle",
        brandLogoUrl:
          "https://uptrade-public-static-resources.s3.us-east-2.amazonaws.com/gazelle+logo.png",
        buyUrl:
          "https://buy.gazelle.com/products/iphone-8-64gb-at-t?variant=8442095697973",
        currentPrice: 11400,
        specs: [
          {
            productId: 1545705620824682496,
            key: "CONDITION",
            value: "Excellent",
          },
          {
            productId: 1545705620824682496,
            key: "CARRIER",
            value: "AT&T",
          },
          {
            productId: 1545705620824682496,
            key: "STORAGE",
            value: "64GB",
          },
          {
            productId: 1545705620824682496,
            key: "COLOR",
            value: "Space Gray",
          },
        ],
      },
      {
        productId: 1545705623496454144,
        name: "iPhone 8",
        brand: "Apple",
        merchant: "Gazelle",
        brandLogoUrl:
          "https://uptrade-public-static-resources.s3.us-east-2.amazonaws.com/gazelle+logo.png",
        buyUrl:
          "https://buy.gazelle.com/products/iphone-8-64gb-at-t?variant=12368272785461",
        currentPrice: 11400,
        specs: [
          {
            productId: 1545705623496454144,
            key: "CONDITION",
            value: "Excellent",
          },
          {
            productId: 1545705623496454144,
            key: "CARRIER",
            value: "AT&T",
          },
          {
            productId: 1545705623496454144,
            key: "STORAGE",
            value: "64GB",
          },
          {
            productId: 1545705623496454144,
            key: "COLOR",
            value: "Red",
          },
        ],
      },
      {
        productId: 1545705621382524928,
        name: "iPhone 8",
        brand: "Apple",
        merchant: "Gazelle",
        brandLogoUrl:
          "https://uptrade-public-static-resources.s3.us-east-2.amazonaws.com/gazelle+logo.png",
        buyUrl:
          "https://buy.gazelle.com/products/iphone-8-64gb-at-t?variant=8442095730741",
        currentPrice: 13900,
        specs: [
          {
            productId: 1545705621382524928,
            key: "CONDITION",
            value: "Excellent",
          },
          {
            productId: 1545705621382524928,
            key: "CARRIER",
            value: "AT&T",
          },
          {
            productId: 1545705621382524928,
            key: "STORAGE",
            value: "64GB",
          },
          {
            productId: 1545705621382524928,
            key: "COLOR",
            value: "Space Gray",
          },
        ],
      },
      {
        productId: 1545705622418518016,
        name: "iPhone 8",
        brand: "Apple",
        merchant: "Gazelle",
        brandLogoUrl:
          "https://uptrade-public-static-resources.s3.us-east-2.amazonaws.com/gazelle+logo.png",
        buyUrl:
          "https://buy.gazelle.com/products/iphone-8-64gb-at-t?variant=8442095829045",
        currentPrice: 13900,
        specs: [
          {
            productId: 1545705622418518016,
            key: "CONDITION",
            value: "Excellent",
          },
          {
            productId: 1545705622418518016,
            key: "CARRIER",
            value: "AT&T",
          },
          {
            productId: 1545705622418518016,
            key: "STORAGE",
            value: "64GB",
          },
          {
            productId: 1545705622418518016,
            key: "COLOR",
            value: "Silver",
          },
        ],
      },
      {
        productId: 1545705624016547840,
        name: "iPhone 8",
        brand: "Apple",
        merchant: "Gazelle",
        brandLogoUrl:
          "https://uptrade-public-static-resources.s3.us-east-2.amazonaws.com/gazelle+logo.png",
        buyUrl:
          "https://buy.gazelle.com/products/iphone-8-64gb-t-mobile?variant=8442100842549",
        currentPrice: 14900,
        specs: [
          {
            productId: 1545705624016547840,
            key: "CONDITION",
            value: "Excellent",
          },
          {
            productId: 1545705624016547840,
            key: "CARRIER",
            value: "T-Mobile",
          },
          {
            productId: 1545705624016547840,
            key: "STORAGE",
            value: "64GB",
          },
          {
            productId: 1545705624016547840,
            key: "COLOR",
            value: "Gold",
          },
        ],
      },
    ],
    aboutProduct: null,
    metaDescription:
      "Fully functional Certified Used Sprint phones with significant discount",
    metaDescCategory: null,
    qa: {
      "Why should you buy a used or refurbished Sprint phone?":
        "Why pay more if you are getting the same thing? A refurbished Sprint phone is fully functional and works exactly like a brand new Sprint phone, except for minimum to normal wear and tear on the cosmetics of the phone. A refurbished Sprint phone is a significant saving option when you plan to buy your next Sprint phone. Buying a refurbished Sprint phone is a fantastic choice. It will net you significant savings, mainly when a new Sprint phone costs much more.",
      "What does UpTrade Certified Used mean?":
        "There are hundreds or even thousands of used phone sellers, but unfortunately, not all are legit. To ensure the quality, we have selected a few reputable resellers and marketplaces that can provide high-quality used and refurbished phones. An UpTrade Certified Used Sprint phone means it has passed an in-depth inspection by our Certified Seller. UpTrade Certified means the Sprint phone you buy will work and function exactly like a new one.",
      "What is the return policy for the Used and Refurbished Sprint phone?":
        "Sure! The Refurbished Sprint phone listed here comes with a 30-day return policy from the Sellers. So if you have any problem with your purchase, you may contact the Seller and return it to them for up to 30 days.",
      "Does Refurbished Sprint phone perform as well as the new?":
        "That’s a good question! Technically, there’s no difference between refurbished and new except that there may be signs of use (if at all) on a refurbished phone. All UpTrade Certified Used Phone Sellers process the phones through a rigorous inspection. As a result, each smartphone is fully functional and works just like a new one.",
    },
  },
  {
    productName: "iPhone X",
    productCategoryValueId: 220,
    price: 19400,
    keyword: "Xfinity phone",
    productImageUrl:
      "https://d3c745jesl5pj3.cloudfront.net/sell/web/iPhone X_4da09734176e44a98202a8400a36d044.jpg",
    brand: "Xfinity",
    type: "CARRIER",
    brandCategoryValueId: 10,
    relatedGoods: [
      {
        productId: 1545705613954412544,
        name: "iPhone X",
        brand: "Apple",
        merchant: "Gazelle",
        brandLogoUrl:
          "https://uptrade-public-static-resources.s3.us-east-2.amazonaws.com/gazelle+logo.png",
        buyUrl:
          "https://buy.gazelle.com/products/iphone-x-64gb-unlocked?variant=8442115850293",
        currentPrice: 22900,
        specs: [
          {
            productId: 1545705613954412544,
            key: "CONDITION",
            value: "Excellent",
          },
          {
            productId: 1545705613954412544,
            key: "CARRIER",
            value: "Unlocked",
          },
          {
            productId: 1545705613954412544,
            key: "STORAGE",
            value: "64GB",
          },
          {
            productId: 1545705613954412544,
            key: "COLOR",
            value: "Silver",
          },
        ],
      },
      {
        productId: 1545698572049346560,
        name: "iPhone X",
        brand: "Apple",
        merchant: "Amazon",
        brandLogoUrl:
          "https://uptrade-public-static-resources.s3.us-east-2.amazonaws.com/amazon+logo.png",
        buyUrl:
          "https://www.amazon.com/Apple-iPhone-64GB-Silver-T-Mobile/dp/B07RV48RR1/ref=sr_1_27?keywords=Apple+iPhone+Verizon+renewed&qid=1657293017&sr=8-27",
        currentPrice: 23395,
        specs: [
          {
            productId: 1545698572049346560,
            key: "CONDITION",
            value: "Excellent",
          },
          {
            productId: 1545698572049346560,
            key: "CARRIER",
            value: "T-Mobile",
          },
          {
            productId: 1545698572049346560,
            key: "STORAGE",
            value: "64GB",
          },
          {
            productId: 1545698572049346560,
            key: "COLOR",
            value: "Silver",
          },
        ],
      },
      {
        productId: 1545705614445146112,
        name: "iPhone X",
        brand: "Apple",
        merchant: "Gazelle",
        brandLogoUrl:
          "https://uptrade-public-static-resources.s3.us-east-2.amazonaws.com/gazelle+logo.png",
        buyUrl:
          "https://buy.gazelle.com/products/iphone-x-64gb-unlocked?variant=8442115883061",
        currentPrice: 23900,
        specs: [
          {
            productId: 1545705614445146112,
            key: "CONDITION",
            value: "Excellent",
          },
          {
            productId: 1545705614445146112,
            key: "CARRIER",
            value: "Unlocked",
          },
          {
            productId: 1545705614445146112,
            key: "STORAGE",
            value: "64GB",
          },
          {
            productId: 1545705614445146112,
            key: "COLOR",
            value: "Silver",
          },
        ],
      },
      {
        productId: 1545698613111582720,
        name: "iPhone X",
        brand: "Apple",
        merchant: "Amazon",
        brandLogoUrl:
          "https://uptrade-public-static-resources.s3.us-east-2.amazonaws.com/amazon+logo.png",
        buyUrl:
          "https://www.amazon.com/Apple-iPhone-64GB-Space-Gray/dp/B07S5FQ5NQ/ref=sr_1_3?keywords=Apple+iPhone+T-Mobile+renewed&qid=1657294245&s=electronics&sr=1-3",
        currentPrice: 24400,
        specs: [
          {
            productId: 1545698613111582720,
            key: "CONDITION",
            value: "Excellent",
          },
          {
            productId: 1545698613111582720,
            key: "CARRIER",
            value: "T-Mobile",
          },
          {
            productId: 1545698613111582720,
            key: "STORAGE",
            value: "64GB",
          },
          {
            productId: 1545698613111582720,
            key: "COLOR",
            value: "Space Gray",
          },
        ],
      },
      {
        productId: 1545698631042232320,
        name: "iPhone X",
        brand: "Apple",
        merchant: "Amazon",
        brandLogoUrl:
          "https://uptrade-public-static-resources.s3.us-east-2.amazonaws.com/amazon+logo.png",
        buyUrl:
          "https://www.amazon.com/Apple-iPhone-Fully-Unlocked-64GB/dp/B077578W38/ref=sr_1_8?keywords=Apple+iPhone+Xfinity+renewed&qid=1657295038&s=electronics&sr=1-8",
        currentPrice: 25400,
        specs: [
          {
            productId: 1545698631042232320,
            key: "CONDITION",
            value: "Excellent",
          },
          {
            productId: 1545698631042232320,
            key: "CARRIER",
            value: "Unlocked",
          },
          {
            productId: 1545698631042232320,
            key: "STORAGE",
            value: "64GB",
          },
          {
            productId: 1545698631042232320,
            key: "COLOR",
            value: "Space Gray",
          },
        ],
      },
    ],
    aboutProduct: null,
    metaDescription:
      "Fully inspected Certified Used Xfinity phones. Up to 70% Off. Shop today.",
    metaDescCategory: null,
    qa: {
      "Why should you buy a used or refurbished Xfinity phone?":
        "A refurbished Xfinity phone functions precisely like a new one. Why pay more? It will save you a lot of money  buying a refurbished Xfinity phone. More importantly, it reduces e-waste and makes our planet a better place. Buying a refurbished Xfinity phone is a smart choice.",
      "What does UpTrade Certified Used mean?":
        "UpTrade Certified means you can trust that your used Xfinity phone will function just as well as a new device. Among hundreds of used phone sellers, we have chosen a modest bunch of reputable sellers and marketplaces that are capable of providing high-quality used and refurbished phones. An UpTrade Certified Used Xfinity phone means it has passed a rigorous inspection and functions like a new one.",
      "What is the return policy for the Used and Refurbished Xfinity phone?":
        "No worries if you are not 100% satisfied with the device you have received! Each phone is granted a 30-day trial period in which buyers may return the used device to the UpTrade Certified Seller for a refund within the first 30 days.",
      "Does Refurbished Xfinity phone perform as well as the new?":
        "For the most part, there is no definite difference between a new phone and a used one, aside from one previously used by another owner. All used phones listed on UpTrade must pass a rigorous inspection to guarantee quality and product performance. Refurbished devices certified by UpTrade work just as well as new, ordinary store-bought phones.",
    },
  },
];

export const config = { amp: true };

export default function Model({
  productImageUrl,
  productCategoryValueId,
  productName,
  price,
  reviewsInfo,
  relatedGoods,
  metaDescription,
  qa,
  path,
  keyword,
  title,
  brand,
  productId,
}) {
  return (
    <div>
      <Head>
        <script
          async
          custom-element="amp-carousel"
          src="https://cdn.ampproject.org/v0/amp-carousel-0.2.js"
        ></script>
        {/*<script*/}
        {/*  type="application/ld+json"*/}
        {/*  dangerouslySetInnerHTML={*/}
        {/*    pageData?.canSold*/}
        {/*      ? {*/}
        {/*          __html: JSON.stringify({*/}
        {/*            "@context": "https://schema.org",*/}
        {/*            "@type": "ItemList",*/}
        {/*            name: "ProductList",*/}
        {/*            itemListElement: [*/}
        {/*              {*/}
        {/*                "@type": "ListItem",*/}
        {/*                position: "1",*/}
        {/*                url: `${process.env.CurrURL}/buy/${parentUrl}`,*/}
        {/*              },*/}
        {/*            ],*/}
        {/*          }),*/}
        {/*        }*/}
        {/*      : {*/}
        {/*          __html: "",*/}
        {/*        }*/}
        {/*  }*/}
        {/*/>*/}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org/",
              "@type": "BreadcrumbList",
              name: "Breadcrumb",
              itemListElement: [
                {
                  name: "All",
                  position: 1,
                  "@type": "ListItem",
                  item: `${process.env.BASEURL}/buy-phone`,
                },
                {
                  name: `Refurbished ${keyword || productName}`,
                  position: 2,
                  "@type": "ListItem",
                },
              ],
            }),
          }}
        />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Product",
              name: `Certified Used ${productName}`,
              description: `Best deals on Certifiied Used and Refurbished ${productName}. Up to 70% off compared to new ✌ Free shipping ✅ 100% fully function ✅ 30 days risk free `,
              image: [
                productImageUrl ?? `${process.env.BASEURL}/default-image.png`,
              ],
              offers: {
                "@type": "Offer",
                availability: "http://schema.org/InStock",
                price: `${price / 100 || ""}`,
                priceValidUntil: dayjs().add(90, "day").format("YYYY-MM-DD"),
                brand: brand,
                sku: `${brand}-${productName.split(" ").join("-")}`,
                gtin: productId,
                url: `${process.env.BASEURL}${path}`,
                priceCurrency: "USD",
                usedCondition: "http://schema.org/RefurbishedCondition",
                seller: {
                  "@type": "Organization",
                  name: "UpTrade",
                },
              },
              aggregateRating: {
                "@type": "AggregateRating",
                ratingValue: 4.5,
                reviewCount: 838,
                bestRating: 5,
                worstRating: 1,
              },
            }),
          }}
        />
      </Head>
      <NextSeo
        title={title}
        description={metaDescription}
        canonical={`${process.env.BASEURL}${path}`}
        openGraph={{
          title: title,
          type: "Product.group",
          images: [
            {
              url: `${process.env.BASEURL}/og_logo.png`,
              width: 200,
              height: 200,
            },
          ],
          url: `${process.env.BASEURL}${path}`,
          description: metaDescription,
          site_name: "UpTrade",
        }}
      />
      <main className="model-page">
        <div className="icon-list">
          <div className="icon-list-item">
            <amp-img src="/svg/certified.svg" width="31" height="33" />
            <div className="item-list-item-description">
              <strong>UpTrade Certified</strong>
              <div>Quality, fully functional, used refurbished phones</div>
            </div>
          </div>
          <div className="icon-list-item">
            <amp-img src="/svg/return.svg" width="31" height="33" />
            <div className="item-list-item-description">
              <strong>30 Day Free Returns</strong>
              <div>Return for any reason or no reason at all</div>
            </div>
          </div>
          <div className="icon-list-item">
            <amp-img src="/svg/secure-payment.svg" width="31" height="33" />
            <div className="item-list-item-description">
              <strong>Secure Payment</strong>
              <div>Visa, MasterCard, American Express</div>
            </div>
          </div>
        </div>
        <div className="model-page-description">
          <div className="breadcrumbs">
            {/* eslint-disable-next-line @next/next/no-html-link-for-pages */}
            <a href="/buy-phone">All</a>
            <amp-img src="/svg/black-arrow-right.svg" width="12" height="12" />
            <a>Refurbished {keyword || productName}</a>
          </div>
          <div className="model-page-description-content">
            {metaDescription}
          </div>
        </div>
        <div className="model-content">
          <div className="left">
            <h1 className="model-page-title">
              Best Certified Used {keyword || productName} and Refurbished{" "}
              {keyword || productName}
            </h1>
            <div className="model-info">
              <amp-img
                src={productImageUrl ?? "/default-image.png"}
                data-hero
                width="270"
                height="270"
                className="desktop-img"
              />
              <amp-img
                data-hero
                src={productImageUrl ?? "/default-image.png"}
                width="270"
                height="270"
                layout="responsive"
                className="mobile-img"
              />

              <div className="desktop-model-description">
                <div className="model-tag-item">
                  <amp-img src="/svg/check-circle.svg" width="15" height="15" />
                  <div>Professionally Refurbished</div>
                </div>
                <div className="model-tag-item">
                  <amp-img src="/svg/file-text.svg" width="15" height="15" />
                  <div>Clean IMEI</div>
                </div>
                <div className="model-tag-item">
                  <amp-img src="/svg/activity.svg" width="15" height="15" />
                  <div>Fully Functional</div>
                </div>
                <div className="model-tag-item">
                  <amp-img src="/svg/award.svg" width="15" height="15" />
                  <div>30-Day Money Back Guarantee</div>
                </div>

                <div className="model-price">
                  {price ? (
                    <>
                      From <strong>${price / 100}</strong>
                    </>
                  ) : (
                    "Out of Stock"
                  )}
                </div>
              </div>
            </div>

            <div className="mobile-model-description">
              <div className="model-price">
                {price ? (
                  <>
                    From <strong>${price / 100}</strong>
                  </>
                ) : (
                  "Out of Stock"
                )}
              </div>
              <div className="model-tag-item">
                <amp-img src="/svg/check-circle.svg" width="15" height="15" />
                <div>Professionally Refurbished</div>
              </div>
              <div className="model-tag-item">
                <amp-img src="/svg/file-text.svg" width="15" height="15" />
                <div>Clean IMEI</div>
              </div>
              <div className="model-tag-item">
                <amp-img src="/svg/activity.svg" width="15" height="15" />
                <div>Fully Functional</div>
              </div>
              <div className="model-tag-item">
                <amp-img src="/svg/award.svg" width="15" height="15" />
                <div>30-Day Money Back Guarantee</div>
              </div>
            </div>

            <div className="model-info-footer">
              <a
                href={urlcat("/buy-phone", {
                  modelName: productName,
                  modelId: productCategoryValueId,
                })}
              >
                <button className="model-see-more">See More</button>
              </a>
            </div>
          </div>
          <div className="right">
            <div className="desktop-reviews-title">
              <h2 className="reviews-title">Customer reviews</h2>
              <div className="reviews-from">
                <span>Data From</span>
                <amp-img src="/svg/reviewsio-logo.svg" width="80" height="11" />
              </div>
              <div className="reviews-subtitle">
                {reviewsInfo.average_rating} Rating based on{" "}
                <a href="/reviews">{reviewsInfo.total} Reviews</a>
              </div>
            </div>

            <div className="mobile-reviews-title">
              <h2 className="reviews-title">
                <span>Customer reviews</span>
                <div className="reviews-from">
                  <span>Data From</span>
                  <amp-img
                    src="/svg/reviewsio-logo.svg"
                    width="80"
                    height="11"
                  />
                </div>
              </h2>

              <div className="reviews-subtitle">
                {reviewsInfo.average_rating} Rating based on{" "}
                <a href="/reviews">{reviewsInfo.total} Reviews</a>
              </div>
            </div>

            <div className="divider" />

            <amp-carousel
              type="slides"
              height="290"
              role="region"
              layout="flex-item"
            >
              {reviewsInfo.reviews.map((x) => {
                return (
                  <div key={x.store_review_id} className="review-card">
                    <div className="review-author">{`${x.reviewer.first_name} ${x.reviewer.last_name}`}</div>
                    <div className="review-info">
                      <div className="review-ratings">
                        {new Array(x.rating).fill("").map((x, index) => (
                          <amp-img
                            key={index}
                            width="24"
                            height="24"
                            alt="rating"
                            src="/rating.svg"
                          />
                        ))}
                      </div>
                    </div>
                    <div
                      className="review-content"
                      dangerouslySetInnerHTML={{ __html: x.comments }}
                    ></div>
                  </div>
                );
              })}
            </amp-carousel>

            <div className="model-reviews-footer">
              <a href="#">
                <button>See All Reviews</button>
              </a>
            </div>
          </div>
        </div>

        {qa ? (
          <div className="model-page-faq">
            {Object.entries(qa).map(([title, content], index) => (
              <div className="model-page-faq-item" key={index} id={title}>
                <div className="model-page-faq-title">{title}</div>
                <div className="model-page-faq-content">{content}</div>
              </div>
            ))}
          </div>
        ) : null}

        <div className="model-related-content">
          <div className="desktop-phone-list">
            {relatedGoods?.map((item) => (
              <a key={item.productId} href="#" className="phone-list-item">
                <div className="img-container">
                  <amp-img width="100" height="100" src={item.brandLogoUrl} />
                </div>
                <div className="description">
                  <span>{item.name}</span>
                  <span className="attr">
                    {`${item.CARRIER} ${item.STORAGE} ${item.COLOR}`}
                  </span>
                </div>

                <div className="condition-container">
                  <div className={`condition ${item.CONDITION} `}>
                    {item.CONDITION}
                  </div>
                </div>

                <div className="action">
                  <span className="price">${item.currentPrice / 100}</span>
                  <div className="view-detail">View Detail</div>
                </div>
              </a>
            ))}
          </div>

          <div className="mobile-phone-list">
            {relatedGoods?.map((item) => (
              <a key={item.productId} href="#" className="phone-list-item">
                <div className="top">
                  <amp-img width="50" height="50" src={item.brandLogoUrl} />
                  <div className={`condition ${item.CONDITION} `}>
                    {item.CONDITION}
                  </div>
                </div>
                <div className="bottom">
                  <div className="description">
                    <span>{item.name}</span>
                    <span className="attr">
                      {`${item.CARRIER} ${item.STORAGE} ${item.COLOR}`}
                    </span>
                  </div>

                  <span className="price">${item.currentPrice / 100}</span>
                </div>
              </a>
            ))}
          </div>

          <div className="model-related-content-footer">
            <a
              href={urlcat("/buy-phone", {
                modelName: productName,
                modelId: productCategoryValueId,
              })}
            >
              <button>See More</button>
            </a>
          </div>
        </div>
      </main>
    </div>
  );
}

export async function getStaticPaths() {
  // const response = await fetch(
  //   "https://api.276qa.com/product/search/low-price"
  // ).then((response) => response.json());
  //
  // if (!response.success) return { paths: [], fallback: false };
  //
  // const result = response.data;
  //
  // await fs.writeFile(
  //   path.join(process.cwd(), "cache.json"),
  //   JSON.stringify(result)
  // );

  const paths = test.map((x) => {
    if (x.type === "BRAND") {
      return {
        params: {
          matchName: `buy-used-refurbished-${x.brand
            .split(" ")
            .join("-")
            .toLowerCase()}`,
        },
      };
    }

    if (x.type === "CARRIER") {
      return {
        params: {
          matchName: `buy-used-refurbished-${x.brand
            .replaceAll("&", "")
            .replaceAll("-", "")
            .split(" ")
            .join("-")
            .toLowerCase()}-phones`,
        },
      };
    }

    return {
      params: {
        matchName: `buy-used-refurbished-${x.productName
          .split(" ")
          .join("-")
          .toLowerCase()}`,
      },
    };
  });

  return { paths, fallback: false };
}

let reviewsResponseCache = null;

export async function getStaticProps({ params }) {
  let reviewsResponse = null;
  if (reviewsResponseCache) {
    reviewsResponse = reviewsResponseCache;
  } else {
    reviewsResponse = await fetch(
      "https://api.reviews.io/merchant/reviews?page=0&per_page=1000&order=rating&sort=highest_rated&store=uptradeit-com"
    ).then((response) => response.json());

    reviewsResponseCache = reviewsResponse;
  }

  const products = test.filter((x) => {
    if (x.type === "BRAND")
      return (
        params.matchName ===
        `buy-used-refurbished-${x.brand.split(" ").join("-").toLowerCase()}`
      );
    else if (x.type === "CARRIER")
      return (
        params.matchName ===
        `buy-used-refurbished-${x.brand
          .replaceAll("&", "")
          .replaceAll("-", "")
          .split(" ")
          .join("-")
          .toLowerCase()}-phones`
      );

    return (
      params.matchName ===
      `buy-used-refurbished-${x.productName.split(" ").join("-").toLowerCase()}`
    );
  });

  const product = products[0];

  const reviewsInfo = {
    total: reviewsResponse.stats.total_reviews,
    average_rating: reviewsResponse.stats.average_rating,
    reviews: reviewsResponse.reviews.slice(0, 5),
  };

  const title =
    product.type === "BRAND"
      ? `Used ${
          product.brand === "Apple" ? "iPhones" : `${product.brand} Phones`
        } for Sale - Best Deals | UpTrade`
      : product.type === "CARRIER"
      ? `Buy Used Refurbished ${product.brand} Phones | UpTrade`
      : `Buy Used Refurbished ${
          product.keyword || product.productName
        } | UpTrade`;

  return {
    props: {
      ...product,
      title,
      path: `/${params.matchName}`,
      relatedGoods: product.relatedGoods
        .filter((x) => !!x.specs)
        .map((item) => {
          const specs = item.specs.reduce(
            (acc, { key, value }) => ({ ...acc, [key]: value }),
            {}
          );
          return {
            ...item,
            ...specs,
          };
        }),
      reviewsInfo,
    },
  };
}
