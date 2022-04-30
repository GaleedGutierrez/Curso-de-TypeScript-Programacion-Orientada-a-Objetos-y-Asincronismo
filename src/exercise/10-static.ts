class MyMath {
    static readonly PI = 3.14;

     static max (...numbers: number[]): number {
        let max: number = numbers[0];
        for (let i = 0; i < numbers.length; i++) {
            const item = numbers[i];
            if ( max < item) max = item;
        }
        return max;
    }

}

// const math = new MyMath();
// math.PI;

console.log(MyMath.PI);
console.log(MyMath.max(-1, -9, -0.99, -0.77, -8));MyMath.PI
