nio.source.socketio(
 'http://brand.nioinstances.com',
 ['crystal_mobile_data', 'crystal_global_shake_count']).pipe(nio.log());


// nio.source.socketio(
//  'http://n.io/crystal',
//  ['crystal_mobile_data'],
//  120 // optional - will immediately stream cached data within the last 120 seconds
// ).pipe(nio.log()).pipe(console.log("pipe"));

// nio.source.generate({
//    test_a: 1,
//    test_b: 2
// }).pipe(nio.pass(function(chunk) {
//    console.log("My value is " + chunk.test_a);
// }));


// nio.source.generate({val: 1})
//  .pipe(nio.log("output"));
