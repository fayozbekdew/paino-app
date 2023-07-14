const items = document.querySelectorAll('.piano-item')
let event;

items.forEach((item) => {
    item.addEventListener('click', (itemm) => {
        if(item.classList.contains('item-1')){
            console.log(itemm);
            let crash = new Audio(`../sounds/key01.ogg`);
            crash.play()
        }else if(item.classList.contains('item-2')){
            let crash = new Audio(`../sounds/key02.ogg`);
            crash.play()
        }
        else if(item.classList.contains('item-3')){
            let crash = new Audio(`../sounds/key03.ogg`);
            crash.play()
        }
        else if(item.classList.contains('item-4')){
            let crash = new Audio(`../sounds/key04.ogg`);
            crash.play()
        }
        else if(item.classList.contains('item-5')){
            let crash = new Audio(`../sounds/key05.ogg`);
            crash.play()
        }
        else if(item.classList.contains('item-6')){
            let crash = new Audio(`../sounds/key06.ogg`);
            crash.play()
        }
        else if(item.classList.contains('item-7')){
            let crash = new Audio(`../sounds/key07.ogg`);
            crash.play()
        }
        else if(item.classList.contains('item-8')){
            let crash = new Audio(`../sounds/key08.ogg`);
            crash.play()
        }
        else if(item.classList.contains('item-9')){
            let crash = new Audio(`../sounds/key09.ogg`);
            crash.play()
        }
        else if(item.classList.contains('item-10')){
            let crash = new Audio(`../sounds/key10.ogg`);
            crash.play()
        }
        else if(item.classList.contains('item-11')){
            let crash = new Audio(`../sounds/key11.ogg`);
            crash.play()
        }
        else if(item.classList.contains('item-12')){
            let crash = new Audio(`../sounds/key12.ogg`);
            crash.play()
        }
        else if(item.classList.contains('item-13')){
            let crash = new Audio(`../sounds/key13.ogg`);
            crash.play()
        }
        else if(item.classList.contains('item-14')){
            let crash = new Audio(`../sounds/key14.ogg`);
            crash.play()
        }
        else if(item.classList.contains('item-15')){
            let crash = new Audio(`../sounds/key15.ogg`);
            crash.play()
        }
        else if(item.classList.contains('item-16')){
            let crash = new Audio(`../sounds/key16.ogg`);
            crash.play()
        }
        else if(item.classList.contains('item-17')){
            let crash = new Audio(`../sounds/key17.ogg`);
            crash.play()
        }
        else if(item.classList.contains('item-18')){
            let crash = new Audio(`../sounds/key18.ogg`);
            crash.play()
        }
        else if(item.classList.contains('item-19')){
            let crash = new Audio(`../sounds/key19.ogg`);
            crash.play()
        }
        else if(item.classList.contains('item-20')){
            let crash = new Audio(`../sounds/key20.ogg`);
            crash.play()
        }
        else if(item.classList.contains('item-21')){
            let crash = new Audio(`../sounds/key21.ogg`);
            crash.play()
        }
        else if(item.classList.contains('item-22')){
            let crash = new Audio(`../sounds/key22.ogg`);
            crash.play()
        }
        else if(item.classList.contains('item-23')){
            let crash = new Audio(`../sounds/key23.ogg`);
            crash.play()
        }
        else if(item.classList.contains('item-24')){
            let crash = new Audio(`../sounds/key24.ogg`);
            crash.play()
        }
        else if(item.classList.contains('item-25')){
            let crash = new Audio(`../sounds/key05.ogg`);
            crash.play()
        }
        else if(item.classList.contains('item-26')){
            let crash = new Audio(`../sounds/key16.ogg`);
            crash.play()
        }
        else if(item.classList.contains('item-27')){
            let crash = new Audio(`../sounds/key07.ogg`);
            crash.play()
        }
        else if(item.classList.contains('item-28')){
            let crash = new Audio(`../sounds/key15.ogg`);
            crash.play()
        }
    })
})


document.addEventListener('keydown', (itemm) => {
    if(itemm.code === 'KeyA'){
        let crash = new Audio(`../sounds/key01.ogg`);
        crash.play()
    }else if(itemm.code === 'KeyW'){
        let crash = new Audio(`../sounds/key02.ogg`);
        crash.play()
    }
    else if(itemm.code === 'KeyD'){
        let crash = new Audio(`../sounds/key03.ogg`);
        crash.play()
    }
    else if(itemm.code === 'KeyS'){
        let crash = new Audio(`../sounds/key04.ogg`);
        crash.play()
    }
    else if(itemm.code === 'KeyE'){
        let crash = new Audio(`../sounds/key05.ogg`);
        crash.play()
    }
    else if(itemm.code === 'KeyD'){
        let crash = new Audio(`../sounds/key06.ogg`);
        crash.play()
    }
    else if(itemm.code === 'KeyF'){
        let crash = new Audio(`../sounds/key07.ogg`);
        crash.play()
    }
    else if(itemm.code === 'KeyR'){
        let crash = new Audio(`../sounds/key08.ogg`);
        crash.play()
    }
    else if(itemm.code === 'KeyG'){
        let crash = new Audio(`../sounds/key09.ogg`);
        crash.play()
    }
    else if(itemm.code === 'KeyT'){
        let crash = new Audio(`../sounds/key10.ogg`);
        crash.play()
    }
    else if(itemm.code === 'KeyH'){
        let crash = new Audio(`../sounds/key11.ogg`);
        crash.play()
    }
    else if(itemm.code === 'KeyY'){
        let crash = new Audio(`../sounds/key12.ogg`);
        crash.play()
    }
    else if(itemm.code === 'KeyJ'){
        let crash = new Audio(`../sounds/key13.ogg`);
        crash.play()
    }
    else if(itemm.code === 'KeyU'){
        let crash = new Audio(`../sounds/key14.ogg`);
        crash.play()
    }
    else if(itemm.code === 'KeyK'){
        let crash = new Audio(`../sounds/key15.ogg`);
        crash.play()
    }
    else if(itemm.code === 'KeyI'){
        let crash = new Audio(`../sounds/key16.ogg`);
        crash.play()
    }
    else if(itemm.code === 'KeyL'){
        let crash = new Audio(`../sounds/key17.ogg`);
        crash.play()
    }
    else if(itemm.code === 'KeyO'){
        let crash = new Audio(`../sounds/key18.ogg`);
        crash.play()
    }
    else if(itemm.code === 'KeyP'){
        let crash = new Audio(`../sounds/key19.ogg`);
        crash.play()
    }
    else if(itemm.code === 'KeyZ'){
        let crash = new Audio(`../sounds/key20.ogg`);
        crash.play()
    }
    else if(itemm.code === 'KeyX'){
        let crash = new Audio(`../sounds/key21.ogg`);
        crash.play()
    }
    else if(itemm.code === 'KeyC'){
        let crash = new Audio(`../sounds/key22.ogg`);
        crash.play()
    }
    else if(itemm.code === 'KeyV'){
        let crash = new Audio(`../sounds/key23.ogg`);
        crash.play()
    }
    else if(itemm.code === 'KeyB'){
        let crash = new Audio(`../sounds/key24.ogg`);
        crash.play()
    }
    else if(itemm.code === 'KeyN'){
        let crash = new Audio(`../sounds/key05.ogg`);
        crash.play()
    }
    else if(itemm.code === 'KeyM'){
        let crash = new Audio(`../sounds/key16.ogg`);
        crash.play()
    }
    else if(itemm.code === 'KeyQ'){
        let crash = new Audio(`../sounds/key07.ogg`);
        crash.play()
    }
    else if(itemm.code === 'Comma'){
        let crash = new Audio(`../sounds/key15.ogg`);
        crash.play()
    }
})






