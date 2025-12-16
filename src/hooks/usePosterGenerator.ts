import { useRef } from "react";
import type { FrameType, PosterType } from "@/components/PosterPreview";

export const usePosterGenerator = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const posterImages = {
    poster1: "uploads/wordcamp-poster1.png",
    poster2: "uploads/wordcamp-poster2.png"
  };

  const generatePoster = async (
    userImage: string,
    frameType: FrameType,
    customMessage: string,
    posterType: PosterType = "poster1"
  ): Promise<string> => {
    return new Promise((resolve, reject) => {
      const canvas = document.createElement("canvas");
      const ctx = canvas.getContext("2d");

      if (!ctx) {
        reject(new Error("Canvas context not available"));
        return;
      }

      const posterWidth = 1080;
      const posterHeight = 1920;
      canvas.width = posterWidth;
      canvas.height = posterHeight;

      const templateImg = new Image();
      templateImg.crossOrigin = "anonymous";

      templateImg.onload = () => {
        ctx.drawImage(templateImg, 0, 0, posterWidth, posterHeight);

        const userImg = new Image();
        userImg.crossOrigin = "anonymous";

        userImg.onload = () => {
          const frameSize = 620;
          const frameX = (posterWidth - frameSize) / 2;
          const frameY = (posterHeight - frameSize) / 2;

          ctx.save();

          // Always use circle frame
          ctx.beginPath();
          ctx.arc(
            frameX + frameSize / 2,
            frameY + frameSize / 2,
            frameSize / 2,
            0,
            Math.PI * 2
          );
          ctx.clip();

          ctx.drawImage(userImg, frameX, frameY, frameSize, frameSize);
          ctx.restore();

          // Add fun, social-media-friendly text overlay
          ctx.save();

          // "I'M ATTENDING 🎉" text at the top
          ctx.font = "bold 68px Arial, sans-serif";
          ctx.fillStyle = "#FFFFFF";
          ctx.strokeStyle = "#000000";
          ctx.lineWidth = 4;
          ctx.textAlign = "center";
          ctx.textBaseline = "middle";

          const topText = "I'M ATTENDING 🎉";
          const topY = frameY - frameSize / 2 - 100;
          ctx.strokeText(topText, posterWidth / 2, topY);
          ctx.fillText(topText, posterWidth / 2, topY);

          // "WORDCAMP BHOPAL 2025" text - larger and colorful
          ctx.font = "bold 88px Arial, sans-serif";

          // Create gradient for WordCamp text using WordPress colors
          const gradient = ctx.createLinearGradient(0, topY + 120, posterWidth, topY + 120);
          gradient.addColorStop(0, "#21759b");    // WordPress Blue
          gradient.addColorStop(0.5, "#d54e21");  // WordPress Orange
          gradient.addColorStop(1, "#21759b");    // WordPress Blue

          ctx.fillStyle = gradient;
          ctx.strokeStyle = "#FFFFFF";
          ctx.lineWidth = 5;

          const mainText = "WORDCAMP";
          ctx.strokeText(mainText, posterWidth / 2, topY + 100);
          ctx.fillText(mainText, posterWidth / 2, topY + 100);

          ctx.font = "bold 74px Arial, sans-serif";
          ctx.fillStyle = "#FFFFFF";
          const subText = "BHOPAL 2025 🚀";
          ctx.strokeText(subText, posterWidth / 2, topY + 190);
          ctx.fillText(subText, posterWidth / 2, topY + 190);

          // Event details at the bottom
          ctx.font = "bold 54px Arial, sans-serif";
          ctx.fillStyle = "#FBBC04"; // Google Yellow for fun pop
          ctx.strokeStyle = "#000000";
          ctx.lineWidth = 3;

          const dateText = "📅 08 FEB 2025";
          const bottomY = frameY + frameSize / 2 + 120;
          ctx.strokeText(dateText, posterWidth / 2, bottomY);
          ctx.fillText(dateText, posterWidth / 2, bottomY);

          ctx.font = "bold 58px Arial, sans-serif";
          ctx.fillStyle = "#FFFFFF";
          const funText = "SEE YOU THERE! 🎊";
          ctx.strokeText(funText, posterWidth / 2, bottomY + 75);
          ctx.fillText(funText, posterWidth / 2, bottomY + 75);

          ctx.restore();

          const dataURL = canvas.toDataURL("image/png", 1.0);
          resolve(dataURL);
        };

        userImg.onerror = () => reject(new Error("Failed to load user image"));
        userImg.src = userImage;
      };

      templateImg.onerror = () => reject(new Error("Failed to load poster template"));
      templateImg.src = posterImages[posterType];
    });
  };

  const downloadPoster = async (
    userImage: string,
    frameType: FrameType,
    customMessage: string,
    posterType: PosterType = "poster1"
  ) => {
    try {
      const posterDataURL = await generatePoster(userImage, frameType, customMessage, posterType);

      const link = document.createElement("a");
      link.download = `WordCamp-Bhopal-2025-${Date.now()}.png`;
      link.href = posterDataURL;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);

      return true;
    } catch (error) {
      console.error("Error generating poster:", error);
      throw error;
    }
  };

  const sharePoster = async (
    userImage: string,
    frameType: FrameType,
    customMessage: string,
    posterType: PosterType = "poster1"
  ) => {
    try {
      const posterDataURL = await generatePoster(userImage, frameType, customMessage, posterType);
      const response = await fetch(posterDataURL);
      const blob = await response.blob();
      const file = new File([blob], "WordCamp-Bhopal-2025.png", { type: "image/png" });
      if (navigator.share && navigator.canShare({ files: [file] })) {
        await navigator.share({
          title: "WordCamp Bhopal 2025",
          text: "Check out my WordCamp Bhopal 2025 poster!",
          files: [file]
        });
        return true;
      } else if (navigator.clipboard && window.ClipboardItem) {
        await navigator.clipboard.write([
          new ClipboardItem({ "image/png": blob })
        ]);
        return "clipboard";
      } else {
        await downloadPoster(userImage, frameType, customMessage, posterType);
        return "download";
      }
    } catch (error) {
      console.error("Error sharing poster:", error);
      throw error;
    }
  };

  return {
    generatePoster,
    downloadPoster,
    sharePoster
  };
};