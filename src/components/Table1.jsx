import React from 'react';
import img from './img.jpg';
import img2 from './img2.jpg';

const tableData = [
  {
    id: 1,
    title: 'Rune raises $100,000 for marketing through NFT butterflies sale',
    author: {
      name: 'ninjanft',
      image: img2
    },
    mostLiked: 254,
    image: img
  },
  {
    id: 2,
    title: 'Rune raises $100,000 for marketing through NFT butterflies sale',
    author: {
      name: 'ninjanft',
      image: img2
    },
    mostLiked: 254,
    image: img
  },
  {
    id: 3,
    title: 'Rune raises $100,000 for marketing through NFT butterflies sale',
    author: {
      name: 'ninjanft',
      image: img2
    },
    mostLiked: 254,
    image: img
  },
];

export default function Table() {
  return (
    <div className="px-32 pt-5">
      <table className="table-auto">
        <thead>
          <tr className="text-base font-thin text-white" style={{ color: '#666666' }}>
            <th className="px-5">#</th>
            <th className="px-5">Title</th>
            <th className="px-20">Author</th>
            <th className="px-5 pl-80 flex">
              Most Liked
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clip-path="url(#clip0_108_27345)">
                  <path d="M8 10L12 14L16 10" stroke="#696969" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                </g>
                <defs>
                  <clipPath id="clip0_108_27345">
                    <rect width="24" height="24" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </th>
          </tr>
        </thead>
        <tbody className="mt-5">
          {tableData.map((row, index) => (
            <tr className="pt-5" key={index} style={{ border: "1px solid rgba(255, 255, 255, 0.12)", borderRadius: "16px" }}> 
              <td className=" p-5 font-thin " style={{ color: '#666666' }}>{row.id}</td>
              <td className="p-5 font-thin text-xl text-white flex gap-4">
                <img src={row.image} className="rounded-lg" alt="" />
                <p style={{ width: '364px' }}>{row.title}</p>
              </td> 
              <td className=" pl-14  font-thin text-base" style={{ color: '#DBFD51' }}>
                <div className="flex gap-3">
                  <img src={row.author.image} className="rounded-xl" alt="" />
                  {row.author.name}
                </div>
              </td>
              <td className="p-5 pl-96 text-right text-white font-thin text-base">{row.mostLiked}</td> 
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
