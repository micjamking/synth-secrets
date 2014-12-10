# Synth Secrets, Part 2: The Physics Of Percussion  
_Original article: [http://www.soundonsound.com/sos/jun99/articles/synthsecrets.htm][0]_

The first part of this series explained how the tones of most real instruments can be reduced to patterns of harmonics, which can be generated using sine, saw, square or pulse waveforms. This month, **Gordon Reid** considers the sonic raw materials needed to imitate unpitched percussion. This is the second article in a 63-part series. Read [all parts][1].

Last month we posed the question, "What are harmonics, and where do they come from?" then answered it by considering the way in which sounds can be broken down into, and built up from, their constituent parts. We used a vibrating string as the main example of a harmonic oscillator and, in doing so, described the fundamental properties of every instrument from a double bass to an electric guitar, taking in pianos, harps, violins, zithers, and bazoukis on the way.

The properties we discussed are just as applicable to the other major groups of musical harmonic [![](http://media.soundonsound.com/sos/jun99/images/picture5small.gif)][2]oscillators, such as the blown pipes that comprise the organ, woodwind and brass families. Consequently, as we'll see in future instalments, it is possible to imitate (or 'synthesize') many 'real' instruments using a very small number of simple harmonic waveforms. For example, a sawtooth wave will provide the basis of most of the orchestra's brass and string sections, a square wave will synthesize woody sounds such as clarinets, while the thinner-sounding pulse waves provide the reedier tones of oboes and bassoons.

Moving away from the orchestra, you can use the same waveforms to synthesize modern instruments. A combination of sawtooth and pulse waves provides some remarkably accurate imitations of bass guitars and, suitably modified, a sawtooth will generate a range of timbres that you can play through effects units to sound just like a lead guitar. Of course, you have to _play_ the sound like a guitar too, but that's another story. The important point is this: a synthesizer that offers just three waveforms provides you with the 

"My advice is this: don't even think about trying to analyse the sound produced by something that, at first sight, seems as simple as a drum skin."

raw materials to imitate most of the instruments that you'll find played by an orchestra, a rock group, and the Viennese Oom-Pah Champions of 1898\.

But there is an important class of musical oscillators that do not fit the simple harmonic model. These 'non-harmonic' oscillators are just as important as their harmonic cousins, but they do not conform to the same set of rules. Examples of these include drums, timpani, and many of the ethnic instruments now used as sound effects to spice up western music. So why do these sound different and, more importantly, how are we going to get our subtractive synthesizer to imitate them?

**A Multi-dimensional Problem**

Consider for a moment the stretched string that we discussed last month. Ignoring its negligible diameter and the carved lump of resonating wood and metal bits that usually come with it, this has one dimension...[![](http://media.soundonsound.com/sos/jun99/images/picture6small.gif)][3] its length. Other properties, such as its density and its tension, affect it, but in a three-dimensional universe it only has one primary dimension. The same is (approximately) true of a pipe. The nature of its bore significantly affects it, as do factors such as the material from which it is made, but again, its single most important dimension is that of length. 

Now picture a circular membrane that is stretched with an equal tension at all points, and which is fixed at all points around its circumference. You would normally call this a tambour or a drum skin, but we are going to think of it as a different type of oscillator. Again, we can ignore complicating factors such as the bits of wood and metal that accompany it (the shell), and concentrate on the oscillator itself.

The most important difference between a membrane and a stretched string is the one that is plainest to see: unlike the string, a drum skin has two dimensions -- it is a surface, rather than a line. Consequently, you might guess that drums would respond very differently to being struck, plucked, blown, or whatever it is that you do to excite them. And 

"The most important difference between a membrane and a stretched string is that unlike the string, a drum skin has two dimensions. Consequently, you might guess that drums would respond differently to being struck, and you would be right"

you would be right. The number of physical dimensions possessed by an oscillator is instrumental (oops, sorry) in determining its acoustic nature.

**The Banged Drum**

Let's consider a stationary, circular drum head. Like the string described last month, this is fixed at its 'ends'. Or, to be precise, it is fixed all around its circumference, as shown in Figure 1 on page 60\. And just like our string, the drum skin is not free to move up or down at the points where it is fixed. 

Now imagine that you hit the drum skin exactly in its centre. You might expect it to move up and down in a single motion, just like the fundamental of the vibrating string. And you would be right again. Viewed from its side, the fundamental frequency of a vibrating circular membrane looks suspiciously like that of a vibrating string (see Figure 2). This, for reasons we need not go into, is called the _w01_ mode of the membrane.[![](http://media.soundonsound.com/sos/jun99/images/picture_7small.gif)][4]

(At this point you can breathe a sigh of relief because, unlike last month, I am not going to make you worry about any maths. This is not out of respect for you, but because the equations relating to a vibrating membrane are capable of giving astrophysicists serious headaches.)

Since you are hitting the drum skin in its centre, you can't put your finger in the middle as you did to create the second harmonic of the string, so let's look at the equivalent of the third harmonic. If you remember last month's article, you'll recall that you put your finger one-third of the way along the string to create an overtone of exactly three times the frequency of the fundamental. But if you try this with the drum skin, placing your finger one-third of the way from the centre to the rim, you're in the wrong place. Instead of having 'zero points' described by a simple 1/(integer) relationship, the drum's zero points are described by a hideous equation called a Bessel Function. This tells us that the first zero point is 42.6 percent of the distance from the centre to the rim. What's more, the frequency of a drum skin vibrating in this way (called the w02 mode) is 2.296 times the fundamental. So, while the 'odd' overtones of the string and the membrane can look similar, their musical properties are very different (see Figure 3).

And so it goes on... The next odd harmonic of the vibrating string has five equally spaced sections, and oscillates at exactly five times the fundamental frequency. The equivalent for the drum skin (the w03 mode) 

"A perfect 'noise generator' produces all audio frequencies simultaneously, and this is close enough to provide a basis for many analogue 'drum' sounds that would be quite unobtainable using conventional waveforms"

has zero points at 27.8 percent and 63.8 percent of the distance from the centre to the rim, and it oscillates at a frequency of 3.6 times that of the fundamental (Figure 4).

Just to make matters complicated, the drum skin vibrates in completely different ways if you do not strike it precisely at its centre (which, in the real world, is always). Figure 5 shows a small selection of these other modes and their relationships to the fundamental frequency, f.

Just like a vibrating string, the drumhead is almost always excited in such a way that a number of its different modes oscillate simultaneously. Unfortunately, they will all have different amplitudes, and all decay at different rates. This makes the drum's sound enormously complex and -- here's the important thing -- impossible to emulate using the types of waveforms produced by a simple harmonic oscillator.

To explain this a little more clearly, let's look at the position of the first four harmonics of the sawtooth waveform, and compare them to the first few harmonics of the drumhead (see Figure 6 on page 66). As you can see, the drum skin generates more harmonics, and they are clustered in an uneven[![](http://media.soundonsound.com/sos/jun99/images/picture8small.gif)][5] manner, unlike the regularly spaced overtones produced by the simple harmonic oscillator. This makes the sound 'atonal', and stops us from perceiving a simple pitch and tone. Indeed, if you look beyond these first few harmonics, you'll find that the drum skin's overtones become more and more numerous and more closely spaced. If we drew the same diagram as 6(b) for a drum skin with a fundamental of, say, 100Hz, but extended the frequency axis to 20kHz, it would look like an inseparable bunch of harmonic frequencies extending right up to (and beyond) the limits of hearing.

If all this is beginning to make you boggle, you won't want to consider the further complications that exist in the real world. For example, no matter how carefully you adjust it, a drum skin will always have slight variations in tension across its surface, so the modes will be distorted and, in all likelihood, impossible to calculate. And every drummer knows that, when you hit a drum harder, its pitch rises. This means that the fundamental frequency is in some way related to the displacement of the membrane. Aargh!

My advice is this: don't even think about trying to analyse the sound produced by something that, at first sight, seems as simple as a drum skin. Research groups have spent decades creating hugely sophisticated mathematical models of vibrating membranes and, as you know, the few DSP-based products that use these are still distinguishable from the 'real' thing. So is it time to admit defeat and consign our analogue synthesizers to the ignominy of 1970s-style trumpet and 'cello imitations? Strangely, no...

**Synthesizing The Un-synthesizable**

Let's think about 'drum' sounds in the context of an analogue synth. If we are to produce a convincing imitation, we need to generate the dense cluster of frequencies described above, and ensure that they are[![](http://media.soundonsound.com/sos/jun99/images/picture9small.gif)][6] not, in the conventional sense, harmonically related. Fortunately, most synthesizers have a module that produces something similar. A perfect 'noise generator' produces all audio frequencies simultaneously, and this is close enough to provide a basis for many analogue 'drum' sounds that would be quite unobtainable using conventional waveforms (see Figure 7). Indeed, filtered noise is the basis of the most popular percussion sounds of the 1990s -- the Roland CR78, CR5000, TR808 and parts of the TR909 all generate their voices in this fashion.

But what about other circular percussion instruments that are not stretched in the same way as a drum skin? In many ways these instruments -- including cymbals and gongs -- are very similar to drums. Of course, they are rigid and they are not fixed at their edges, so they are free to vibrate in different ways. But their fundamental natures are governed by the same maths as that describing the stretched membrane. Even bells (which look 3-dimensional because they occupy a volume) are better described as 2-dimensional oscillators because they are, in essence, bent sheets.

Unfortunately, the physical differences between drums and metallic percussion instruments mean you can't program convincing bells and gongs using a noise generator. Consequently, this is an area in which a basic synthesizer such as the Minimoog in figure 7 does not excel. But if you look at the patch sheets of a more complex synth such as an ARP Odyssey or ARP 2600 you will find lots of 'metallic' sounds. This is because they have a 'ring modulator' -- a circuit that produces the dense cluster of non-harmonic overtones that are characteristic of metal sheets. With suitably chosen filters and envelopes, these can provide startling imitations that are, once again, quite beyond the capabilities of a simple harmonic oscillator.[![](http://media.soundonsound.com/sos/jun99/images/ssfig7small.gif)][7]

So there it is... Armed with a handful of conventional 'waveform' oscillators, a noise generator and a ring modulator, we're in a position to recreate the basic structures of almost all the most common musical sounds found in the 'real' (ie. non-electronic) world. Next month we will start to look at some of these, and show how we can use a simple subtractive synthesizer to recreate them.

Until then, have fun, and keep twiddling! [![](http://media.soundonsound.com/images/regulars/sos_end.gif)][8]

[0]: http://www.soundonsound.com/sos/jun99/articles/synthsecrets.htm
[1]: http://www.soundonsound.com/search?url=%2Fsearch&Keyword=%22synth+secrets%22&Words=All&Summary=Yes
[2]: http://media.soundonsound.com/sos/jun99/images/picture5.gif
[3]: http://media.soundonsound.com/sos/jun99/images/picture6.gif
[4]: http://media.soundonsound.com/sos/jun99/images/picture7.gif
[5]: http://media.soundonsound.com/sos/jun99/images/picture8.gif
[6]: http://media.soundonsound.com/sos/jun99/images/picture9.gif
[7]: http://media.soundonsound.com/sos/jun99/images/ssfig7.gif
[8]: http://www.soundonsound.com