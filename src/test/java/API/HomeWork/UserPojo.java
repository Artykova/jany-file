package API.HomeWork;

import java.util.List;

public class UserPojo {
    private Integer count;
    private List<RequestPojo> results;
    private String next;
    private String previous;


    public Integer getCount() {
        return count;
    }

    public void setCount(Integer count) {
        this.count = count;
    }

    public List<RequestPojo> getResults() {
        return results;
    }

    public void setResults(List<RequestPojo> results) {
        this.results = results;
    }

    public String getNext() {
        return next;
    }

    public void setNext(String next) {
        this.next = next;
    }

    public String getPrevious() {
        return previous;
    }

    public void setPrevious(String previous) {
        this.previous = previous;
    }
}
