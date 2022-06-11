import React, { useState } from "react";

import { Box } from "@mui/material";
import { Exercises, HeroBanner, SearchExercices } from "../../components";

function Home() {
  const [bodyPart, setBodyPart] = useState("all");

  const [exercises, setExercises] = useState([]);

  return (
    <Box>
      <HeroBanner />
      <SearchExercices
        setExercises={setExercises}
        bodyPart={bodyPart}
        setBodyPart={setBodyPart}
      />
      <Exercises
        setExercises={setExercises}
        bodyPart={bodyPart}
        exercises={exercises}
      />
    </Box>
  );
}

export default Home;
