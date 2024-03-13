import React from "react";
import { Button, Card } from "flowbite-react";
import { useNavigate } from "react-router-dom";

const Detail = () => {
  const navigate = useNavigate();
  return (
    <div>
      <div className="container mx-auto">
        <div className="my-3">
          <Button gradientMonochrome="lime" onClick={() => navigate("/")}>
            Back
          </Button>
        </div>
        <Card
          className="max-w-auto"
          imgAlt="Meaningful alt text for an image that is not purely decorative"
          imgSrc="https://dailyevergreen.com/wp-content/uploads/2023/02/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_-608x900.jpg"
        >
          <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            Noteworthy technology acquisitions 2021
          </h5>
          <p className="font-normal text-gray-700 dark:text-gray-400">
            Here are the biggest enterprise technology acquisitions of 2021 so
            far, in reverse chronological order.
          </p>
        </Card>
      </div>
    </div>
  );
};

export default Detail;
