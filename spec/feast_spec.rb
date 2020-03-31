require_relative "../feast.rb"

describe "feast" do
  it "return first and last letters" do
    expect(feast("great blue heron", "garlic naan")).to eq("gn")
  end

  it "returns false if letters dont match" do
    expect(feast("great blue hero", "garlic naan")).to eq(false)
  end
end
