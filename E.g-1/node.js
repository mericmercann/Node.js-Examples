const raidus = process.argv.slice(2)[0]*1 ; 

function areaCircle(raidus){
    let area = Math.PI.toFixed(2)*Math.pow( raidus,2 );
    console.log(area);
};

areaCircle(raidus);