interface MedicineData {
  medicine_name: string;
  composition: string;
  uses: string;
  side_effects: string;
  image_url: string;
  average_review: number;
}

interface MessageProps {
  role: string;
  content: string | { results: MedicineData[] };
}

const Message = ({ role, content }: MessageProps) => {
  if (role === "user") {
    return <div className="chat-message user p-4">{content as string}</div>;
  }

  if (typeof content === "object" && "results" in content) {
    return (
      <div className="chat-message system bg-gray-100 p-4 rounded-lg max-h-[600px] overflow-y-auto">
        <h3 className="font-bold text-lg mb-4">Found {content.results.length} medicines:</h3>
        <div className="space-y-4">
          {content.results.map((medicine, index) => (
            <div key={index} className="bg-white p-4 rounded-lg shadow">
              <h4 className="font-bold text-md text-blue-600">{medicine.medicine_name}</h4>
              {medicine.image_url && (
                <img 
                  src={medicine.image_url} 
                  alt={medicine.medicine_name}
                  className="w-24 h-24 object-cover my-2"
                />
              )}
              <div className="space-y-1 text-sm">
                <p><span className="font-semibold">Composition:</span> {medicine.composition}</p>
                <p><span className="font-semibold">Uses:</span> {medicine.uses}</p>
                {medicine.side_effects && (
                  <p><span className="font-semibold">Side Effects:</span> {medicine.side_effects}</p>
                )}
                {medicine.average_review && (
                  <p><span className="font-semibold">Rating:</span> {medicine.average_review} ⭐</p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  return <div className="chat-message system p-4">{content as string}</div>;
};

export default Message;
