import * as contract from "../assembly";

describe("Contract", () => {
  // VIEW method tests

  it("says hello to names", () => {
    let names: string[] = ['NEAR', 'Certified', 'Developer'];
    expect(contract.helloWorld(names)).toStrictEqual("hello NEAR\nhello Certified\nhello Developer")
  })

  it("reads data", () => {
    expect(contract.read("some key")).toStrictEqual("🚫 Key [ some key ] not found in storage. ( storage [ 0 bytes ] )")
  })

  // CHANGE method tests

  it("saves data to contract storage", () => {
    expect(contract.write("some-key", "some value")).toStrictEqual("✅ Data saved. ( storage [ 18 bytes ] )")
  })
})
