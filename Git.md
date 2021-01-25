# GIT 

## What is GIT ?
GIT is a software program for managing versions and it is one of the distributed review management programs that was programmed to be
fast in the beginning. Linus Torvalds programmed it to be used in developing the Linux kernel and to overcome the defects and problems of other version
management programs, and later joined by Junio Hamano. 
GET is a free and open source program, released under the GNU General Public License version.

![](https://lh3.googleusercontent.com/proxy/F_QuNBZw6rYQgZwfl8wCJW85G9Wi59cE588wfqfLh6EOv-C0wpAeEWMWZTPypjBjMKJiHJNXJU8CG_T7had7XoBkVXGS5y5rj7_M77v3nax0lGhhNuUbYo4t1WJARg)

## How dose it work ?
Snapshots

Git is a DVCS that stores data in a file system made up of snapshots. Each time you save a changed version of your
project — called commit — Git creates a snapshot of the file and stores a reference to it. 
If the file has not changed, Git only stores a reference to the already-stored identical version of it.

## Some about security and avalability :
### Distributed
One of the nicest features of any Distributed SCM, Git included, is that it's distributed. This
means that instead of doing a "checkout" of the current tip of the source code, you do a "clone" of the entire repository.

### Multiple Backups
This means that even if you're using a centralized workflow, every user essentially has a full backup of the
main server. Each of these copies could be pushed up to replace the main server in the event of a crash or corruption. In effect, there is no single point 
of failure with Git unless there is only a single copy of the repository.

### Any Workflow
Because of Git's distributed nature and superb branching system, an almost endless number of workflows can be implemented with relative ease.

### Subversion-Style Workflow
A centralized workflow is very common, especially from people transitioning from a centralized system.
Git will not allow you to push if someone has pushed since the last time you fetched, so a centralized model where all developers push to the same server works just fine.

![](https://git-scm.com/images/about/workflow-a@2x.png)

### Data Assurance
The data model that Git uses ensures the cryptographic integrity of every bit of your project. Every file and commit is checksummed and retrieved by 
its checksum when checked back out. It's impossible to get anything out of Git other than the exact bits you put in.

## Flexibility
*Git includes inherent Graphical User Interface (GUI) tools. However, users can also utilize third-party tools created for particular platforms.*
