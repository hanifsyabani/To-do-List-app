import { useState } from "react";
import { AiFillInfoCircle, AiFillCloseCircle } from "react-icons/ai";

export default function Detail({items, id}) {
  const [openDetail, setOpenDetail] = useState(false);
  
  const selectedDetail = items.find((item)=>item.id===id)

  return (
    <>
      <div>
        <AiFillInfoCircle
          size={20}
          color="orange"
          className="cursor-pointer"
          onClick={() => {
            setOpenDetail(true);
          }}
        />
      </div>

        <div className={`${openDetail ? 'block':'hidden'} fixed bg-black/50 w-full h-full z-[99] top-0 left-0 p-4 xl:p-0`}>
          <div className="bg-white xl:w-1/2 m-auto p-3 rounded-md mt-20">
            <div className="flex justify-between item-center">
              <h1>Detail Tugas</h1>
              <AiFillCloseCircle
                size={25}
                color="red"
                onClick={()=> setOpenDetail(false)}
                className="cursor-pointer"
              />
            </div>
            <div className="mt-8">
              <div>
                <div className="border border-gray-500/50 p-3 rounded-md font-semibold gradients mb-4">
                  <h5>Nama Tugas :</h5>
                  <p>{selectedDetail.todo}</p>
                </div>
                <div className="border border-gray-500/50 p-3 rounded-md font-semibold gradients mb-4">
                  <h5>Deadline Hari: </h5>
                  <p>{selectedDetail.days}</p>
                </div>
                <div className="border border-gray-500/50 p-3 rounded-md font-semibold gradients mb-4">
                  <h5>Jam :</h5>
                  <p>{selectedDetail.times}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
    </>
  );
}
