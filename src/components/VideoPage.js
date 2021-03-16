import React, { useEffect, useState } from 'react'
import socketIOClient from "socket.io-client"
import Peer from "peer"
import Socket from 'socket.io'
const ENDPOINT = "localhost:9000/"
const room_id = '34'

const VideoPage = () => {
    //const [response, setResponse] = useState("")
    const [videos, setVideos] = useState([])
    const myPeer = new Peer(undefined, {
        host: '/',
        // port: 443,
        // secure: true
        port: 3001
    })
    const myVideo = <video></video>
    myVideo.muted = true
    const peers = {}
    

    const socket = socketIOClient(ENDPOINT)
    //idk where this goes
    socket.on('user-disconnected', userId => {
        if(peers[userId]) peers[userId].close()
    })
    
    useEffect(() =>  {
        myPeer.on('open', id => {
            socket.emit('join-room', room_id, id)
        }) 
        navigator.mediaDevices.getUserMedia({
            video: true,
            audio: true
        }).then(stream => {
            addVideoStream(myVideo, stream)
        
            myPeer.on('call', call => {
                call.answer(stream)
                const video = document.createElement('video')
                call.on('stream', userVideoStream => {
                    addVideoStream(video, userVideoStream)
                })
            })
        
            socket.on('user-connected', userId => {
                setTimeout(() => {
                    connectToNewUser(userId, stream)
                }, 1000)
            })
        })
        return () => {
            socket.emit('disconnect')
            socket.disconnect()
        }
    }, [])

    function connectToNewUser(userId, stream) {
        const call = myPeer.call(userId, stream)
        const video = <video></video>
        call.on('stream', userVideoStream => {
            addVideoStream(video, userVideoStream)
        })
        call.on('close', () => {
            //video.remove()
        })
        peers[userId] = call
    }

    function addVideoStream(video, stream) {
        video.srcObject = stream
        video.addEventListener('loadedmetadata', () => {
            video.play()
        })
        setVideos([...videos, video])
    }
    return(
        <div>
            { videos.map((video) => {
                return(video) 
                }) 
            }
        </div>
    )

}

export default VideoPage;