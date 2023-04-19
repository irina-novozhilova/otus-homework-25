export class Parallel {
  flow: number;

  result: number[] = [];

  constructor(limit: number) {
    this.flow = limit;
  }

  async jobs(...args: (() => Promise<number>)[]) {
    const jobs = [...args];

    return new Promise((resolve) => {
      async function start(this: Parallel) {
        const job = jobs.shift();

        if (job) {
          job().then((value) => {
            this.result.push(value);

            if (this.result.length === args.length) resolve(this.result);
            start.call(this);
          });
        }
      }

      for (let n = 0; n < this.flow; n += 1) {
        start.call(this);
      }
    });
  }
}
