//判断大鱼和果实的距离
function momFruitsCollision(){
    if (!data.gameOver) {
        for (var i = 0; i < fruit.num; i++) {
            if (fruit.alive[i]) {
                //colculate length
                var l = calLength2(fruit.x[i], fruit.y[i], mom.x, mom.y);
                if (l < 900) {
                    fruit.dead(i);
                    data.fruitNum++;
                    mom.momBodyCount++;
                    if (mom.momBodyCount > 7) {
                        mom.momBodyCount = 7;
                    }

                    if (fruit.fruitType[i] == "blue")//blue double
                    {
                        data.double = 2;
                    }
                    else {
                        data.double = 1;
                    }

                    wave.born(fruit.x[i],fruit.y[i]);
                }
            }
        }
    }
}

//mom baby collision
function momBabyCollision(){
    if (data.fruitNum > 0 && !data.gameOver) {
        var l = calLength2(mom.x, mom.y, baby.x, baby.y);
        if (l < 900) {
            //baby recover
            baby.babyBodyCount = 0;
            //data reset
            mom.momBodyCount = 0;
            //score update
            data.addScore();
        }
    }
}
