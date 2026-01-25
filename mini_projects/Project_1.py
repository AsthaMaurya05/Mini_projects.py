#VAK QUIZ......................

import streamlit as st 

st.set_page_config(page_title="VAK Quiz", page_icon="🧠", layout="centered")
st.markdown("<h1 style='text-align:center; color:#1e3a8a;'>🧠 VAK Quiz</h1>", unsafe_allow_html=True)
st.markdown("## Find out your learning style: Visual, Auditory, or Kinesthetic")

x=st.text_input("Enter your name:")

v,a,k = 0,0,0

que1 = st.radio("1. After hearing word bike what comes in your mind?",["some variant","song, jingle"," riding a bike"] ,index = None)
if (que1 == "some variant"):
    v+=1
elif (que1 == "song, jingle"):
    a+=1
else:
    k+=1   

que2 = st.radio("2. When you learn something new, you prefer to?",["see it","hear it","do it"] ,index = None)
if (que2 == "see it"):
    v+=1    
elif (que2 == "hear it"):
    a+=1
else:
    k+=1  

que3 = st.radio("3. When recalling a memory, you mostly remember:", 
                ["sounds", "pictures", "actions"], index=None)
if que3 == "pictures":
    v += 1
elif que3 == "sounds":
    a += 1
else:
    k += 1

que4 = st.radio("4. In a classroom, you learn best when the teacher:", 
                ["demonstrates physically", "explains verbally", "uses diagrams"], index=None)
if que4 == "uses diagrams":
    v += 1
elif que4 == "explains verbally":
    a += 1
else:
    k += 1

que5 = st.radio("5. You prefer instructions that are:", 
                ["written clearly", "spoken clearly", "hands-on"], index=None)
if que5 == "written clearly":
    v += 1
elif que5 == "spoken clearly":
    a += 1
else:
    k += 1

que6 = st.radio("6. While studying, you often:", 
                ["read aloud", "highlight text", "walk around"], index=None)
if que6 == "highlight text":
    v += 1
elif que6 == "read aloud":
    a += 1
else:
    k += 1

que7 = st.radio("7. To remember names, you usually:", 
                ["repeat them", "visualize faces", "associate actions"], index=None)
if que7 == "visualize faces":
    v += 1
elif que7 == "repeat them":
    a += 1
else:
    k += 1

que8 = st.radio("8. When assembling something new, you prefer:", 
                ["listening to instructions", "trying it yourself", "looking at images"], index=None)
if que8 == "looking at images":
    v += 1
elif que8 == "listening to instructions":
    a += 1
else:
    k += 1

que9 = st.radio("9. You are more likely to say:", 
                ["That sounds right", "That looks right", "That feels right"], index=None)
if que9 == "That looks right":
    v += 1
elif que9 == "That sounds right":
    a += 1
else:
    k += 1

que10 = st.radio("10. You remember phone numbers by:", 
                 ["saying them repeatedly", "writing them down", "typing them"], index=None)
if que10 == "writing them down":
    v += 1
elif que10 == "saying them repeatedly":
    a += 1
else:
    k += 1

que11 = st.radio("11. During presentations, you prefer:", 
                 ["charts and slides", "discussion", "activities"], index=None)
if que11 == "charts and slides":
    v += 1
elif que11 == "discussion":
    a += 1
else:
    k += 1

que12 = st.radio("12. When learning dance steps, you learn best by:", 
                 ["watching", "listening", "doing"], index=None)
if que12 == "watching":
    v += 1
elif que12 == "listening":
    a += 1
else:
    k += 1

que13 = st.radio("13. You enjoy books that are:", 
                 ["descriptive", "audiobooks", "interactive"], index=None)
if que13 == "descriptive":
    v += 1
elif que13 == "audiobooks":
    a += 1
else:
    k += 1

que14 = st.radio("14. You solve problems by:", 
                 ["talking it out", "drawing it", "trying different ways"], index=None)
if que14 == "drawing it":
    v += 1
elif que14 == "talking it out":
    a += 1
else:
    k += 1

que15 = st.radio("15. You remember directions by:", 
                 ["landmarks", "spoken directions", "walking the route"], index=None)
if que15 == "landmarks":
    v += 1
elif que15 == "spoken directions":
    a += 1
else:
    k += 1

que16 = st.radio("16. You prefer teachers who:", 
                 ["talk clearly", "use visuals", "include activities"], index=None)
if que16 == "use visuals":
    v += 1
elif que16 == "talk clearly":
    a += 1
else:
    k += 1

que17 = st.radio("17. While revising, you mostly:", 
                 ["rewrite notes", "record explanations", "practice questions"], index=None)
if que17 == "rewrite notes":
    v += 1
elif que17 == "record explanations":
    a += 1
else:
    k += 1

que18 = st.radio("18. You understand concepts better when:", 
                 ["you hear examples", "you see examples", "you apply examples"], index=None)
if que18 == "you see examples":
    v += 1
elif que18 == "you hear examples":
    a += 1
else:
    k += 1

que19 = st.radio("19. You feel distracted when:", 
                 ["there is noise", "the room looks messy", "you sit too long"], index=None)
if que19 == "the room looks messy":
    v += 1
elif que19 == "there is noise":
    a += 1
else:
    k += 1

que20 = st.radio("20. You like explanations that are:", 
                 ["step-by-step actions", "spoken clearly", "shown visually"], index=None)
if que20 == "shown visually":
    v += 1
elif que20 == "spoken clearly":
    a += 1
else:
    k += 1

que21 = st.radio("21. When brainstorming, you:", 
                 ["draw mind maps", "discuss ideas", "use sticky notes"], index=None)
if que21 == "draw mind maps":
    v += 1
elif que21 == "discuss ideas":
    a += 1
else:
    k += 1

que22 = st.radio("22. You remember events by:", 
                 ["how they felt", "what you saw", "what was said"], index=None)
if que22 == "what you saw":
    v += 1
elif que22 == "what was said":
    a += 1
else:
    k += 1

que23 = st.radio("23. You prefer learning apps that are:", 
                 ["voice-based", "interactive", "graphical"], index=None)
if que23 == "graphical":
    v += 1
elif que23 == "voice-based":
    a += 1
else:
    k += 1

que24 = st.radio("24. You remember lessons when you:", 
                 ["practice them", "see notes", "hear explanations"], index=None)
if que24 == "see notes":
    v += 1
elif que24 == "hear explanations":
    a += 1
else:
    k += 1

que25 = st.radio("25. You enjoy hobbies like:", 
                 ["listening to music", "painting", "sports"], index=None)
if que25 == "painting":
    v += 1
elif que25 == "listening to music":
    a += 1
else:
    k += 1

que26 = st.radio("26. When learning coding, you prefer:", 
                 ["visual flowcharts", "verbal explanation", "hands-on coding"], index=None)
if que26 == "visual flowcharts":
    v += 1
elif que26 == "verbal explanation":
    a += 1
else:
    k += 1

que27 = st.radio("27. You understand math better by:", 
                 ["solving problems", "listening to steps", "seeing graphs"], index=None)
if que27 == "seeing graphs":
    v += 1
elif que27 == "listening to steps":
    a += 1
else:
    k += 1

que28 = st.radio("28. You learn fastest when:", 
                 ["you experiment", "you hear guidance", "you see patterns"], index=None)
if que28 == "you see patterns":
    v += 1
elif que28 == "you hear guidance":
    a += 1
else:
    k += 1

que29 = st.radio("29. You prefer revision through:", 
                 ["practice tests", "watching videos", "podcasts"], index=None)
if que29 == "watching videos":
    v += 1
elif que29 == "podcasts":
    a += 1
else:
    k += 1

que30 = st.radio("30. Overall, you learn best by:", 
                 ["listening", "seeing", "doing"], index=None)
if que30 == "seeing":
    v += 1
elif que30 == "listening":
    a += 1
else:
    k += 1


vp = (v / 30) * 100
ap = (a / 30) * 100
kp= (k / 30) * 100


if st.button("Show Results"):
    st.markdown(f"## Result for {x}:")
    st.markdown(f" Visual: **{vp:.2f}%**")
    st.markdown(f" Auditory: **{ap:.2f}%**")
    st.markdown(f" Kinesthetic: **{kp:.2f}%**")
    
  

