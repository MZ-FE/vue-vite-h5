import nProgress from 'nprogress';

export function useProgress() {
  function progressStart() {
    nProgress.start();
  }
  function progressSet(percentage: number) {
    nProgress.set(percentage);
  }
  function progressInc(percentage: number) {
    nProgress.inc(percentage);
  }
  function progressDone() {
    nProgress.done();
  }
  return { progressStart, progressSet, progressInc, progressDone };
}
