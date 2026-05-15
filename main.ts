controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    projectile = sprites.createProjectileFromSprite(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . 2 2 2 2 2 2 2 2 2 2 2 2 . . 
        . . 3 3 3 3 3 3 3 3 3 3 3 3 . . 
        . . 1 1 1 1 1 1 1 1 1 1 1 1 . . 
        . . 1 1 1 1 1 1 1 1 1 1 1 1 . . 
        . . 3 3 3 3 3 3 3 3 3 3 3 3 . . 
        . . 2 2 2 2 2 2 2 2 2 2 2 2 . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, mySprite, 100, 0)
    music.play(music.melodyPlayable(music.pewPew), music.PlaybackMode.UntilDone)
})
info.onScore(100, function () {
    game.gameOver(true)
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Enemy, function (sprite, otherSprite) {
    sprites.destroy(otherSprite, effects.fire, 100)
    info.changeScoreBy(1)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    sprites.destroy(mySprite2, effects.ashes, 100)
    game.gameOver(false)
})
let mySprite2: Sprite = null
let projectile: Sprite = null
let mySprite: Sprite = null
mySprite = sprites.create(img`
    ..ccc.........ffffff....
    ..fecc.......fcc44ff....
    ..feecc...fffccccff.....
    ..f4eecccc4444eee4cc....
    ..f44ecc44444444eeb9c...
    ..cf4444444444444b999c..
    .c44c444444444b11199b4c.
    f44ccccccc444499111b444c
    fffffcc444c444444444444f
    .....f4444ee4444444444f.
    ....f4444eefc4444444ff..
    ...c4444eeffffffffff....
    ...c4444cfffc4f.........
    ...ffffffff4ccf.........
    .......ffff4cf..........
    ........fffff...........
    `, SpriteKind.Player)
controller.moveSprite(mySprite)
scene.setBackgroundColor(9)
mySprite.setStayInScreen(true)
effects.clouds.startScreenEffect()
info.setScore(0)
music.play(music.stringPlayable("C D A G F G A B ", 120), music.PlaybackMode.LoopingInBackground)
game.onUpdateInterval(1000, function () {
    mySprite2 = sprites.create(img`
        ....ffffff.........ccc..
        ....ff22ccf.......cc4f..
        .....ffccccfff...cc44f..
        ....cc24442222cccc442f..
        ...c9b4422222222cc422f..
        ..c999b2222222222222fc..
        .c2b99111b222222222c22c.
        c222b111992222ccccccc22f
        f222222222222c222ccfffff
        .f2222222222442222f.....
        ..ff2222222cf442222f....
        ....ffffffffff442222c...
        .........f2cfffc2222c...
        .........fcc2ffffffff...
        ..........fc2ffff.......
        ...........fffff........
        `, SpriteKind.Enemy)
    mySprite2.setPosition(180, randint(10, 110))
    mySprite2.setVelocity(-50, 0)
})
