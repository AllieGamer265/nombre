let mySprite = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . 3 3 3 3 3 3 3 . . . . . 
    . . . . 3 f f 3 f f 3 . . . . . 
    . . . . 3 f 1 3 1 f 3 . . . . . 
    . . . . 3 3 3 3 3 3 3 . . . . . 
    . . . . 3 f f f f 3 3 . . . . . 
    . . . . 3 3 3 3 3 3 3 . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
music.play(music.stringPlayable("- G - G D E F G ", 120), music.PlaybackMode.LoopingInBackground)
