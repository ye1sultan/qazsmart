import { useState } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { Button } from "src/@/components/ui/button";
import { Input } from "src/@/components/ui/input";
import { Textarea } from "src/@/components/ui/textarea";
import axios from "../../axios";
import { Star } from "../assets/icons/icons";

export const Form = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    stars: 0,
    comment: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleStarClick = (selectedRating) => {
    setFormData({
      ...formData,
      stars: selectedRating,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.name && formData.email && formData.stars && formData.comment) {
      try {
        const today = new Date().toISOString().slice(0, 10);
        formData.date = today;

        await axios.post("/reviews", formData);

        setTimeout(() => {
          navigate("/#reviews");
        }, 3500);
      } catch (error) {
        console.error(error);
      }
    } else {
      alert("Please write all inputs");
    }
  };

  return (
    <div className="w-full h-full flex justify-center items-center mt-10">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-3xl mx-auto flex flex-col justify-center items-start flex-wrap gap-6"
      >
        <div className="w-full flex flex-col md:flex-row justify-start items-start gap-4">
          <div className="w-full md:w-1/2 flex flex-col gap-1">
            <label htmlFor="name" className="block font-medium capitalize">
              {t("writeReview.name")}
            </label>
            <Input
              type="text"
              name="name"
              id="name"
              className="w-full text-lg rounded-md"
              value={formData.name}
              onChange={handleInputChange}
            />
          </div>
          <div className="w-full md:w-1/2 flex flex-col gap-1">
            <label htmlFor="email" className="block font-medium capitalize">
              {t("writeReview.email")}
            </label>
            <Input
              type="email"
              name="email"
              id="email"
              className="w-full text-lg rounded-md"
              value={formData.email}
              onChange={handleInputChange}
            />
          </div>
        </div>
        <div className="w-full max-w-xs flex flex-col gap-1">
          <div className="block font-medium capitalize">
            {t("writeReview.rating")}: {formData.stars}
          </div>
          <div className="flex justify-start items-center">
            {[1, 2, 3, 4, 5].map((star) => (
              <Button
                size="icon"
                variant="ghost"
                onClick={() => handleStarClick(star)}
              >
                <Star
                  className={`h-7 w-7 flex-shrink-0 cursor-pointer ${
                    star <= formData.stars
                      ? "fill-yellow-400"
                      : "fill-neutral-300"
                  }`}
                />
              </Button>
            ))}
          </div>
        </div>
        <div className="w-full flex flex-col gap-1">
          <label htmlFor="comment" className="block font-medium capitalize">
            {t("writeReview.comment")}
          </label>
          <Textarea
            rows={4}
            name="comment"
            id="comment"
            className="w-full text-lg rounded-md"
            value={formData.comment}
            onChange={handleInputChange}
          />
        </div>
        <div className="w-full flex justify-end items-center">
          <Button
            type="submit"
            size="lg"
            variant="outline"
            className="text-lg bg-transparent"
          >
            {t("writeReview.btnText")}
          </Button>
        </div>
      </form>
    </div>
  );
};
