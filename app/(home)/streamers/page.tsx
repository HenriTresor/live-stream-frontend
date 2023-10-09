import React from 'react'
import AStream from '@/components/AStream'
import AFriend from '@/components/AFriend'


const Streamers = () => {
  const friends = [
    {
      image: "https://i.pinimg.com/564x/b0/8c/fc/b08cfc232eb8c852541b1e1342e477d6.jpg",
      name: "iShowSpeed",
      category: "Gaming",
      followers: 1234,
      following: 621,
      flw: 'no'
    }, {
      image: "https://i.pinimg.com/564x/b0/8c/fc/b08cfc232eb8c852541b1e1342e477d6.jpg",
      name: "iShowSpeed",
      category: "Gaming",
      followers: 1234,
      following: 621,
      flw: 'no'
    }, {
      image: "https://i.pinimg.com/564x/b0/8c/fc/b08cfc232eb8c852541b1e1342e477d6.jpg",
      name: "iShowSpeed",
      category: "Gaming",
      followers: 1234,
      following: 621,
      flw: 'no'
    }, {
      image: "https://i.pinimg.com/564x/b0/8c/fc/b08cfc232eb8c852541b1e1342e477d6.jpg",
      name: "iShowSpeed",
      category: "Gaming",
      followers: 1234,
      following: 621,
      flw: 'no'
    }, {
      image: "https://i.pinimg.com/564x/b0/8c/fc/b08cfc232eb8c852541b1e1342e477d6.jpg",
      name: "iShowSpeed",
      category: "Gaming",
      followers: 1234,
      following: 621,
      flw: 'no'
    }, {
      image: "https://i.pinimg.com/564x/b0/8c/fc/b08cfc232eb8c852541b1e1342e477d6.jpg",
      name: "iShowSpeed",
      category: "Gaming",
      followers: 1234,
      following: 621,
      flw: 'no'
    }, {
      image: "https://i.pinimg.com/564x/b0/8c/fc/b08cfc232eb8c852541b1e1342e477d6.jpg",
      name: "iShowSpeed",
      category: "Gaming",
      followers: 1234,
      following: 621,
      flw: 'no'
    }
  ]
  const peopleToKnow = [
    {
      image: "https://i.pinimg.com/564x/b0/8c/fc/b08cfc232eb8c852541b1e1342e477d6.jpg",
      name: "iShowSpeed",
      category: "Gaming",
      followers: 1234,
      following: 621,
      flw: 'back'
    }, {
      image: "https://i.pinimg.com/564x/b0/8c/fc/b08cfc232eb8c852541b1e1342e477d6.jpg",
      name: "iShowSpeed",
      category: "Gaming",
      followers: 1234,
      following: 621,
      flw: 'back'
    }, {
      image: "https://i.pinimg.com/564x/b0/8c/fc/b08cfc232eb8c852541b1e1342e477d6.jpg",
      name: "iShowSpeed",
      category: "Gaming",
      followers: 1234,
      following: 621,
      flw: 'no'
    }, {
      image: "https://i.pinimg.com/564x/b0/8c/fc/b08cfc232eb8c852541b1e1342e477d6.jpg",
      name: "iShowSpeed",
      category: "Gaming",
      followers: 1234,
      following: 621,
      flw: 'no'
    }, {
      image: "https://i.pinimg.com/564x/b0/8c/fc/b08cfc232eb8c852541b1e1342e477d6.jpg",
      name: "iShowSpeed",
      category: "Gaming",
      followers: 1234,
      following: 621,
      flw: 'no'
    }, {
      image: "https://i.pinimg.com/564x/b0/8c/fc/b08cfc232eb8c852541b1e1342e477d6.jpg",
      name: "iShowSpeed",
      category: "Gaming",
      followers: 1234,
      following: 621,
      flw: 'no'
    }, {
      image: "https://i.pinimg.com/564x/b0/8c/fc/b08cfc232eb8c852541b1e1342e477d6.jpg",
      name: "iShowSpeed",
      category: "Gaming",
      followers: 1234,
      following: 621,
      flw: 'no'
    }
  ]
  return (
    <div className='p-10 overflow-y-auto'>
   
      <p className='text-lg font-semibold my-3'>🔥Popular Streamers</p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mb-10">
        {friends.slice(0, 4).map((friend, i) => {
          return (
            <AFriend key={i} image={friend.image} name={friend.name} followers={friend.followers} following={friend.following} flw={friend.flw} />
          )
        })}
      </div>
      <p className='text-lg font-semibold my-3'>People you may know</p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mb-10">
        {peopleToKnow.map((friend, i) => {
          return (
            <AFriend key={i} image={friend.image} name={friend.name} followers={friend.followers} following={friend.following} flw={friend.flw} />
          )
        })}
      </div>
    </div>
  )
}

export default Streamers