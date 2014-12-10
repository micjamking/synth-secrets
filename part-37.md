# SYNTH SECRETS  
_Original article: [http://www.soundonsound.com/sos/May02/articles/synthsecrets0502.asp][0]_****

![](http://media.soundonsound.com/sos/may02/images/synth0502header.gif)

**Analysing Metallic Percussion**

**

---

****_Gordon Reid  
_**

### This is the 37th article in a 63-part series. Read [all parts][1].

In this month's Synth Secrets I'll begin my examination of the next family of important percussion instruments we're going to try to synthesize -- idiophones constructed from thin metal sheets. In other words, cymbals, hi-hats, tam-tams and gongs.

Before we can begin any synthesis of cymbals and related instruments, we need to understand something about the vibrations that occur in a circular metal plate. Don't worry, this isn't a prelude to something that looks like an excerpt from a university textbook because, as I have been forced to write on a number of occasions in recent Synth Secrets, a full analysis of this is _far_ beyond the scope of these articles. If you want to frighten yourself, say after me, "the equations of vibrational motion for circular plates are the solutions to combinations of Bessel functions and Hyperbolic Bessel functions". I don't know about you, but that scares the daylights out of me. So, as we found two months ago when we discussed the sound-generation system of the snare drum, we will fall back on observation and measurement to gain a modest understanding of this month's topic: the class of cymbals that includes the common crash and ride cymbals.

**Simple Modes**

As with so many of the instruments I've been trying to synthesize recently, there's a lot more to a cymbal than meets the eye. Firstly, there's the material to consider. It's no accident that cymbals are made from a narrow range of alloys, because these have proved to provide the most sonorous tones.

Secondly, there's the geometry of the cymbal: its size, thickness and shape. The cymbals used in rock music sound quite distinct, and few people would mistake a ride cymbal for a full-sized crash. And few listener[![](http://media.soundonsound.com/sos/may02/images/synth1s.gif)][2]s would confuse domed cymbals with the sounds produced by tam-tams or gongs, which have a turned up rim.

Thirdly, there's the manner in which you play them. Nowadays, we tend to think of cymbals primarily as instruments that have the living daylights beaten out of them using wooden sticks. Occasionally, though, you might see them played using softer beaters or mallets, and in orchestras it's common to see two cymbals crashed together by hand... hence the name, crash cymbals. But how frequently do you see cymbals played using a bow? Not often, although bowing a metal plate was once a recognised way of producing a sustained tone. 

So let's start by considering what a cymbal is. It's no good saying that it's a sheet of beaten metal with a bump in the middle or a turned-up rim. Sure, that's frequently true, but it doesn't get us very far. What's more, we can't treat it as some sort of metal drum head, because there's little that links the two, despite superficial similarities such as physical shape. The circular drumhead we've been discussing for the past few months is clamped (and therefore unable to move) at its edge, but it is free to oscillate elsewhere in a manner determined by air pressure and its own tension, thickness and stiffness. A circular metal plate mounted firmly at its centre is unable to move at that point, but is free to vibrate at its rim. As you might expect, the types of motion each undergoes are significantly different.

Furthermore -- again unlike the drumhead -- the plate is a rigid structure. This means that it is subject to the physics of solid objects, with all manner of vibrations propagating within the body of the metal itself. All in all, it's small wonder that plates sound so different from drumheads.

Figures 1a to 1f (below left) show six of the simplest (!) modes of vibration for a flat circular plate of uniform thickness, calculated using the hideously complex equations mentioned earlier. In these diagrams, a stationary position appears black, with the grey areas 'up' and the white areas 'down' (or _vice versa_) at any given moment. This leads to an interesting observation: not only can the rim of the plate move up and down, it does so in all the modes shown, and, if the academics are to be trusted, in all the others too.

In principle, it's not hard to observe the natural modes of vibration of a flat plate. If you energise it using a transducer that is itself driven by a sweepable oscillator, you will swiftly find that specific frequencies cause the plate to resonate, while others do not. If the plate is perfectly flat and horizontal, you can then use fine grains such as sand to observe the nodes. For example, if you scatter the sand evenly over the plate in Figure 1 and then energise it at 445Hz, you would find that all the sand congregates on the black lines shown in Figure 1d, sitting on the four radial and one circular node that define the 4,1 mode.

**Vibrations & Lasers**

Unfortunately, determining the shape of the vibrations of a real cymbal is another matter. It's not flat, and very little of its surface is horizontal, so all the sand falls off. We need something a bit more sophisticated. Scientists observe the modes using a technique called holographic interferometery. In short, this requires that you split a laser beam, bounce one of the resulting beams off the vibrating surface, and then recombine the two beams on a holographic plate. Because the light from the two paths interferes when they are recombined, they create a pattern on the plate which, when viewed with another laser, creates an image of the stationary areas on the cymbal's surface. It sounds tricky, and it is. Nevertheless, it works, as Figures 2a to 2f -- obtained by Dr Thomas Rossing at the Physics Department of Northern Illinois University -- prove (see below).

The patterns making up Figure 2 show the six modes calculated for Figure 1 but, because the cymbal has a dome in its centre and exhibits inconsistencies in its thickness and rigidity, the images are not precisely the same as the theory of flat plates would predict. What's more, although interferometery shows the stationary points on the cymbal's surface (the white areas), it does not show which areas are 'up' and which are 'down'. Nor does it show the edge of the cymbal itself. Nonetheless, the patterns in Figure 2 are recognisably the same modes shown in Figure 1\.

Looking again at these diagrams, you can now see how much the central dome of the cymbal influences its vibration. What is even more interesting is that the amount of the dome that remains stationary differs very markedly from one mode to another. It has -- for example -- a huge effect on the amount o[![](http://media.soundonsound.com/sos/may02/images/synth2s.gif)][3]f metal that is free to move in the 4,0 mode, but much less effect on the 2,1 mode. You might also notice that, as the vibrations get more complex, the neat patterns resembling the top view of a Terry's Chocolate Orange break down, and numerous complex regions appear.

If you now study Table 1 (overleaf), which, as an example, compares the modes of vibration of a flat plate and a domed cymbal, both with fundamental frequencies of 50Hz, the you can see that, like those of the flat plate, the frequencies produced by a real cymbal are _far_ from harmonic (note that the frequencies in Figures 2(a) to 2(f) are not the frequencies observed by Thomas Rossing; I have adjusted them so that you can make a direct comparison with the calculated modes in Figure 1). What's more, there seems to be no simple relationship between the plate and the cymbal, other than that -- for the same fundamental frequency -- the cymbal produces consistently higher frequencies than the plate. Well, there _is_ a relationship, but it is so complex that we have no choice but to ignore it here.

There can be hundreds of energised modes in an excited cymbal but, unlike the snare drum that we studied two months ago, the cymbal's modes exist at discrete frequencies, so we do not obtain a noise spectrum as we did with the snare. Hmm... that's not strictly true, as you will discover as you read on, but it will do for now.

**What Happens When You Hit It?**

If cymbals produced a unchanging combination of the modes described above, they would be very different from the instruments we know in the real world. However, the cymbal's sound is far from static, so we must now consider what happens when we hit one of them.

As drummers and percussionists are aware, the sound of a cymbal varies widely depending upon where you hit it, how you hit it (a downward stroke, a glancing blow, and so on...) and with what. One struck close to its edge with a soft beater or mallet will produce a very different sound to one pinged close to the dome using a stick. So there's no single way to describe the sound produced, and we will concentrate on a single instance: that of hitting the cymbal part-way between the edge of the dome and the edge of cymbal itself.

We'll start by forgetting about music for a moment, and by considering what happens when we throw a stone into a circular pond. We know from experience that the impact of the stone energises the surface of the water, and we see a circular wave propagate outwards until it hits the shore. If the stone is large enough, and the pond has hard edges rather than a gentle bank, we may even see the waves bounce off the edge, whereupon ripples will move back into the pond.

This analogy is not far divorced from what happens in the first few microseconds after we strike a circular plate. Indeed, if we make the pond shallower at its edges than its centre, we could extend the analogy to describe a plate of varying thickness, much like a real cymbal. However, it breaks down when we try to add the central dome of the cymbal, so we'll take it no further.

When the stick strikes the cymbal, the energy of the impact dissipates much as I have described in my watery analogy, propagating outwards at speeds of up to 4000 miles per hour, producing waves that bounce off the edges and the central dome, and which interfere with one another in an amazingly complex fashion.

This phase lasts just few milliseconds, while the energy converts itself into strong modal peaks at a few hundred Hertz. Then, over the next few hundred milliseconds, the energy moves upwards through the spectrum, and the cymbal rings at a few kHz. The high-frequency modes are the shortest-lived, however, so the last of the cymbal's energy lies in the modes at a few hundred Hertz, and -- at the end -- it's the mid-frequencies that again dominate the sound.

I have drawn a coarse representation of this in Figure 3, in which the red band shows the band of frequencies that are most apparent to the listener. Note that I have used logarithmic axes for this figur[![](http://media.soundonsound.com/sos/may02/images/synth3s.gif)][4]e, so the first three time divisions occur in a fraction of a second.

If this analysis were not complex enough, recent research suggests that it applies only to cymbals hit lightly. Indeed, if you tap one gently and then place your ear very close to the cymbal, you can hear these modes ringing in a beautifully metallic fashion. When hit harder, the modes split into patterns of even greater complexity, and produce sub-harmonic frequencies. However, there's an even greater complication... Research now suggests that, at high amplitudes, a cymbal's vibrations become chaotic. This means that we can no longer see the neat patterns of modes on the cymbal's surface, and the clearly identifiable modal frequencies disappear. At this point, the cymbal's spectrum is -- in essence -- noise. It's unlikely that the designers of early analogue drum machines knew this, because holographic interferometery did not exist at the time, but it suggests that they were not completely wrong to use white noise as the starting point for their basic cymbal sounds.

Armed with this knowledge, we can now synthesize a cymbal -- but the details of how to go about this will have to wait until next month, when we'll see how we might attempt this on a modular synth. We'll also consider how analogue synth manufacturers took a simpler approach in the '70s to achieve roughly the same results. 

The task of synthesizing convincing metallic percussion defeated many synth giants -- you only need to listen to Kraftwerk's weedy cymbals on 'The Model' to be persuaded of that. So why is it so difficult? We find out...

Thanks to Dr Thomas Rossing at the Physics Department of Northern Illinois University, USA, for his permission to derive Figures 2a to 2f from diagrams published in his research, and reproduce them here. ![](http://media.soundonsound.com/images/regulars/sos_end.gif)

[0]: http://www.soundonsound.com/sos/May02/articles/synthsecrets0502.asp
[1]: /search?url=%2Fsearch&Keyword=%22synth+secrets%22&Words=All&Summary=Yes
[2]: http://media.soundonsound.com/sos/may02/images/synth1.gif
[3]: http://media.soundonsound.com/sos/may02/images/synth2.gif
[4]: http://media.soundonsound.com/sos/may02/images/synth3.gif