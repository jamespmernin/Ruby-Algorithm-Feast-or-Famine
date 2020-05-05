require_relative "../feast_or_famine.rb"

describe "feast or famine?" do
  it "return first and last letters if matching" do
    expect(feast_or_famine("great blue heron", "garlic naan")).to eq("gn")
  end

  it "return false if not matching match" do
    expect(feast_or_famine("great blue hero", "garlic naan")).to eq(false)
  end
end
