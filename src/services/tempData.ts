export type Video = {
  id: number;
  title: string;
  url: string;
  thumbnail: string; // Add this line
  year: string;
};

export const sampleVideos: Video[] = [
  {
    id: 1,
    title: "Big Buck Bunny",
    url: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
    thumbnail: "https://peach.blender.org/wp-content/uploads/bbb-splash.png", // Add thumbnail
    year: "2008",
  },
  {
    id: 2,
    title: "Elephant's Dream",
    url: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",    
    thumbnail: "https://peach.blender.org/wp-content/uploads/bbb-splash.png", // Add thumbnail
    year: "2006",
  },
  {
    id: 3,
    title: "Sintel",
    url: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/Sintel.mp4",    
    thumbnail: "https://peach.blender.org/wp-content/uploads/bbb-splash.png", // Add thumbnail
    year: "2010",
  },
  {
    id: 4,
    title: "Tears of Steel",
    url: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4",    
    thumbnail: "https://peach.blender.org/wp-content/uploads/bbb-splash.png", // Add thumbnail
    year: "2012",
  },
  {
    id: 5,
    title: "NASA Earth Views",
    url: "https://test-videos.co.uk/vids/bigbuckbunny/mp4/h264/1080/Big_Buck_Bunny_1080_10s_1MB.mp4",    
    thumbnail: "https://peach.blender.org/wp-content/uploads/bbb-splash.png", // Add thumbnail
    year: "2014",
  },
  {
    id: 6,
    title: "NASA Earth Views",
    url: "https://test-videos.co.uk/vids/bigbuckbunny/mp4/h264/1080/Big_Buck_Bunny_1080_10s_1MB.mp4",    
    thumbnail: "https://peach.blender.org/wp-content/uploads/bbb-splash.png", // Add thumbnail
    year: "2014",
  },
  {
    id: 7,
    title: "NASA Earth Views",
    url: "https://test-videos.co.uk/vids/bigbuckbunny/mp4/h264/1080/Big_Buck_Bunny_1080_10s_1MB.mp4",    
    thumbnail: "https://peach.blender.org/wp-content/uploads/bbb-splash.png", // Add thumbnail
    year: "2014",
  },
  {
    id: 8,
    title: "NASA Earth Views",
    url: "https://test-videos.co.uk/vids/bigbuckbunny/mp4/h264/1080/Big_Buck_Bunny_1080_10s_1MB.mp4",    
    thumbnail: "https://peach.blender.org/wp-content/uploads/bbb-splash.png", // Add thumbnail
    year: "2014",
  },
  {
    id: 9,
    title: "NASA Earth Views",
    url: "https://test-videos.co.uk/vids/bigbuckbunny/mp4/h264/1080/Big_Buck_Bunny_1080_10s_1MB.mp4",    
    thumbnail: "https://peach.blender.org/wp-content/uploads/bbb-splash.png", // Add thumbnail
    year: "2014",
  },
];
