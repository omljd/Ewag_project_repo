async function test() {
  const res = await fetch("http://localhost:5000/api/consultations", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      name: "Test User",
      email: "test@example.com",
      phone: "1234567890",
      company: "Test Co",
      service: "Testing",
      businessType: "Other",
      message: "Hello world"
    })
  });
  
  const text = await res.text();
  console.log("Status:", res.status);
  console.log("Response:", text);
}
test();
