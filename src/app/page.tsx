import Link from "next/link";
      const mockURL = ["https://horhsyw8d5.ufs.sh/f/PyRFevZavQAqPwRdmOZavQAqz08Cg5IDdYVt6sNZFi3ucyoS","https://horhsyw8d5.ufs.sh/f/PyRFevZavQAqgbgDQdIUOhJSney7x9ZjRdEYqPvVrKWw1kAB","https://horhsyw8d5.ufs.sh/f/PyRFevZavQAqKXFa5BdP3Y8Q5mqJOIeFHZEvNnfCRDG9iVSy"]
      const mockImages = mockURL.map((url, index) => ({
        id: index + 1,
        url,
      }));
export default function HomePage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#2e026d] to-[#15162c] text-white">
    <div className = "flex flex-wrap gap-4">{
    mockImages.map((image) => (
      <div key ={image.id} className = "w-48">
        <img src= {image.url} alt = "image" />
      </div>
    ))
  }
  </div>
    </main>
  );
}
