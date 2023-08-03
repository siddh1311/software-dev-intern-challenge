## DO NOT EDIT THIS TEMPLATE. CLICK THE FORK OPTION ON THE TOP RIGHT TO CONTINUE!


## Calculate Openings and Closings of a Scissor

Our task is to figure out how many times scissor was used at a manufacturing plant. Imagine we have used a computer vision model which returns us the frame by frame data on how the scissors are moving. 

1. It returns three sets of coordinates (x, y): **center**, **top**, **bottom**. 
2. **Closed Threshold**: When top and bottom blades are below this threshold, we assume scissors are closed. You can decide how you want to define this value, and justify why you chose it. 
3. **Open Threshold**: When top and bottom blades are beyong this threshold, we assume scissors are opened. You can decide how you want to define this value, and justify why you chose it.

Look at the image below:

![baseline](https://i.imgur.com/QgTZoJj.png)

### Algorithm and Examples

There are few frames files provided in `frames` folder. We shall run algorithm one by one on each of these files. Each file represents series of coordinates for the three keypoints, and the task is to calculate the number of times scissors were opened and closed. Here are some examples to clarify the different cases:
![examples](https://i.imgur.com/mi5Ia1s.png)

### Questions to think about (No code needed)
#### Feel free to write small answers for them below
Besides these examples, there are a lot of other cases how the data could be collect, for example, they data captured could be zoomed in, or zoomed out. 

![zoom](https://i.imgur.com/bqvBXr6.png)

1. What would be the other different orientations/cases that are possible?
2. How would you update your algorithm (if you need to) for these new cases in (1)
3. For testing purposes, if you had to generate frames data, how would you go about it? 

1. The frame can be mirrored or flipped across both axis which would change the x, y coordinates for the center, top, and middle blades. 
Additionally, the scissor can be rotated a certain degree from the center of the scissor. Furthermore, the scissor can be moved between 
frames.
2. I created the algorithm to relatively calculate the distance between the top and bottom blade, so it would not matter if 
the scissor was rotated, moved, or flipped along any axis. For the close threshold, I check whether the top.y = bottom.y, so 
it doesn't matter if the scissor was altered in the ways mentioned before.
3. First I would pick a random number between, say 3-1000, for the number of frames. Then, I would randomly generate a starting state
for the scissor (open, closed, or partially open/close). Next, I would determine the range of coordinates for the scissor, 
which I would derive from the maximum angle the blades can move from the center (eg. min-max x2, min-max x3, min-max y2, min-max y3). 
I would pick an arbitrary, yet reasonable rate of change and generate top and bottom coordinates for each frame in a loop based 
on the rate of change. For this approach, I would have to make sure that if the scissor is fully open the rate of change becomes negative
and if the scissor is fully closed the rate of change becomes positive. Additionally, it is also possible for the scissor to open when it
is in a partially closed state (and vice-versa). To implement this, at random frames I could flip the rate of change in order for the
tests to be diverse.
