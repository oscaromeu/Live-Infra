// ...

export default function () {
  // First HTTP request
  let res1 = http.get("http://app-a.dev.svc.cluster.local:8080");
  check(res1, { "status was 200": (r) => r.status == 200 });

  // Second HTTP request
  let res2 = http.get("http://app-a.dev.svc.cluster.local:8080/io_task");
  check(res2, { "status was 200": (r) => r.status == 200 });

  // Second HTTP request
  let res3 = http.get("http://app-a.dev.svc.cluster.local:8080/cpu_task");
  check(res3, { "status was 200": (r) => r.status == 200 });

  // Second HTTP request
  let res4 = http.get("http://app-a.dev.svc.cluster.local:8080/random_sleep");
  check(res4, { "status was 200": (r) => r.status == 200 });

  // Second HTTP request
  let res5 = http.get("http://app-a.dev.svc.cluster.local:8080/random_status");
  check(res5, { "status was 200": (r) => r.status == 200 });

  // Second HTTP request
  let res6 = http.get("http://app-a.dev.svc.cluster.local:8080/chain");
  check(res6, { "status was 200": (r) => r.status == 200 });

  // Second HTTP request
  let res7 = http.get("http://app-a.dev.svc.cluster.local:8080/error_test");
  check(res7, { "status was 200": (r) => r.status == 200 });

  // Second HTTP request
  let res8 = http.get("http://app-a.dev.svc.cluster.local:8080/actuator/metrics");
  check(res8, { "status was 200": (r) => r.status == 200 });

  sleep(1);
}
