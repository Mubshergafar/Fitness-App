import React from "react";
import { Box, Stack, Typography } from "@mui/material";

function ExerciseVedios({ exerciseVideos, name }) {
  console.log(exerciseVideos);
  if (!exerciseVideos.length) return "loading ...";
  return (
    <Box sx={{ marginTop: { lg: "200px", xs: "20px" } }} p="20px">
      <Typography variant="h3" mb="33px">
        Watch{" "}
        <span style={{ color: "#DF7861", textTransform: "capitalize" }}>
          {name}
        </span>{" "}
        exercise videos
      </Typography>
      <Stack
        justifyContent="flex-start"
        flexWrap="wrap"
        alignItems="center"
        sx={{
          flexDirection: { lg: "row" },
          gap: { lg: "110px", xs: "0" },
        }}
      >
        {exerciseVideos?.slice(0, 3).map((item, index) => (
          <a
            key={index}
            className="exercise-video"
            href={`https://www.youtube.com/watch?v=${item.video.videoId}`}
            target="_blank"
            rel="noreferrer"
          >
            <img src={item.video.thumbnails[0].url} alt={item.video.title} />
            <Typography variant="h5" color="#5F7161">
              {item.video.title}
            </Typography>
          </a>
        ))}
      </Stack>
    </Box>
  );
}

export default ExerciseVedios;
