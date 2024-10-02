export class Timer {
  name: string;
  start: number;

  constructor(name: string) {
    this.name = name;
    this.start = new Date().getTime();
  }

  log(message: string) {
    const now = new Date().getTime();
    const duration = now - this.start;
    cy.task(
      'log',
      'Timer started at ' + new Date(this.start).toLocaleTimeString(),
    );
    cy.task('log', {
      now: new Date(now).toLocaleTimeString(),
      start: new Date(this.start).toLocaleTimeString(),
    });
    const msg = `${message} took ${duration}ms`;
    cy.task('log', msg);
    this.start = now; // Reset start time for the next log
  }
}
