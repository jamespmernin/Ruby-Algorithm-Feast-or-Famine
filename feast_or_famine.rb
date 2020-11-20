# FEAST OR FAMINE 

# Pseudocode here.

def feast_or_famine(beast, dish)
  if beast[0] == dish[0] && beast[-1] == dish[-1]
    return beast[0] + beast[-1]
  end
  return false
end

# Print here.

puts feast_or_famine("great blue heron", "garlic naan")
