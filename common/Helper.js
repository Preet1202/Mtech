import React, { useState, useEffect, useLayoutEffect } from "react";

// Get current window width
export const getWindowWidth = () => {
  const [size, setSize] = useState([0, 0]);
  const windowAvailable = typeof window !== "undefined";
  const useIsomorphicLayoutEffect = windowAvailable
    ? useLayoutEffect
    : useEffect;

  useIsomorphicLayoutEffect(() => {
    function updateSize() {
      setSize([window.innerWidth, window.innerHeight]);
    }
    window.addEventListener("resize", updateSize);
    updateSize();
    return () => window.removeEventListener("resize", updateSize);
  }, []);
  return size;
};

// format given date blog listings - ex-'Oct 03 2022'
export const FormatDate = (date) => {
  var fullDate = new Date(date);
  const month = fullDate.toLocaleString("default", { month: "short" });
  const day = fullDate.toLocaleString("default", { day: "2-digit" });
  const year = fullDate.toLocaleString("default", { year: "numeric" });
  //   return `${fullDate.toDateString().slice(4, 10)} ${fullDate.getFullYear()}`;
  return `${month} ${day} ${year}`;
};

export function Helper() {
  let url = `localhost:1337`;
  return url;
}
// Get youtube videos from MTL youtube channel - for videos page
export async function getYoutubeVideos({
  pageToken,
  youtubeChannelID,
  youtubePlaylistID,
  resultsPerPage = 50,
}) {
  const youtubeAPIKey = "AIzaSyC1TklBIJFgkNPeFLscfZ7YJzoP0f9Iyeo";

  //to fetch all videos from channel -  `https://www.googleapis.com/youtube/v3/search?key=${youtubeAPIKey}&channelId=${youtubeChannelID}&part=snippet,id&order=date&pageToken=${pageToken}&maxResults=${resultsPerPage}`

  const fetchVideos = await fetch(
    `https://www.googleapis.com/youtube/v3/playlistItems?key=${youtubeAPIKey}&playlistId=${youtubePlaylistID}&part=snippet,id&order=date&pageToken=${pageToken}&maxResults=${resultsPerPage}`
  )
    .then((response) => response.json())
    .then((data) => {
      return data;
    })
    .catch(function (error) {
      console.log("Youtube video API fetch failed:", error);
      return error;
    });
  return fetchVideos;
}

// create class for variants
export const getVariantCommonClass = (variant) => {
  return variant?.bg_color === "violet_bg"
    ? "violet_bg"
    : variant?.bg_color === "yellow_bg"
    ? "yellow_bg"
    : variant?.bg_color === "orange_bg"
    ? "orange_bg"
    : "white_bg";
};

// Get youtube video id from full URL
export const getYoutubeIdFromUrl = (YTUrl = "") => {
  if (YTUrl === "") {
    return false;
  }
  var regExp =
    /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/;
  var match = YTUrl.match(regExp);
  return match && match[7].length == 11 ? match[7] : false;
};
