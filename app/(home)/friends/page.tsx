import React from 'react'
import AFriend from '@/components/AFriend'
import AStream from '@/components/AStream'

const Friends: React.FC = () => {
  const friends = [
    {
      image: "https://i.pinimg.com/564x/b0/8c/fc/b08cfc232eb8c852541b1e1342e477d6.jpg",
      name: "iShowSpeed",
      category: "Gaming",
      followers: 1234,
      following: 621,
      flw: 'yes'
    }, {
      image: "https://i.pinimg.com/564x/b0/8c/fc/b08cfc232eb8c852541b1e1342e477d6.jpg",
      name: "iShowSpeed",
      category: "Gaming",
      followers: 1234,
      following: 621,
      flw: 'yes'
    }, {
      image: "https://i.pinimg.com/564x/b0/8c/fc/b08cfc232eb8c852541b1e1342e477d6.jpg",
      name: "iShowSpeed",
      category: "Gaming",
      followers: 1234,
      following: 621,
      flw: 'yes'
    }, {
      image: "https://i.pinimg.com/564x/b0/8c/fc/b08cfc232eb8c852541b1e1342e477d6.jpg",
      name: "iShowSpeed",
      category: "Gaming",
      followers: 1234,
      following: 621,
      flw: 'yes'
    }, {
      image: "https://i.pinimg.com/564x/b0/8c/fc/b08cfc232eb8c852541b1e1342e477d6.jpg",
      name: "iShowSpeed",
      category: "Gaming",
      followers: 1234,
      following: 621,
      flw: 'yes'
    }, {
      image: "https://i.pinimg.com/564x/b0/8c/fc/b08cfc232eb8c852541b1e1342e477d6.jpg",
      name: "iShowSpeed",
      category: "Gaming",
      followers: 1234,
      following: 621,
      flw: 'yes'
    }, {
      image: "https://i.pinimg.com/564x/b0/8c/fc/b08cfc232eb8c852541b1e1342e477d6.jpg",
      name: "iShowSpeed",
      category: "Gaming",
      followers: 1234,
      following: 621,
      flw: 'yes'
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
  const recentStreams = [
    {
      name: "Migos Trio",
      thumbnail: "https://i.pinimg.com/564x/b0/8c/fc/b08cfc232eb8c852541b1e1342e477d6.jpg",
      views: 2000,
      id: 1,
      creatorName: "iShowSpeed",
      creatorPic: "https://i.pinimg.com/564x/b0/8c/fc/b08cfc232eb8c852541b1e1342e477d6.jpg"
    },
    {
      name: "Migos Trio",
      thumbnail: "https://i.pinimg.com/564x/b0/8c/fc/b08cfc232eb8c852541b1e1342e477d6.jpg",
      views: 2000,
      id: 1,
      creatorName: "iShowSpeed",
      creatorPic: "https://i.pinimg.com/564x/b0/8c/fc/b08cfc232eb8c852541b1e1342e477d6.jpg"
    },
    {
      name: "Migos Trio",
      thumbnail: "https://i.pinimg.com/564x/b0/8c/fc/b08cfc232eb8c852541b1e1342e477d6.jpg",
      views: 2000,
      id: 1,
      creatorName: "iShowSpeed",
      creatorPic: "https://i.pinimg.com/564x/b0/8c/fc/b08cfc232eb8c852541b1e1342e477d6.jpg"
    },
    {
      name: "Migos Trio",
      thumbnail: "https://i.pinimg.com/564x/b0/8c/fc/b08cfc232eb8c852541b1e1342e477d6.jpg",
      views: 2000,
      id: 1,
      creatorName: "iShowSpeed",
      creatorPic: "https://i.pinimg.com/564x/b0/8c/fc/b08cfc232eb8c852541b1e1342e477d6.jpg"
    },
    {
      name: "Migos Trio",
      thumbnail: "https://i.pinimg.com/564x/b0/8c/fc/b08cfc232eb8c852541b1e1342e477d6.jpg",
      views: 2000,
      id: 1,
      creatorName: "iShowSpeed",
      creatorPic: "https://i.pinimg.com/564x/b0/8c/fc/b08cfc232eb8c852541b1e1342e477d6.jpg"
    },
  ]
  return (
    <div className='p-10 overflow-y-auto'>

      <p className='text-lg font-semibold my-3'>Your friends</p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mb-10">
        {friends.map((friend, i) => {
          return (
            <AFriend key={i} image={friend.image} name={friend.name} followers={friend.followers} following={friend.following} flw={friend.flw} />
          )
        })}
      </div>
      <p className='text-lg font-semibold my-3'>Your friends are streaming</p>
      <div className="grid grid-cols-1 md:grid-cols-2  gap-5 mb-10">
        {recentStreams.slice(0, 2).map((stream, i) => {
          return (
            <AStream key={i} thumbnail={stream.thumbnail} name={stream.name} views={stream.views} id={stream.id} creatorName={stream.creatorName} creatorPic={stream.creatorPic} />
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

export default Friends